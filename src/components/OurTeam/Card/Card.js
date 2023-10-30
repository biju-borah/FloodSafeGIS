import React from "react";
// import pic1 from "../../../assests/images/p1.jpg"
// import pic1 from "../../../assests/images/p2.jpg"
// import pic1 from "../../../assests/images/p3.jpg"
// import pic1 from "../../../assests/images/p4.jpg"
// import pic1 from "../../../assests/images/p5.jpg"
import "./card.css"

function Card(props)
{
    return(
        <div className="TeamCard" style={{width:"250px", borderRadius: "20px", backgroundColor: "gainsboro", padding: "20px", marginTop: "1rem"}}>
            <img src={props.image} style={{borderRadius: "50%", width: "100px", marginTop: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}></img>
            <div style={{marginTop: "20px"}}>
            <p style={{fontSize: "0.75rem"}}>{props.name}</p>
            <p style={{fontSize: "0.75rem"}}>{props.college}</p>
            <p style={{fontSize: "0.75rem"}}>{props.branch}</p>
            </div>
            <div className="socials">
                <a href={props.facebook}><i class="fa-brands fa-facebook Facebook"></i></a>
                <a href={props.linkedin}><i class="fa-brands fa-linkedin Linkedin"></i></a>
            </div>
        </div>
    );
}

export default Card;