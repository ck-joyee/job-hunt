import React, { useEffect, useState } from 'react';

const Allfeatured = () => {
    const [service, setService] = useState([]);
     useEffect(() => {
    fetch("/featured_job.JSON")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {service?.map((pd) => (
              <div class="col">
                <div class="card h-100 text-center">
                  <img
                    src={pd.image}
                    class="card-img-top w-25 mx-auto mt-5"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{pd.title}</h5>
                    <p class="card-text">{pd.tag}</p>
                    <button type="button" class="btn btn-outline-info btn-sm">
                      Onsite
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-info btn-sm ms-3"
                    >
                      Full Time
                    </button>
                    <div class="row">
                      <div class="col-md-6">
                        {pd.location_icon} {pd.location}
                      </div>
                      <div class="col-md-6">
                        {pd.salary_icon} {pd.salary}
                      </div>
                    </div>

                    <div>
                      <button type="button" class="btn btn-primary btn-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Allfeatured;