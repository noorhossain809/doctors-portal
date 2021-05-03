import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home"><a class="nav-link mr-5 mr-5 active" aria-current="page" >Home</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5 active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <Link to="/dashboard"><a class="nav-link mr-5 active" aria-current="page">Dashboard</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5 active text-white" aria-current="page" href="#">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5 active text-white" aria-current="page" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mr-5 active text-white" aria-current="page" href="#">Contact us</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;