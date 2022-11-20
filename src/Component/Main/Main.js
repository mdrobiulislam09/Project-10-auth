import React from 'react';
import { Outlet } from 'react-router-dom';
import Coures from '../Coures/Coures';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col><Coures></Coures></Col>
                    <Col xs={10}><Outlet></Outlet></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;