import React from 'react';

const SearchPrint = (props) => {
    let searchString = sessionStorage.getItem("searchString");
    let searchList = JSON.parse(sessionStorage.getItem("searchResults"));
    if (searchList !== null) {
    let animals = searchList[0];
    let owners = searchList[1];
    let locations = searchList[3];
    let employees = searchList[2];
    let animalPrint = animals.map(animal => (
        <section key={animal.id} className="individualElement"><h2>{animal.name}</h2><h3>{animal.breed}</h3><h6>(Pet)</h6></section>
      ))
    const ownerPrint = owners.map (owner => (
        <section key={owner.id} className="individualElement"><h2>{owner.name}</h2><h6>(Owner)</h6></section>
      ))
    const locationPrint = locations.map (location => (
        <section key={location.id} className="individualElement"><h2>{location.name}</h2><h6>(Location)</h6></section>
      ))
    const employeePrint = employees.map (employee => (
        <section key={employee.id} className="individualElement"><h2>{employee.name}</h2><h6>(Employee)</h6></section>
      ))
      return <div id="ApplicationView"><header>SEARCH RESULTS</header><h1>Results for "{searchString}".</h1>{animalPrint}{ownerPrint}{locationPrint}{employeePrint}</div>
    } else { return <div></div>}
}

export default SearchPrint;