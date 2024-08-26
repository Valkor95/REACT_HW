import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/routes.js";
import Logo from "../../../img/Logo/Logo.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Col, Container, Row} from "react-bootstrap";
const HeaderHome = () => {
    return (
        <div className='header' style={{
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
        }}>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs="auto">
                        <div className="logo">
                            <Link to={ROUTES.HOME}>
                                <img src={Logo} alt="logo" style={{ width: '150px', height: 'auto' }} />
                            </Link>
                        </div>
                    </Col>
                    <Col xs="auto">
                        <div className="info d-flex align-items-center gap-5">
                            <div className="d-flex flex-column align-items-center">
                                <AccountCircleIcon style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                                <div className="user">Guest</div>
                            </div>
                            <div className="d-flex align-items-center ml-3">
                                <AddShoppingCartIcon style={{ width: '40px', height: '40px' }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderHome;