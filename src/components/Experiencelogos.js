import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import elixar from '../assets/Logos/final/elixar.png'
import IET from '../assets/Logos/final/IET.png';
import Alexa from '../assets/Logos/final/Alexa.png';
import Aaruush from '../assets/Logos/final/Aaruush.png';
import Solera from '../assets/Logos/final/Solera.png';
import Rotaract from '../assets/Logos/final/Rotaract.png';
import NEO from '../assets/Logos/final/NEO.png';

function Experiencelogos(themeType) {
    return (
        <div className={themeType}>
            <div className="container experienceLogos">
                <div className="row d-flex justify-content-sm-between justify-content-lg-between justify-content-between">
                        <LazyLoadImage
                            src={elixar}
                            style={{width: "242px"}}
                            alt="Elixar"
                        />
                        <LazyLoadImage
                            src={IET}
                            style={{width: "327px"}}
                            alt="SRM IET On Campus"
                        />
                </div>
                <div className="row d-flex justify-content-between">
                        <LazyLoadImage
                            src={Alexa}
                            style={{width: "430px"}}
                            alt="Alexa Developers SRM"
                        />
                        <LazyLoadImage
                            src={Aaruush}
                            style={{width: "278px"}}
                            alt="Aaruush - Techno Management Fest"
                        />
                </div>
                <div className="row d-flex justify-content-between">
                        <LazyLoadImage
                            src={Solera}
                            style={{width: "103.5px", padding: "0"}}
                            alt="Solera"
                        />
                        <LazyLoadImage
                            src={Rotaract}
                            style={{width: "420px"}}
                            alt="Rotaract Club of SRM"
                        />
                        <LazyLoadImage
                            src={NEO}
                            style={{width: "93px"}}
                            alt="National Engineering Olympiad"
                        />
                </div>
            </div>
        </div>
    )
}

export default Experiencelogos