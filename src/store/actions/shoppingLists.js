import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';

export const clearShoppingListsFromStore = () => {
    return {
        type: actionTypes.CLEAR_SHOPPING_LISTS_FROM_STORE,
    };
};

const saveShoppingListsInStore = shoppingLists => {
    return {
        type: actionTypes.GET_SHOPPING_LISTS,
        payload: shoppingLists,
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
                for (let key in res) {
                    shoppingLists.push({ key, ...res[key] });
                }
                dispatch(saveShoppingListsInStore(shoppingLists));
            })
            .catch(err => alert(err));
    };
};

export const deleteShoppingListFromBackend = shoppingListId => {
    return dispatch => {
        httpRequest('DELETE', `shopping-lists/${shoppingListId}.json`)
            .then(res => {
                dispatch(deleteShoppingListFromStore(shoppingListId));
            })
            .catch(err => alert(err));
    };
};