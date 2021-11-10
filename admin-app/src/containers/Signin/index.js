import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import { login } from "../../actions/";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { isUserLoggedIn } from "../../actions/auth.actions";

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        if (!auth.authenticate)
            dispatch(isUserLoggedIn());
    }, [])

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email,
            password
        };
        dispatch(login(user));
    };

    if (auth.authenticate) {
        return <Navigate to={'/'} />
    }

    return (
        <>
            <Layout>
                <Container>
                    <Row style={{ marginTop: "50px" }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={userLogin}>
                                <Input
                                    label="Email"
                                    placeholder="Email"
                                    value={email}
                                    type="email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <Input
                                    label="Password"
                                    placeholder="Password"
                                    value={password}
                                    type="password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    );
};

export default Signin;
