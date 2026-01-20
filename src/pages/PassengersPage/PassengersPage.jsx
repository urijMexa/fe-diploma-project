import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPassenger, removePassenger, updatePassenger, togglePassenger } from '../../redux/slices/orderSlice';
import ProgressBar from '../OrderPage/components/ProgressBar';
import OrderSummary from '../../components/Train/OrderSummary/OrderSummary';
import styles from './PassengersPage.module.scss';

const PassengersPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const passengers = useSelector(state => state.order?.passengers || []);

    // Функция валидации конкретного пассажира
    const validateDoc = (p) => {
        if (p.docType === 'Паспорт РФ') {
            const sValid = /^\d{4}$/.test(p.series);
            const nValid = /^\d{6}$/.test(p.number);
            return {
                isValid: sValid && nValid,
                msg: 'Номер паспорта указан некорректно. Пример: 4204 380694'
            };
        } else {
            // Свидетельство: Римские цифры, буквы, 6 цифр (VIII УН 256319)
            const certRegex = /^[IVXLCDM]+[ -\u0410-\u042F]{2,5}[ -]\d{6}$/i;
            return {
                isValid: certRegex.test(p.number),
                msg: 'Номер свидетельства указан некорректно. Пример: VIII-УН-123456'
            };
        }
    };

    const handleNext = () => {
        const allValid = passengers.every(p =>
            p.surname && p.name && validateDoc(p).isValid
        );

        if (!allValid) {
            alert('Пожалуйста, заполните корректно данные всех пассажиров перед переходом к оплате.');
            return;
        }
        navigate('/order/payment');
    };

    return (
        <div className={styles.page}>
            <div className={styles.topBanner}></div>
            <ProgressBar step={2} />

            <div className="container">
                <div className={styles.layout}>
                    <OrderSummary />

                    <div className={styles.main}>
                        {passengers.map((p, idx) => {
                            const { isValid, msg } = validateDoc(p);
                            const isDirty = p.number.length > 0;

                            return (
                                <div key={p.id} className={styles.card}>
                                    <div className={styles.cardHeader}>
                    <span className={styles.toggle} onClick={() => dispatch(togglePassenger(p.id))}>
                      {p.isExpanded ? '−' : '+'}
                    </span>
                                        Пассажир {idx + 1}
                                        <span className={styles.close} onClick={() => dispatch(removePassenger(p.id))}>×</span>
                                    </div>

                                    {p.isExpanded && (
                                        <div className={styles.cardBody}>
                                            <select
                                                className={styles.selectType}
                                                value={p.type}
                                                onChange={e => dispatch(updatePassenger({id: p.id, field:'type', value:e.target.value}))}
                                            >
                                                <option value="adult">Взрослый</option>
                                                <option value="child">Детский</option>
                                            </select>

                                            <div className={styles.row}>
                                                <div className={styles.inputGroup}>
                                                    <label>Фамилия</label>
                                                    <input type="text" value={p.surname} onChange={e => dispatch(updatePassenger({id:p.id, field:'surname', value:e.target.value}))} />
                                                </div>
                                                <div className={styles.inputGroup}>
                                                    <label>Имя</label>
                                                    <input type="text" value={p.name} onChange={e => dispatch(updatePassenger({id:p.id, field:'name', value:e.target.value}))} />
                                                </div>
                                                <div className={styles.inputGroup}>
                                                    <label>Отчество</label>
                                                    <input type="text" value={p.patronymic} onChange={e => dispatch(updatePassenger({id:p.id, field:'patronymic', value:e.target.value}))} />
                                                </div>
                                            </div>

                                            <div className={styles.row}>
                                                <div className={styles.genderBlock}>
                                                    <label>Пол</label>
                                                    <div className={styles.genderBtns}>
                                                        <button className={p.gender === 'M' ? styles.active : ''} onClick={() => dispatch(updatePassenger({id:p.id, field:'gender', value:'M'}))}>М</button>
                                                        <button className={p.gender === 'F' ? styles.active : ''} onClick={() => dispatch(updatePassenger({id:p.id, field:'gender', value:'F'}))}>Ж</button>
                                                    </div>
                                                </div>
                                                <div className={styles.inputGroup}>
                                                    <label>Дата рождения</label>
                                                    <input type="text" placeholder="ДД.ММ.ГГГГ" value={p.birth} onChange={e => dispatch(updatePassenger({id:p.id, field:'birth', value:e.target.value}))} />
                                                </div>
                                            </div>

                                            <div className={styles.docSection}>
                                                <div className={styles.inputGroup}>
                                                    <label>Тип документа</label>
                                                    <select value={p.docType} onChange={e => {
                                                        dispatch(updatePassenger({id:p.id, field:'docType', value:e.target.value}));
                                                        dispatch(updatePassenger({id:p.id, field:'series', value:''}));
                                                        dispatch(updatePassenger({id:p.id, field:'number', value:''}));
                                                    }}>
                                                        <option>Паспорт РФ</option>
                                                        <option>Свидетельство о рождении</option>
                                                    </select>
                                                </div>

                                                {p.docType === 'Паспорт РФ' ? (
                                                    <>
                                                        <div className={styles.inputGroup}>
                                                            <label>Серия</label>
                                                            <input
                                                                className={isDirty && !/^\d{4}$/.test(p.series) ? styles.inputError : ''}
                                                                type="text" placeholder="_ _ _ _" value={p.series}
                                                                onChange={e => dispatch(updatePassenger({id:p.id, field:'series', value:e.target.value}))}
                                                            />
                                                        </div>
                                                        <div className={styles.inputGroup}>
                                                            <label>Номер</label>
                                                            <input
                                                                className={isDirty && !/^\d{6}$/.test(p.number) ? styles.inputError : ''}
                                                                type="text" placeholder="_ _ _ _ _ _" value={p.number}
                                                                onChange={e => dispatch(updatePassenger({id:p.id, field:'number', value:e.target.value}))}
                                                            />
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div className={styles.inputGroup} style={{flex: 2}}>
                                                        <label>Номер</label>
                                                        <input
                                                            className={isDirty && !isValid ? styles.inputError : ''}
                                                            type="text" placeholder="Пример: VIII УН 256319" value={p.number}
                                                            onChange={e => dispatch(updatePassenger({id:p.id, field:'number', value:e.target.value}))}
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            {isDirty && (
                                                !isValid ? (
                                                    <div className={styles.errorBar}>
                                                        <div className={styles.errorIcon}>×</div>
                                                        <p>{msg}</p>
                                                    </div>
                                                ) : (
                                                    <div className={styles.successBar}>
                                                        <div className={styles.successInfo}>
                                                            <div className={styles.checkIcon}>✓</div>
                                                            <span>Готово</span>
                                                        </div>
                                                        <button className={styles.nextPassBtn} onClick={() => dispatch(addPassenger())}>
                                                            Следующий пассажир
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        <div className={styles.addSection}>
                            <span>Добавить пассажира</span>
                            <button className={styles.plusBtn} onClick={() => dispatch(addPassenger())}>+</button>
                        </div>

                        <button className={styles.nextBtn} onClick={handleNext}>Далее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PassengersPage;
