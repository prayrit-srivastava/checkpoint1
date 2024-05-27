import React from 'react';
import ReactDOM from 'react-dom';

function Button({ label }) {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'absolute',
        top:'10%'
      };
    
  return <button style={buttonStyle}>{label}</button>;
}

export default Button;