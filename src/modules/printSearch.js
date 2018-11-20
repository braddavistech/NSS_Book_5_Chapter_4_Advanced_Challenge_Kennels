import React from 'react';

const SearchPrint = (props) => {
    let searchList = JSON.parse(sessionStorage.getItem("searchResults"));
    console.log("show Results: ", searchList);
    if (searchList !== null) {
    let animals = searchList[0];
    let owners = searchList[1];
    let locations = searchList[3];
    let employees = searchList[2];
    let animalPrint = animals.map(animal => (
        <section key={animal.id} className="individualElement"><h4>Pet:</h4><h1>{animal.name}</h1><h3>{animal.breed}</h3></section>
      ))
    const ownerPrint = owners.map (owner => (
        <section key={owner.id} className="individualElement"><h4>Owner:</h4><h1>{owner.name}</h1></section>
      ))
    const locationPrint = locations.map (location => (
        <section key={location.id} className="individualElement"><h4>Location:</h4><h1>{location.name}</h1></section>
      ))
    const employeePrint = employees.map (employee => (
        <section key={employee.id} className="individualElement"><h4>Employee:</h4><h1>{employee.name}</h1></section>
      ))
      return <div id="searchResults"><h1 id="searchTitle">Search Results</h1>{animalPrint}{ownerPrint}{locationPrint}{employeePrint}</div>
    } else { return <div></div>}
}

export default SearchPrint;