import React from 'react';
import { Route, Navigate } from 'react-router-dom'
import Signin from '../../containers/Signin';

const PrivateRoute = ({ element: Component, ...rest }) => {
    return (
        <Route {...rest} element={(props) => {
            const token = window.localStorage.getItem('token');
            if (token) {
                return Component
            }
            else {
                return <Navigate to={'/signin'} />
            }
        }} />
    )
}

export default PrivateRoute
