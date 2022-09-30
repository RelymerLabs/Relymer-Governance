import React from "react";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" target="_blank" rel="noreferrer" href="https://dragonrace.io/">
              <img src={"assets/logo.svg"} alt=""  width={150}/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <a className="nav-link" target="_blank" href="https://dragonrace.io/" rel="noreferrer">
                  Home 
                  </a>
                </li>
            
           
                <li className="nav-item">
                  <a className="nav-link " rel="noreferrer" href="https://dragonrace-io-official-r.gitbook.io/dragonrace.io/">
                  Guide
                  </a>
                </li>
                <li className='nav-item mx-5'>
              <a className='nav-link nav-link-border w-100 ' href='#comming-soon'>
                Get $Dragace
              </a>
            </li>
              </ul>
            <button className="nav-btn">Enter App</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
