import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TrashIcon } from '../../common/Images/Images';
import { selectShoppingLists } from '../../../../store/selectors/shoppingLists';

import './ShoppingListsTable.scss';

const ShoppingListsTable = ({ deleted, shoppingLists }) => {
    const history = useHistory();
    const onShoppingListClick = shListId => {
        history.push(`${shListId}/edit`);
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
                                    className='clickable'
                                    onClick={() =>
                                        onShoppingListClick(shList.key)
                                    }
                                >{`${shList.name} Total: ${
                                    shList.items?.length ?? 0
                                } Bought: ${
                                    shList.items?.reduce(
                                        (acc, el) => el.bought + acc,
                                        0
                                    ) ?? 0
                                }`}</td>
                                <td className='table__delete-column'>
                                    <div
                                        className='clickable'
                                        onClick={deleted.bind(this, shList.key)}
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

    return <>{shoppingListsTable}</>;
};

const mapStateToProps = state => {
    return {
        shoppingLists: selectShoppingLists(state.shl),
    };
};

ShoppingListsTable.propTypes = {
    deleted: PropTypes.func,
    shoppingLists: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            name: PropTypes.string,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    product: PropTypes.string,
                    bought: PropTypes.bool,
                })
            ),
        })
    ),
};

export default connect(mapStateToProps)(withRouter(ShoppingListsTable));
