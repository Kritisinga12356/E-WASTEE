// import React from 'react';

// function Hero() {
//     return (
// <div className='container'>
//     <div className="text-center mt-5 p-3">
//     <h1>Technology</h1>
//     <h3 className="text-muted mt-3 fs-4">Sleek,modern and intutitive trading platforms</h3>
//     <p className="mt-3">Check out our <a href=' '>investment offerings<i class="fa-solid fa-arrow-right"></i></a></p>
// </div>
// </div>
//     );
// }

//     export default Hero;

import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="content-box">
        <h1 className="title">E-Waste Management</h1>

        <h3 className="subtitle">
          Smart, Sustainable & Responsible Electronic Waste Solutions
        </h3>

        <p className="desc mt-3">
          Learn how proper disposal and recycling of electronics helps protect
          the planet and conserve valuable resources.{" "}
          <a href=" " className="link">
            Explore More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
