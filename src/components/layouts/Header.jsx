/** @format */

import React from "react";

function Header() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          <img src={"/assets/logo.svg"} alt='' width={150} />
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
          <ul className='navbar-nav ms-auto '>
            <li className='nav-item '>
              <a
                className='nav-link '
                href='https://github.com/solidproof/projects/blob/main/Dragon%20Race/KYC_Certificate_Dragon_Race.png'
                target='_blank'
                rel='noreferrer'>
                <span
                  style={{ background: "#48c774", borderRadius: 8 }}
                  className=' text-light '>
                  {" "}
                  KYC
                </span>
              </a>
            </li>
            <li className='nav-item '>
              <a
                className='nav-link'
                href='https://github.com/ContractChecker/SAFU/blob/main/DragonRace_0x179625DC8714338dE26506c67EB1b7A071c81611_SAFU_Certificate_By_ContractChecker.pdf'
                target='_blank'
                rel='noreferrer'>
                <span
                  style={{ background: "#df5ff8", borderRadius: 8 }}
                  className=' text-light'>
                  {" "}
                  SAFU
                </span>
              </a>
            </li>
            <li className='nav-item '>
              <a
                className='nav-link'
                href='https://github.com/ContractChecker/audits/blob/main/DragonRace_Token_0x0104978B2f8AaE89547b7769BDF90cA53236D409_Smart_Contract_Security_Audit_By_ContractChecker.pdf'
                target='_blank'
                rel='noreferrer'>
                <span
                  style={{ background: "#00bbd4", borderRadius: 8 }}
                  className=' text-light'>
                  {" "}
                  Audit
                </span>
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link'
                target='_blank'
                rel='noreferrer'
                href='https://dragonrace.io/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link '
                rel='noreferrer'
                href='https://dragonraceio.gitbook.io'
                target='_blank'>
                Guide
              </a>
            </li>
          </ul>
       
          <a
            href='https://play.dragonrace.io/'
            target='_blank'
            rel='noopener noreferrer'>
            {" "}
            <button className='nav-btn'>Play Game</button>
          </a>{" "}
        </div>
      </div>
    </nav>
  );
}

export default Header;
