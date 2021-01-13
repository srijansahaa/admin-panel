import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button';
import LandingImg from '../assets/Landing.png'
import DarkLandingImg from '../assets/LandingDark.png'
import {
    Link,
  } from "react-router-dom";

function Landing(themeType) {
    return (
        <div className={themeType.themeType.themeType}>
            <div className="container landingContainer">
                <div className="row align-items-center" style={{height: "710px"}}>
                    <div className="col landingLeft">
                        <h1>Hey</h1>
                        <h1>I am <span className="name">Srijan</span></h1>
                        <h1>A <span className="textChange"></span></h1>

                        <div className="d-flex justify-content-between buttonContainer" style={{marginTop: "30px"}}>
                            <div className="landingButtons">
                                <Link to="/work">
                                    <Button 
                                        text={"Websites"} 
                                        version={themeType.themeType.themeType === "dark-theme" ? "darkBlockButton" : "blockButton"} 
                                        link={"/"}/>
                                </Link>
                            </div>
                            <div className="landingButtons">
                                <Link to="/work">
                                    <Button 
                                        text={"UI Designs"} 
                                        version={themeType.themeType.themeType === "dark-theme" ? "darkBlockButton" : "blockButton"} 
                                        link={"/"}/>
                                </Link>
                            </div>
                            <div className="landingButtons">
                                <a href="https://drive.google.com/drive/folders/1teAx4DUSiy4rCmV1m6Hxd3iUxQFozg4X?usp=sharing">
                                    <Button 
                                        text={"Posters"} 
                                        version={themeType.themeType.themeType === "dark-theme" ? "darkBlockButton" : "blockButton"} 
                                        link={"/"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div>
                            <LazyLoadImage 
                                src={themeType.themeType.themeType === "dark-theme" ? DarkLandingImg : LandingImg} 
                                alt="Web Developer and Designer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing