import React, { useState } from 'react';
import Heading from './Heading';
import {db} from '../firebase';
import { ReactSVG } from 'react-svg';
import Button from './Button';
import Instagram from '../assets/Contact Page Icons/Instagram.svg';
import Facebook from '../assets/Contact Page Icons/Facebook.svg';
import Linkedin from '../assets/Contact Page Icons/Linkedin.svg';
import Mail from '../assets/Contact Page Icons/Mail.svg';
import Call from '../assets/Contact Page Icons/Call.svg';

function Contact(themeType) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('contact').add({
            name: name,
            email: email,
            number: number,
            message: message,
        })
        // .then(() => {
        //     alert('Message has been submitted ✨')
        // })
        .catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
    };

    return (
        <div className={themeType.themeType.themeType}>
            <div className="d-flex justify-content-center">
                <div className="contact">
                    <Heading heading={"Contact"} version={"secHeadingsWhite"}/>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Full Name</label> <br/>
                            <input
                                className="contact__input" 
                                type="text" 
                                placeholder="Enter your name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            /> <br/>
                        </div>
                        <div>
                            <label>Email Address</label> <br/>
                            <input 
                                className="contact__input" 
                                type="email" 
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /> <br/>
                        </div>
                        <div>
                            <label>Mobile Number</label> <br/>
                            <input 
                                className="contact__input" 
                                type="number"
                                placeholder="Enter your mobile number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            /> <br/>
                        </div>
                        <div>
                            <label>Message</label> <br/>
                            <textarea 
                                className="contact__input" 
                                placeholder="What's in your mind?" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" className={themeType.themeType.themeType === "dark-theme" ? "darkOutlineButton" : "outlineButton"}>Submit</button>
                    </form>

                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="contact__modal modal-content">
                            <div className="contact__modal--text modal-body">
                                Message has been submitted ✨
                            </div>
                            <div className="modal-footer">
                                <button type="button" className={themeType.themeType.themeType === "dark-theme" ? "darkBlockButton mx-auto" : "blockButton mx-auto"} data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center"><hr/></div>

                    <div className="contact__bottom">
                        <div>
                            <a href="https://www.instagram.com/srijansahaa/" type="button" className="contact__bottom--icons"><ReactSVG src={Instagram}/></a>
                            <a href="https://www.facebook.com/srijan.saha3" type="button" className="contact__bottom--icons"><ReactSVG src={Facebook}/></a>
                            <a href="https://www.instagram.com/srijansahaa/" type="button" className="contact__bottom--icons"><ReactSVG src={Linkedin}/></a>
                        </div>
                        <div>
                            <a href="mailto:contact@srijansaha.tech" type="button" className="contact__bottom--icons"><ReactSVG src={Mail}/></a><a className="contactLinks" href="mailto:contact@srijansaha.tech">contact@srijansaha.tech</a>
                        </div>
                        <div>
                            <a href="tel:8225808241" type="button" className="contact__bottom--icons"><ReactSVG src={Call}/></a><a className="contactLinks" href="tel:8225808241">+91-8225808241</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact