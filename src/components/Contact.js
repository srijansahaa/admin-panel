import React, { useState } from 'react';
import Heading from './Heading';
import {db} from '../firebase';

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
                        {/* <Button text={"Submit"} version={"outlineButton"}/> */}
                        <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" className={themeType.themeType.themeType === "dark-theme" ? "darkOutlineButton" : "outlineButton"}>Submit</button>
                    </form>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="contact__modal modal-content">
                            <div class="contact__modal--text modal-body">
                                Message has been submitted ✨
                            </div>
                            <div class="modal-footer">
                                <button type="button" className={themeType.themeType.themeType === "dark-theme" ? "darkBlockButton mx-auto" : "blockButton mx-auto"} data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact