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
    addShoppingList,
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
                <Input
                    placeholder='Add new shopping list'
                    added={shoppingListName =>
                        addShoppingList(shoppingListName)
                    }
                />
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
        addShoppingList: shoppingListName =>
            dispatch(actions.addShoppingListToBackend(shoppingListName)),
        deleteShoppingList: shListId =>
            dispatch(actions.deleteShoppingListFromBackend(shListId)),
        clearShoppingLists: () =>
            dispatch(actions.clearShoppingListsFromStore()),
    };
};

ShoppingList.propTypes = {
    addShoppingList: PropTypes.func,
    saveShoppingLists: PropTypes.func,
    deleteShoppingList: PropTypes.func,
    clearShoppingLists: PropTypes.func,
};

export default connect(null, dispatchStateToProps)(ShoppingList);
