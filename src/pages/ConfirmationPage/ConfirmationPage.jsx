import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../OrderPage/components/ProgressBar';
import OrderSummary from '../../components/Train/OrderSummary/OrderSummary';
import styles from './ConfirmationPage.module.scss';

const ConfirmationPage = () => {
    const navigate = useNavigate();
    const { passengers, user } = useSelector(state => state.order);

    return (
        <div className={styles.page}>
            <div className={styles.topBanner}></div>
            <ProgressBar step={4} />
            <div className="container">
                <div className={styles.layout}>
                    <OrderSummary />

                    <div className={styles.main}>
                        {/* Секция Поезд */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>Поезд</div>
                            <div className={styles.trainBody}>
                                <div className={styles.trainLeft}>
                                    <div className={styles.iconCircle}><i className="fa-solid fa-train"></i></div>
                                    <div className={styles.trainName}><strong>116С</strong> <br/> Адлер → Санкт-Петербург</div>
                                </div>

                                <div className={styles.trainInfo}>
                                    <div className={styles.timeBlock}><strong>00:10</strong><p>Москва<br/><small>Курский вокзал</small></p></div>
                                    <div className={styles.arrow}>➔</div>
                                    <div className={styles.timeBlock}><strong>09:52</strong><p>С.Петербург<br/><small>Ладожский вокзал</small></p></div>
                                </div>

                                <div className={styles.trainSide}>
                                    <div className={styles.icons}><i className="fa-solid fa-wifi"></i> <i className="fa-solid fa-mug-hot"></i></div>
                                    <button className={styles.changeBtn} onClick={() => navigate('/order')}>Изменить</button>
                                </div>
                            </div>
                        </div>

                        {/* Секция Пассажиры */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>Пассажиры</div>
                            <div className={styles.passWrapper}>
                                <div className={styles.passList}>
                                    {passengers.map((p) => (
                                        <div key={p.id} className={styles.passItem}>
                                            <div className={styles.leftCol}>
                                                <div className={styles.userCircle}><i className="fa-solid fa-user"></i></div>
                                                <div className={styles.pType}>{p.type === 'adult' ? 'Взрослый' : 'Детский'}</div>
                                            </div>
                                            <div className={styles.rightCol}>
                                                <strong>{p.surname} {p.name} {p.patronymic}</strong>
                                                <div className={styles.pDetails}>
                                                    <span>Пол {p.gender === 'M' ? 'мужской' : 'женский'}</span>
                                                    <span>Дата рождения {p.birth}</span>
                                                    <span>{p.docType} {p.series} {p.number}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.summaryCol}>
                                    <div className={styles.totalPrice}>Всего <strong>7 760</strong> ₽</div>
                                    <button className={styles.changeBtn} onClick={() => navigate('/order/passengers')}>Изменить</button>
                                </div>
                            </div>
                        </div>

                        {/* Секция Способ оплаты */}
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>Способ оплаты</div>
                            <div className={styles.body}>
                                <span>{user.paymentMethod === 'cash' ? 'Наличными' : 'Онлайн'}</span>
                                <button className={styles.changeBtn} onClick={() => navigate('/order/payment')}>Изменить</button>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button className={styles.confirmBtn} onClick={() => navigate('/success')}>Подтвердить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
