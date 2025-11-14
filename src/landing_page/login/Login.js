// 

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Signup.css"; // using same CSS theme

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    // Toast success message
    toast.success("Login Successful!", { autoClose: 1500 });

    setTimeout(() => {
      navigate("/"); // redirect to home or dashboard
    }, 1500);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            className="signup-input"
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
          <br /><br />

          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            className="signup-input"
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
          <br /><br />

          <button className="signup-btn" type="submit">
            Login
          </button>
        </form>

        <p className="signup-footer-text">
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
<p className="signup-footer-text">
  Go back to <Link to="/">Home</Link>
</p>

      </div>
    </div>
  );
}
