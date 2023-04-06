import React from "react";

const OpcodeDisplay = ({ opcodes }) => {
    return (
        <div>
            <h2>Opcodes:</h2>
            <pre>
                {opcodes.map((opcode, index) => (
                    <div key={index}>
                        {opcode.name} {opcode.pushData ? opcode.pushData.toHexString() : ""}
                    </div>
                ))}
            </pre>
        </div>
    );
};

export default OpcodeDisplay;