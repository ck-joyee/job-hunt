import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
const FeaturedJobs = () => {
    const [feature,setFeatured] = useState([]);
    useEffect(()=>{
        fetch('../../public/featured_job.json')
        .then(response => response.json())
        .then(data => {
        setFeatured(data);
  })
  .catch(error => {
    console.error(error);
  });

    },[])

    const navigate = useNavigate();
    return (
        <div>
            <div className='mt-5 flex justify-center mx-auto'>
            <h2 className='font-bold text-2xl'>Featured Jobs</h2>
            
        </div>
         <div className='mt-2 flex justify-center'>
         <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>
          <div className='grid xl:grid-cols-2 sm:grid-cols-1 gap-4 mt-5 p-11 pl-10 mb-5'>
            {
             feature.map((feat) =>{
                return(
                    <div className='mb-12 bg-gray-300 rounded-md hover:bg-gray-500 p-6'>
                       <img src={feat.image} alt="" className='w-[130px][50px]'/>
                       <h4 className='text-2xl font-semibold mt-4'>{feat.title}</h4>
                       <p className='text-gray-500 mt-2 mb-3'>{feat.tag}</p>
                       <Button></Button>
                       <div className='mt-3 flex'>
                             <div className='flex'>
                                <div>
                                   <img src={feat.location_icon} alt="location" />
                                </div>
                                <div className='ml-1'>
                                    <p>{feat.location}</p>
                                </div>
                             </div>
                             <div className='flex ml-5'>
                                <div>
                                    <img src={feat.salary_icon} alt="icon" />
                                </div>
                                <div className='ml-1'>
                                    <p>{feat.salary}</p>
                                </div>
                             </div>


                       </div >
                       
                       <button onClick={() =>navigate('/Details')} className='py-3 px-3 bg-blue-gradient font-poppins font-medium text-[14px] text-black outline-none rounded-md mt-4'>View Details</button>
                       
                    
                    </div>
                )
             })
            }
          </div>
            <div className='mt-5 flex justify-center mx-auto'>
            <button className='py-4 px-4 bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none rounded-md '>See All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;