import React from 'react';
import styles from './TicketCounters.module.scss';

const TicketCounters = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Количество билетов</h3>
            <div className={styles.row}>
                <div className={styles.counterField}>
                    <input type="text" defaultValue="Взрослых — 2" />
                    <p>Можно добавить еще 3 пассажиров</p>
                </div>
                <div className={styles.counterField + ' ' + styles.active}>
                    <input type="text" defaultValue="Детских — 1" />
                    <p>Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
                </div>
                <div className={styles.counterField}>
                    <input type="text" defaultValue="Детских «без места» — 0" />
                </div>
            </div>
        </div>
    );
};

export default TicketCounters;
