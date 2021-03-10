import React from 'react';
import PropTypes from 'prop-types';

import BackButton from './BackButton/BackButton';
import LanguageSelector from './LanguageSelector/LanguageSelector';

import './NavBar.scss';

const NavBar = ({ heading, isBackButtonEnabled }) => {
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                {isBackButtonEnabled ? <BackButton /> : <div></div>}
                <div>{heading}</div>
                <LanguageSelector />
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    heading: PropTypes.string.isRequired,
    isBackButtonEnabled: PropTypes.bool.isRequired,
};

NavBar.defaultProps = {
    heading: 'Shopping Lists',
    isBackButtonEnabled: false,
};

export default NavBar;
