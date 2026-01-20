import React from 'react';
import styles from './TrainSummary.module.scss';

const TrainSummary = ({ id }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className={styles.backBtn}>
                    <span className={styles.arrow}>➔</span> Выбрать другой поезд
                </button>
            </div>

            <div className={styles.infoRow}>
                <div className={styles.trainId}>
                    <div className={styles.iconCircle}><i className="fa-solid fa-train"></i></div>
                    <div className={styles.idText}>
                        <strong>{id}C</strong>
                        <small>Адлер → Москва → Санкт-Петербург</small>
                    </div>
                </div>

                <div className={styles.timeBlock}>
                    <strong>00:10</strong>
                    <span>Москва</span>
                    <small>Курский вокзал</small>
                </div>

                <div className={styles.arrow}><i className="fa-solid fa-arrow-right"></i></div>

                <div className={styles.timeBlock}>
                    <strong>09:52</strong>
                    <span>Санкт-Петербург</span>
                    <small>Ладожский вокзал</small>
                </div>

                <div className={styles.duration}>
                    <i className="fa-regular fa-clock"></i>
                    <span>9 часов 42 минуты</span>
                </div>
            </div>
        </div>
    );
};

export default TrainSummary;
