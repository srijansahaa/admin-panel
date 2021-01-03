import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import elixar from '../assets/Logos/final/elixar.png'
import IET from '../assets/Logos/final/IET.png';
import Alexa from '../assets/Logos/final/Alexa.png';
import Aaruush from '../assets/Logos/final/Aaruush.png';
import Solera from '../assets/Logos/final/Solera.png';
import Rotaract from '../assets/Logos/final/Rotaract.png';
import NEO from '../assets/Logos/final/NEO.png';

function Experiencelogos() {
    return (
        <div className="container experienceLogos">
            <div className="row d-flex justify-content-between">
                    <LazyLoadImage
                        src={elixar}
                        style={{width: "242px"}}
                    />
                <LazyLoadImage
                    src={IET}
                    style={{width: "327px"}}
                />
            </div>
            <div className="row d-flex justify-content-between">
                    <LazyLoadImage
                        src={Alexa}
                        style={{width: "430px"}}
                    />
                <LazyLoadImage
                    src={Aaruush}
                    style={{width: "278px"}}
                />
            </div>
            <div className="row d-flex justify-content-between">
                    <LazyLoadImage
                        src={Solera}
                        style={{width: "103.5px", padding: "0"}}
                    />
                <LazyLoadImage
                    src={Rotaract}
                    style={{width: "420px"}}
                />
                <LazyLoadImage
                    src={NEO}
                    style={{width: "93px"}}
                />
            </div>
        </div>
    )
}

export default Experiencelogos