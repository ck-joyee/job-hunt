import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mr-2 ml-2 m-5'>
            <div>
                <h1 className='font-bold text-2xl'>MyCareer</h1>
            </div>
            <div className='flex ml-3 pl-4'>
                <a href="/">Home</a>
                <a href="/Statistics" className='ml-3'>Statistics</a>
                <a href="/Applied_Jobs" className='ml-3'>Applied Jobs</a>
                <a href="/Blog" className='ml-3'>Blog</a>
            </div>
            <div>
                  <button className='py-4 px-4 bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none rounded-md'>Star Applying</button>    
            </div>            
        </div>
    );
};

export default Navbar;