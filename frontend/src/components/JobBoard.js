import React from "react";
import JobCard from './JobCard';

const JobBoard = () => {
return (
    <div>
        <JobCard 
            company="Google" 
            position="Software Engineer" 
            location="Mountain View, CA" 
            description="We are looking for a software engineer to join our team. You will be working on cutting-edge technologies and building innovative solutions." 
        />
    </div>
    );
};

export default JobBoard;