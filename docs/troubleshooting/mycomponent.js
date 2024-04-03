import React from 'react';

const MyComponent = ({ children }) => (
  <div style={{padding: '20px', backgroundColor: 'lightgrey', borderRadius: '5px'}}>
    {children}
  </div>
);

export default MyComponent;