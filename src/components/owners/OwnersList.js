import React, { Component } from 'react'
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
              <h5>{owner.phone}</h5>
            </section>
          )
        }
      </div >
    )
  }
}





export default OwnersList