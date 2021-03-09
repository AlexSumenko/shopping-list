import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import PropTypes from 'prop-types';
// import { httpRequest } from '../../../utils/fetch';

import Input from '../../components/common/Input/Input';
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
                <Input />
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

ShoppingList.propTypes = {
    saveShoppingLists: PropTypes.func,
    deleteShoppingList: PropTypes.func,
    clearShoppingLists: PropTypes.func,
};

export default connect(null, dispatchStateToProps)(ShoppingList);
