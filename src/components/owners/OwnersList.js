import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./OwnersList.css";

class OwnersList extends Component {
  render() {
    return (
      <div id="ApplicationView" >
        <header>ANIMAL OWNERS</header>
        {
          this.props.owners.map(owner =>
            < section className="owners" key={owner.id} >
              <h4>{owner.name}</h4>
              <Link  to={`/owners/${owner.id}`}><button className="detailsLink">Details</button></Link>
              <button id="deleteButton" href="#"
                onClick={() => this.props.deleteOwner("owners", owner.id)}
                className="card-link">Delete</button>
            </section>
          )
        }
      </div >
    )
  }
}





export default OwnersList