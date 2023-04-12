import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link,useNavigate } from 'react-router-dom';
const AppliedJob = () => {
  const navigate = useNavigate();
  const NavigationDetails =(id)=>
    {
        console.log(id);
        navigate(`/Details/${id}`)
        
    }

  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    setData(JSON.parse(storedData));
    console.log(data);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center bg-violet-200 mb-5 mr-5 ml-5">
        <h1 className="p-10 text-2xl font-bold">Applied Job</h1>
      </div>
      <div>
        {data &&
          data.map((item) => {
            return (
              <div className=" flex items-center border h-[180px] mr-10 ml-10 mb-10 justify-between">
                <div className=" flex items-center  ">
                <div>
                  <img src={item.value.image} className="p-10 w-[180px]" alt="" />
                </div>
                <div>
                  <h4>{item.value.title}</h4>
                  <p>{item.value.tag}</p>
                  <Button></Button>
                  <div className="flex flex-1 items-center">
                    <div className="flex mt-3 items-center">
                      <div>
                        <img
                          src="/assets/Icons/Frame-4.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <p>{item.value.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center ml-3">
                      <div>
                        <img src="/assets/Icons/Frame.png" alt="" />
                      </div>
                      <div>
                        <p>
                          <span className="font-bold">Salary :</span>{" "}
                          {item.value.salary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="mr-10">
                
                <button onClick={() =>NavigationDetails(item.id)} className='py-3 px-3 ml-10 bg-gradient-to-r from-indigo-500 font-poppins font-medium text-[14px] text-black outline-none rounded-md mt-4'>View Details</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AppliedJob;
