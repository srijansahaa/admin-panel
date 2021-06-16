import React, { useCallback } from 'react'
import { Link, withRouter } from 'react-router-dom';
import firebaseApp from '../firebase';

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
