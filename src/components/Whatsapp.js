import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import whatsappIcon from '../assets/Icons/whatsapp.png'

function Whatsapp(themeType) {
    
    return (
        <a href="https://wa.me/918225808241?text=Hey%20there!" className={themeType.themeType === "dark-theme" ? "darkWhatsapp" : "lightWhatsapp"}>
            <LazyLoadImage width="30" src={whatsappIcon} alt="Whatsapp"/>
        </a>
    )
}

export default Whatsapp