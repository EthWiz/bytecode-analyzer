import React from 'react';

const BytecodeDisplay = ({ bytecode }) => {
    const bytecodeContainerStyle = {
        overflowWrap: 'break-word',
        whiteSpace: 'pre-wrap',
        maxWidth: 'calc(100% - 40px)',
        wordBreak: 'break-all',
        padding: '10px 20px',
        margin: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f5f5f5',
    };

    return (
        <div>
            <h2>Bytecode:</h2>
            <div style={bytecodeContainerStyle}>{bytecode}</div>
        </div>
    );
};

export default BytecodeDisplay;
