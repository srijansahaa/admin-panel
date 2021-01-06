import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button';
import LandingImg from '../assets/Landing.png'
import {
    Route,
    Link,
    Switch
  } from "react-router-dom";

function Landing() {
    return (
        <div className="container">
            <div className="row align-items-center" style={{height: "710px"}}>
                <div className="col landingLeft">
                    <h1>Hey</h1>
                    <h1>I am <span>Srijan</span></h1>
                    <h1>A Web Developer</h1>

                    <div className="d-flex justify-content-between" style={{marginTop: "30px"}}>
                        <div><Link to="/work"><Button text={"Websites"} version={"blockButton"}/></Link></div>
                        <div><Link to="/work"><Button text={"UI Designs"} version={"blockButton"}/></Link></div>
                        <div><a href="https://drive.google.com/drive/folders/1teAx4DUSiy4rCmV1m6Hxd3iUxQFozg4X?usp=sharing"><Button text={"Posters"} version={"blockButton"}/></a></div>
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