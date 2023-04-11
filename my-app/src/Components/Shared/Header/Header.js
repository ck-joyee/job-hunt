import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand h3" href="#">
            Job Hunt
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link ms-5 " aria-current="page" href="#">
                  Statistics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Applied Jobs
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link">Blog</a>
              </li>
            </ul>
            <button class="btn btn-outline-danger" type="submit">
              Start Applying
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
