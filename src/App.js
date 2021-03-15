import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as actions from './store/actions/index';
import LocaleContext from './utils/context/localeContext';
import { selectSelectedLanguage } from './store/selectors/shoppingLists';
import { ROUTES } from './utils/constants';

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
                <Route path={ROUTES.HOME_PAGE} exact component={ShoppingList} />
                <Route
                    path={ROUTES.SH_LIST_PAGE}
                    component={ShoppingListItem}
                />
                <Route path={ROUTES.AUTH_PAGE} component={Auth} />
                <Redirect to={ROUTES.HOME_PAGE} />
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
