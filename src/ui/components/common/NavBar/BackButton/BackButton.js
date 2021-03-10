import React from 'react';
import { useHistory } from 'react-router-dom';

import './BackButton.scss';

const BackButton = () => {
    const history = useHistory();

    const onBackButtonClick = () => {
        history.goBack();
    };

    return (
        <div className='back-button clickable' onClick={onBackButtonClick}>
            {'\u2190'}
        </div>
    );
};

export default BackButton;
