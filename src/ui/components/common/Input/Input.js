import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ added, placeholder }) => {
    const inputRef = useRef('');

    useLayoutEffect(() => inputRef.current.focus());

    const onInputSubmit = e => {
        e.preventDefault();
        added(inputRef?.current?.value.trim());
        inputRef.current.value = '';
    };

    return (
        <form className='input' onSubmit={e => onInputSubmit(e)}>
            <input
                className='input__element'
                type='text'
                ref={inputRef}
                placeholder={placeholder}
            ></input>
            <button
                // onClick={e => onInputSubmit(e)}
                className='input__button'
                type='submit'
            >
                Submit
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
