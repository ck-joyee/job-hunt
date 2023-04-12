import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignments = [
        { id: 1, name: 'Assignment-1', mark: 60 },
        { id: 2, name: 'Assignment-2', mark: 56 },
        { id: 3, name: 'Assignment-3', mark: 58 },
        { id: 4, name: 'Assignment-4', mark: 60 },
        { id: 5, name: 'Assignment-5', mark: 51 },
        { id: 6, name: 'Assignment-6', mark: 47 },
        { id: 7, name: 'Assignment-7', mark: 60 },
        { id: 8, name: 'Assignment-8', mark: 43 }
      ];
      

    return (

      <div className='mr-5 ml-5'>

       <div className='mt-6 mr-5 '>
        <h1 className='text-4xl font-bold'>Represent The Assignments marks Using AreaChart </h1>
       </div>

      <div style={{ width: '100%', height: 400 }} className='mt-24'>
      <ResponsiveContainer>
        <AreaChart
          data={assignments}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </div>
    );
};

export default Statistics;