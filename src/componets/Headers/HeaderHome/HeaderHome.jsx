import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes.js";
import Logo from "../../../img/Logo/Logo.png";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Col, Container, Row } from "react-bootstrap";
import InputBase from '@mui/material/InputBase';
import SearchStyle from "../../../styles/MUI/Search/index.js";
import { countCartStyle } from "../../../styles/Other/countCartStyle/index.js";
import { useSelector } from "react-redux";

const HeaderHome = () => {
    // Переименуем компонент Search в SearchContainer
    const SearchContainer = styled('div')(({ theme }) => SearchStyle(theme).search);
    const SearchIconWrapper = styled('div')(({ theme }) => SearchStyle(theme).searchIconWrapper);
    const StyledInputBase = styled(InputBase)(({ theme }) => SearchStyle(theme).styledInputBase);

    const itemsCount = useSelector((state) => {
        if (state.cartCount && state.cartCount.items) {
            const count = state.cartCount.items.reduce((total, item) => total + item.quantity, 0);
            console.log("Items Count: ", count);
            return count;
        }
        return 0;
    });
    return (
        <div className='header' style={{
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            paddingRight: '20px',
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
                                    {/* Заменяем Search на SearchContainer */}
                                    <SearchContainer>
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
                                    </SearchContainer>
                                    <div className="box">

                                    </div>
                                </form>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <Link to={ROUTES.HOME} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <AccountCircleIcon style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                                    <div className="user">Guest</div>
                                </Link>
                            </div>
                            <div className="d-flex flex-column align-items-center ml-3 position-relative">
                                <Link to={ROUTES.CART} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <AddShoppingCartIcon style={{ width: '40px', height: '40px' }} />
                                </Link>
                                {itemsCount > 0 && (
                                    <span className='count' style={countCartStyle}>{itemsCount}</span>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderHome;
