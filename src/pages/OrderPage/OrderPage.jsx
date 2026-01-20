import React, { useState } from 'react';
import SearchForm from '../../components/Search/SearchForm/SearchForm';
import ProgressBar from './components/ProgressBar';
import Sidebar from './components/Sidebar';
import TrainList from './components/TrainList';
import Loader from '../../components/Common/Loader';
import styles from './OrderPage.module.scss';

const OrderPage = () => {
    const [isSearching, setIsSearching] = useState(true);

    return (
        <>
            {/* Экран загрузки */}
            {isSearching && <Loader onFinish={() => setIsSearching(false)} />}

            <div className={styles.topSection}>
                <div className="container">
                    <div className={styles.searchWrapper}>
                        <SearchForm type="order" />
                    </div>
                </div>
                <ProgressBar step={1} />
            </div>

            {!isSearching && (
                <div className="container">
                    <div className={styles.layout}>
                        <Sidebar />
                        {/* Список поездов сам управляет своей пагинацией */}
                        <TrainList />
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderPage;
