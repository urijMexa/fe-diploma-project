import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCityFrom, setCityTo, setDateStart, setDateEnd } from '../../../redux/slices/searchSlice';
import CityInput from './CityInput';
import styles from './SearchForm.module.scss';

const SearchForm = ({ type }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { route, cities } = useSelector(state => state.search);
    const isOrderPage = type === 'order';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cities.from || !cities.to) {
            alert("Пожалуйста, выберите города из списка");
            return;
        }
        navigate('/order');
    };

    if (!isOrderPage) {
        return (
            <div className={styles.searchContainer}>
                <div className={styles.heroText}>
                    <h1>Вся жизнь - <br/> <strong>путешествие!</strong></h1>
                </div>

                <div className={styles.formWrapper}>
                    <div className={styles.formTitle}>Направление</div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.inputsRow}>
                                <CityInput
                                    placeholder="Откуда"
                                    initialValue={cities.from}
                                    onSelect={(city) => dispatch(setCityFrom(city))}
                                    icon="fa-location-dot"
                                />
                                <CityInput
                                    placeholder="Куда"
                                    initialValue={cities.to}
                                    onSelect={(city) => dispatch(setCityTo(city))}
                                    icon="fa-location-dot"
                                />
                            </div>
                            <div className={styles.groupTitle}>Дата</div>
                            <div className={styles.inputsRow}>
                                <div className={styles.inputBox}>
                                    <input
                                        type="date"
                                        value={route.date_start}
                                        onChange={(e) => dispatch(setDateStart(e.target.value))}
                                        required
                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    <input
                                        type="date"
                                        value={route.date_end}
                                        onChange={(e) => dispatch(setDateEnd(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.btnRight}>
                            <button type="submit" className={styles.submitBtn}>Найти билеты</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.searchOrder}>
            <form onSubmit={handleSubmit} className={styles.orderFormRow}>

                <div className={styles.orderGroup}>
                    <label>Направление</label>
                    <div className={styles.orderInputs}>
                        <CityInput
                            placeholder="Откуда"
                            initialValue={cities.from}
                            onSelect={(city) => dispatch(setCityFrom(city))}
                            icon="fa-location-dot"
                        />
                        <CityInput
                            placeholder="Куда"
                            initialValue={cities.to}
                            onSelect={(city) => dispatch(setCityTo(city))}
                            icon="fa-location-dot"
                        />
                    </div>
                </div>

                <div className={styles.orderGroup}>
                    <label>Дата</label>
                    <div className={styles.orderInputs}>
                        <div className={styles.inputBox}>
                            <input
                                type="date"
                                value={route.date_start}
                                onChange={(e) => dispatch(setDateStart(e.target.value))}
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <input
                                type="date"
                                value={route.date_end}
                                onChange={(e) => dispatch(setDateEnd(e.target.value))}
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" className={styles.orderSubmitBtn}>Найти билеты</button>
            </form>
        </div>
    );
};

export default SearchForm;
