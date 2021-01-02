import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button';
import LandingImg from '../assets/Landing.png'

function Landing() {
    return (
        <div className="container">
            <div className="row align-items-center" style={{height: "680px"}}>
                <div className="col landingLeft">
                    <h1>Hey</h1>
                    <h1>I am <span>Srijan</span></h1>
                    <h1>A Web Developer</h1>

                    <div className="d-flex justify-content-between" style={{marginTop: "30px"}}>
                        <div><Button text={"Websites"} version={"blockButton"}/></div>
                        <div><Button text={"UI Designs"} version={"blockButton"}/></div>
                        <div><Button text={"Posters"} version={"blockButton"}/></div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div><LazyLoadImage src={LandingImg}/></div>
                </div>
            </div>
        </div>
    );
}

export default Landing