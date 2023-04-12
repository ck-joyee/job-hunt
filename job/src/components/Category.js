import React, { useEffect, useState } from 'react';

const Category = () => {
    const [category,setCategory] = useState([]);
    useEffect(()=>{
        fetch('../../public/info.json')
        .then(response => response.json())
        .then(data => {
        // Do something with the data
        setCategory(data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });

    },[])

    return (
    <div>
        <div className='mt-5 flex justify-center mx-auto'>
            <h2 className='font-bold text-2xl'>Job Category List</h2>
            
        </div>
         <div className='mt-2 flex justify-center'>
         <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>

        <div className='grid xl:grid-cols-4 sm:grid-cols-1 gap-4 mt-5 p-11 pl-10 mb-10 '>
            {category.map((cat)=>{
                return (
                        <div key={cat.id} className='bg-gray-300 rounded-md feature-card'>
                            <div className='p-10'>
                        <img src={cat.icon} alt=''/>
                        <h4 className='text-2xl font-semibold mt-2'>{cat.name}</h4>
                        <p className='text-gray-500 mt-2'>{cat.job}</p>
                        </div>
                        </div>
                )
            })}
        </div>
    </div>
    );
};

export default Category;