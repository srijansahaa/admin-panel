import React from 'react';
import Experiencelogos from './Experiencelogos';
import Experiencetype from './Experiencetype';
import Heading from './Heading';

function Experience(themeType) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <Heading heading={"Experience"} version={themeType.themeType.themeType === "dark-theme" ? "darkSecHeadings" : "secHeadings"}/>
            </div>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-around flex-column flex-sm-row">
                    <Experiencetype 
                        position={"Creatives Associate"}
                        company={"Alexa Developers SRM"}
                        link="https://alexadevsrm.com/"
                        themeType={themeType.themeType.themeType}
                    />
                    <Experiencetype 
                        position={"Web Developer"}
                        company={"Solera Life Sciences Private Limited"}
                        link="https://soleralife.com/"
                        themeType={themeType.themeType.themeType}
                    />
                </div>
                <div className="row d-flex align-items-center justify-content-around flex-column flex-sm-row">
                    <Experiencetype 
                        position={"Director of Media & Content"}
                        company={"Rotaract Club of SRM"}
                        link="https://rotaractsrm.in/"
                        themeType={themeType.themeType.themeType}
                    />
                    <Experiencetype 
                        position={"UI/UX Designer"}
                        company={"Elixar"}
                        link="https://elixar.tech/"
                        themeType={themeType.themeType.themeType}
                    />
                </div>
                <div className="row d-flex align-items-center justify-content-around flex-column flex-sm-row">
                    <Experiencetype 
                        position={"Office Bearer"}
                        company={"SRM IET On Campus"}
                        link="https://www.theiet.org/"
                        themeType={themeType.themeType.themeType}
                    />
                    <Experiencetype 
                        position={"Campus Ambassador"}
                        company={"National Engineering Olympiad"}
                        link="https://nationalolympiad.org/"
                        themeType={themeType.themeType.themeType}
                    />
                </div>
                <div className="row d-flex align-items-center justify-content-around flex-column flex-sm-row">
                    <Experiencetype 
                        position={"Initiatives Member"}
                        company={"AARUUSH - National Level Fest"}
                        link="https://aaruush.org/"
                        themeType={themeType.themeType.themeType}
                    />
                </div>
            </div>
            <Experiencelogos themeType={themeType.themeType.themeType} />
        </div>
    )
}

export default Experience