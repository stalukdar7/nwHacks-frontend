import React, { useEffect, useState } from "react";
import JobCard from './JobCard';
import JobFilters from "./JobFilters";

const JobBoard = () => {
  const [data, setData] = useState({});
  const [jobIds, setJobIds] = useState([]);

  useEffect(() => {
    const getData = () => {
      return fetch('http://localhost:8080/fetch')
        .then(response => response.json())
        .then(data => {
          console.log("WE GOT THE DATA: ", data);
          setData(data);
          setJobIds(Object.keys(data));
        });
    }

    getData();
  }, []);

  

return (
    <div>
        <JobFilters />
        <div className="jobCardList">
            <h3>Open Positions</h3>
            {!jobIds.length ? null : jobIds.map((jobId) => (
              <JobCard
                key={jobId}
                //id={jobId}
                company={data[jobId].Company}
                position={data[jobId].Position}
                location={data[jobId].Location}
                salary={data[jobId].Salary}
                link={data[jobId].Link}
                //visa={data[jobId].visa}
              />
            ))}
          </div>
        </div>
    );
};

export default JobBoard;