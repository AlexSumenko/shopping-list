import React from 'react';

import './NavBar.scss';

const NavBar = props => {
    return (
        <nav className='navbar'>
            <div className='navbar__header'>{props.children}</div>
        </nav>
    );
};

export default NavBar;
