import './styles/app.scss'
import React from 'react'
import Admin from './components/Admin';
import Login from './components/Login';
import {Route} from 'react-router-dom'
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import SignUp from './components/SignUp';

function App() {

  return (
    <AuthProvider>
      <div className="App container d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        {/* <Admin/> */}
        <PrivateRoute exact path="/admin" component={Admin}/>
        <Route exact path="/sign-up" component={SignUp}/>
        <Route exact path="/" component={Login}/>
      </div>
    </AuthProvider>
  );
}

export default App;
