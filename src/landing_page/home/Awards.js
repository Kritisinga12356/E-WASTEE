// import React from 'react';

// function Awards() {
//   return (
//     <div className='container mt-5'>
//         <div className='row '>
//             <div className='col-6'>
//                 <img src="https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=is&k=20&c=yJQJrnM1QX_CzMMU5l3VVxvMgJXpEYZ0WAGWRxmrWBM="  alt="Tractor cultivating farmland in spring" />
//             </div>
//             <div className='col-6'>
//                 <h1>largest and product for the image in </h1>
//                 <p>jfjfjcnc nfjj jdfjd dfjfnf ktiti how are you iok fin eit is ok thia ti is ok finr ok thandf</p>
//                <div className='row'>
//                 <div className='col-6'>
//                     <ul>
//                     <li><p>hdjfdjf f fgfg</p></li>
//                     <li><p>hdhdhfdh dfhdhf fjdjfj</p></li>
//                     <li><p>dhfhdfhd dfhdhf djfdj </p></li>
                   
//                 </ul>
//                 </div>
//                 <div className='col-6'>
//                     <ul>
//                     <li><p>hdjfdjf f fgfg</p></li>
//                     <li><p>hdhdhfdh dfhdhf fjdjfj</p></li>
//                     <li><p>dhfhdfhd dfhdhf djfdj </p></li>
                   
//                 </ul>
//                 </div>
//                </div>
                
//             </div>
//             </div>
//         </div>
    
//   );
// }
// export default Awards;
import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <div className="ewaste-wrapper">
      <h2 className="ewaste-title">E-Waste Management & Recycling</h2>

      <p className="ewaste-subtitle">
        Sustainable solutions for a cleaner and greener tomorrow.  
        We help you dispose of electronic waste responsibly and safely.
      </p>

      <div className="ewaste-card-row">

        <div className="ewaste-card">
          <h3>♻️ Safe Collection</h3>
          <p>
            Proper pickup and disposal of electronic waste through certified and
            eco-friendly methods.
          </p>
        </div>

        <div className="ewaste-card">
          <h3>🔐 Data Destruction</h3>
          <p>
            Secure deletion and destruction of storage devices ensuring complete
            data protection.
          </p>
        </div>

        <div className="ewaste-card">
          <h3>⚙️ Recycling Process</h3>
          <p>
            Recycling of computers, mobiles, batteries, and more using
            environment-safe procedures.
          </p>
        </div>

        <div className="ewaste-card">
          <h3>🌍 Zero-Landfill Policy</h3>
          <p>
            With responsible recycling, we ensure minimal waste reaches landfills.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Awards;
