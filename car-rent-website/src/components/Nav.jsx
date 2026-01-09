import React,{useState} from 'react'
import {NavLink,Link} from 'react-router-dom'
import {Car,LogIn} from 'lucide-react'



function Nav(){

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  shadow sticky-top">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <Car size={48} className="me-2 " />
          <span className='text-info fs-3'>LuxeWheels</span>
        </Link>

        {/* Hamburger */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*Desktop Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-5">
              <NavLink to="/" className={({isActive})=>isActive?"nav-link text-light fw-bold":"nav-link text-warning"}>Home</NavLink>
            </li>

            <li className="nav-item fs-5">
              <NavLink to="/cars" className={({isActive})=> isActive?"nav-link text-light fw-bold":"nav-link text-warning"}>Cars</NavLink>
            </li>

            <li className="nav-item fs-5">
              <NavLink to="/about" className={({isActive})=> isActive? "nav-link text-light fw-bold":"nav-link text-warning"}>About</NavLink>
            </li>

            <li className="nav-item fs-5">
              <NavLink to="/contact" className={({isActive})=> isActive ? "nav-link text-light fw-bold":"nav-link text-warning"}>Contact</NavLink>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="d-flex ms-3 ">
            <Link to="/login" className="btn btn-outline-light me-2 fs-5">
             <LogIn className='h-75 w-25'/>Login
            </Link>

            <Link to="/register" className="btn btn-warning fs-5">
              SignUp
            </Link>
          </div>

          
        </div>

        
      </div>
    </nav>
  )
}

export default Nav;
