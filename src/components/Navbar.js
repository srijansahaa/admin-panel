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
import Experience from './Experience';
import Work from './Work';
import Skills from './Skills';

function Navbar(themeType) {
    return (
        <div className={themeType.themeType}>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top myNavbar">
                <div className="container">
                    <Link to="/">
                        <LazyLoadImage
                            className="navbar-brand myNavbar__logo"
                            src={Logo_darkbg}
                            alt="Srijan Saha"
                            width="30"
                            height="30"
                            title="Srijan Saha"
                        />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end  myNavbar__myNav" id="navbar-content">
                        <div className="navbar-nav myNavbar__myNav--dropdown">
                            <Link className="nav-link menu" to="/" style={{textDecoration: "none", color: "#fff"}}>Home</Link>
                            <Link className="nav-link menu" to="/about" style={{textDecoration: "none", color: "#fff"}}>About</Link>
                            <Link className="nav-link menu" to="/skills" style={{textDecoration: "none", color: "#fff"}}>Skills</Link>
                            <Link className="nav-link menu" to="/work" style={{textDecoration: "none", color: "#fff"}}>Work</Link>
                            <Link className="nav-link menu" to="/contact" style={{textDecoration: "none", color: "#fff"}}>Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Landing themeType={themeType}/>
                    <About themeType={themeType}/>
                    <Skills themeType={themeType}/>
                    <Experience themeType={themeType}/>
                    <Work themeType={themeType}/>
                </Route>
                <Route exact path="/about">
                    <About themeType={themeType}/>
                </Route>
                <Route exact path="/skills">
                    <Skills themeType={themeType}/>
                </Route>
                <Route exact path="/work">
                    <Work themeType={themeType}/>
                </Route>
                <Route exact path="/contact">
                    <Contact themeType={themeType}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Navbar