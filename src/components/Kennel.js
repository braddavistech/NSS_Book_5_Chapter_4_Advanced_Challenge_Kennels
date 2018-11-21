import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";
import "bootstrap/dist/css/bootstrap.min.css"

class Kennel extends Component {
  state = {
    showSearch: false,
    results: []
  }

  searchResult = (searchList) => {
    this.setState({
      results: searchList
    })
  }

  saveSearchResults = () => {
    this.setState({
      showSearch: true
    })
  }

  hideSearchValue = () => {
    this.setState({showSearch: false})
  }

  render() {
    return (
      <React.Fragment>
        <NavBar  hide={this.hideSearchValue} search={this.saveSearchResults} save={this.searchResult}/>
        <ApplicationViews showSearch={this.state.showSearch} results={this.state.results} hide={this.hideSearchValue}/>
      </React.Fragment>
    )
  }
}

export default Kennel