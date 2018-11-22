import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LocationList.css";


class LocationList extends Component {
  render() {
    return (
      <div id="ApplicationView">
        <header>KENNEL LOCATIONS</header>
        {
          this.props.locations.map(location =>
            <section className="address" key={location.id}>
              <h4>{location.name}</h4>
              <Link className="nav-link" to={`/locations/${location.id}`}><button className="detailsLocation">Details</button></Link>
              <button id="deleteLocation" href="#"
                onClick={() => this.props.deleteLocation("locations", location.id)}
                className="card-link">Delete</button>
            </section>)
        }
      </div>
    )
  }
}

export default LocationList