import * as actionTypes from '../actions/actionTypes';

const initialState = {
    shoppingLists: [],
    activeShoppingList: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOPPING_LISTS:
            return { ...state, shoppingLists: action.payload };
        case actionTypes.DELETE_SHOPPING_LIST:
            const deletedShoppingLists = [...state.shoppingLists].filter(
                shList => shList.key !== action.payload
            );
            return { ...state, shoppingLists: deletedShoppingLists };
        case actionTypes.CLEAR_SHOPPING_LISTS_FROM_STORE:
            return { ...state, shoppingLists: [] };
        case actionTypes.GET_SHOPPING_LIST:
            return { ...state, activeShoppingList: action.payload };
        case actionTypes.DELETE_SHOPPING_LIST_PRODUCT:
            const newActiveShoppingList = {
                items: [...state.activeShoppingList.items].filter(
                    (item, idx) => idx !== action.payload
                ),
                ...state.activeShoppingList,
            };
            return { ...state, activeShoppingList: newActiveShoppingList };
        case actionTypes.CLEAR_ACTIVE_SHOPPING_LIST_FROM_STORE:
            return { ...state, activeShoppingList: {} };
        default:
            return state;
    }
};

export default reducer;
