import React from 'react';

import './style.css';

const Block = ({ header, children }) => (
        <div className="block-container">
            {header ? <h2>{header}</h2> : null}
            {header ? <hr style={{ width: '100%' }} /> : null}
            {children}
        </div>
)

export default Block;
