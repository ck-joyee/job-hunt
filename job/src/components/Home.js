import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Category from './Category';
import FeaturedJobs from './FeaturedJobs';


const Home = () => {
    return (
        <div>
             {/* <div className=" overflow-hidden mr-5 ml-5">
         <div className="bg-emerald-300 w-[100%]  overflow-hidden">
            <Navbar/>
         </div>
         </div>
         <Outlet></Outlet> */}
         <Banner/>
         <Category/>
         <FeaturedJobs/>
         
        </div>
    );
};

export default Home;