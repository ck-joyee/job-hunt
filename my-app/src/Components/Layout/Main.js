import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Home from '../Pages/Home';


const Main = () => {
    return (
        <div>
           <Header/>
            <Outlet/>
            <Home/>
            
           
        </div>
    );
};

export default Main;