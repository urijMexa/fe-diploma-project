import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../redux/slices/orderSlice';
import ProgressBar from '../OrderPage/components/ProgressBar';
import OrderSummary from '../../components/Train/OrderSummary/OrderSummary';
import styles from './PaymentPage.module.scss';

const PaymentPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.order.user);

    const handleNext = () => {
        if (!user.surname || !user.name || !user.phone || !user.email || !user.paymentMethod) return alert('Заполните все персональные данные и выберите способ оплаты!');
        navigate('/order/confirm');
    };

    const setMethod = (m) => dispatch(updateUser({ paymentMethod: user.paymentMethod === m ? '' : m }));

    return (
        <div className={styles.page}>
            <div className={styles.topBanner}></div>
            <ProgressBar step={3} />
            <div className="container"><div className={styles.layout}>
                <OrderSummary />
                <div className={styles.main}>
                    <div className={styles.whiteBox}>
                        <h3 className={styles.sectionTitle}>Персональные данные</h3>
                        <div className={styles.body}><div className={styles.row}>
                            <div className={styles.inputGroup}><label>Фамилия</label><input type="text" value={user.surname} onChange={e => dispatch(updateUser({surname: e.target.value}))} /></div>
                            <div className={styles.inputGroup}><label>Имя</label><input type="text" value={user.name} onChange={e => dispatch(updateUser({name: e.target.value}))} /></div>
                            <div className={styles.inputGroup}><label>Отчество</label><input type="text" value={user.patronymic} onChange={e => dispatch(updateUser({patronymic: e.target.value}))} /></div>
                        </div>
                            <div className={styles.row}><div className={styles.inputGroup} style={{maxWidth:'300px'}}><label>Контактный телефон</label><input type="text" placeholder="+7 --- --- -- --" value={user.phone} onChange={e => dispatch(updateUser({phone: e.target.value}))} /></div></div>
                            <div className={styles.row}><div className={styles.inputGroup} style={{maxWidth:'300px'}}><label>E-mail</label><input type="email" placeholder="email@example.com" value={user.email} onChange={e => dispatch(updateUser({email: e.target.value}))} /></div></div>
                        </div>
                        <h3 className={styles.sectionTitle} style={{borderTop:'1px solid #E5E5E5'}}>Способ оплаты</h3>
                        <div className={styles.body}>
                            <div className={`${styles.payBlock} ${user.paymentMethod && user.paymentMethod !== 'online' ? styles.disabled : ''}`}>
                                <div className={styles.payOption}><input type="checkbox" checked={user.paymentMethod==='online'} onChange={()=>setMethod('online')} /> <span>Онлайн</span></div>
                                <div className={styles.payRow}><strong>Банковской картой</strong><strong>PayPal</strong><strong>Visa QIWI Wallet</strong></div>
                            </div>
                            <div className={`${styles.payBlock} ${user.paymentMethod && user.paymentMethod !== 'cash' ? styles.disabled : ''}`} style={{marginTop:'30px'}}>
                                <div className={styles.payOption}><input type="checkbox" checked={user.paymentMethod==='cash'} onChange={()=>setMethod('cash')} /> <span>Наличными</span></div>
                            </div>
                        </div>
                    </div>
                    <button className={styles.nextBtn} onClick={handleNext}>Купить билеты</button>
                </div>
            </div></div>
        </div>
    );
};

export default PaymentPage;
