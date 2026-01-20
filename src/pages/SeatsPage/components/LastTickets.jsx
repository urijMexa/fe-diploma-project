import React from 'react';
import styles from './LastTickets.module.scss';

const tickets = [
    { from: 'Санкт-Петербург', to: 'Самара', station1: 'Курский вокзал', station2: 'Московский вокзал', price: '2 500' },
    { from: 'Москва', to: 'Казань', station1: 'Курский вокзал', station2: 'Московский вокзал', price: '3 500' },
];

const LastTickets = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Последние билеты</h3>
            {tickets.map((t, i) => (
                <div className={styles.card} key={i}>
                    <div className={styles.row}><strong>{t.from}</strong> <strong>{t.to}</strong></div>
                    <div className={styles.row}><small>{t.station1}</small> <small>{t.station2}</small></div>
                    <div className={styles.footer}>
                        <div className={styles.icons}><i className="fa-solid fa-wifi"></i> <i className="fa-solid fa-mug-hot"></i></div>
                        <div className={styles.price}>от <span>{t.price}</span> ₽</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LastTickets;
