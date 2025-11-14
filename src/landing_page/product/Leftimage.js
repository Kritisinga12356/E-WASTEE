

import React from 'react';

function Leftimage() {
    return (
        <div 
            className='container-fluid py-5'
            style={{ background: "#f4f7fb" }}  
        >
            <div className='container'>

             
                <div className='row align-items-center my-5'>

                    <div className='col-md-6 p-3'>
                        <img 
                            src="https://t4.ftcdn.net/jpg/05/91/02/13/240_F_591021392_PXlqKCLXL3yauaoG2dEd81PEMcBKeiB4.jpg"
                            alt="E-waste recycling"
                            style={{
                                width: "100%",
                                borderRadius: "15px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                transition: "0.3s",
                            }}
                            onMouseOver={e => e.target.style.transform = "scale(1.03)"}
                            onMouseOut={e => e.target.style.transform = "scale(1)"}
                        />
                    </div>

                    <div className='col-md-6 p-3'>
                        <h1 className="fw-bold">E-Waste Recycling</h1>
                        <p className="text-muted mt-3" style={{ lineHeight: "1.8" }}>
                            We safely recycle electronic devices like mobiles, computers, and batteries.
                            Our process reduces pollution and recovers valuable metals, helping build a
                            cleaner, greener future.
                        </p>
                        <a href=" " className="btn btn-dark me-3 px-4 py-2">Try Demo</a>
                        <a href=" " className="btn btn-outline-dark px-4 py-2">Learn More</a>
                    </div>

                </div>

                {/* ====== SECTION 2 ====== */}
                <div className='row align-items-center my-5'>

                    <div className='col-md-6 p-3'>
                        <h1 className="fw-bold">Secure Data Destruction</h1>
                        <p className="text-muted mt-3" style={{ lineHeight: "1.8" }}>
                            Your old devices contain sensitive data. We wipe and destroy data using
                            certified tools to ensure your privacy stays intact before recycling.
                        </p>
                        <a href=" " className="btn btn-dark me-3 px-4 py-2">Try Demo</a>
                        <a href=" " className="btn btn-outline-dark px-4 py-2">Learn More</a>
                    </div>

                    <div className='col-md-6 p-3'>
                        <img 
                            src="https://t3.ftcdn.net/jpg/08/82/52/04/240_F_882520486_8KOrPAuPJjTYMo2zm6ro2JulB8Lehyct.jpg"
                            alt="Data destruction"
                            style={{
                                width: "100%",
                                borderRadius: "15px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                transition: "0.3s",
                            }}
                            onMouseOver={e => e.target.style.transform = "scale(1.03)"}
                            onMouseOut={e => e.target.style.transform = "scale(1)"}
                        />
                    </div>

                </div>

                {/* ====== SECTION 3 ====== */}
                <div className='row align-items-center my-5'>

                    <div className='col-md-6 p-3 '>
                        <img 
                            src="https://t3.ftcdn.net/jpg/08/24/97/04/240_F_824970412_WJdbRiCDknCgMnT03seNh0ft6eckL7lo.jpg"
                            alt="Upcycling and repair"
                            style={{
                                width: "100%",
                                borderRadius: "15px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                transition: "0.3s",
                            }}
                            onMouseOver={e => e.target.style.transform = "scale(1.03)"}
                            onMouseOut={e => e.target.style.transform = "scale(1)"}
                        />
                    </div>

                    <div className='col-md-6 p-3'>
                        <h1 className="fw-bold">Repair & Upcycling</h1>
                        <p className="text-muted mt-3" style={{ lineHeight: "1.8" }}>
                            Instead of throwing away old gadgets, we repair and upgrade them to extend
                            their life. This reduces e-waste and saves natural resources.
                        </p>
                        <a href=" " className="btn btn-dark me-3 px-4 py-2">Try Demo</a>
                        <a href=" " className="btn btn-outline-dark px-4 py-2">Learn More</a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Leftimage;
