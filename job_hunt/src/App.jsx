import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Category from './components/Category';

import FeaturedJobs from './components/FeaturedJobs';

const App = () => (
  <div className=" overflow-hidden mr-5 ml-5">
         {/* <div className="bg-indigo-50 w-[100%]  overflow-hidden">
            <Navbar/>
         </div> */}
         <div className='flex justify-center items-start'>
             <div className='xl:max-w-[1280px] w-full'>
              <Banner/>
             </div>

         </div>
         <div className='ml-11'>
           <Category/>
         </div>
         <FeaturedJobs/>
  

  </div>
  );


export default App;
