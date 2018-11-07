import React, { Component } from "react"
import { Link } from "react-router-dom"
import APITools from '../../modules/APITools'
import SearchSuggestions from "../../modules/SearchSuggestions"
// import ReactDOM from 'react-dom'
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import SearchList from "../search/SearchList"

class NavBar extends Component {

  state = {
    searchString: '',
    searchReturns: [],
    printString: " "
  }

  handleChange = () => {
    this.setState({
      searchString: this.searchInput.value
    }, () => {
      if (this.state.searchString) {
        let type = ["animals", "owners", "employees", "locations"]
        let promises = []
        type.forEach(entity => {
          promises.push(APITools.searchApiInput(this.state.searchString, entity).then(data => {
            return data
          }))
        })
        Promise.all(promises)
          .then(results => {
            console.log(results)
            this.setState({
              searchReturns: results
            })
          })
          .then(() => {
            console.log(this.state.searchReturns)
            return this.state.searchReturns
          })
      } else if (!this.state.searchString) {
        this.setState({
          searchReturns: []
        })
      }
    })
  }

  handleSubmit = (event) => {
    console.log("insideHandleSubmit")
    if (event.keyCode === 13) {
      console.log("handle Submit")
      let resultValues = this.state.searchReturns
      console.log(resultValues)
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Locations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/animals">Animals</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees">Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/owners">Owners</Link>
          </li>
          <li className="nav-item">
            <li id="searchInput" onKeyUp={this.handleSubmit}>
              <input type="text" onKeyUp={this.handleSubmit} ref={input => this.searchInput = input} onChange={this.handleChange} placeholder="Enter Search"></input>
              <SearchSuggestions searchReturns={this.state.searchReturns} />
            </li>

          </li>
        </ul>
      </nav>
    )
  }

}

export default NavBar