import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";
import "bootstrap/dist/css/bootstrap.min.css"

class Kennel extends Component {
  state = {
    showSearch: false
  }

  showSearchValue = () => {
    this.setState({showSearch: true})
  }

  hideSearchValue = () => {
    this.setState({showSearch: false})
  }

  render() {
    return (
      <React.Fragment>
        <NavBar  show={this.showSearchValue} hide={this.hideSearchValue}/>
        <ApplicationViews showSearch={this.state.showSearch}/>
      </React.Fragment>
    )
  }
}

export default Kennel