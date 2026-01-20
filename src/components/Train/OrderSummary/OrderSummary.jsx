import React from 'react';
import { useSelector } from 'react-redux';
import styles from './OrderSummary.module.scss';

const OrderSummary = () => {
    const order = useSelector(state => state.order);
    const passengers = order?.passengers || [];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>Детали поездки</div>

            <div className={styles.section}>
                <div className={styles.titleRow}>
                    <div className={styles.mainTitle}><i className="fa-solid fa-arrow-right"></i> Туда</div>
                    <span className={styles.date}>30.08.2018</span>
                </div>
                <div className={styles.infoRow}><span>№ Поезда</span> <strong>116С</strong></div>
                <div className={styles.infoRow}><span>Название</span> <strong className={styles.routeName}>Адлер<br/>С.Петербург</strong></div>

                <div className={styles.timeContainer}>
                    <div className={styles.point}>
                        <strong>00:10</strong>
                        <div className={styles.stationInfo}>Москва<br/><small>Курский вокзал</small></div>
                    </div>
                    <div className={styles.duration}>
                        <i className="fa-solid fa-chevron-right"></i> 9:42
                    </div>
                    <div className={styles.point}>
                        <strong>09:52</strong>
                        <div className={styles.stationInfo}>С.Петербург<br/><small>Ладожский вокзал</small></div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.titleRow}>
                    <div className={styles.mainTitle}><i className="fa-solid fa-arrow-left"></i> Обратно</div>
                    <span className={styles.date}>09.09.2018</span>
                </div>
                <div className={styles.infoRow}><span>№ Поезда</span> <strong>116С</strong></div>
                <div className={styles.infoRow}><span>Название</span> <strong className={styles.routeName}>Адлер<br/>С.Петербург</strong></div>

                <div className={styles.timeContainer}>
                    <div className={styles.point}>
                        <strong>00:10</strong>
                        <div className={styles.stationInfo}>С.Петербург<br/><small>Ладожский вокзал</small></div>
                    </div>
                    <div className={styles.duration}>
                        <i className="fa-solid fa-chevron-left"></i> 9:42
                    </div>
                    <div className={styles.point}>
                        <strong>09:52</strong>
                        <div className={styles.stationInfo}>Москва<br/><small>Курский вокзал</small></div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.mainTitle} style={{marginBottom: '15px'}}><i className="fa-solid fa-user"></i> Пассажиры</div>
                <div className={styles.infoRow}>
                    <span>{passengers.length} Пассажиров</span>
                    <strong>7 760 ₽</strong>
                </div>
            </div>

            <div className={styles.footer}>
                <span>ИТОГ</span>
                <span className={styles.total}>7 760 ₽</span>
            </div>
        </aside>
    );
};

export default OrderSummary;
