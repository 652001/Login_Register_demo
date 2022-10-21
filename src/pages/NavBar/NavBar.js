import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import { useSelector } from 'react-redux';

const cln = classNames.bind(styles);

const NavBar = () => {
    const user = useSelector((state) => state.auth.login.currentUser);

    return (
        <nav className={cln('container')}>
            <Link to="/" className={cln('home')}>
                Home
            </Link>
            {user ? (
                <>
                    <p className={cln('user')}>
                        Hi, <span> {user.username} </span>
                    </p>
                    <Link to="/logout" className={cln('logout')}>
                        Log out
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/login" className={cln('login')}>
                        Login
                    </Link>
                    <Link to="/register" className={cln('register')}>
                        Register
                    </Link>
                </>
            )}
        </nav>
    );
};

export default NavBar;
