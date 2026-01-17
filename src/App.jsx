import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import OrderPage from './pages/OrderPage/OrderPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';

import './App.scss';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/order" element={<OrderPage />} />
                    <Route path="/success" element={<SuccessPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
