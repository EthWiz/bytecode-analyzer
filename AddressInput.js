import React from 'react';

const AddressInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Ethereum address"
            value={value}
            onChange={onChange}
        />
    );
};

export default AddressInput;