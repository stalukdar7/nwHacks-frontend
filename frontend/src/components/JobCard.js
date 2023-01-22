import React from "react";

const JobCard = ({ company, position, location, salary }) => {
  return (
    <div class="card mb-3" style={{width: '100%'}}>
      <div class="row g-0 align-items-center">
        <div class="col-md-3">
          <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="70%" height="100%" fill="#876839"></rect>
            <text x="25%" y="50%" fill="#dee2e6" dy=".3em">{company}</text>
          </svg>
        </div>
        <div class="col-md-8">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{position}</h5>
            <div style={{width: '100%'}}>
              <p style={{float: "left"}}><span style={{verticalAlign: "middle"}}><span class="material-symbols-outlined">location_on</span>{location}</span></p>
              <p style={{float: "left", marginLeft: '15%'}} class="card-text"><span class="material-symbols-outlined">attach_money</span>{salary}</p>
              <p style={{float: "left", marginLeft: '15%'}}><span class="material-symbols-outlined">credit_card</span>Visa Sponsorship</p>
            </div>
          </div>
        </div>
        <div class="col-md-1">
            <button class="btn btn-apply align-self-center">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;