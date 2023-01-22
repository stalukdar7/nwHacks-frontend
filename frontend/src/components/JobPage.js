import React from "react";
import JobBoard from "./JobBoard";
import '../App.css';

const JobPage = () => {

return (
    <div className="App">
        <div className="content">
          <h3 className="welcomeMessage"> Hi Alec, what jobs are you looking for? </h3>
          <div className="JobBoard">
            <JobBoard />
          </div>
        </div>
    </div>
    );
};

export default JobPage;