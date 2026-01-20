import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetOrder } from '../../redux/slices/orderSlice';
import { clearSearch } from '../../redux/slices/searchSlice';
import styles from './SuccessPage.module.scss';

const SuccessPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.order);

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // Подставляем имя из введенных данных
    const fullName = user.name && user.patronymic
        ? `${user.name} ${user.patronymic}`
        : 'Ирина Эдуардовна';

    const handleGoHome = () => {
        dispatch(resetOrder());
        dispatch(clearSearch());
        navigate('/');
    };

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className="container">
                    {/* Заголовок над карточкой, прижат влево */}
                    <h1 className={styles.mainTitle}>Благодарим Вас за заказ!</h1>

                    <div className={styles.orderCard}>
                        <div className={styles.orderHeader}>
                            <span>№Заказа 285AA</span>
                            <span>сумма <strong>7 760</strong> ₽</span>
                        </div>

                        <div className={styles.iconsRow}>
                            <div className={styles.iconItem}>
                                <div className={styles.circle}><i className="fa-solid fa-laptop"></i></div>
                                <p>билеты отправлены на ваш e-mail</p>
                            </div>
                            <div className={styles.iconItem}>
                                <div className={styles.circle}><i className="fa-solid fa-ticket"></i></div>
                                <p>распечатайте и сохраните билеты</p>
                            </div>
                            <div className={styles.iconItem}>
                                <div className={styles.circle}><i className="fa-solid fa-user-tie"></i></div>
                                <p>предъявите билеты при посадке</p>
                            </div>
                        </div>

                        <div className={styles.message}>
                            <h3>{fullName}!</h3>
                            <p>Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
                            <strong>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</strong>
                        </div>

                        <div className={styles.footer}>
                            <span>Оценить сервис</span>
                            <div className={styles.stars}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <i
                                        key={star}
                                        className={`fa-star ${((hover || rating) >= star) ? 'fa-solid ' + styles.active : 'fa-regular'}`}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                    ></i>
                                ))}
                            </div>
                            <button className={styles.homeBtn} onClick={handleGoHome}>ВЕРНУТЬСЯ НА ГЛАВНУЮ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
