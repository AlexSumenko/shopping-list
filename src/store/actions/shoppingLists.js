import { act } from 'react-dom/cjs/react-dom-test-utils.development';
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

// export const getShoppingListsFromBackend = () => {
//   return dispatch => {
//     httpRequest('GET')
//   }
// }
