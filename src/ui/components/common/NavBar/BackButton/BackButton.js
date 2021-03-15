import React from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../../../../utils/constants';

import './BackButton.scss';

const BackButton = () => {
    const history = useHistory();

    const onBackButtonClick = () => {
        history.push(ROUTES.HOME_PAGE);
    };

    return (
        <div className='back-button clickable' onClick={onBackButtonClick}>
            {'\u2190'}
        </div>
    );
};

export default BackButton;
