import React from 'react';
import Button from './Button';

const Worktiles = ({image, link, type}) => {
    return (
        <div className="workTiles" style={{backgroundImage:  `url(${image})`}}>
            <div className="workTiles__overlay">
                <h1>{type}</h1>
                <a href={link}>
                    <Button text={"CLICK"} version={"sButton"}/>
                </a>
            </div>
        </div>
    )
}

export default Worktiles