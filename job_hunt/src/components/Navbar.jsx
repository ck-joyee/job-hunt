import React from 'react';

const Navbar = () => {
    return (
        <div className='xl:flex justify-between items-center mr-2 ml-2 m-5'>
            <div>
                <h1 className='font-bold text-2xl sm:mb-2'>Job Hunt</h1>
            </div>
            <div className='flex  ml-3 pl-4 '>
                <a href="/">Home</a>
                <a href="/Statistics" className='ml-3 '>Statistics</a>
                <a href="/Applied_Jobs" className='ml-3'>Applied Jobs</a>
                <a href="/Blog" className='ml-3'>Blog</a>
            </div>
            <div className='sm:mt-3'>
                  <button className='py-4 px-4 bg-gradient-to-r from-indigo-500 font-poppins font-medium text-[18px] text-black outline-none rounded-md'>Start Applying</button>    
            </div>            
        </div>
    );
};

export default Navbar;