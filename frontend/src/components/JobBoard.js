import React from "react";
import JobCard from './JobCard';

const JobBoard = () => {
return (
    <div className="jobCardList">
        <h3>Open Positions</h3>
        <JobCard 
            company="Google" 
            position="Software Engineer" 
            location="Mountain View, CA" 
            salary="$55/hr"
        />

        <JobCard 
            company="Google"
            position="Software Engineer"
            location="Mountain View, CA"
            salary="$55/hr"        
        />

        <JobCard 
            company="Google" 
            position="Software Engineer" 
            location="Mountain View, CA" 
            salary="$55/hr"
        />
    </div>
    );
};

export default JobBoard;