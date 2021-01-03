import React from 'react';

const Experiencetype = ({position, company}) => {
    return (
        <div className="experienceType">
            <div className="experienceType__position">{position}</div>
            <div className="experienceType__company">{company}</div>
            <div className="experienceType__border" />
        </div>
    );
}

export default Experiencetype