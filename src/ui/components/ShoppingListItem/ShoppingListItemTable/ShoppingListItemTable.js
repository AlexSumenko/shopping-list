import React from 'react';
import PropTypes from 'prop-types';

import './ShoppingListItemTable.scss';

const ShoppingListItemTable = ({ deleted, shoppingList }) => {
    console.log(shoppingList);
    let shoppingListTable = <p>Loading...</p>;
    if (shoppingList.items && shoppingList.items.length > 0) {
        shoppingListTable = (
            <table>
                <tbody>
                    {shoppingList.items.map((shListEl, idx) => {
                        const boughtClass = (
                            shListEl.bought && 'bought'
                        ).toString();
                        return (
                            <tr key={`${shListEl.name}-${idx}`}>
                                <td className={boughtClass}>
                                    {shListEl.product}
                                </td>
                                <td>
                                    <button
                                        onClick={deleted.bind(
                                            this,
                                            shoppingList.key,
                                            idx
                                        )}
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

    return <>{shoppingListTable}</>;
};

ShoppingListItemTable.propTypes = {
    deleted: PropTypes.func,
    shoppingList: PropTypes.shape({
        key: PropTypes.string,
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
