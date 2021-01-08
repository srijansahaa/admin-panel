import React from 'react';

const Button = ({text, version}) => {
    return (
        <button 
            type="submit" 
            className={version}
        >
            {text}
        </button>
    )
}

export default Button