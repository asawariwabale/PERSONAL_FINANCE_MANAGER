import React from "react";

function LoginForm({ setIsLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true); // After login, show Navbar + Dashboard
  };

  return (
    <form className="dropdown-menu p-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="dropdownEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="dropdownEmail"
          placeholder="email@example.com"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dropdownPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="dropdownPassword"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
