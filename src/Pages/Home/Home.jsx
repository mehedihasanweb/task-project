import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';
import NavigationBar from '../../Shared/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className='container'>
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;