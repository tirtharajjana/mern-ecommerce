import React from 'react';
import { Route, Navigate } from 'react-router-dom'
import Signin from '../../containers/Signin';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Component, ...rest }) => {
    // console.log(Component);
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


    // const token = window.localStorage.getItem('token');
    // if (token) {
    //     return <Route {...rest} element={Component} />
    // } else {
    //     return <Navigate to='/signin' />
    // }

    // const auth = useSelector(state => state.auth)

    // if (!auth.authenticate) {
    //     return <Navigate to={'/signin'} />
    // }
    // return (
    //     <Route {...rest} element={Component} />
    // )

}

export default PrivateRoute
