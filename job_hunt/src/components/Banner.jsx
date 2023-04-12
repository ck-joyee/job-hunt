import React from "react";
import ManLogo from "/assets/images/man.png";

const Banner = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6 justify-center items-center">
      <div className="mr-4">
        <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-black ss:leading-[100px] leading-[75px]">
          One Step
          <br className="sm:block hidden" />
           Closer To Your <br className="sm:block hidden" />
         <span className="text-violet-600">Dream Job{" "}</span>
        </h1>
        <p className="max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="py-4 px-4 bg-gradient-to-r from-indigo-500 font-poppins font-medium text-[18px] text-black outline-none rounded-md mt-5">
          Get Started
        </button>
      </div>
      <div>
        {/* <img src={"../../public/assets/images/man.png"} alt="Man" /> */}
        <img src={ManLogo} alt="Man" />
      </div>
    </section>
  );
};

export default Banner;
