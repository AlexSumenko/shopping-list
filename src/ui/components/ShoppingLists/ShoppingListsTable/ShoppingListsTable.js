import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectShoppingLists } from '../../../../store/selectors/shoppingLists';

import './ShoppingListsTable.scss';

const ShoppingListsTable = props => {
    const { deleted, shoppingLists } = props;
    const onShoppingListClick = shListId => {
        props.history.push(`${shListId}/edit`);
    };

    let shoppingListsTable = <p>Loading...</p>;

    if (shoppingLists && shoppingLists.length > 0) {
        shoppingListsTable = (
            <table>
                <tbody>
                    {shoppingLists.map(shList => {
                        return (
                            <tr key={shList.key}>
                                <td
                                    className='table-cell-clickable'
                                    onClick={() =>
                                        onShoppingListClick(shList.key)
                                    }
                                >{`${shList.name} Total: ${
                                    shList.items.length
                                } Bought: ${shList.items.reduce(
                                    (acc, el) => el.bought + acc,
                                    0
                                )}`}</td>
                                <td>
                                    <button
                                        onClick={deleted.bind(this, shList.key)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    useEffect(() => {
        console.log(shoppingLists);
    });

    return <>{shoppingListsTable}</>;
};

const mapStateToProps = state => {
    return {
        shoppingLists: selectShoppingLists(state.shl),
    };
};

export default connect(mapStateToProps)(withRouter(ShoppingListsTable));
