// import React from 'react';

// function OpenAccount() {
//   return (
//     // 
//      <div className="container p-5 mb-5">
//     <div className='row text-center'> 

         
//          <h1 className='mt-5'>E-Waste</h1>
//          <p>How id it will be in the future it will be the best for the E-Waste</p>
//          <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>Upload image Now</button>
        
            

    

//     </div>

//     </div>
//   );
// }

// export default OpenAccount;

import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  const goToUniverse = () => {
    navigate("/universe"); // Redirect to Universe.js page
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">E-Waste</h1>
        <p>Upload your electronic item to get safe E-Waste guidance.</p>

        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={goToUniverse}
        >
          Upload Image Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;

