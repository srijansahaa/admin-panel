import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button';

const Worktiles = ({image, link, type}) => {
    console.log(image)
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