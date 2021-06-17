import React, { useCallback } from 'react'
import { Link, withRouter } from 'react-router-dom';
import firebaseApp from '../firebase';
import Icon_darkbg from '../assets/Icons/Icon_darkbg.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SignUp = ({history}) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await firebaseApp
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        <div className="card forms">
            <div className="d-flex justify-content-center">
              <div className="forms__icon">
                <LazyLoadImage src={Icon_darkbg} width="40"/>
              </div>
            </div>
            <div className="card-body">
                <h1 className="card-title">Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div>
                        <label>Enter Email</label>
                        <input name="email" type="email" placeholder="example@gmail.com"/>
                    </div>
                    <div>
                        <label>Enter Password</label>
                        <input name="password" type="password" placeholder="*******"/>
                    </div>
                    <button type="submit">Sign Up</button>
                    <Link to="/">Login</Link>
                </form>
            </div>
        </div>
    )
}

export default withRouter(SignUp)
