import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <div className='footer' style={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs="auto">
                        Footer
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Footer;