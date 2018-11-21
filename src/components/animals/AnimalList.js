import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./AnimalList.css";
import dog from "./DogIcon.png"


class AnimalList extends Component {
  render() {

    return (
      <div id="ApplicationView">
        <header>CURRENT ANIMALS</header>
              {
                this.props.animals.map(animal =>
                  <div key={animal.id} className="animalCard">
                    <div className="card-body">
                      <h5 >
                        <img src={dog} className="icon--dog" alt="Dog Icon"/>
                        <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                        <button id="deleteButton" href="#"
                          onClick={() => this.props.deleteAnimal(animal.id)}
                          className="card-link">Delete</button>
                      </h5>
                      <h4>{animal.name}</h4>
                      <h5>{animal.breed}</h5>
                    </div>
                  </div>
                )
              }
      </div>
    )
  }


}


export default AnimalList