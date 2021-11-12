import React from 'react'
import Layout from '../../components/Layout';
import { Navigate } from 'react-router-dom';
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
            <Layout>
                <Container fluid >
                    <Row>
                        <Col md={2} className="sidebar" >Side bar</Col>
                        <Col md={10} style={{ marginLeft: "auto" }} >Container</Col>
                    </Row>
                </Container>


                {/* <div style={{ margin: "5rem " }} className="jumbotron text-center" >

                    <h1>Welcome to the Admin Dashboard</h1>
                    <p>lorem</p>
                </div> */}

            </Layout>
        </>
    )
}

export default Home
