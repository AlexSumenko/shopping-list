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
    addProductToShoppingList,
    clearActiveShoppingList,
    deleteShoppingListProduct,
    getActiveShoppingList,
    toggleProductStatus,
    match,
}) => {
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
                <Input
                    placeholder='Add new product'
                    added={productName =>
                        addProductToShoppingList(
                            activeShoppingList.key,
                            productName
                        )
                    }
                />
                <ShoppingListItemTable
                    shoppingList={activeShoppingList}
                    deleted={(shListId, productKey) =>
                        deleteShoppingListProduct(shListId, productKey)
                    }
                    toggled={(shListId, productKey, status) =>
                        toggleProductStatus(shListId, productKey, status)
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
        addProductToShoppingList: (shListId, productName) =>
            dispatch(
                actions.addProductToShoppingListOnBackend(shListId, productName)
            ),
        getActiveShoppingList: shListId =>
            dispatch(actions.getShoppingListFromBackend(shListId)),
        clearActiveShoppingList: () =>
            dispatch(actions.clearActiveShoppingListFromStore()),
        deleteShoppingListProduct: (shListId, productKey) =>
            dispatch(
                actions.deleteShoppingListProductFromBackend(
                    shListId,
                    productKey
                )
            ),
        toggleProductStatus: (shListId, productKey, status) =>
            dispatch(
                actions.toggleProductBoughtStatusOnBackend(
                    shListId,
                    productKey,
                    status
                )
            ),
    };
};

ShoppingListItem.propTypes = {
    getActiveShoppingList: PropTypes.func,
    clearActiveShoppingList: PropTypes.func,
    deleteShoppingListProduct: PropTypes.func,
    addProductToShoppingList: PropTypes.func,
    toggleProductStatus: PropTypes.func,
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
