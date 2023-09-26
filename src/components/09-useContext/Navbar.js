import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (   
    <nav className="navbar navbar-expand-sm bg-primary-subtle">
      <div className="container-fluid">
        <Link to = '/' className="navbar-brand">useContext</Link>        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/login' className="nav-link">Login</NavLink>
            </li>           
          </ul>
        </div>
      </div>
</nav>
  )
}
