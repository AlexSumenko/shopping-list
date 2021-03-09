import React from 'react';
import PropTypes from 'prop-types';

import './NavBar.scss';

const NavBar = ({ children, justify }) => {
    return (
        <nav className='navbar'>
            <div
                className='navbar__container'
                style={{ justifyContent: justify }}
            >
                {children}
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    justify: PropTypes.string,
};

export default NavBar;
