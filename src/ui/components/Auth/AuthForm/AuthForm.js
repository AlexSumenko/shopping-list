import React from 'react';

import './AuthForm.scss';

const AuthForm = () => {
    return (
        <form className='auth__input-form'>
            <div className='auth__input-form__container'>
                <label>Email</label>
                <input type='email' placeholder='Enter your user email' />
                <label>Password</label>
                <input type='password' placeholder='Enter your password' />
            </div>
        </form>
    );
};

export default AuthForm;
