import React from 'react';
import classNames from 'classnames';
import styles from './Coach.module.scss';

const WagonMap = ({ type, seats, selectedSeats, onToggleSeat }) => {
    const isOccupied = (idx) => {
        const s = seats.find(item => item.index === idx);
        return s ? !s.available : false;
    };

    const renderSeat = (idx, isSide = false) => (
        <div
            key={idx}
            className={classNames(styles.seat, {
                [styles.occupied]: isOccupied(idx),
                [styles.selected]: selectedSeats.includes(idx),
                [styles.sideSeat]: isSide
            })}
            onClick={() => !isOccupied(idx) && onToggleSeat(idx)}
        >
            {idx}
        </div>
    );

    const layouts = {
        // ЛЮКС: 9 купе по 2 нижних места
        first: () => (
            <div className={styles.luxLayout}>
                {Array.from({ length: 9 }, (_, i) => (
                    <div key={i} className={styles.luxCompartment}>
                        {renderSeat(i * 2 + 1)}
                        {renderSeat(i * 2 + 2)}
                    </div>
                ))}
            </div>
        ),
        // КУПЕ: 8 купе по 4 места (2 верх, 2 низ)
        second: () => (
            <div className={styles.coupeLayout}>
                {Array.from({ length: 8 }, (_, i) => (
                    <div key={i} className={styles.coupeCompartment}>
                        <div className={styles.topSeats}>{renderSeat((i * 4) + 2)}{renderSeat((i * 4) + 4)}</div>
                        <div className={styles.bottomSeats}>{renderSeat((i * 4) + 1)}{renderSeat((i * 4) + 3)}</div>
                    </div>
                ))}
            </div>
        ),
        // ПЛАЦКАРТ: 8 купе + 16 боковых мест
        third: () => (
            <div className={styles.platskartLayout}>
                <div className={styles.mainPlatsRow}>
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className={styles.platsCompartment}>
                            <div className={styles.topSeats}>{renderSeat((i * 4) + 2)}{renderSeat((i * 4) + 4)}</div>
                            <div className={styles.bottomSeats}>{renderSeat((i * 4) + 1)}{renderSeat((i * 4) + 3)}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.sidePlatsRow}>
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className={styles.sideCompartment}>
                            {renderSeat(33 + (i * 2), true)}
                            {renderSeat(34 + (i * 2), true)}
                        </div>
                    ))}
                </div>
            </div>
        ),
        // СИДЯЧИЙ: Ряды кресел (например 2 + 2 с проходом)
        fourth: () => (
            <div className={styles.sittingLayout}>
                {Array.from({ length: 31 }, (_, i) => (
                    <div key={i} className={styles.sittingRow}>
                        {renderSeat(i * 2 + 1)}
                        {renderSeat(i * 2 + 2)}
                    </div>
                ))}
            </div>
        )
    };

    return (
        <div className={styles.wagonGraphic}>
            <div className={styles.wagonLeftSection}><i className="fa-solid fa-restroom"></i></div>
            <div className={styles.seatsContainer}>
                {layouts[type] ? layouts[type]() : <p>Схема в разработке</p>}
            </div>
            <div className={styles.wagonRightSection}><i className="fa-solid fa-restroom"></i></div>
        </div>
    );
};

export default WagonMap;
