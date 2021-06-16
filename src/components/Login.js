import React, { useCallback, useContext } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom';
import { AuthContext } from '../Auth';
import firebaseApp from '../firebase';

const Login = ({history}) => {

    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          try {
            await firebaseApp
              .auth()
              .signInWithEmailAndPassword(email.value, password.value);
            history.push("/admin");
          } catch (error) {
            alert(error);
          }
        },
        [history]
      );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/admin"/>
    }

    return (
        <div className="card forms">
            <div className="card-body">
                <h1 className="card-title">Login - Admin Panel</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Enter Email</label>
                        <input name="email" type="email" placeholder="example@gmail.com"/>
                    </div>
                    <div>
                        <label>Enter Password</label>
                        <input name="password" type="password" placeholder="*******"/>
                    </div>
                    <button type="submit">Login</button>
                    <Link to="/sign-up">Signup</Link>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login)