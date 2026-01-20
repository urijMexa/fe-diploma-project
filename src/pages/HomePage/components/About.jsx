import React from 'react';
import styles from './About.module.scss';

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className="container">
                <div className={styles.contentWrapper}>
                    <h2>О нас</h2>
                    <div className={styles.text}>
                        <p>
                            Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем
                            все больше людей заказывают жд билеты через интернет.
                        </p>
                        <p>
                            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
                            Мы расскажем о преимуществах заказа через интернет.
                        </p>
                        <p>
                            Покупать жд билеты дешево можно за 90 суток до отправления поезда.<br/>
                            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
