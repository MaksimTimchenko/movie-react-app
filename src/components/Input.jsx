import React from 'react';



const Input = props => {
    return (
        <input
            className='border-0 bg-black py-2 px-6	text-lg rounded-full text-yellow-300'
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange ? (e) => props.onChange(e) : null}
        />
    );
}

export default Input;