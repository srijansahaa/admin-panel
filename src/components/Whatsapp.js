import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import whatsappIcon from '../assets/Icons/whatsapp.png'

function Whatsapp() {
    return (
        <a href="https://wa.me/918225808241?text=Hey%20there!" className="whatsapp">
            <LazyLoadImage width="30" src={whatsappIcon}/>
        </a>
    )
}

export default Whatsapp