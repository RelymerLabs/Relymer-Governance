/** @format */

import React from "react";

function Header() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Relymer Governance
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto '></ul>
          <a href='#!' rel='noopener noreferrer'>
            {" "}
            <button className='nav-btn'>Launch APP</button>
          </a>{" "}
        </div>
      </div>
    </nav>
  );
}

export default Header;
