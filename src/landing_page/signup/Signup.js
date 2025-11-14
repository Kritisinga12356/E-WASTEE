
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Signup Successful! Redirecting...", {
      autoClose: 2000,
    });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name:</label><br/>
          <input
            type="text"
            name="name"
            className="signup-input"
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
<br></br><br></br>
          <label>Email:</label><br/>
          <input
            type="email"
            name="email"
            className="signup-input"
            onChange={handleChange}
            required
            placeholder="Enter your email address"
          />
<br></br><br></br>
          <label>Password:</label><br/>
          <input
            type="password"
            name="password"
            className="signup-input"
            onChange={handleChange}
            required
            placeholder="Create a password"
          />
<br></br><br></br>
          <button className="signup-btn" type="submit">
            Sign Up
          </button>
        </form>
<br></br>
        <p className="signup-footer-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

<p className="signup-footer-text">
  Go back to <Link to="/">Home</Link>
</p>

      </div>
    </div>
  );
}
