import React from 'react';
import styles from './HowItWorks.module.scss';

const HowItWorks = () => {
    return (
        <section className={styles.section} id="how-it-works">
            <div className="container">
                <div className={styles.header}>
                    <h2>Как это работает</h2>
                    <button className={styles.btn}>Узнать больше</button>
                </div>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.iconCircle}>
                            <i className="fa-solid fa-desktop"></i>
                        </div>
                        <p>Удобный заказ<br/>на сайте</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.iconCircle}>
                            <i className="fa-solid fa-building"></i>
                        </div>
                        <p>Нет необходимости<br/>ехать в офис</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.iconCircle}>
                            <i className="fa-solid fa-globe"></i>
                        </div>
                        <p>Огромный выбор<br/>направлений</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
