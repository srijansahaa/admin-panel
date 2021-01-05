import React from 'react';

const Heading = ({heading, version}) => {
    return (
        <h1 className={version}>
            {heading}
        </h1>
    )
}

export default Heading