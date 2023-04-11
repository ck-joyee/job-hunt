import React from 'react';
import banner from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div>
            <div class="card mb-3 border border-white m-5" >
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body ms-5">
        <h5 class="card-title h1 ">One Step <br /> Closer To Your <br /> <span class='text-danger'>Dream Job</span></h5>
        <p class="card-text">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
        <button class="btn btn-outline-danger" type="submit">
              Get Started
            </button>
      </div>
    </div>
    <div class="col-md-4">
      <img src= {banner} class="img-fluid rounded-start me-5" alt="..."/>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;