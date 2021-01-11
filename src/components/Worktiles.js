import React from 'react';
import Button from './Button';

const Worktiles = ({image, link, type, themeType}) => {
    return (
        <div className={themeType} style={{width: "504px"}}>
            <div className="workTiles" style={{backgroundImage:  `url(${image})`}}>
                <div className="workTiles__overlay">
                    <h1>{type}</h1>
                    <a href={link}>
                        <Button text={"CLICK"} version={"sButton"}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Worktiles