import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
// import { httpRequest } from '../../../utils/fetch';

import NavBar from '../../components/common/NavBar/NavBar';
import ShoppingListsTable from '../../components/ShoppingLists/ShoppingListsTable/ShoppingListsTable';

import './ShoppingLists.scss';

const ShoppingList = ({
    clearShoppingLists,
    deleteShoppingList,
    saveShoppingLists,
}) => {
    useEffect(() => {
        saveShoppingLists();
        return () => {
            clearShoppingLists();
        };
    }, [clearShoppingLists, saveShoppingLists]);
    // useEffect(() => {
    //     httpRequest('POST', 'shopping-lists.json', {
    //         name: 'TEST4',
    //         items: [
    //             { product: 'name1', bought: true },
    //             { product: 'name2', bought: false },
    //         ],
    //     });
    // });
    return (
        <>
            <NavBar justify='center'>Shopping Lists</NavBar>
            <main className='app'>
                <ShoppingListsTable
                    deleted={shListId => deleteShoppingList(shListId)}
                />
            </main>
        </>
    );
};

const dispatchStateToProps = dispatch => {
    return {
        saveShoppingLists: () =>
            dispatch(actions.getShoppingListsFromBackend()),
        deleteShoppingList: shListId =>
            dispatch(actions.deleteShoppingListFromBackend(shListId)),
        clearShoppingLists: () =>
            dispatch(actions.clearShoppingListsFromStore()),
    };
};

export default connect(null, dispatchStateToProps)(ShoppingList);
