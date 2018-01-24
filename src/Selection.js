import React from 'react';

const Selection = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select onChange={e=>props.onSelect(e.currentTarget.value)}>
                <option></option>
                <option>America/New_York</option>
                <option>America/Los_Angeles</option>
                <option>America/Chicago</option>
                <option>America/Phoenix</option>
            </select>
        </div>
    );
};

export default Selection;