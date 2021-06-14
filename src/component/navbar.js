import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/list'>
              作品
            </Link>
          </li>
            
          <li className='nav-item'>
            <Link className="nav-link" to='/post'>
              張貼
            </Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link" to='/author'>
              作者
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;