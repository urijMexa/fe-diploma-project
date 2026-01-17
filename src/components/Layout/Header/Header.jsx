import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link to="/" className={styles.logo}>
                        Лого
                    </Link>
                    <ul className={styles.menu}>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#how-it-works">Как это работает</a></li>
                        <li><a href="#reviews">Отзывы</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
