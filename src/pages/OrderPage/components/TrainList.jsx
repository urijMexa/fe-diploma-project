import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRoutes } from '../../../redux/slices/trainsSlice';
import TrainCard from './TrainCard';
import styles from './TrainList.module.scss';

const TrainList = () => {
    const dispatch = useDispatch();
    const { items, totalCount, loading } = useSelector(state => state.trains);
    const searchParams = useSelector(state => state.search);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        dispatch(fetchRoutes(searchParams.route));
    }, [dispatch]);

    // Логика пагинации (разрезаем массив из 15 элементов на части по 5)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil((totalCount || items.length) / itemsPerPage);

    if (loading) return <div className={styles.info}>Загрузка данных...</div>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.controls}>
                <div>найдено {totalCount || items.length}</div>
                <div className={styles.sortBlock}>
                    сортировать по:
                    <select className={styles.sortSelect}>
                        <option>времени</option>
                        <option>стоимости</option>
                        <option>длительности</option>
                    </select>
                </div>
            </div>

            <div className={styles.list}>
                {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                        <TrainCard key={item.departure._id} data={item} />
                    ))
                ) : (
                    <div className={styles.info}>Поезда не найдены.</div>
                )}
            </div>

            {/* ПАГИНАЦИЯ */}
            <div className={styles.paginationWrapper}>
                <div className={styles.pagination}>
                    <button
                        className={styles.arrow}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        className={styles.arrow}
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrainList;
