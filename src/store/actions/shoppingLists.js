import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';

export const clearShoppingListsFromStore = () => {
    return {
        type: actionTypes.CLEAR_SHOPPING_LISTS_FROM_STORE,
    };
};

export const clearActiveShoppingListFromStore = () => {
    return {
        type: actionTypes.CLEAR_ACTIVE_SHOPPING_LIST_FROM_STORE,
    };
};

const saveShoppingListsInStore = shoppingLists => {
    return {
        type: actionTypes.GET_SHOPPING_LISTS,
        payload: shoppingLists,
    };
};

const setActiveShoppingListInStore = shoppingList => {
    return {
        type: actionTypes.GET_SHOPPING_LIST,
        payload: shoppingList,
    };
};

const deleteShoppingListProductInStore = productKey => {
    return {
        type: actionTypes.DELETE_SHOPPING_LIST_PRODUCT,
        payload: productKey,
    };
};

const deleteShoppingListFromStore = shoppingListId => {
    return {
        type: actionTypes.DELETE_SHOPPING_LIST,
        payload: shoppingListId,
    };
};

export const getShoppingListsFromBackend = () => {
    return dispatch => {
        httpRequest('GET', 'shopping-lists.json')
            .then(res => {
                const shoppingLists = [];
                for (let shListKey in res) {
                    const newItems = [];
                    for (let itemKey in res[shListKey].items) {
                        newItems.push({
                            key: itemKey,
                            ...res[shListKey].items[itemKey],
                        });
                    }
                    shoppingLists.push({
                        key: shListKey,
                        name: res[shListKey].name,
                        items: newItems,
                    });
                }
                dispatch(saveShoppingListsInStore(shoppingLists));
            })
            .catch(err => alert(err));
    };
};

export const addShoppingListToBackend = shoppingListName => {
    return dispatch => {
        httpRequest('POST', 'shopping-lists.json', { name: shoppingListName })
            .then(res => {
                dispatch(getShoppingListsFromBackend());
            })
            .catch(err => alert(err));
    };
};

export const deleteShoppingListFromBackend = shoppingListId => {
    return dispatch => {
        httpRequest('DELETE', `shopping-lists/${shoppingListId}.json`)
            .then(dispatch(deleteShoppingListFromStore(shoppingListId)))
            .catch(err => alert(err));
    };
};

export const getShoppingListFromBackend = shoppingListId => {
    return dispatch => {
        httpRequest('GET', `shopping-lists/${shoppingListId}.json`)
            .then(res => {
                let newItems = [];
                for (let key in res.items) {
                    newItems.push({ key, ...res.items[key] });
                }
                const shoppingList = {
                    key: shoppingListId,
                    items: newItems,
                    name: res.name,
                };
                dispatch(setActiveShoppingListInStore(shoppingList));
            })
            .catch(err => alert(err));
    };
};

export const addProductToShoppingListOnBackend = (
    shoppingListId,
    productName
) => {
    return dispatch => {
        httpRequest('POST', `shopping-lists/${shoppingListId}/items.json`, {
            product: productName,
            bought: false,
        })
            .then(res => {
                dispatch(getShoppingListFromBackend(shoppingListId));
            })
            .catch(err => alert(err));
    };
};

export const deleteShoppingListProductFromBackend = (
    shoppingListId,
    productKey
) => {
    return dispatch => {
        httpRequest(
            'DELETE',
            `shopping-lists/${shoppingListId}/items/${productKey}.json`
        )
            .then(dispatch(deleteShoppingListProductInStore(productKey)))
            .catch(err => alert(err));
    };
};

export const toggleProductBoughtStatusOnBackend = (
    shoppingListId,
    productKey,
    status
) => {
    return dispatch => {
        httpRequest(
            'PUT',
            `shopping-lists/${shoppingListId}/items/${productKey}/bought.json`,
            status
        )
            .then(res => dispatch(getShoppingListFromBackend(shoppingListId)))
            .catch(err => alert(err));
    };
};
