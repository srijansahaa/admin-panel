import React from 'react';
import Heading from './Heading';
import Skillset from './Skillset';
import ReactIcon from '../assets/Icons/reactIcon.svg'
import htmlIcon from '../assets/Icons/htmlIcon.svg'
import cssIcon from '../assets/Icons/cssIcon.svg'
import jsIcon from '../assets/Icons/jsIcon.svg'
import bootstrapIcon from '../assets/Icons/bootstrapIcon.svg'
import uiIcon from '../assets/Icons/uiIcon.svg'
import adobeIcon from '../assets/Icons/adobeIcon.svg'
import ccIcon from '../assets/Icons/ccIcon.svg'
import firebaseIcon from '../assets/Icons/firebaseIcon.svg'
import figmaIcon from '../assets/Icons/figmaIcon.svg'

function Skills(themeType) {

    const skillContent = [
        {
            id: 0,
            sName: "REACT JS",
            sPer: "80%",
            sImg: ReactIcon
        },
        {
            id: 1,
            sName: "HTML 5",
            sPer: "90%",
            sImg: htmlIcon
        },
        {
            id: 2,
            sName: "CSS3/SCSS",
            sPer: "90%",
            sImg: cssIcon
        },
        {
            id: 3,
            sName: "JAVASCRIPT",
            sPer: "70%",
            sImg: jsIcon
        },
        {
            id: 4,
            sName: "BOOTSTRAP",
            sPer: "95%",
            sImg: bootstrapIcon
        },
        {
            id: 5,
            sName: "UI/UX",
            sPer: "95%",
            sImg: uiIcon
        },
        {
            id: 6,
            sName: "Adobe Creative Suite",
            sPer: "55%",
            sImg: adobeIcon
        },
        {
            id: 7,
            sName: "Competetive Coding",
            sPer: "60%",
            sImg: ccIcon
        },
        {
            id: 8,
            sName: "FIREBASE",
            sPer: "60%",
            sImg: firebaseIcon
        },
        {
            id: 9,
            sName: "FIGMA",
            sPer: "90%",
            sImg: figmaIcon
        },
    ]

    return (
        <div>
            <div className="d-flex justify-content-center">
                <Heading heading={"Skills"} version={themeType.themeType.themeType === "dark-theme" ? "darkSecHeadings" : "secHeadings"}/>
            </div>
            <div className="container">
                <div className="row" style={{display: "flex", justifyContent: "space-evenly"}}>
                    {skillContent.map((s) => 
                            <Skillset 
                                key={s.id} 
                                name={s.sName}
                                percentage={s.sPer}
                                bar={s.sPer}
                                icon={s.sImg}
                                themeType={themeType.themeType.themeType}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills