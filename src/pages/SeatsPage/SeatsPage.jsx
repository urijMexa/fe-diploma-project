import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSeats } from '../../redux/slices/seatsSlice';
import ProgressBar from '../OrderPage/components/ProgressBar';
import Sidebar from '../OrderPage/components/Sidebar';
import TrainSummary from './components/TrainSummary';
import TicketCounters from './components/TicketCounters';
import Coach from './Coach';
import styles from './SeatsPage.module.scss';

const coachTypes = [
    { id: 'fourth', label: 'Сидячий', icon: 'fa-chair' },
    { id: 'third', label: 'Плацкарт', icon: 'fa-train-subway' },
    { id: 'second', label: 'Купе', icon: 'fa-couch' },
    { id: 'first', label: 'Люкс', icon: 'fa-star' },
];

const SeatsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const trainId = useSelector(state => state.seats.trainId);
    const { coaches, loading } = useSelector(state => state.seats);

    // Состояние выбранного типа вагона
    const [activeType, setActiveType] = useState('second'); // По умолчанию Купе

    useEffect(() => {
        if (!trainId) {
            navigate('/order');
            return;
        }
        dispatch(fetchSeats(trainId));
    }, [dispatch, trainId, navigate]);

    // Фильтруем вагоны из API по выбранному пользователем типу
    const filteredCoaches = coaches.filter(c => c.coach.class_type === activeType);

    return (
        <div className={styles.page}>
            <div className={styles.topBanner}></div>
            <ProgressBar step={1} />

            <div className="container">
                <div className={styles.layout}>
                    <Sidebar />

                    <div className={styles.mainContent}>
                        <h2 className={styles.pageTitle}>ВЫБОР МЕСТ</h2>

                        <div className={styles.whitePaper}>
                            {/* Информация о поезде */}
                            <TrainSummary id={trainId} />

                            {/* Счетчики билетов (Взрослые/Дети) */}
                            <TicketCounters />

                            {/* Выбор типа вагона (Табы) */}
                            <div className={styles.sectionTitle}>Тип вагона</div>
                            <div className={styles.typesRow}>
                                {coachTypes.map(type => (
                                    <div
                                        key={type.id}
                                        className={`${styles.typeTab} ${activeType === type.id ? styles.active : ''}`}
                                        onClick={() => setActiveType(type.id)}
                                    >
                                        <div className={styles.typeIcon}><i className={`fa-solid ${type.icon}`}></i></div>
                                        <span>{type.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Список вагонов выбранного типа */}
                            <div className={styles.coachesList}>
                                {loading ? (
                                    <p className={styles.loadingMsg}>Загружаем схему вагонов... 🚆</p>
                                ) : (
                                    filteredCoaches.length > 0 ? (
                                        <>
                                            <div className={styles.wagonNumbersRow}>
                                                Вагоны {filteredCoaches.map(c => (
                                                <span key={c.coach._id} className={styles.wagonNum}>{c.coach.name}</span>
                                            ))}
                                                <small className={styles.headInfo}>Нумерация вагонов начинается с головы поезда</small>
                                            </div>

                                            {filteredCoaches.map(item => (
                                                <Coach key={item.coach._id} coachData={item} />
                                            ))}
                                        </>
                                    ) : (
                                        <p className={styles.emptyMsg}>Вагонов типа "{coachTypes.find(t => t.id === activeType).label}" в этом поезде не найдено.</p>
                                    )
                                )}
                            </div>
                        </div>

                        <button className={styles.nextBtn} onClick={() => navigate('/order/passengers')}>
                            Далее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatsPage;
