import React from 'react';
import Experiencelogos from './Experiencelogos';
import Experiencetype from './Experiencetype';
import Heading from './Heading';

function Experience() {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <Heading heading={"Experience"}/>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-around">
                    <Experiencetype 
                        position={"Creatives Associate"}
                        company={"Alexa Developers SRM"}
                    />
                    <Experiencetype 
                        position={"Web Developer"}
                        company={"Solera Life Sciences Private Limited"}
                    />
                </div>
                <div className="row d-flex justify-content-around">
                    <Experiencetype 
                        position={"Director of Media & Content"}
                        company={"Rotaract Club of SRM"}
                    />
                    <Experiencetype 
                        position={"UI/UX Designer"}
                        company={"Elixar"}
                    />
                </div>
                <div className="row d-flex justify-content-around">
                    <Experiencetype 
                        position={"Office Bearer"}
                        company={"SRM IET On Campus"}
                    />
                    <Experiencetype 
                        position={"Campus Ambassador"}
                        company={"National Engineering Olympiad"}
                    />
                </div>
                <div className="row d-flex justify-content-around">
                    <Experiencetype 
                        position={"Initiatives Member"}
                        company={"AARUUSH - National Level Fest"}
                    />
                </div>
            </div>
            <Experiencelogos />
        </div>
    )
}

export default Experience