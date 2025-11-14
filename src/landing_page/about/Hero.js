// import React from 'react';

// function Hero() {
//     return (
//  <div className='container  '>

//     <div className='row p-5 mt-5 mb-5'>
// <h1 className="fs-2 text-center">hii this is a promf fjfjgj fjfjjf fjfjfj vfjfjjf ffjjf<br/> fjfjjf fjfjjf fjfjjf fnffj</h1>
//         </div>

//          <div className='row p-5 mt-5 border-top text-muted fs-6' style={{LineHeight:"1.8",fontsize:"1.2em"}}>
         
//          <div className='col-6 p-5'>
//           <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>  
//             <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
//             </p>
//             <p>lorem fnfjgjdf gfdfjgjdfgj dfgjdgjdf dffjgdfjjfd fdgjfjgfj gfdjgjgjfdf gdfjur rgkkriitg ktirkrkm fgmfkirigrg fgkjfigf fkgjgm gfjgjrgjrg fjjfjg grrig fgjgj</p>
//          </div>
//          <div className='col-6 p-5'>
//             <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>  
//             <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
//             </p>
//          </div>
       
       
// </div>
//         </div>
//     );
// }

//     export default Hero;

import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">

            {/* Heading Section */}
            <div className="hero-heading">
                <h1>
                    Understanding E-Waste  
                    <br /> Creating a Cleaner & Sustainable Future
                </h1>
            </div>

            {/* About Section */}
            <div className="hero-content">

                <div className="hero-left">
                    <p>
                        Electronic waste, or E-Waste, refers to discarded electrical and electronic devices such 
                        as mobiles, laptops, TVs, batteries, and home appliances. With rapid technological 
                        upgrades, millions of devices become outdated each year, leading to massive E-Waste 
                        generation worldwide.
                    </p>

                    <p>
                        E-Waste contains harmful chemicals like lead, mercury, lithium, and cadmium. When not 
                        disposed of properly, these toxins contaminate soil, water, and air, posing serious 
                        threats to human health and the environment. Responsible disposal and recycling help 
                        reduce pollution and protect our natural resources.
                    </p>

                    <p>
                        Our mission is to create awareness about safe E-Waste handling and guide individuals 
                        and organizations toward environmentally conscious decisions. Together, we can protect 
                        the planet and promote sustainable digital living.
                    </p>
                </div>

                <div className="hero-right">
                    <p>
                        E-Waste recycling helps recover precious metals like gold, copper, silver, and platinum. 
                        These materials can be reused in manufacturing new electronic devices, reducing the need 
                        for harmful mining activities.
                    </p>

                    <p>
                        Choosing to repair, upgrade, or donate electronic devices instead of throwing them away 
                        can significantly reduce E-Waste generation. Sustainable practices help extend device 
                        lifespan and reduce environmental impact.
                    </p>

                    <p>
                        By collaborating with certified recycling centers and promoting responsible consumption, 
                        we aim to build a greener, healthier, and more sustainable world for future generations.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Hero;
