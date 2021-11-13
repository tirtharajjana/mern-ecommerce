import React from 'react'
import Layout from '../../components/Layout';
import { Navigate, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './style.css'

const Home = () => {
    const auth = useSelector(state => state.auth)

    if (!auth.authenticate) {
        return <Navigate to={'/signin'} />
    }
    return (
        <>
            <Layout sidebar >
                <div style={{ margin: "5rem " }} className="jumbotron text-center" >

                    <h1>Welcome to the Admin Dashboard</h1>
                    <p>lorem</p>
                </div>

            </Layout>
        </>
    )
}

export default Home
