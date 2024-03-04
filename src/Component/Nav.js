import React from "react";
import "./Nav.css";


function Nav() {

    return (
<div className="header">
<nav className="navbar navbar-expand-lg bg-dark-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">VIRTUAL CHEMISTRY LAB</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Login</a>
        </li>
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            State
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Solid</a></li>
            <li><a className="dropdown-item" href="/">Liquid</a></li>
            <li><a className="dropdown-item" href="/">Gas</a></li>

            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Others</a></li>
          </ul>
        </li>
        <li className="nav-item">
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</div>





    )
}
export default Nav;