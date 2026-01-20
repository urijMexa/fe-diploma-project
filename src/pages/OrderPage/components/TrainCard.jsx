import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTrainId } from '../../../redux/slices/seatsSlice';
import { formatTime, formatDuration } from '../../../utils/formatDate';
import styles from './TrainCard.module.scss';

const TrainCard = ({ data }) => {
    const { departure } = data;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelect = () => {
        dispatch(setTrainId(departure.train._id));
        navigate('/order/seats');
    };

    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <div className={styles.iconCircle}>
                    <i className="fa-solid fa-train-subway"></i>
                </div>
                <div className={styles.trainName}>{departure.train.name}</div>
                <div className={styles.routeInfo}>
                    {departure.from.city.name} <i className="fa-solid fa-arrow-right"></i><br/>
                    {departure.to.city.name} <br/>
                </div>
            </div>

            <div className={styles.middle}>
                {/* Ряд 1: Туда */}
                <div className={styles.directionRow}>
                    <div className={styles.timeGroup}>
                        <div className={styles.time}>{formatTime(departure.from.datetime)}</div>
                        <div className={styles.city}>{departure.from.city.name}</div>
                        <div className={styles.station}>{departure.from.railway_station_name} вокзал</div>
                    </div>

                    <div className={styles.durationGroup}>
                        <span className={styles.durationText}>{formatDuration(departure.duration)}</span>
                        {/* ВЕКТОРНАЯ СТРЕЛКА ВПРАВО */}
                        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0" y="9" width="65" height="6" fill="#FFA800"/>
                            <path d="M60 0L80 12L60 24V0Z" fill="#FFA800"/>
                        </svg>
                    </div>

                    <div className={styles.timeGroup} style={{textAlign: 'right'}}>
                        <div className={styles.time}>{formatTime(departure.to.datetime)}</div>
                        <div className={styles.city}>{departure.to.city.name}</div>
                        <div className={styles.station}>{departure.to.railway_station_name} вокзал</div>
                    </div>
                </div>

                {/* Ряд 2: Обратно */}
                <div className={styles.directionRow}>
                    <div className={styles.timeGroup}>
                        <div className={styles.time}>00:10</div>
                        <div className={styles.city}>{departure.to.city.name}</div>
                        <div className={styles.station}>{departure.to.railway_station_name} вокзал</div>
                    </div>

                    <div className={styles.durationGroup}>
                        <span className={styles.durationText}>{formatDuration(departure.duration)}</span>
                        {/* ВЕКТОРНАЯ СТРЕЛКА ВЛЕВО */}
                        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="15" y="9" width="65" height="6" fill="#FFA800"/>
                            <path d="M20 0L0 12L20 24V0Z" fill="#FFA800"/>
                        </svg>
                    </div>

                    <div className={styles.timeGroup} style={{textAlign: 'right'}}>
                        <div className={styles.time}>09:52</div>
                        <div className={styles.city}>{departure.from.city.name}</div>
                        <div className={styles.station}>{departure.from.railway_station_name} вокзал</div>
                    </div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.priceList}>
                    {departure.price_info.fourth && (
                        <div className={styles.priceItem}>
                            <span className={styles.type}>Сидячий</span>
                            <span className={styles.count}>88</span>
                            <span className={styles.costBlock}>
                    <span className={styles.from}>от</span>
                    <span className={styles.cost}>{departure.price_info.fourth.price}</span>
                    <span className={styles.rub}>₽</span>
                 </span>
                        </div>
                    )}
                    {departure.price_info.third && (
                        <div className={styles.priceItem}>
                            <span className={styles.type}>Плацкарт</span>
                            <span className={styles.count}>52</span>
                            <span className={styles.costBlock}>
                    <span className={styles.from}>от</span>
                    <span className={styles.cost}>{departure.price_info.third.price}</span>
                    <span className={styles.rub}>₽</span>
                 </span>
                        </div>
                    )}
                    {departure.price_info.second && (
                        <div className={styles.priceItem}>
                            <span className={styles.type}>Купе</span>
                            <span className={styles.count}>24</span>
                            <span className={styles.costBlock}>
                    <span className={styles.from}>от</span>
                    <span className={styles.cost}>{departure.price_info.second.price}</span>
                    <span className={styles.rub}>₽</span>
                 </span>
                        </div>
                    )}
                    {departure.price_info.first && (
                        <div className={styles.priceItem}>
                            <span className={styles.type}>Люкс</span>
                            <span className={styles.count}>15</span>
                            <span className={styles.costBlock}>
                    <span className={styles.from}>от</span>
                    <span className={styles.cost}>{departure.price_info.first.price}</span>
                    <span className={styles.rub}>₽</span>
                 </span>
                        </div>
                    )}
                </div>

                <div className={styles.bottomIcons}>
                    <i className="fa-solid fa-wifi"></i>
                    <i className="fa-solid fa-rocket"></i>
                    <i className="fa-solid fa-mug-hot"></i>
                </div>

                <button className={styles.btn} onClick={handleSelect}>
                    Выбрать места
                </button>
            </div>
        </div>
    );
};

export default TrainCard;
