import React from 'react';
import styles from '../../styles/Header.module.css'
import {Link} from "react-router-dom";
import routeNames from "../../ROUTES/routeNames.js";
import Logo from "../../img/Logo.png"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={routeNames.home}>
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>
        </div>
    );
};

export default Header;