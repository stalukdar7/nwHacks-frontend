import React from "react";
import JobCard from './JobCard';
import JobFilters from "./JobFilters";

const JobBoard = () => {
return (
    <div>
        <JobFilters />
        <div className="jobCardList">
            <h3>Open Positions</h3>
            <JobCard 
                company="Google" 
                position="Software Engineer" 
                location="Mountain View, CA" 
                salary="55/hr"
            />

            <JobCard 
                company="Google"
                position="Software Engineer"
                location="Mountain View, CA"
                salary="55/hr"        
            />

            <JobCard 
                company="Google" 
                position="Software Engineer" 
                location="Mountain View, CA" 
                salary="55/hr"
            />
        </div>
    </div>
    );
};

export default JobBoard;