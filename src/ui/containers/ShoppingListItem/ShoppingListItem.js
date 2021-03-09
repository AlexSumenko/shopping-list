import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import PropTypes from 'prop-types';

import { selectActiveShoppingList } from '../../../store/selectors/shoppingLists';

import BackButton from '../../components/common/BackButton/BackButton';
import Input from '../../components/common/Input/Input';
import NavBar from '../../components/common/NavBar/NavBar';
import ShoppingListItemTable from '../../components/ShoppingListItem/ShoppingListItemTable/ShoppingListItemTable';

import './ShoppingListItem.scss';

const ShoppingListItem = ({
    activeShoppingList,
    clearActiveShoppingList,
    deleteShoppingListProduct,
    getActiveShoppingList,
    match,
}) => {
    console.log(activeShoppingList);

    useEffect(() => {
        getActiveShoppingList(match.params.id);
        return () => {
            clearActiveShoppingList();
        };
    }, [clearActiveShoppingList, getActiveShoppingList, match.params.id]);

    return (
        <>
            <NavBar justify='space-between'>
                <>
                    <BackButton />
                    <div>{activeShoppingList.name}</div>
                    <div></div>
                </>
            </NavBar>
            <main className='app'>
                <Input />
                <ShoppingListItemTable
                    shoppingList={activeShoppingList}
                    deleted={(shListId, productIndex) =>
                        deleteShoppingListProduct(shListId, productIndex)
                    }
                />
            </main>
        </>
    );
};

const mapStateToProps = state => {
    return {
        activeShoppingList: selectActiveShoppingList(state.shl),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getActiveShoppingList: shListId =>
            dispatch(actions.getShoppingListFromBackend(shListId)),
        clearActiveShoppingList: () =>
            dispatch(actions.clearActiveShoppingListFromStore()),
        deleteShoppingListProduct: (shListId, productIndex) =>
            dispatch(
                actions.deleteShoppingListProductFromBackend(
                    shListId,
                    productIndex
                )
            ),
    };
};

ShoppingListItem.propTypes = {
    getActiveShoppingList: PropTypes.func,
    clearActiveShoppingList: PropTypes.func,
    activeShoppingList: PropTypes.shape({
        name: PropTypes.string,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                product: PropTypes.string,
                bought: PropTypes.bool,
            })
        ),
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListItem);
