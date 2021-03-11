import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from './store/actions/index';
import { selectSelectedLanguage } from './store/selectors/shoppingLists';

import LocaleContext from './utils/context/localeContext';

import Auth from './ui/containers/Auth/Auth';
import ShoppingList from './ui/containers/ShoppingLists/ShoppingLists';
import ShoppingListItem from './ui/containers/ShoppingListItem/ShoppingListItem';

import './App.scss';

const App = ({ selectedLanguage, toggleLanguage }) => {
    useEffect(() => {
        toggleLanguage(localStorage.getItem('shl-lang') ?? selectedLanguage);
    });

    return (
        <LocaleContext.Provider value={selectedLanguage}>
            <Switch>
                <Route path='/' exact component={ShoppingList} />
                <Route path='/:id/edit' component={ShoppingListItem} />
                <Route path='/auth' component={Auth} />
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

const dispatchStateToProps = dispatch => {
    return {
        toggleLanguage: langCode =>
            dispatch(actions.toggleSelectedLanguage(langCode)),
    };
};

App.propTypes = {
    activeLanguage: PropTypes.string.isRequired,
    toggleLanguage: PropTypes.func,
};

App.defaultProps = {
    activeLanguage: 'EN',
};

export default connect(mapStateToProps, dispatchStateToProps)(App);
