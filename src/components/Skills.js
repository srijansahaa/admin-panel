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

function Skills() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <Heading heading={"Skills"} version={"secHeadings"}/>
            </div>
            <div className="container">
                <div className="row" style={{display: "flex", justifyContent: "space-evenly"}}>
                    <Skillset
                        name={"REACT JS"}
                        percentage={"80%"}
                        bar="80%"
                        icon={ReactIcon}
                    />
                    <Skillset
                        name={"HTML 5"}
                        percentage={"90%"}
                        bar="90%"
                        icon={htmlIcon}
                    />
                    <Skillset
                        name={"CSS3/SCSS"}
                        percentage={"90%"}
                        bar="90%"
                        icon={cssIcon}
                    />
                    <Skillset
                        name={"JAVASCRIPT"}
                        percentage={"70%"}
                        bar="70%"
                        icon={jsIcon}
                    />
                    <Skillset
                        name={"BOOTSTRAP"}
                        percentage={"80%"}
                        bar="80%"
                        icon={ReactIcon}
                    />
                    <Skillset
                        name={"UI/UX"}
                        percentage={"95%"}
                        bar="95%"
                        icon={uiIcon}
                    />
                    <Skillset
                        name={"Adobe Creative Suite"}
                        percentage={"55%"}
                        bar="55%"
                        icon={adobeIcon}
                    />
                    <Skillset
                        name={"Competetive Coding"}
                        percentage={"60%"}
                        bar="60%"
                        icon={ccIcon}
                    />
                    <Skillset
                        name={"FIREBASE"}
                        percentage={"60%"}
                        bar="60%"
                        icon={firebaseIcon}
                    />
                    <Skillset
                        name={"FIGMA"}
                        percentage={"80%"}
                        bar="80%"
                        icon={figmaIcon}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skills