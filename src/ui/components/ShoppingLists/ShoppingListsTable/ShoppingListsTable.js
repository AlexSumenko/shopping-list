import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectShoppingLists } from '../../../../store/selectors/shoppingLists';

import './ShoppingListsTable.scss';

const ShoppingListsTable = ({ shoppingLists }) => {
    useEffect(() => {
        console.log(shoppingLists);
    });
    return <h3>Works</h3>;
};

const mapStateToProps = state => {
    return {
        shoppingLists: selectShoppingLists(state.shl),
    };
};

export default connect(mapStateToProps)(ShoppingListsTable);
