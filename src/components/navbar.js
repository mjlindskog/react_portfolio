import React from 'react';
import '../App.css';

function NavBar({ currentPage, handlePageChange }) {
    return (
        <div className="App">
          <header className="App-header">
            <ul className="nav nav-tabs">
                <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link text-white'}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-white'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#project"
              onClick={() => handlePageChange('Project')}
              className={currentPage === 'Project' ? 'nav-link active' : 'nav-link text-white'}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-white'}
            >
              Contact
                    </a>
                </li>
            </ul>
          </header>
        </div>
    );
};

export default NavBar;