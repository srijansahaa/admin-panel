import React from 'react';

const Experiencetype = ({position, company, link, themeType}) => {
    return (
        <div className={themeType} id="experience" style={{display: "flex", justifyContent: "center", flexDirection: 'column', width: "30%"}}>
            <div className="experienceType">
            <div className="experienceType__position">{position}</div>
            <a className="experienceType__company" href={link}>{company}</a>
            <div className="experienceType__border" />
        </div>
        </div>
    );
}

export default Experiencetype