// import React from 'react';

// function Stats() {
//  return (
//     <div className='container p-3'>
//        <div className='row p-5'>
//           <div className='col-6 p-5'>
//             <h1 className='fs-2'>Trust with confidense and build</h1>
//             <h3  className='fs-4'>ok it is build yuor product</h3>
//             <p className='text-muted'>hfh fhfhf hfhfh gnfhhf fhfhhf fhhfhf fhfh bfhbf hbff tuu tuyiy yiyi jyiyi yutiit </p>
//             <h3 className='fs-4'>ok it is build yuor product</h3>
//             <p  className='text-muted'>hfh fhfhf hfhfh gnfhhf fhfhhf fhhfhf fhfh bfhbf hbff tuu tuyiy yiyi jyiyi yutiit </p>
//             <h3 className='fs-4'>ok it is build yuor product</h3>
//             <p  className='text-muted'>hfh fhfhf hfhfh gnfhhf fhfhhf fhhfhf fhfh bfhbf hbff tuu tuyiy yiyi jyiyi yutiit </p>
//             <h3 className='fs-4'>ok it is build yuor product</h3>
//             <p  className='text-muted'>hfh fhfhf hfhfh gnfhhf fhfhhf fhhfhf fhfh bfhbf hbff tuu tuyiy yiyi jyiyi yutiit </p>
            
//           </div>
//           <div className='col-6'>
//              <img src="https://media.istockphoto.com/id/1363571533/photo/open-soybean-field-at-sunset.jpg?s=612x612&w=is&k=20&c=3pVBYNP7M5t1_HdDrmKHa6YNT4fyTMYkoUC3h1NvSOY="  alt="Tractor cultivating farmland in spring" />
//              <div>
//                 <a href=' ' className='mx-5' style={{textDecoration:"none"}}>Explore  our product<i className="fa-solid fa-arrow-right"></i></a> &nbsp; &nbsp;       
//                 <a href=' '  style={{textDecoration:"none"}}>Try kite</a>
//              </div>
//           </div>
//     </div>
//     </div>

//   );
// }

// export default Stats;

import React from 'react';
import "./Stats.css";

function Stats() {
  return (
    <div className='ewaste-container p-3'>
      <div className='row p-5'>
        
        {/* LEFT CONTENT */}
        <div className='col-lg-6 col-md-12 p-4'>
          
          <h1 className='main-title'>
            Manage E-Waste Responsibly  
            <span className="highlight"> — Protect the Future</span>
          </h1>

          <h3 className='sub-title'>Reduce. Reuse. Recycle.</h3>
          <p className='desc'>
            Every year tons of electronic waste is dumped, harming soil, water, and air.  
            By managing e-waste properly, we save natural resources and reduce pollution.
          </p>

          <h3 className='sub-title'>Why Proper Recycling Matters?</h3>
          <p className='desc'>
            E-waste contains harmful chemicals like mercury & lead.  
            Safe recycling helps in preventing health risks and environmental hazards.
          </p>

          <h3 className='sub-title'>How You Can Contribute?</h3>
          <p className='desc'>
            Donate old devices, repair instead of replacing, and hand over unused electronics  
            to authorized e-waste collection centers.
          </p>

          <h3 className='sub-title'>Smart Disposal = Smart Planet</h3>
          <p className='desc'>
            Let's build a cleaner, greener world by adopting sustainable electronic usage.
          </p>
        </div>

        {/* RIGHT BOX */}
        <div className='col-lg-6 col-md-12 d-flex align-items-center justify-content-center'>
          <div className="info-box">
            <h2>Be a Part of the Green Movement</h2>
            <p>
              Join thousands of people who are recycling electronics responsibly  
              and helping the planet.
            </p>

            <div className='btn-area mt-4'>
              <a href=" " className='btn-green'>
                Explore E-Waste Services <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a href=" " className='btn-outline'>
                Learn More
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
