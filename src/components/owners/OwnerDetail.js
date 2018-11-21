import React, { Component } from "react"
import "./OwnerDetail.css"

export default class OwnerDetail extends Component {
    render() {

        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="indiv-owner">
                <div key={owner.id} className="indiv-ownerCard">
                    <h4 className="indiv-ownerName">{owner.name}</h4>
                    <h6 className="indiv-ownerBreed">{owner.phone}</h6>
                    <button id="indiv-deleteButton" href="#"
                            onClick={() => this.props.deleteowner(owner.id)
                                            .then(() => this.props.history.push("/owners"))}
                            className="indiv-card-link">Delete</button>
                </div>
            </section>
        )
    }
}