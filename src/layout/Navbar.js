import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',padding: '1rem 0'}}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/" style={{textDecoration: 'none',color: 'white'}}>
          <i className="fas fa-users me-2"></i>
          User Management System
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto">
            <Link className="btn btn-light px-4 py-2 fw-semibold" to="/adduser" style={{
              borderRadius: '25px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}>
              <i className="fas fa-plus me-2"></i>
              Add New User
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}