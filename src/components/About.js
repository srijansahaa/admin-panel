import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button'; 
import Heading from './Heading';
import Me from '../assets/Me.jpg'
import Srijan from '../assets/SrijanSaha.pdf'

function About(themeType) {
    return (
        <div className={themeType.themeType.themeType}>
            <div id="about">
                <div className="d-flex justify-content-center">
                    <div><Heading heading={"ABOUT"} version={themeType.themeType.themeType === "dark-theme" ? "darkSecHeadings" : "secHeadings"}/></div>
                </div>
                <div className="container aboutMain">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-5 col-12 d-flex justify-content-center aboutLeft">
                                <LazyLoadImage
                                    src={Me}
                                    className="me"
                                    alt="Srijan Saha"
                                />
                            </div>
                            <div className="col-lg-7 col-12 d-flex flex-column aboutRight">
                                <h2>I am Srijan</h2>
                                <p>
                                    I'm a Computer Science Undergrad at SRMIST, Chennai
                                    currently in my second year. UI/UX Designer and a frontend web
                                    developer. I make beautiful designs and illustrations. I thrive on
                                    the challenge of leading interactions and visual design. I avoid
                                    vague meetings & hasty reactions.
                                </p>
                                <a href={Srijan} download>
                                    <Button text={"Download Resume"} version={themeType.themeType.themeType === "dark-theme" ? "darkLongButton" : "longButton"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About