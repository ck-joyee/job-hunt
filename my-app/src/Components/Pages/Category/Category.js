import React, { useEffect, useState } from "react";

const Category = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("/info.JSON")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div class="m-5">
        <h1 class="text-center">Job Category List</h1>
        <p class="text-center mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-4 g-4 mb-5 ms-5 me-5">
        {service?.map((pd) => (
          <div class="col">
            <div class="card h-100 text-center">
              <img
                src={pd.icon}
                class="card-img-top w-25 mx-auto mt-5"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{pd.name}</h5>
                <p class="card-text">{pd.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
