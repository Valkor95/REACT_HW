import React from 'react';
import styles from '../../styles/Header.module.css'
import {Link} from "react-router-dom";
import routeNames from "../../ROUTES/routeNames.js";
import Logo from "../../img/Logo.png"
import Avatar from "../../img/Avatar.png"
import icons from "../../../public/sprite.svg"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={routeNames.home}>
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>

            <div className={styles.info}>
                <div className={styles.user}>
                    <div
                        className={styles.avatar}
                        style={{backgroundImage: `url(${Avatar})`}}
                    />
                    <div className={styles.username}>Guest</div>
                </div>

                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className="icon">
                            <use xlinkHref={`${icons}#search`}/>
                        </svg>
                    </div>
                    <div className={styles.input}>
                        <input
                            type="search"
                            name="search"
                            placeholder="Search..."
                            autoComplete="off"
                            onChange={() => {
                            }}
                            value=""
                        />
                    </div>
                    <div className={styles.box}></div>
                </form>

                <div className={styles.account}>
                    <Link to={routeNames.home} className={styles.favourites}>
                        <svg className={styles['icon-fav']}>
                            <use xlinkHref={`${icons}#heart`}/>
                        </svg>
                    </Link>

                    <Link to={routeNames.home} className={styles.favourites}>
                        <svg className={styles['icon-fav']}>
                            <use xlinkHref={`${icons}#heart`}/>
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Header;