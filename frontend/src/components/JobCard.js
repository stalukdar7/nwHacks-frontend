import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap';
import '../App.css';

const JobCard = ({ company, position, location, salary, link, leetcode }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div class="card mb-3 rubik-font" style={{width: '100%'}}>
      <div class="row g-0 align-items-center">
        <div class="col-md-3">
          <svg class="bd-placeholder-img img-fluid rounded-start" width="100%" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="70%" height="100%" fill="#876839"></rect>
            <text x="25%" y="50%" fill="#dee2e6" dy=".3em">
              {company}
            </text>
          </svg>
        </div>
        <div class="col-md-8">
          <div class="card-body d-flex flex-column justify-content-between rubik-font">
            <h5 class="card-title rubik-font">{position}</h5>
            <div style={{width: '100%'}}>
              <p style={{float: "left"}}><span style={{verticalAlign: "middle"}}><span class="material-symbols-outlined">location_on</span>{location}</span></p>
              <p style={{float: "left", marginLeft: '10%'}} class="card-text"><span class="material-symbols-outlined">attach_money</span>{salary}</p>
              <p style={{float: "left", marginLeft: '10%'}}><span class="material-symbols-outlined">credit_card</span>Visa Sponsorship</p>
              {leetcode.length ? (
                <div>
              <p style={{float: "left", marginLeft: '10%'}} onClick={() => {setModalOpen(true); console.log("OPEN")}}>View Leetcode</p>
              <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
                <Modal.Header closeButton>
                  <Modal.Title className="rubik-font">View {company}'s Leetcode Questions</Modal.Title>
                </Modal.Header>
                <Modal.Body className="leetcode-modal">
                  {leetcode.length ? leetcode.map((problem, index) => (
                    <div key={index}>
                      <a className="rubik-font" href={problem[0]}>{problem[1]}</a>
                    </div>
                  )) : (<p>Sorry, there is no data on Hubspots' leetcode problems</p>)}
                </Modal.Body>
              </Modal>
              </div>) : null }
            </div>
          </div>
        </div>
        <div className="col-md-1">
            <div class="btn btn-apply align-self-center"><a href={link} style={{textDecoration: "none", color: "white"}}>Apply</a></div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;