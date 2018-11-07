import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import SearchList from './search/SearchList'
import APITools from '../modules/APITools'



export default class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    searchValue: {}
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

  render () {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnersList animals={this.state.animals} owners={this.state.owners} />
        }} />
        <Route exact path="/search" render={(props) => {
          return <SearchList results={this.state.search}/>
        }} />
      </React.Fragment>
    )
  }


}