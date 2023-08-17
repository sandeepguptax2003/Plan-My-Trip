import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
      <div className="navbar-container">
        <nav>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/post" className="navbar-link">Post Data</Link>
            </li>
            <li className="navbar-item">
              <Link to="/retrive" className="navbar-link">Retrieve Data</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }