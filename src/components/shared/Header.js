import React from 'react'
import logos from "../../assests/images/logoS.png"
//
const styles = {
  position: "absolute",
  top: "0",
  width: "100vw",
  backgroundColor: "transparent !important"
}
//
export default function Header
  () {
  return (
    <nav className="navbar navbar-expand-lg py-1" style={styles}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src={logos} style={{ width: "40px" }} alt='logo'></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/ourTeam">Our Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ourMission">Our Mission</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
