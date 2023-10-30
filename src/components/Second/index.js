// import pic1 from "../../assests/images/tsunami.jpg"
import './second.css'
import assamPic from "../../assests/images/Assam.jpg"
import Dropdown from "./Dropdown/DropDown"

import red from "../../assests/images/red.png"
import orange from "../../assests/images/orange.png"
import green from "../../assests/images/green.png"
import voilet from '../../assests/images/voilet.png'
import lightBlue from '../../assests/images/lightBlue.png'
import blue from '../../assests/images/blue.png'
// import brown from '../../assests/images/brown.png'
import yellow from '../../assests/images/yellow.png'

const style1 = {
  display: "flex", justifyContent: "space-around", backGround: "", position: "relative", bottom: "5rem", backgroundColor: "rgba(255, 255, 255, 0.5)",
  columnGap: "2rem", flexWrap: "wrap", padding: " 0 20px", margin: "0", borderRadius: "10px", rowGap: "0.65rem "
};

const style2 = { display: "flex", justifyContent: "center", alignItems: "center" };

const marginStyle = { margin: "0", fontSize: "0.75rem" };

const Second = () => {

  return (
    <div className="resultPage-div">
      <div className="container-r-1">
        {/* <h3 className="result-details"> Place : Chenimari</h3>
        <h3 className="result-details"> Water Level: 80m</h3> */}
        <Dropdown />
      </div>
      <div className="container-r-2" style={{ paddingTop: "3.5rem" }}>
        <h3 style={{ 'textAlign': 'center' }}>Assam</h3>
        <div className="image-wrapper">
          <img className="resultMap" src={assamPic} alt="assam-pic"></img>
        </div>
        <div className="Legends " style={style1}>
          <div className="legend-items" style={style2}> <p className="" style={marginStyle}>  <img className="legend-pic" src={green} alt="..."></img> Level forecast station</p> </div>
          <div className="legend-items" style={style2}> <p className="" style={marginStyle}> <img className="legend-pic" src={blue} alt="..."></img> Inflow forecast station</p> </div>
          <div className="legend-items" style={style2}> <p className="" style={marginStyle}> <img className="legend-pic" src={voilet} alt="..."></img> Flood monitring station</p></div>
          <div className="legend-items" style={style2}> <p className="" style={marginStyle}>  <img className="legend-pic" src={lightBlue} alt="..."></img> Forecast available for inflow forecast station</p> </div>
          <div className="legend-items" style={style2}> <p className="" style={marginStyle}> <img className="legend-pic" src={yellow} alt="..."></img> Above normal flood</p> </div>
          <div className="legend-items" style={style2}> <p className="" style={marginStyle}> <img className="legend-pic" src={orange} alt="..."></img> Severe flood</p></div>
          <div className="legend-items" style={style2}> <p className="" style={marginStyle}> <img className="legend-pic" src={red} alt="..."></img> Extreme flood</p></div>
        </div>
      </div>
    </div>
  )
}

export default Second;