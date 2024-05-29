import { NavLink } from 'react-router-dom';
import {  useState } from 'react';



function Navbar() {
  // const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <div className="brand">
        <NavLink to="/" className="logo-link">
          <img src="react.svg" alt="Logo" className="logo" />
        </NavLink>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <NavLink to="/about" className="nav-link" onClick={toggleMenu}>About Us</NavLink>
          <NavLink to="/dashboard" className="nav-link" onClick={toggleMenu}>List Item</NavLink>
          <NavLink to="/auth" className="nav-link" onClick={toggleMenu}>Login/Register</NavLink>
        
        </nav>
      </div>
    </header>
  );
}

export default Navbar;