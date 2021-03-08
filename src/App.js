import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import NavBar from './ui/components/NavBar/NavBar';
import ShoppingList from './ui/containers/ShoppingList/ShoppingList';
import ShoppingListItem from './ui/containers/ShoppingListItem/ShoppingListItem';

import './App.scss';

const App = () => {
    return (
        <>
            <NavBar />
            <main className='app'>
                <Switch>
                    <Route path='/' exact component={ShoppingList} />
                    <Route path='/test' component={ShoppingListItem} />
                    <Redirect to='/' />
                </Switch>
            </main>
        </>
    );
};

export default App;
