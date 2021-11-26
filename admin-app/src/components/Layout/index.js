import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style.css'

const Layout = (props) => {
    return (
        <>
            <Header />
            {
                props.sidebar ?
                    <Container fluid >
                        <Row>
                            <Col xs={2} className="sidebar" >
                                <ul>
                                    <li><NavLink to='/' >Home</NavLink></li>
                                    <li><NavLink to='/page' >Page</NavLink></li>
                                    <li><NavLink to='/category' >Category</NavLink></li>
                                    <li><NavLink to='/products' >Products</NavLink></li>
                                    <li><NavLink to='/orders' >Orders</NavLink></li>
                                </ul>
                            </Col>
                            <Col xs={10} style={{ marginLeft: "auto", paddingTop: '60px' }} >{props.children}</Col>
                        </Row>
                    </Container>
                    :
                    props.children


            }

        </>
    )
}

export default Layout
