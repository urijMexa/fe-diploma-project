import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDateStart, setDateEnd } from '../../../redux/slices/searchSlice';
import styles from './Sidebar.module.scss';
import LastTickets from '../../SeatsPage/components/LastTickets';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { route } = useSelector(state => state.search);

    return (
        <aside className={styles.sidebar}>
            <div className={styles.section}>
                <div className={styles.label}>Дата поездки</div>
                <input
                    type="date"
                    className={styles.dateInput}
                    value={route.date_start || ''}
                    onChange={(e) => dispatch(setDateStart(e.target.value))}
                />

                <div className={styles.label}>Дата возвращения</div>
                <input
                    type="date"
                    className={styles.dateInput}
                    value={route.date_end || ''}
                    onChange={(e) => dispatch(setDateEnd(e.target.value))}
                />
            </div>

            {/* Секция с переключателями */}
            <div className={styles.section}>
                {[
                    { label: 'Купе', icon: 'fa-couch' },
                    { label: 'Плацкарт', icon: 'fa-train-subway' },
                    { label: 'Сидячий', icon: 'fa-chair' },
                    { label: 'Люкс', icon: 'fa-star' },
                    { label: 'Wi-Fi', icon: 'fa-wifi' },
                ].map((item, idx) => (
                    <div className={styles.toggleRow} key={idx}>
                        <div className={styles.rowLeft}><i className={`fa-solid ${item.icon}`}></i> <span>{item.label}</span></div>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                ))}
            </div>

            <LastTickets />
        </aside>
    );
};

export default Sidebar;
