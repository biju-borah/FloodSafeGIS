import React from "react";
import "./ourMission.css";
import bgmo from "../../assests/images/Unflood.jpg"

const style = {
  backgroundImage: "url(${bgmo})",
  backgroundSize: '105.9vw',
  backgroundRepeat: 'no-repeat'
}

function OurMission() {
  return (
    <div className="bg_img_om" style={{ style }}>
      <div className="ourMission-div">
        <h1>THE PRIME VISION</h1>
        <br />
        <h4>
          “I want to be alive,to build a society, I have a promise to build a
          society Where the value of life is more than that of gold”
          <br />
          Dr. Bhupen Hazarika
        </h4>
        <br />
        <hr />
        <p>
          The Rural areas remain the most AFFECTED and most NEGLECTED.
          <br /><br />
          <ul>
            <li>More than 173 people dead, 29.7 lakh + affected ( Source: Mint, july
              2022)</li>
            <li>Displaced from their homes and loss of valuables.</li>
            <li>The main motive is to make floods predictable and safer areas
              identifiable.</li>
          </ul>

          The Flood Safe GIS system (FGIS) which will use the power of machine
          learning and technology to achieve the motive.
        </p>
      </div>
    </div>

  );
}

export default OurMission;
