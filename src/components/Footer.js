import React from 'react'
import { ReactSVG } from 'react-svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icon from '../assets/Icons/Icon_darkbg.png';
import Facebook from '../assets/Icons/Facebook.svg';
import Linkedin from '../assets/Icons/Linkedin.svg';
import Instagram from '../assets/Icons/Instagram.svg';
import Github from '../assets/Icons/Github.svg';
import Email from '../assets/Icons/Email.svg';
import Behance from '../assets/Icons/Behance.svg';
import {Link} from 'react-router-dom';
import "aos/dist/aos.css";

function Footer(themeType) {
    return (
        <div className={themeType.themeType}>
            <div className="container footer">
                <div className="row">
                    <div className="col-12 col-md-4 d-flex justify-content-start align-items-center footer__Left"><Link to="/"><LazyLoadImage src={Icon} alt="Srijan Saha" title="Srijan Saha" data-aos="slide-right"/></Link></div>
                    <div className="col-12 col-md-4 d-flex justify-content-center flex-column">
                        <div className="d-flex justify-content-center">
                            <a href="https://www.facebook.com/srijan.saha3" className="footer__icons"><ReactSVG className="fab icon-last icons" src={Facebook}/></a>
                            <a href="https://www.linkedin.com/in/srijan-saha/" className="footer__icons"><ReactSVG className="fab icon-last icons" src={Linkedin}/></a>
                            <a href="https://www.instagram.com/srijansahaa/" className="footer__icons"><ReactSVG className="fab icon-last icons" src={Instagram}/></a>
                        </div>
                        <div className="d-flex justify-content-center">
                        <a href="https://github.com/srijansahaa" className="footer__icons"><ReactSVG className="fab icon-last icons" src={Github}/></a>
                            <a href="mailto:contact@srijansaha.tech" className="footer__icons"><ReactSVG className="fab icon-last icons" src={Email}/></a>
                            <a href="https://www.behance.net/srijan-saha" className="footer__icons"><ReactSVG className="fab icon-last icons" src={Behance}/></a>
                        </div>
                        <div className="d-flex justify-content-center footer__credits">Made with  &hearts;  by Srijan Saha !</div>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center align-items-center footer__copyright">© Copyright 2020</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
