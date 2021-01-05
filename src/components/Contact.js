import React from 'react';
import Button from './Button';
import Heading from './Heading';

function Contact() {
    return (
        <div className=" d-flex justify-content-center">
            <div className="contact">
                <Heading heading={"Contact"} version={"secHeadingsWhite"}/>
                <form>
                    <div>
                        <label>Full Name</label> <br/>
                        <input className="contact__input" type="text" placeholder="Enter your name"/> <br/>
                    </div>
                    <div>
                        <label>Email Address</label> <br/>
                        <input className="contact__input" type="email" placeholder="Enter your email address"/> <br/>
                    </div>
                    <div>
                        <label>Mobile Number</label> <br/>
                        <input className="contact__input" type="number" placeholder="Enter your mobile number"/> <br/>
                    </div>
                    <div>
                        <label>Message</label> <br/>
                        <textarea className="contact__input" placeholder="What's in your mind?" rows="4" cols="50"/>
                    </div>
                    <Button text={"Submit"} version={"outlineButton"}/>
                </form>
            </div>
        </div>
    )
}

export default Contact