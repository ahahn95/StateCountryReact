import React from 'react';

const DropDownList = function ({ input, handleChange }) {
    return (
        <select onChange={handleChange}>
            <option value="" />
            {input.map(type =>
                <option value={type.code} key={type.code}>{type.name}</option>)}
        </select>
    );
};

export default DropDownList;
