import React from 'react';
import PropTypes from 'prop-types';

import { TrashIcon } from '../../common/Images/Images';

import './ShoppingListItemTable.scss';

const ShoppingListItemTable = ({ deleted, shoppingList, toggled }) => {
    let shoppingListTable = <p>Loading...</p>;
    if (shoppingList.items && shoppingList.items.length > 0) {
        shoppingListTable = (
            <table>
                <tbody>
                    {shoppingList.items?.map(shListEl => {
                        const boughtClass = (
                            shListEl.bought && 'bought'
                        ).toString();
                        return (
                            <tr key={shListEl.key}>
                                <td
                                    className={['clickable', boughtClass].join(
                                        ' '
                                    )}
                                    onClick={toggled.bind(
                                        this,
                                        shoppingList.key,
                                        shListEl.key,
                                        !shListEl.bought
                                    )}
                                >
                                    {shListEl.product}
                                </td>
                                <td className='table__delete-column'>
                                    <div
                                        className='clickable'
                                        onClick={deleted.bind(
                                            this,
                                            shoppingList.key,
                                            shListEl.key
                                        )}
                                    >
                                        <TrashIcon />
                                    </div>
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
