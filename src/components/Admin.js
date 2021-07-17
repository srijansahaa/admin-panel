import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import firebaseApp, { db } from '../firebase';
import FirebaseLogo from '../assets/Logos/FirebaseLogo.svg'

const Admin = () => {

    const [contact, setContact] = useState([])

    useEffect(() => {
        const contacts =[]
        db.collection('contact').get()
        .then(snapshot => {
            snapshot.docs.forEach(con => {
                let currentID = con.id
                let appObj = {...con.data(), ['id']: currentID}
                contacts.push(appObj)

                // contacts.push(con.data());
            })
            setContact(contacts)
        })
    },[])

    function openWeb() {
        const url = "https://www.srijansaha.tech/";
        window.open(url, '_blank');
    }

    function openFirebase() {
        const url = "https://console.firebase.google.com/u/0/";
        window.open(url, '_blank');
    }

    return (
        <div className="container admin">
            <h1>
                Admin Panel -
            </h1>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>
                    Contact Form Responses <a href="https://www.srijansaha.tech/">(www.srijansaha.tech)</a>
                </h2>
                <ReactSVG src={FirebaseLogo}/>
            </div>
            <div className="admin__scroll mb-4">
                <div className="container admin__scroll--head">
                    <div className="row admin__head">
                        <div className="col-3 d-flex justify-content-center justify-content-md-start">
                            <label className="admin__head--id">I.D</label>
                        </div>
                        <div className="col-1">
                            <label>Name</label>
                        </div>
                        <div className="col-2">
                            <label>Email</label>
                        </div>
                        <div className="col-2">
                            <label>Number</label>
                        </div>
                        <div className="col-4">
                            <label>Message</label>
                        </div>
                    </div>
                </div>
                <div className="container admin__content my-3">
                    {
                        contact ?
                        contact.map((c, index) => {
                            return (
                                <div className="row">
                                    <div className="col-3 d-flex justify-content-center justify-content-md-start">
                                        <label className="admin__content--id" key={index}>{c.id}</label>
                                    </div>
                                    <div className="col-1">
                                        <label key={index}>{c.name}</label>
                                    </div>
                                    <div className="col-2">
                                        <a href={`mailto:${c.email}`} key={index}>{c.email}</a>
                                    </div>
                                    <div className="col-2">
                                        <a href={`tel:${c.number}`} key={index}>{c.number}</a>
                                    </div>
                                    <div className="col-4">
                                        <p key={index}>{c.message}</p>
                                    </div>
                                </div>
                            )
                        }) :
                        <label>No response!</label>
                    }
                </div>
            </div>
            <div className=" d-flex justify-content-center">
                <button onClick={openWeb}>Website</button>
                <button onClick={openFirebase}>Open Firebase</button>
                <button onClick={() => {firebaseApp.auth().signOut()}}>Sign Out</button>
            </div>

            <div className="admin__footer">Made with ♥ by Srijan Saha !</div>
        </div>
    )
}

export default Admin;