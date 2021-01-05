import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Worktiles = ({image, link}) => {
    console.log(image)
    return (
        <div className="workTiles" style={{backgroundImage:  `url(${image})`}}>
        </div>
    )
}

export default Worktiles