import React from 'react';

const Selection = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select onChange={e=>props.onSelect(e.currentTarget.value)}>
                <option></option>
                <option>EST</option>
                <option>PST</option>
                <option>MST</option>
                <option>CST</option>
            </select>
        </div>
    );
};

export default Selection;