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
const HeaderHome = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

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
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <AccountCircleIcon style={{width: '40px', height: '40px', marginRight: '10px'}}/>
                                <div className="user">Guest</div>
                            </div>
                            <div className="d-flex align-items-center ml-3">
                                <AddShoppingCartIcon style={{width: '40px', height: '40px'}}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderHome;