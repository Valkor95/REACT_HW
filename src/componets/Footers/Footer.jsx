import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes.js";
import Logo from "../../img/Logo/Logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    return (
        <div className='footer' style={{
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            padding: '30px'
        }}>
            <Container >
                <Row className="justify-content-center align-items-center">
                    <Col xs="auto">
                        <div className="logo-container" style={{ maxWidth: '50px' }}>
                            <Link to={ROUTES.HOME}>
                                <img src={Logo} alt="logo" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </Link>
                        </div>
                    </Col>

                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col xs="auto" className='rights'>
                        Developed by Hillel's Student Valeriy Korovin
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <Col xs="auto" className='socials'>
                        <FacebookIcon/>
                        <LinkedInIcon/>
                        <YouTubeIcon/>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Footer;