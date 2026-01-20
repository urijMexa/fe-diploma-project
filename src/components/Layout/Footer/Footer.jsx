import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className={styles.footer} id="contacts">
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.contacts}>
                        <h3>Свяжитесь с нами</h3>
                        <ul>
                            <li><i className="fa-solid fa-phone"></i> 8 (800) 000 00 00</li>
                            <li><i className="fa-solid fa-envelope"></i> inbox@mail.ru</li>
                            <li><i className="fa-brands fa-skype"></i> tu.train.tickets</li>
                            <li><i className="fa-solid fa-location-dot"></i> г. Москва, ул. Московская 27-35</li>
                        </ul>
                    </div>

                    <div className={styles.subscribe}>
                        <h3>Подписка</h3>
                        <div className={styles.form}>
                            <input type="email" placeholder="Ваш e-mail" />
                            <button>Отправить</button>
                        </div>

                        <h3>Подписывайтесь на нас</h3>
                        <div className={styles.socialIcons}>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-google-plus-g"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.logo}>Лого</div>

                    <button
                        onClick={scrollToTop}
                        style={{
                            color: '#fff',
                            border: '1px solid #fff',
                            borderRadius: '50%',
                            width: '30px',
                            height: '30px',
                            cursor: 'pointer',
                            background: 'transparent'
                        }}
                    >
                        <i className="fa-solid fa-arrow-up"></i>
                    </button>

                    <div className={styles.copyright}>2018 WEB</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
