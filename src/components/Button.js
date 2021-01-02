import React from 'react';

const Button = ({text, version}) => {
    return (
        <button className={version}>{text}</button>
    )
}

export default Button