import React from "react";
import '../App.css';

const JobFilters = () => {
    return (
        <div class="parent">
            <span id="first">Filters <span class="material-symbols-outlined">filter_list</span></span>
            <span id="second"><button type="button" class="btn btn-filter"><span class="material-symbols-outlined">location_on</span>Location</button></span>
            <span id="third"><button type="button" class="btn btn-filter">On-site/remote</button></span>
            <span id="fourth"><button type="button" class="btn btn-filter"><span class="material-symbols-outlined">attach_money</span>Salary</button></span>
            <span id="fifth"><button type="button" class="btn btn-filter"><span class="material-symbols-outlined">credit_card</span>Visa Sponsorship</button></span>
        </div>
    )
}

export default JobFilters;