import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Link} from "react-router-dom";
import {ROUTES} from "../../../utils/routes.js";
import Logo from "../../../img/Logo/Logo.png"
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Col, Container, Row} from "react-bootstrap";
import {Search} from "@mui/icons-material";
import InputBase from '@mui/material/InputBase';
import SearchStyle from "../../../styles/MUI/Search/index.js";

const HeaderHome = () => {
    const Search = styled('div')(({ theme }) => SearchStyle(theme).search);

    const SearchIconWrapper = styled('div')(({ theme }) => SearchStyle(theme).searchIconWrapper);

    const StyledInputBase = styled(InputBase)(({ theme }) => SearchStyle(theme).styledInputBase);

    return (
        <div className='header' style={{
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
        }}>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs="auto">
                        <div className="logo-container" style={{ maxWidth: '150px' }}>
                            <Link to={ROUTES.HOME}>
                                <img src={Logo} alt="logo" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </Link>
                        </div>
                    </Col>
                    <Col xs="auto">
                        <div className="info d-flex align-items-center gap-5">
                            <div className="d-flex align-items-center ml-3">
                                <form>
                                    <Search>
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                            name="search"
                                            onChange={() => {}}
                                            value=""
                                        />
                                    </Search>
                                    <div className="box">

                                    </div>
                                </form>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <Link to={ROUTES.HOME}>
                                    <AccountCircleIcon style={{width: '40px', height: '40px', marginRight: '10px'}}/>
                                    <div className="user">Guest</div>
                                </Link>
                            </div>
                            <div className="d-flex align-items-center ml-3">
                                <Link to={ROUTES.HOME}>
                                     <AddShoppingCartIcon style={{width: '40px', height: '40px'}}/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderHome;