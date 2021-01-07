import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ReactSVG } from 'react-svg'
import whatsappIcon from '../assets/Icons/whatsapp.png'

function Whatsapp() {
    return (
        <div className="whatsapp">
            <LazyLoadImage width="30" src={whatsappIcon}/>
        </div>
    )
}

export default Whatsapp