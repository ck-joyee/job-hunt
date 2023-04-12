import React from 'react';
import Navbar from './Navbar';

const Details = () => {
    return (
        <div>
            <div className='flex justify-center items-center bg-purple-200 mb-5 mr-5 ml-5'>
                <h1 className='p-10 text-2xl font-bold'>Job Information</h1>
            </div>
            <div className='grid grid-cols-3 gap-10 '>
                <div className='col-span-2 p-5 '>
                    <div className=''>
                        <p> <span className='font-bold'> Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface</p>

                        <p className='mt-8'><span className='font-bold'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>

                        <h4 className='text-2xl font-bold mt-8'>Educational Requirements:</h4>
                        <p className='mt-5'>Bachelor degree to complete any reputational university.</p>

                        <h4 className='text-2xl font-bold mt-8'>Experiences:</h4>
                        <p className='mt-5'>2-3 Years in this field.</p>
                    </div>
                </div>
                 <div className='bg-purple-300 rounded-sm mr-5 ml-5'>
                    <div className='p-10'>
                    <h3 className='font-bold mt-2'>Job Details</h3>
                    <div className='flex mt-3 items-center'>
                        <div><img src="../../public/assets/Icons/Frame.png" alt="" /></div>
                        <div> <p> <span className='font-bold'>Salary :</span> 100K - 150K (Per Month)</p> </div>
                    </div>
                    <div className='flex mt-3 items-center'>
                        <div><img src="../../public/assets/Icons/Frame-1.png" alt="" /></div>
                        <div> <p> <span className='font-bold'> Job Title :</span> Product Designer</p> </div>
                    </div>
                    <h3 className='font-bold mt-5'>Contact Information</h3>
                    <div className='flex mt-3 items-center'>
                        <div><img src="../../public/assets/Icons/Frame-2.png" alt="" /></div>
                        <div> <p> <span className='font-bold'> Phone :</span> 01750-00 00 00</p> </div>
                    </div>


                    <div className='flex mt-3 items-center'>
                        <div><img src="../../public/assets/Icons/Frame-3.png" alt="" /></div>
                        <div> <p> <span className='font-bold'>Email : </span>info@gmail.com</p> </div>
                    </div>

                    <div className='flex mt-3 items-center'>
                        <div><img src="../../public/assets/Icons/Frame-4.png" alt="" /></div>
                        <div> <p> <span className='font-bold'>Address : </span>Dhanmondi 32, Sukrabad
Dhaka, Bangladesh</p> </div>
                    </div>

                    <button className='py-3 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none rounded-md ml-24 mt-6'>Apply Now</button>    

                 </div>
                 </div>
            </div>
            
        </div>
    );
};

export default Details;