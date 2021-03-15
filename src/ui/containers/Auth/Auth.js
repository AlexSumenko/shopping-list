import React, { useContext } from 'react';
import LocaleContext from '../../../utils/context/localeContext';

import { strings } from '../../../utils/localization';
import AuthForm from '../../components/Auth/AuthForm/AuthForm';
import NavBar from '../../components/common/NavBar/NavBar';

import './Auth.scss';

const Auth = () => {
    const activeLanguage = useContext(LocaleContext);

    return (
        <>
            <NavBar heading={strings.authTitle[activeLanguage]} />
            <AuthForm />
        </>
    );
};

export default Auth;
