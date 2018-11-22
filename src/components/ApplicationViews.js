import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import SearchPrint from './searchList'
import APITools from '../modules/APITools'
import AnimalDetail from './animals/AnimalDetail'
import OwnerDetail from "./owners/OwnerDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import LocationDetail from "./location/LocationDetail";

export default class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
  }

  deleteItem = (category, id) => {
    return fetch(`http://localhost:8088/${category}/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:8088/animals`))
      .then(e => e.json())
      .then(data => {
        if (category === "animals") {this.setState({animals: data})}
        else if (category === "owners") {this.setState({owners: data})}
        else if (category === "employees") {this.setState({employees: data})}
        else if (category === "locations") {this.setState({locations: data})}
        })

  }


  componentDidMount() {
    const newState = {}
    APITools.getAllAnimals().then(animals => newState.animals = animals)
      .then(() => APITools.getAllOwners()).then(owners => newState.owners = owners)
      .then(() => APITools.getAllEmployees()).then(employees => newState.employees = employees)
      .then(() => APITools.getAllLocations()).then(locations => newState.locations = locations)
      .then(() => {
        this.setState(newState)
      })
  }

  render() {
    if (this.props.showSearch) {
      return <SearchPrint hide={this.props.hide} results={this.props.results} deleteItem={this.deleteItem} />
    } else {
      return (
        <React.Fragment>
          <Route exact path="/" render={(props) => {
            return <LocationList locations={this.state.locations} />
          }} />
          <Route exact path="/animals" render={(props) => {
            return <AnimalList deleteAnimal={this.deleteItem} animals={this.state.animals} owners={this.state.owners} />
          }} />
          <Route exact path="/employees" render={(props) => {
            return <EmployeeList deleteEmployee={this.deleteEmployee}employees={this.state.employees} />
          }} />
          <Route exact path="/owners" render={(props) => {
            return <OwnersList deleteOwner={this.deleteOwner} animals={this.state.animals} owners={this.state.owners} />
          }} />
          <Route path="/animals/:animalId(\d+)" render={(props) => {
            return <AnimalDetail {...props} deleteAnimal={this.deleteItem} animals={this.state.animals} />
          }} />
          <Route path="/owners/:ownerId(\d+)" render={(props) => {
            return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
          }} />
          <Route path="/employees/:employeeId(\d+)" render={(props) => {
            return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
          }} />
          <Route path="/locations/:locationId(\d+)" render={(props) => {
            return <LocationDetail {...props} deleteLocation={this.deleteLocation} locations={this.state.locations} />
          }} />
        </React.Fragment>
      )
    }
  }


}