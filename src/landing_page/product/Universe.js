

import React, { useState } from "react";

function Universe() {
  const [image, setImage] = useState(null);
  const [autoFeedback, setAutoFeedback] = useState("");
  const [userFeedback, setUserFeedback] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));

    // Auto feedback (E-Waste)
    setAutoFeedback(
      "This may be an electronic item. Please dispose of or recycle it responsibly following proper E-Waste guidelines."
    );

    // Reset form submission status
    setSubmitted(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Your E-Waste submission has been received.");
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="fw-bold">E-Waste Checker</h1>
      <p className="text-muted">
        Upload any electronic item image to get safe E-waste recycling guidance.
      </p>

      {/* Image Upload Box */}
      <div
        className="p-4 mt-3"
        style={{
          border: "2px dashed #888",
          borderRadius: "12px",
          width: "50%",
          margin: "0 auto",
        }}
      >
        <input
          type="file"
          accept="image/*"
          className="form-control"
          onChange={handleImageUpload}
        />
      </div>

      {/* Image Preview */}
      {image && (
        <div className="mt-4">
          <img
            src={image}
            alt="Uploaded"
            style={{
              width: "40%",
              borderRadius: "10px",
              boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      )}

      {/* Automatic Feedback Box */}
      {autoFeedback && (
        <div
          className="alert alert-info mt-4"
          style={{ width: "60%", margin: "0 auto" }}
        >
          <strong>Auto Feedback:</strong> {autoFeedback}
        </div>
      )}

      {/* User Feedback Box */}
      <div className="mt-4" style={{ width: "60%", margin: "0 auto" }}>
        <textarea
          className="form-control"
          rows="4"
          placeholder="Write your own feedback or notes about this E-waste item..."
          value={userFeedback}
          onChange={(e) => setUserFeedback(e.target.value)}
        ></textarea>

        {userFeedback && (
          <div className="alert alert-success mt-3">
            <strong>Your Feedback:</strong> {userFeedback}
          </div>
        )}
      </div>

      {/* User Form – appears only after image upload */}
      {image && (
        <form
          className="mt-4 p-4 border rounded"
          style={{ width: "60%", margin: "0 auto", background: "#f9f9f9" }}
          onSubmit={handleFormSubmit}
        >
          <h4 className="mb-3 text-success">Your Details</h4>

          <div className="mb-3 text-start">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
             
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="Write Your Address.."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>

          {submitted && (
            <div className="alert alert-success mt-3">
              Thank you! Your information has been submitted.
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default Universe;

