import React, { useEffect } from 'react'
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedIn } from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate)
      dispatch(isUserLoggedIn());
  }, [])

  return (
    <>
      {/* <Layout />  */}
      <>
        <Routes>
          <PrivateRoute path='/' element={<Home />} />
          <PrivateRoute path='/products' element={<Products />} />
          <PrivateRoute path='/orders' element={<Orders />} />
          <PrivateRoute path='/category' element={<Category />} />


          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </>
    </>
  );
}

export default App;
