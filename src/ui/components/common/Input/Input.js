import React from 'react';

import './Input.scss';

const Input = () => {
    return (
        <div className='input'>
            <input
                className='input__element'
                type='text'
                placeholder='Add new shopping list'
            ></input>
            <button className='input__button'>Submit</button>
        </div>
    );
};

export default Input;
