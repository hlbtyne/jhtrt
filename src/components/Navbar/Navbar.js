import React from "react";
import Link from "gatsby-link";

export const Navbar = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/#"><Link to="/">JHTRT</Link></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <Link to="/">Home</Link>
      </li>
      <li class="nav-item">
          <Link to="/about">About</Link>
      </li>
      <li class="nav-item">
          <Link to="/trustees">Trustees</Link>
      </li>
      <li class="nav-item">
          <Link to="/legacy">Legacy</Link>
      </li>
      <li class="nav-item">
          <Link to="/submissions">Submissions</Link>
      </li>
    </ul>
    </div>
  </nav>
);

export default Navbar;
