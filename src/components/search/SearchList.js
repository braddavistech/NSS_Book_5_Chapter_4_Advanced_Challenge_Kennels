import React, { Component } from 'react'
import "./search.css"
import NavBar from '../nav/NavBar';


class SearchList extends Component {
  state = {
    results: []
  }

  forceUpdate (props) {
    this.setState({
      results: this.props.searches
    })
  }


  render() {
    console.log("Inside Search List", this.results)

      return (
        <div>
          <p>Testin in Search</p>
        </div>
      )
  }
}


export default SearchList