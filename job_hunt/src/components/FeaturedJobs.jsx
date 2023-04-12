import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import Details from "./Details";
const FeaturedJobs = () => {
  const [feature, setFeatured] = useState([]);
  useEffect(() => {
    fetch("/featured_job.json")
      .then((response) => response.json())
      .then((data) => {
        setFeatured(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigate = useNavigate();

  const NavigationDetails = (id) => {
    navigate(`/Details/${id}`);
  };

  return (
    <div>
      <div className="mt-5 flex justify-center mx-auto">
        <h2 className="font-bold text-2xl">Featured Jobs</h2>
      </div>
      <div className="mt-2 flex justify-center">
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-4 mt-5 p-11 pl-10 mb-5">
        {feature.map((feature) => {
          return (
            <div className="mb-12 bg-gray-300 rounded-md hover:bg-white  p-6">
              <img src={feature.image} alt="" className="w-[130px] h-[50px]" />
              <h4 className="text-2xl font-semibold mt-4">{feature.title}</h4>
              <p className="text-gray-500 mt-2 mb-3">{feature.tag}</p>
              <Button></Button>
              <div className="mt-3 flex">
                <div className="flex">
                  <div>
                    <img src={feature.location_icon} alt="location" />
                  </div>
                  <div className="ml-1">
                    <p>{feature.location}</p>
                  </div>
                </div>
                <div className="flex ml-5">
                  <div>
                    <img src={feature.salary_icon} alt="icon" />
                  </div>
                  <div className="ml-1">
                    <p>{feature.salary}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => NavigationDetails(feature.id)}
                className="py-3 px-3 bg-gradient-to-r from-indigo-500 font-poppins font-medium text-[14px] text-black outline-none rounded-md mt-4"
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex justify-center mx-auto">
        <button className="py-4 px-4 bg-gradient-to-r from-indigo-500 font-poppins font-medium text-[18px] text-black outline-none rounded-md ">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
