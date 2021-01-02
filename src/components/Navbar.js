import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo_darkbg from '../assets/Logos/Logo_darkbg.png';

function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top myNavbar">
            <div className="container">
                <a className="navbar-brand myNavbar__logo" href="#">
                    <LazyLoadImage
                        src={Logo_darkbg}
                        alt="..."
                        width="30"
                        height="30"
                    />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-end  myNavbar__myNav" id="navbar-content">
                    <div className="navbar-nav" style={{marginRight: "93px"}}>
                        <a className="nav-link menu" href="#">Home</a>
                        <a className="nav-link menu" href="#">About</a>
                        <a className="nav-link menu" href="#">Skills</a>
                        <a className="nav-link menu" href="#">Work</a>
                        <a className="nav-link menu" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar