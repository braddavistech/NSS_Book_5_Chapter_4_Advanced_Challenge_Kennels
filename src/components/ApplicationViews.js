import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import SearchList from './search/SearchList'
import APITools from '../modules/APITools'
import AnimalDetail from './animals/AnimalDetail'

export default class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
  }

  deleteAnimal = id => {
    return fetch(`http://localhost:8088/animals/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:8088/animals`))
    .then(e => e.json())
    .then(animals => this.setState({
        animals: animals
    })
  )
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
      return <SearchList />
    } else {
      return (
        <React.Fragment>
          <Route exact path="/" render={(props) => {
            return <LocationList locations={this.state.locations} />
          }} />
          <Route exact path="/animals" render={(props) => {
            return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} />
          }} />
          <Route exact path="/employees" render={(props) => {
            return <EmployeeList employees={this.state.employees} />
          }} />
          <Route exact path="/owners" render={(props) => {
            return <OwnersList animals={this.state.animals} owners={this.state.owners} />
          }} />
          <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
        }} />
        </React.Fragment>
      )
    }
  }


}