import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("myData")) || [];
    setMyData(storedData);
  }, []);

  const handleAddData = (id, value) => {
    const newData = { id, value };
    const storedData = JSON.parse(localStorage.getItem("myData")) || [];
    const updatedData = [...storedData, newData];
    localStorage.setItem("myData", JSON.stringify(updatedData));
    setMyData(updatedData);
  };

  const { id } = useParams();
 
  const features = useLoaderData();
  const data = Array.isArray(features)
    ? features.find((feature) => feature.id === parseInt(id))
    : null;
  

  if (!data) {
    return <div>Loading...Go Back </div>;
  }
 

  const {
    title,
    location,
    salary,
    description,
    responsibility,
    education,
    experiences,
    phone,
    email,
  } = data;

  return (
    <div>
      <div className="flex justify-center items-center bg-violet-200 mb-5 mr-5 ml-5">
        <h1 className="p-10 text-2xl font-bold">Job Information</h1>
      </div>
      <div className="grid grid-cols-3 gap-10 ">
        <div className="col-span-2 p-5 ">
          <div className="">
            <p>
              {" "}
              <span className="font-bold"> Job Description:</span> {description}{" "}
            </p>

            <p className="mt-8">
              <span className="font-bold">Job Responsibility:</span>{" "}
              {responsibility}
            </p>

            <h4 className="text-2xl font-bold mt-8">
              Educational Requirements:
            </h4>
            <p className="mt-5">{education}</p>

            <h4 className="text-2xl font-bold mt-8">Experiences:</h4>
            <p className="mt-5">{experiences}</p>
          </div>
        </div>
        <div className="bg-purple-300 rounded-sm mr-5 ml-5">
          <div className="p-10">
            <h3 className="font-bold mt-2">Job Details</h3>
            <div className="flex mt-3 items-center">
              <div>
                <img src="/assets/Icons/Frame.png" alt="" />
              </div>
              <div>
                {" "}
                <p>
                  {" "}
                  <span className="font-bold">Salary :</span> {salary}
                </p>{" "}
              </div>
            </div>
            <div className="flex mt-3 items-center">
              <div>
                <img src="/assets/Icons/Frame-1.png" alt="" />
              </div>
              <div>
                {" "}
                <p>
                  {" "}
                  <span className="font-bold"> Job Title :</span> {title}
                </p>{" "}
              </div>
            </div>
            <h3 className="font-bold mt-5">Contact Information</h3>
            <div className="flex mt-3 items-center">
              <div>
                <img src="/assets/Icons/Frame-2.png" alt="" />
              </div>
              <div>
                {" "}
                <p>
                  {" "}
                  <span className="font-bold"> Phone :</span> {phone}
                </p>{" "}
              </div>
            </div>

            <div className="flex mt-3 items-center">
              <div>
                <img src="/assets/Icons/Frame-3.png" alt="" />
              </div>
              <div>
                {" "}
                <p>
                  {" "}
                  <span className="font-bold">Email : </span>
                  {email}
                </p>{" "}
              </div>
            </div>

            <div className="flex mt-3 items-center">
              <div>
                <img src="/assets/Icons/Frame-4.png" alt="" />
              </div>
              <div>
                {" "}
                <p>
                  {" "}
                  <span className="font-bold">Address : </span>
                  {location}
                </p>{" "}
              </div>
            </div>

            <button
              onClick={() => handleAddData(parseInt(id), data)}
              className="py-3 px-6 bg-gradient-to-r from-indigo-500 font-poppins font-medium text-[18px] text-black outline-none rounded-md ml-24 mt-6"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
