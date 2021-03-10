import * as actionTypes from '../actions/actionTypes';
import { locales } from '../../utils/localization';

const initialState = {
    shoppingLists: [],
    activeShoppingList: {},
    selectedLanguage: locales.EN,
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
            const newShoppingList = {
                name: state.activeShoppingList.name,
                key: state.activeShoppingList.key,
                items: [...state.activeShoppingList.items].filter(
                    item => item.key !== action.payload
                ),
            };
            return {
                ...state,
                activeShoppingList: newShoppingList,
            };
        case actionTypes.CLEAR_ACTIVE_SHOPPING_LIST_FROM_STORE:
            return { ...state, activeShoppingList: {} };
        case actionTypes.TOGGLE_SELECTED_LANGUAGE:
            return { ...state, selectedLanguage: action.payload };
        default:
            return state;
    }
};

export default reducer;
