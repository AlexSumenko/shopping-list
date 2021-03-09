import React from 'react';
import PropTypes from 'prop-types';

import './ShoppingListItemTable.scss';

const ShoppingListItemTable = ({ shoppingList }) => {
    let shoppingListTable = <p>Loading...</p>;
    if (shoppingList.items && shoppingList.items.length > 0) {
        shoppingListTable = (
            <table>
                <tbody>
                    {shoppingList.items.map((shListEl, idx) => {
                        return (
                            <tr key={`${shListEl.name}-${idx}`}>
                                <td>{shListEl.product}</td>
                                <td>
                                    <button>delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    return <>{shoppingListTable}</>;
};

ShoppingListItemTable.propTypes = {
    shoppingList: PropTypes.shape({
        name: PropTypes.string,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                product: PropTypes.string,
                bought: PropTypes.bool,
            })
        ),
    }),
};

export default ShoppingListItemTable;
