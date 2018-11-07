import React, { Component } from "react"
import NavBar from "./nav/NavBar"
// import MySearch from "./search/SearchList"
import ApplicationViews from "./ApplicationViews"
import "./Kennel.css";
import "bootstrap/dist/css/bootstrap.min.css"

class Kennel extends Component {
  render() {
      return (
          <React.Fragment>
              <NavBar />
              {/* <MySearch /> */}
              <ApplicationViews />
          </React.Fragment>
      )
  }
}

export default Kennel