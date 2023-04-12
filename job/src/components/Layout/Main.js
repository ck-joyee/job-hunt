import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../Home';
import Footer from '../Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default Main;