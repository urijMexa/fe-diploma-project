import React, { useState } from 'react';
import classNames from 'classnames';
import WagonMap from './WagonMap';
import styles from './Coach.module.scss';

const Coach = ({ coachData }) => {
    const { coach, seats } = coachData;
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [services, setServices] = useState({
        air: coach.have_air_conditioning,
        wifi: coach.have_wifi,
        linens: true,
        food: false
    });

    const toggleService = (name) => {
        setServices(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const toggleSeat = (idx) => {
        setSelectedSeats(prev =>
            prev.includes(idx) ? prev.filter(s => s !== idx) : [...prev, idx]
        );
    };

    return (
        <div className={styles.coachWrapper}>
            <div className={styles.coachHeaderBar}>
                <div className={styles.numbers}>Вагон <strong>{coach.name}</strong></div>
                <div className={styles.direction}>Нумерация начинается с головы поезда</div>
            </div>

            <div className={styles.mainInfo}>
                <div className={styles.leftSide}>
                    <div className={styles.bigNumber}>{coach.name}</div>
                    <div className={styles.label}>вагон</div>
                </div>

                <div className={styles.centerSide}>
                    <div className={styles.seatsInfo}>
                        <div className={styles.infoLabel}>Места <span>{coach.available_seats}</span></div>
                        <div className={styles.priceRow}><span>Верхние</span> <strong>4</strong> <span className={styles.cost}>{coach.top_price || coach.price} ₽</span></div>
                        <div className={styles.priceRow}><span>Нижние</span> <strong>4</strong> <span className={styles.cost}>{coach.bottom_price || coach.price} ₽</span></div>
                    </div>

                    <div className={styles.servicesInfo}>
                        <div className={styles.infoLabel}>Обслуживание <span>ФПК</span></div>
                        <div className={styles.serviceIcons}>
                            <div className={styles.iconBox}>
                                <i className={classNames("fa-solid fa-snowflake", styles.sIcon, {[styles.active]: services.air})} onClick={() => toggleService('air')}></i>
                                <div className={styles.tooltip}>кондиционер</div>
                            </div>
                            <div className={styles.iconBox}>
                                <i className={classNames("fa-solid fa-wifi", styles.sIcon, {[styles.active]: services.wifi})} onClick={() => toggleService('wifi')}></i>
                                <div className={styles.tooltip}>WI-FI</div>
                            </div>
                            <div className={styles.iconBox}>
                                <i className={classNames("fa-solid fa-shirt", styles.sIcon, {[styles.active]: services.linens})} onClick={() => toggleService('linens')}></i>
                                <div className={styles.tooltip}>белье</div>
                            </div>
                            <div className={styles.iconBox}>
                                <i className={classNames("fa-solid fa-coffee", styles.sIcon, {[styles.active]: services.food})} onClick={() => toggleService('food')}></i>
                                <div className={styles.tooltip}>питание</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.wagonMapWrapper}>
                <div className={styles.statsPopup}>11 человек выбирают места</div>
                <WagonMap type={coach.class_type} seats={seats} selectedSeats={selectedSeats} onToggleSeat={toggleSeat} />
            </div>

            <div className={styles.totalRow}>
                <span>{selectedSeats.length * coach.price}</span> ₽
            </div>
        </div>
    );
};

export default Coach;
