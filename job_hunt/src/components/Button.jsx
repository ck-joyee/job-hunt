import React from 'react';

const Button = () => {
    return (
        <div className='flex flex-1 '>
            <div>
                <button className='p-2 bg-slate-200 rounded-md'>Remote</button>
            </div>
            <div className='ml-5'>
                <button className='p-2 bg-slate-200 rounded-md'>Full Time</button>
            </div>
        </div>
    );
};

export default Button;