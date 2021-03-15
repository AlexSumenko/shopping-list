import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ added, placeholder }) => {
    const inputRef = useRef('');

    const onInputSubmit = e => {
        e.preventDefault();
        added(inputRef?.current?.value.trim());
        inputRef.current.value = '';
    };

    return (
        <form className='input-form' onSubmit={e => onInputSubmit(e)}>
            <input
                className='input-form__element'
                type='text'
                ref={inputRef}
                placeholder={placeholder}
                autoFocus
            />
            <button className='input-form__button clickable' type='submit'>
                {'\u2705'}
            </button>
        </form>
    );
};

Input.propTypes = {
    added: PropTypes.func,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    placeholder: 'Please enter a value',
};

export default Input;
