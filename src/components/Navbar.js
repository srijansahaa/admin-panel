import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo_darkbg from '../assets/Logos/Logo_darkbg.png';
import {
    Route,
    Link,
    Switch
  } from "react-router-dom";
import Contact from './Contact';
import Landing from './Landing';
import About from './About';
import Work from './Work';
import Footer from './Footer';
import Skills from './Skills';
import Skillset from './Skillset';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top myNavbar">
                <div className="container">
                    <a className="navbar-brand myNavbar__logo" href="#">
                        <Link to="/">
                            <LazyLoadImage
                                src={Logo_darkbg}
                                alt="..."
                                width="30"
                                height="30"
                            />
                        </Link>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end  myNavbar__myNav" id="navbar-content">
                        <div className="navbar-nav" style={{marginRight: "93px"}}>
                            <a className="nav-link menu" href="#"><Link to="/" style={{textDecoration: "none", color: "#fff"}}>Home</Link></a>
                            <a className="nav-link menu" href="#"><Link to="/about" style={{textDecoration: "none", color: "#fff"}}>About</Link></a>
                            <a className="nav-link menu" href="#"><Link to="/skills" style={{textDecoration: "none", color: "#fff"}}>Skills</Link></a>
                            <a className="nav-link menu" href="#"><Link to="/work" style={{textDecoration: "none", color: "#fff"}}>Work</Link></a>
                            <a className="nav-link menu" href="#"><Link to="/contact" style={{textDecoration: "none", color: "#fff"}}>Contact</Link></a>
                        </div>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Landing/>
                    <About/>
                    <Skills/>
                    <Work/>
                    {/* <Footer/> */}
                </Route>
                <Route exact path="/about">
                    <About/>
                    {/* <Footer/> */}
                </Route>
                <Route exact path="/skills">
                    <Skills/>
                    {/* <Footer/> */}
                </Route>
                <Route exact path="/work">
                    <Work/>
                    {/* <Footer/> */}
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                    {/* <Footer/> */}
                </Route>
            </Switch>
        </div>
    );
}

export default Navbar