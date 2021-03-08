import React from 'react';
import NavBar from './ui/components/NavBar/NavBar';

import './App.scss';

const App = () => {
    return (
        <>
            <NavBar />
            <div className='app'>
                <h1>Works</h1>
            </div>
        </>
    );
};

export default App;
