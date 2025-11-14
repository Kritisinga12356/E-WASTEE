// import React from 'react';


// import { useNavigate } from "react-router-dom";

// function Hero() {
// const navigate = useNavigate();

//   const goToSignup = () => {
//     navigate("/signup");
//   };
//   return (
//  <div className='container-fluid p-0'>
//   <div className='row text-center'>  
// <img  src="https://media.gettyimages.com/id/172777435/photo/dump-full-of-old-computers-and-gadgets.jpg?s=612x612&w=0&k=20&c=JBph0toK_33zJv2zGfyGl50bJGFc-jf-FfHp1LlEXAU="  alt="Tractor cultivating farmland in spring" style={{width:"100%" , height:"500px"}}/>
//     <h1 className='mt-5'>The E-Waste Epidemic</h1>   
//      <p>Discarded Electrical and Electronic Equipmen(EEE).</p>
//      <button onClick={goToSignup} className='p-3 btn btn-primary fs-5' style={{width:"10%",margin:"0 auto"}}>Signup</button>    
//      </div>

//      </div>
//   );
// }

// export default Hero;


// import React from 'react';
// import { useNavigate } from "react-router-dom";

// function Hero() {
//   const navigate = useNavigate();

//   const goToSignup = () => {
//     navigate("/signup");
//   };

//   return (
//     <div className='container-fluid p-0'>
//       <div 
//         className='hero-section text-center d-flex flex-column justify-content-center align-items-center'
//         style={{
//           backgroundImage: "url('https://media.gettyimages.com/id/172777435/photo/dump-full-of-old-computers-and-gadgets.jpg?s=612x612&w=0&k=20&c=JBph0toK_33zJv2zGfyGl50bJGFc-jf-FfHp1LlEXAU=')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '75vh', // full viewport height
//           color: 'white',
//           textShadow: '1px 1px 4px rgba(0,0,0,0.7)'
//         }}
//       >
//         <h1 className='mb-3'>The E-Waste Epidemic</h1>
//         <p className='mb-4'>Discarded Electrical and Electronic Equipment (EEE).</p>
//         <button 
//           onClick={goToSignup} 
//           className='btn btn-primary btn-lg'
//         >
//           Signup
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;


import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className='container-fluid p-0'>
      <div 
        className='hero-section d-flex flex-column justify-content-center align-items-center text-center'
        style={{
          backgroundImage: "url('https://media.gettyimages.com/id/172777435/photo/dump-full-of-old-computers-and-gadgets.jpg?s=612x612&w=0&k=20&c=JBph0toK_33zJv2zGfyGl50bJGFc-jf-FfHp1LlEXAU=')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          position: 'relative',
          color: '#ffffff',
        }}
      >
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 20px' }}>
          <h1 className='mb-3' style={{ fontSize: '3rem', fontWeight: '700' }}>
            The E-Waste Crisis
          </h1>
          <p className='mb-4' style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
            Millions of electronic devices are discarded every year. Proper disposal and recycling of e-waste helps protect our environment and conserve valuable resources.
          </p>
          <button 
            onClick={goToSignup} 
            className='btn btn-warning btn-lg'
            style={{ fontWeight: '600', padding: '12px 30px' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
