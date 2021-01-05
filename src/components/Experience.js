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
                        link="https://alexadevsrm.com/"
                    />
                    <Experiencetype 
                        position={"Web Developer"}
                        company={"Solera Life Sciences Private Limited"}
                        link="https://soleralife.com/"
                    />
                </div>
                <div className="row d-flex justify-content-around">
                    <Experiencetype 
                        position={"Director of Media & Content"}
                        company={"Rotaract Club of SRM"}
                        link="https://rotaractsrm.in/"
                    />
                    <Experiencetype 
                        position={"UI/UX Designer"}
                        company={"Elixar"}
                        link="https://elixar.tech/"
                    />
                </div>
                <div className="row d-flex justify-content-around">
                    <Experiencetype 
                        position={"Office Bearer"}
                        company={"SRM IET On Campus"}
                        link="https://www.theiet.org/"
                    />
                    <Experiencetype 
                        position={"Campus Ambassador"}
                        company={"National Engineering Olympiad"}
                        link="https://nationalolympiad.org/"
                    />
                </div>
                <div className="row d-flex justify-content-around">
                    <Experiencetype 
                        position={"Initiatives Member"}
                        company={"AARUUSH - National Level Fest"}
                        link="https://aaruush.org/"
                    />
                </div>
            </div>
            <Experiencelogos />
        </div>
    )
}

export default Experience