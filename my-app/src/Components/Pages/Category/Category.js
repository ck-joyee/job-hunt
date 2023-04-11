import React from "react";
import account from '../../assets/Icons/accounts 1.png'
import design from '../../assets/Icons/business 1.png'
import market from '../../assets/Icons/social-media 1.png'
import engi from '../../assets/Icons/chip 1.png'

const Category = () => {
  return (
    <div class="m-5">
    <h1 class="text-center">Job Category List</h1>
    <p class="text-center mb-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
    <div class="row row-cols-1 row-cols-md-4 g-4">
       <div class="col">
         <div class="card h-100 text-center">
           <img src={account} class="card-img-top w-25 mx-auto mt-5" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Account & Finance</h5>
             <p class="card-text">300 Jobs Available</p>
           </div>
         </div>
       </div>
       <div class="col">
         <div class="card h-100 text-center">
           <img src={design} class="card-img-top w-25 mx-auto mt-5" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Creative Design</h5>
             <p class="card-text">100+ Jobs Available</p>
           </div>
         </div>
       </div>
       <div class="col">
         <div class="card h-100 text-center">
           <img src={market} class="card-img-top w-25 mx-auto mt-5" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Marketing & Sales</h5>
             <p class="card-text">150 Jobs Available</p>
           </div>
         </div>
       </div>
       <div class="col">
         <div class="card h-100 text-center">
           <img src={engi} class="card-img-top w-25 mx-auto mt-5" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">Engineering Job</h5>
             <p class="card-text">224 Jobs Available</p>
           </div>
         </div>
       </div>
     </div>
   </div>
  );
};

export default Category;
