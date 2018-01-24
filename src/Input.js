import React from 'react';

const Input = (props) => {
    return (
        <div>
            <input type='number' onChange={e => props.onChange(e.currentTarget.value)} />
        </div>
    );
};

export default Input;