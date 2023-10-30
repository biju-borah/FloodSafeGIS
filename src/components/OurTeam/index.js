import React from "react";
import "./ourTeam.css"
import Card from "./Card/Card"
import Teams from "./Card/TeamData"

function createCard(Team){
    return (<Card 
        name={Team.name}
             image={Team.img}
             college={Team.College} 
             branch={Team.branch}
             linkedin={Team.linkedinId}  
             facebook={Team.FacebookId}
    />);
}

function OurTeam(){
    return(<div style={{ height: "100vh", overflowY: "scroll" }}>
        <div className="ourTeam-div">
            <h3>Our Team</h3>
            <div className="card-div" style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", gap: "2rem"}}> {Teams.map(createCard)} </div>
            
        </div>
    </div>
        
    );
}

export default OurTeam;