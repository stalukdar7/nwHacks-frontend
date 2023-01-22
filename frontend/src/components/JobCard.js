import React from "react";

const JobCard = ({ company, position, location, salary }) => {
  return (
    <div class="card mb-3" style={{width: '100%'}}>
        <div class="row g-0">
        <div class="col-md-4">
          <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="70%" height="100%" fill="#876839"></rect><text x="25%" y="50%" fill="#dee2e6" dy=".3em">{company}</text></svg>
    
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{position}</h5>
            <p class="card-text">{salary}</p>
            <p class="card-text"><small class="text-muted">Location: {location}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;