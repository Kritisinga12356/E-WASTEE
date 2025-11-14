

import React from "react";
import "./Brokrage.css"; // <-- IMPORTANT

function Brokrage() {
  return (
    <div className="container py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="section-title">E-Waste Management & Awareness</h1>
        <p className="section-subtitle">
          Proper handling of electronic waste protects our environment and
          ensures safe recycling of harmful materials.
        </p>
      </div>

      {/* First Row */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="e-card h-100">
            <img
              src="https://t3.ftcdn.net/jpg/08/24/65/06/240_F_824650685_eUJ8uzyev6jIczBxcC4Y8HYC8b4PY2uP.jpg"
              alt="e-waste"
              className="e-img"
            />
            <h3 className="e-title">What is E-Waste?</h3>
            <p className="e-text">
              E-waste includes discarded electronics like mobiles, laptops,
              chargers, appliances and IT devices that require safe disposal.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="e-card h-100">
            <img
              src="https://t3.ftcdn.net/jpg/15/34/38/40/240_F_1534384042_FMi9cEzDMU4KxgonvQrY5q8ilrwM4f4U.jpg"
              alt="pollution"
              className="e-img"
            />
            <h3 className="e-title">Environmental Impact</h3>
            <p className="e-text">
              Improper disposal releases toxic metals like lead and mercury,
              causing air, soil and water pollution.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="e-card h-100">
            <img
              src="https://t4.ftcdn.net/jpg/14/93/03/67/240_F_1493036772_4acnVYAHB44LocouYeqXbjLvF05nhnpV.jpg"
              alt="safe recycling"
              className="e-img"
            />
            <h3 className="e-title">Safe Disposal</h3>
            <p className="e-text">
              Always dispose electronics at authorized e-waste recycling centers
              to ensure safe and eco-friendly processing.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row mt-5 g-4">
        <div className="col-md-6">
          <div className="e-card h-100">
            <h3 className="e-title mb-3">Types of E-Waste</h3>
            <ul className="e-list">
              <li>Small IT devices (phones, tablets, smartwatches)</li>
              <li>Large appliances (refrigerators, washing machines)</li>
              <li>Computer accessories (keyboards, cables, chargers)</li>
              <li>Audio & video devices (TVs, speakers)</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="e-card h-100">
            <h3 className="e-title mb-3">How You Can Help</h3>
            <ul className="e-list">
              <li>Repair or reuse devices before discarding.</li>
              <li>Participate in local e-waste collection drives.</li>
              <li>Do not burn or dump electronics.</li>
              <li>Spread awareness about e-waste recycling.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-5">
        <button className="cta-btn">Learn How to Recycle E-Waste</button>
      </div>
    </div>
  );
}

export default Brokrage;
