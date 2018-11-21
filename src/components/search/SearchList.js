import React, { Component } from 'react'
import "./search.css";
import PrintSearch from "../../modules/printSearch";

class SearchList extends Component {
  state = {
    results: [],
    stringElement: ""
  }

  render() {
      return (
          <React.Fragment>
            <PrintSearch  />
          </React.Fragment>
      )
  }
}

export default SearchList