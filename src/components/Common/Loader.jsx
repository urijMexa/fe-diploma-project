import React, { useState, useEffect } from 'react';
import styles from './Loader.module.scss';

const Loader = ({ onFinish }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinish, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);
        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div className={styles.loaderOverlay}>
            <div className={styles.content}>
                <p>ИДЕТ ПОИСК</p>
                <div className={styles.progressBg}>
                    <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
