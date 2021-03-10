import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectSelectedLanguage } from './store/selectors/shoppingLists';

import LocaleContext from './utils/context/localeContext';
import ShoppingList from './ui/containers/ShoppingLists/ShoppingLists';
import ShoppingListItem from './ui/containers/ShoppingListItem/ShoppingListItem';

import './App.scss';

const App = ({ selectedLanguage }) => {
    return (
        <LocaleContext.Provider value={selectedLanguage}>
            <Switch>
                <Route path='/' exact component={ShoppingList} />
                <Route path='/:id/edit' component={ShoppingListItem} />
                <Redirect to='/' />
            </Switch>
        </LocaleContext.Provider>
    );
};

const mapStateToProps = state => {
    return {
        selectedLanguage: selectSelectedLanguage(state.shl),
    };
};

App.propTypes = {
    activeLanguage: PropTypes.string.isRequired,
};

App.defaultProps = {
    activeLanguage: 'EN',
};

export default connect(mapStateToProps)(App);
