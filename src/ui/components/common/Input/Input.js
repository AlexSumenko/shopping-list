import React, { useRef } from 'react';

import './Input.scss';

const Input = ({ added }) => {
    const inputRef = useRef('');

    const onInputSubmit = e => {
        e.preventDefault();
        const shoppingList = {
            name: inputRef?.current?.value,
            items: [{ product: 'test', bought: false }],
        };
        added(shoppingList);
        inputRef.current.value = '';
    };

    return (
        <div className='input'>
            <input
                className='input__element'
                type='text'
                ref={inputRef}
                placeholder='Add new shopping list'
            ></input>
            <button
                onClick={e => onInputSubmit(e)}
                className='input__button'
                type='button'
            >
                Submit
            </button>
        </div>
    );
};

export default Input;
