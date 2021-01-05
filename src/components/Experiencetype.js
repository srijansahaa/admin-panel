import React from 'react';

const Experiencetype = ({position, company, link}) => {
    console.log(link)
    return (
        <div className="experienceType">
            <div className="experienceType__position">{position}</div>
            {/* <div className="experienceType__company">{company}</div> */}
            <a className="experienceType__company" href={link}>{company}</a>
            <div className="experienceType__border" />
        </div>
    );
}

export default Experiencetype