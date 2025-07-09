import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper">
        <div className='nav-content'>
            <img className='logo' src="./logo.svg" alt="Logo" />
            <ul>
                <li>
                    <a className="menu-item">Home</a>
                </li>
                 <li>
                    <a className="menu-item">Skills</a>
                </li>
                 <li>
                    <a className="menu-item">Work Experience</a>
                </li>
                 <li>
                    <a className="menu-item">Contact Me</a>
                </li>
                <button className='contact-btn' onClick={()=>{}}>
                    Hire Me
                </button>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
