import React from 'react';
import SearchForm from '../../components/Search/SearchForm/SearchForm';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className="container">
                    <SearchForm />
                </div>
            </section>

            <About />
            <HowItWorks />
            <Reviews />
        </>
    );
};

export default HomePage;
