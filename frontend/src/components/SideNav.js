
import React from "react";

const SideNav = () => {
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3" style={{width: '100%', height: '100%', backgroundColor: '#818716'}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"></svg>
          <span className="fs-4">Sprouts.fyi</span>
        </a>
        <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                Customers
              </a>
            </li>
          </ul>
        </div>
    )
}


export default SideNav;