
import React from "react";

function Team() {
  return (
    <div className="container-fluid">

      {/* ======= ABOUT SECTION ======= */}
      <div className="row p-4 mt-5 border-top">
        <h1 className="text-center mb-4">About E-Waste</h1>
      </div>

      <div
        className="row p-3 text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-md-6 p-4">
          <h4 className="fw-bold">What is E-Waste?</h4>
          <p>
            Electronic waste (E-Waste) refers to discarded electrical and
            electronic devices such as mobile phones, laptops, televisions,
            cables, and batteries. When not disposed of properly, these items
            can release harmful chemicals into soil, water, and air.
          </p>

          <h4 className="fw-bold mt-4">Why It Matters?</h4>
          <p>
            India is one of the largest producers of e-waste. Every year, tons
            of devices are dumped in landfills, causing pollution and health
            hazards. Proper recycling helps recover valuable materials like gold,
            copper, and silver while reducing environmental damage.
          </p>

          <p>
            Our mission is to spread awareness and support safe disposal and
            recycling of electronic waste.
          </p>
        </div>

        <div className="col-md-6 p-4 text-center">
          <img
            src="https://t3.ftcdn.net/jpg/15/63/49/78/240_F_1563497848_xrubshUles8yiRDcnJo8JlsZz4LGHqhK.jpg"
            alt="E-Waste recycling"
            style={{ width: "100%",height:"350px", borderRadius: "20px", boxShadow: "0 0 10px #ccc" }}
          />
        </div>
      </div>

      
      <div className="row p-4 mt-5 border-top">
        <h1 className="text-center mb-4">Our Team</h1>
      </div>

      
      <div
  className="row p-3 fs-6 text-muted align-items-center"
  style={{ lineHeight: "1.8" }}
>

        <div className="col-md-6 p-4 text-center">
          <img
            src="https://media.gettyimages.com/id/1337880968/photo/volunteers-giving-out-free-packed-of-food-during-the-charity-drive-community-food-bank.jpg?s=612x612&w=0&k=20&c=OsN12fcbBR4Ln9lwShM3TJd-Ki1wevlAGUVOxxzo_to="
            alt="Team Member"
            style={{
              width: "300px",
  height: "280px",
  objectFit: "cover",
  borderRadius: "45%",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          />
          <h4 className="mt-3">Ajay Dewat</h4>
          <h6 className="text-secondary">E-Waste Awareness Volunteer</h6>
        </div>

        <div className="col-md-6 p-4">
          <p>
            Ajay Dewat is an environmental volunteer working to educate communities
            about the safe disposal and recycling of electronic waste. He
            collaborates with local groups to organize awareness drives and
            coordinate recycling events.
          </p>

          <p>
            His efforts focus on reducing harmful waste and promoting sustainable
            practices for the future.
          </p>

          <p>
            Connect on:{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage /
            </a>{" "}
            <a href=" " style={{ textDecoration: "none" }}>
              LinkedIn /
            </a>{" "}
            <a href=" " style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
