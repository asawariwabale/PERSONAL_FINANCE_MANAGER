import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      
      <Link className="navbar-brand fw-bold" to="/dashboard">
        Personal Finance Manager
      </Link>

      <div className="collapse navbar-collapse justify-content-end">

        <ul className="navbar-nav align-items-center">

          <li className="nav-item">
            <Link className="nav-link mx-2" to="/dashboard">Dashboard</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link mx-2" to="/income">Income</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link mx-2" to="/expenses">Expenses</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link mx-2" to="/budget">Budget</Link>
          </li>

          <li className="nav-item ms-3">
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </li>

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
