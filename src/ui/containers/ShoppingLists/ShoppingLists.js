import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import ShoppingListsTable from '../../components/ShoppingLists/ShoppingListsTable/ShoppingListsTable';

import './ShoppingLists.scss';

const ShoppingList = ({ saveShoppingLists }) => {
    useEffect(() => {
        saveShoppingLists();
    }, [saveShoppingLists]);
    // useEffect(() => {
    //     httpRequest('POST', 'shopping-lists.json', {
    //         name: 'TEST2',
    //         items: [
    //             { product: 'name1', status: true },
    //             { product: 'name2', status: false },
    //         ],
    //     });
    // });
    return <ShoppingListsTable />;
};

const dispatchStateToProps = dispatch => {
    return {
        saveShoppingLists: () =>
            dispatch(actions.getShoppingListsFromBackend()),
    };
};

export default connect(null, dispatchStateToProps)(ShoppingList);
