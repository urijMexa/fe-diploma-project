import React from 'react';
import styles from './ProgressBar.module.scss';
import classNames from 'classnames';

const ProgressBar = ({ step = 1 }) => {
    return (
        <div className={styles.bar}>
            <div className={classNames(styles.step, { [styles.active]: step >= 1 })}>
                <span>1</span> Билеты
            </div>
            <div className={classNames(styles.step, { [styles.active]: step >= 2 })}>
                <span>2</span> Пассажиры
            </div>
            <div className={classNames(styles.step, { [styles.active]: step >= 3 })}>
                <span>3</span> Оплата
            </div>
            <div className={classNames(styles.step, { [styles.active]: step >= 4 })}>
                <span>4</span> Проверка
            </div>
        </div>
    );
};

export default ProgressBar;
