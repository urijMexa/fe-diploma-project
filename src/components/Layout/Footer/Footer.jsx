import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer} id="contacts">
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.contacts}>
                        <h3>Свяжитесь с нами</h3>
                        <ul>
                            <li>8 (800) 000 00 00</li>
                            <li>inbox@mail.ru</li>
                            <li>tu.train.tickets</li>
                            <li>г. Москва, ул. Московская 27-35</li>
                        </ul>
                    </div>

                    <div className={styles.subscribe}>
                        <h3>Подписка</h3>
                        <div className={styles.form}>
                            <input type="email" placeholder="Ваш e-mail" />
                            <button>Отправить</button>
                        </div>

                        <div className={styles.socials}>
                            <h3>Подписывайтесь на нас</h3>
                            {/* Иконки соцсетей добавим позже */}
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.logo}>Лого</div>
                    <div className={styles.copyright}>2023 WEB</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
