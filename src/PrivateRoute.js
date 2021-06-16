import React, { useContext } from 'react'
import { AuthContext } from './Auth'
import Admin from './components/Admin'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({component: Admin, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <Admin/>
                ) : (
                    <Redirect to={"/"}/>
                )
            }
        />
    )
}

export default PrivateRoute;
