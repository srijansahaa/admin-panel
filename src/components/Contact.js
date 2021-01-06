import React, { useState } from 'react';
import Button from './Button';
import Heading from './Heading';
import {db} from '../firebase';

function Contact() {
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
        .then(() => {
            alert('Message has been submitted ✨')
        })
        .catch((error) => {
            alert(error.message);
        });

        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
    };

    return (
        <div className=" d-flex justify-content-center">
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
                            rows="4" 
                            cols="50"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    {/* <Button text={"Submit"} version={"outlineButton"}/> */}
                    <button type="submit" className="outlineButton">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact