import React from 'react';
import "aos/dist/aos.css";

const Heading = ({heading, version}) => {
    return (
        <h1 data-aos="zoom-in" className={version}>
            {heading}
        </h1>
    )
}

export default Heading