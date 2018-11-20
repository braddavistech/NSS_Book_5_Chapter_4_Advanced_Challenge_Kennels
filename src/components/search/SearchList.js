import React, { Component } from 'react'
import "./search.css";
import PrintSearch from "../../modules/printSearch";
// import NavBar from '../nav/NavBar';


class SearchList extends Component {
  state = {
    results: [],
    stringElement: ""
  }

  render() {
      return (
        <div>
          <React.Fragment>
          <PrintSearch  />
          </React.Fragment>
        </div>
      )
  }
}


export default SearchList