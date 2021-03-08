import React from 'react';

import './ShoppingListItemTable.scss';

const ShoppingListItemTable = ({ shoppingList }) => {
    let shoppingListTable = <p>Loading...</p>;
    console.log(shoppingList);
    if (shoppingList.items && shoppingList.items.length > 0) {
        shoppingListTable = (
            <table>
                <tbody>
                    {shoppingList.items.map(shListEl => {
                        return (
                            <tr key={shListEl.key}>
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

export default ShoppingListItemTable;
