import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import logo from '../../images/logo_icon.png';
import './Navbar.css';

import Link from "gatsby-link";

export const Navbar = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ "zIndex": 5, "position": "sticky", "top": 0, "padding": "5px 10px"}}>
    <a class="navbar-brand" href="/#"><Link to="/"><img src={logo} style={{ "height": "60px" }}/></Link></a>
    <button 
      class="navbar-toggler toggler-example" 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarColor03" 
      aria-controls="navbarColor03" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarColor03" style={{ "padding": "0 10px" }}>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link to="/about">
            <a class="nav-link" href="/#">
              About
            </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/trustees">
            <a class="nav-link" href="/#">
              Trustees
            </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/legacy">
            <a class="nav-link" href="/#">
              Legacy
            </a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/submissions">
            <a class="nav-link" href="/#">
              Submissions
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
