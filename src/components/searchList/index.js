import React, { Component } from 'react';
import { Link } from "react-router-dom";
import dog from "../animals/DogIcon.png";
import "./SearchList.css";
import $ from "jquery";

export default class SearchPrint extends Component {
  state = {
    loadedInfo: false,
    animals: [],
    owners: [],
    locations: [],
    employees: [],
    searchString: ""
  }

  animalTitle() {
    if (this.props.results[0].length > 1) {
      return <div><h1 className="sectionTitles">ANIMAL RESULTS</h1><h1 className="numberOfResults">Showing {this.props.results[0].length} results for animals.</h1></div>
    } else if (this.props.results[0].length === 1) {
      return <div><h1 className="sectionTitles">ANIMAL RESULTS</h1><h1 className="numberOfResults">Showing {this.props.results[0].length} result for animals.</h1></div>
    } else { return <div></div> }
  }

  ownerTitle() {
    if (this.props.results[1].length > 1) {
      return <div><h1 className="sectionTitles">OWNER RESULTS</h1><h1 className="numberOfResults">Showing {this.props.results[1].length} results for owners.</h1></div>
    } else if (this.props.results[1].length === 1) {
      return <div><h1 className="sectionTitles">OWNER RESULTS</h1><h1 className="numberOfResults">Showing {this.props.results[1].length} result for owners.</h1></div>
    } else {return <div></div>}
  }

  employeeTitle() {
    if (this.props.results[2].length > 1) {
      return <div><h1 className="sectionTitles">EMPLOYEE RESULTS</h1><h1 className="numberOfResults">Showing {this.props.results[2].length} results for employees.</h1></div>
    } else if (this.props.results[2].length === 1) {
      return <div><h1 className="sectionTitles">EMPLOYEE RESULTS</h1><h1 className="numberOfResults">Showing {this.props.results[2].length} result for employees.</h1></div>
    } else {return <div></div>}
  }

  locationTitle() {
    if (this.props.results[3].length > 1) {
      return <div><h1 className="sectionTitles">LOCATION RESULTS</h1><h1 className="numberOfResults">Showing {this.props.results[3].length} results for locations.</h1></div>
    } else if (this.props.results[3].length === 1) {
      return <div><h1 className="sectionTitles">LOCATION RESULTS</h1><h1 className="numberOfResults">Showing {this.props.results[3].length} result for locations.</h1></div>
    } else {return <div></div>}
  }

  render() {
    let searchString = sessionStorage.getItem("searchString");
    let animalString = this.animalTitle();
    let ownerString = this.ownerTitle();
    let employeeString = this.employeeTitle();
    let locationString = this.locationTitle();

    return (
      <div id="fullSearch">
        <header id="mainSearchTitle">SEARCH RESULTS</header>
        <h1 id="resultsTitle">Results for " {searchString} " </h1>
        {animalString}
        {
          this.props.results[0].map(animal => (
            <div key={animal.id} id={`a${animal.id}`} className="animalCard">
              <img src={dog} className="icon--dog" alt="Dog Icon" />
              <h4 className="name">{animal.name}</h4>
              <Link to={`/animals/${animal.id}`}>
                <button className="detailsLink" onClick={this.props.hide}>Details</button>
              </Link>
              <button id="deleteButton" href="#"
                onClick={() => this.props.deleteItem("animals",animal.id).then(() => {
                  $(`#a${animal.id}`).hide()
                })}
              >Delete</button>
            </div>
          ))
        }
        {ownerString}
        {
          this.props.results[1].map(owner => (
            <div key={owner.id} id={`o${owner.id}`}  className="otherCard">
              <h2 className="name">{owner.name}</h2>
              <Link to={`/owners/${owner.id}`}>
              <button className="detailsLink" onClick={this.props.hide}>Details</button>
              </Link>
              <button id="deleteButton" href="#"
                onClick={() => this.props.deleteItem("owners", owner.id).then(() =>{
                  $(`#o${owner.id}`).hide()
                })}
              >Delete</button>
            </div>
          ))
        }
        {employeeString}
        {
          this.props.results[2].map(employee => (
            <div key={employee.id} id={`e${employee.id}`}  className="otherCard">
              <h2 className="name">{employee.name}</h2>
              <Link to={`/employees/${employee.id}`}>
                <button className="detailsLink" onClick={this.props.hide}>Details</button>
              </Link>
              <button id="deleteButton" href="#"
                onClick={() => this.props.deleteItem("employees", employee.id).then(() => {
                  $(`#e${employee.id}`).hide()
                })}
              >Delete</button>
            </div>
          ))
        }
        {locationString}
        {
          this.props.results[3].map(location => (
            <div key={location.id} id={`l${location.id}`}  className="otherCard">
              <h2 className="name">{location.name}</h2>
              <Link to={`/locations/${location.id}`}>
                <button className="detailsLink" onClick={this.props.hide}>Details</button>
              </Link>
              <button id="deleteButton" href="#"
                onClick={() => this.props.deleteItem("locations", location.id).then(() => {
                  $(`#l${location.id}`).hide()
                })}
              >Delete</button>
            </div>
          ))
        }
      </div>
    )
  }
}