import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ShoppingList from './ui/containers/ShoppingLists/ShoppingLists';
import ShoppingListItem from './ui/containers/ShoppingListItem/ShoppingListItem';

import './App.scss';

const App = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={ShoppingList} />
                <Route path='/:id/edit' component={ShoppingListItem} />
                <Redirect to='/' />
            </Switch>
        </>
    );
};

export default App;
