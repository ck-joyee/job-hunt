import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
             <div className=" overflow-hidden mr-5 ml-5">
         <div className="bg-indigo-50 w-[100%]  overflow-hidden">
            <Navbar/>
         </div>
         </div>
         <Outlet></Outlet>
        </div>
    );
};

export default Home;