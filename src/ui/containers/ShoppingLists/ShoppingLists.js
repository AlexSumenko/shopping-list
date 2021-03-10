import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import LocaleContext from '../../../utils/context/localeContext';
import PropTypes from 'prop-types';

import { strings } from '../../../utils/localization';

import Input from '../../components/common/Input/Input';
import NavBar from '../../components/common/NavBar/NavBar';
import ShoppingListsTable from '../../components/ShoppingLists/ShoppingListsTable/ShoppingListsTable';

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

    const activeLanguage = useContext(LocaleContext);

    return (
        <>
            <NavBar
                heading={strings.shoppingLists[activeLanguage]}
                isBackButtonEnabled={false}
            />
            <main className='app'>
                <Input
                    placeholder={strings.addNewShoppingList[activeLanguage]}
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
