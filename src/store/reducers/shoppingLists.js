import * as actionTypes from '../actions/actionTypes';

const initialState = {
    shoppingLists: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOPPING_LISTS:
            return { ...state, shoppingLists: action.payload };
        case actionTypes.CLEAR_SHOPPING_LISTS_FROM_STORE:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
