import "./final.css";
import React, { useEffect, useState } from "react";
import assamPic from "../../assests/images/Assam.jpg";
import { useParams } from 'react-router-dom';
import Loader from "../shared/Loader";
import image99 from "../../assests/images/99.png"
import image100 from "../../assests/images/100.png"
import image101 from "../../assests/images/101.png"
import image102 from "../../assests/images/102.png"
import red from "../../assests/images/red.png"
import orange from "../../assests/images/orange.png"
import green from "../../assests/images/green.png"
import axios from "axios";

const image = {
  99: image99,
  100: image100,
  101: image101,
  102: image102
}

const mapRoute = {
  0: 'https://express-backend-gjv8.onrender.com/',
  99: 'https://express-backend-gjv8.onrender.com/1',
  100: 'https://express-backend-gjv8.onrender.com/2',
  101: 'https://express-backend-gjv8.onrender.com/3',
  102: 'https://express-backend-gjv8.onrender.com/4',
}

function Final() {

  const { id } = useParams();
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(false)
  const [data, setdata] = useState(0)
  useEffect(() => {
    console.log(id.substring(0, 2))

    axios.post('https://ml-backend.onrender.com/waterlevel_prediction', {
      date: id.substring(0, 2), headers: { "Access-Control-Allow-Origin": "https://flood-warning-system.vercel.app/" },
    })
      .then(function (response) {
        console.log(response);
        setloading(false)
        setdata(response.data)

      })
      .catch(function (error) {
        console.log(error);
        setloading(false)
        seterror(true)
      });
  }, [])

  return (
    loading ? <Loader /> : <div style={{ height: "100vh", overflowY: "scroll" }}>
      <div className="resultPage-div-f-1">
        <div
          className="container-r-2"
          style={{ position: "relative", flexDirection: "column" }}
        >
          <h5 style={{ position: "relative", bottom: "5px" }}>Chenimari (Khowang)</h5>
          <div className="image-wrapper">
            <img className="resultMap avoid-clicks" src={error ? assamPic : data < 100 ? image[99] : data < 101 ? image[100] : data < 102 ? image[101] : image[102]}></img>
          </div>
          <a href="#Result">
            <button className="btn-data">Details</button>
          </a>
          <a href={error ? mapRoute[0] : data < 100 ? mapRoute[99] : data < 101 ? mapRoute[100] : data < 102 ? mapRoute[101] : mapRoute[102]}>
            <button className="btn-map">Generate Map</button>
          </a>

        </div>
      </div>
      <div className="Legends" style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="legend-items"> <p className="">  <img className="legend-pic" src={red}></img> Flood area</p> </div>
        <div className="legend-items"> <p className=""> <img className="legend-pic" src={orange}></img> Buffer zone</p> </div>
        <div className="legend-items"> <p className=""> <img className="legend-pic" src={green}></img> Safe area</p></div>

      </div>
      <div id="Result" className="resultPage-div-f">
        <div className="container-rr-1" style={{ width: "95%" }}>
          <div className="data-div" style={{ display: "flex", width: "100%", justifyContent: "space-evenly", marginBottom: "40px" }}>
            <h5>Water-level: {error ? "Something went wrong" : data.toFixed(2)} m</h5>
            <h5>Date: {id}</h5>
            <h5>Location: Chenimari</h5>
          </div>
          <div>
            <h5><b>Mitigation</b><br /></h5>
            <p>
              {" "}
              <b>Short Term</b> <br />
              Strategic Planning<br />
              The Time period could be used for planning and evacuation of the affected area <br /><br />

              <b>Long Term</b><br />
              Structures to Conserve Nature<br />
              Renewal of Wetlands, Preventing Erosion and Maintaining Land Mass Elevation, Recharge and Replenish Groundwater<br /><br />

              Controlled development of the Area<br />
              Building Bye-laws, Development Control Norms, Land-Use analysis based on these factors<br /><br />

              Flood-Based Farming System<br />
              Planning of Water Distribution, Field Water Management, Groundwater Use, Agronomic Practices, Multi-functional use

            </p>
          </div>
          <a href="/chenimari">
            <button className="btn-back">Back</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Final;
