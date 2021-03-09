import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { selectActiveShoppingList } from '../../../store/selectors/shoppingLists';

import BackButton from '../../components/common/BackButton/BackButton';
import NavBar from '../../components/common/NavBar/NavBar';
import ShoppingListItemTable from '../../components/ShoppingListItem/ShoppingListItemTable/ShoppingListItemTable';

import './ShoppingListItem.scss';

const ShoppingListItem = props => {
    const {
        activeShoppingList,
        clearActiveShoppingList,
        getActiveShoppingList,
    } = props;

    useEffect(() => {
        getActiveShoppingList(props.match.params.id);
        return () => {
            clearActiveShoppingList();
        };
    }, [clearActiveShoppingList, getActiveShoppingList, props.match.params.id]);

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
                <ShoppingListItemTable shoppingList={activeShoppingList} />
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListItem);
