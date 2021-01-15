import React from 'react';
import Button from './Button';
import "aos/dist/aos.css";

const Worktiles = ({image, link, type, themeType}) => {
    return (
        <div className={themeType} style={{width: "504px"}} data-aos="fade-up">
            <div className="workTiles" style={{backgroundImage:  `url(${image})`}}>
                <div className="workTiles__overlay">
                    <h1>{type}</h1>
                    <a href={link}>
                        <Button text={"CLICK"} version={themeType  === "dark-theme" ? "darkSButton" : "sButton"}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Worktiles