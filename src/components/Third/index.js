import React from "react";
import mappic from "../../assests/images/mappic.png"
import { Mid } from "../Mid";
import "./third.css"

function Third() {
    const today = new Date();
    var date = today.getDate();

    return (
        <div>
            <Mid />
            <div className="resultPage-div" style={{ 'marginTop': '0' }}>
                {/* <div className="container-rr-1">
                    <h5>Dates</h5>
                    <a href="/finalPage"><button className="date-btn">{date}</button></a>
                    <a href="/finalPage"><button className="date-btn">{date + 1}</button></a>
                    <a href="/finalPage"><button className="date-btn">{date + 2}</button></a>
                </div> */}
                <div className="container-r-2">
                    <div className="image-wrapper">
                        <span>Chenimari (Khowang)</span>
                        <img className="resultMap" src={mappic}></img>
                    </div>
                </div>
            </div>
        </div>);
}

export default Third;