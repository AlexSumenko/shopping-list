import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import PropTypes from 'prop-types';

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
    return (
        <>
            <NavBar heading='Shopping Lists' isBackButtonEnabled={false} />
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
