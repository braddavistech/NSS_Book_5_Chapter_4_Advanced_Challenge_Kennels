import React, { Component } from "react"
import "./EmployeeDetail.css"

export default class EmployeeDetail extends Component {
    render() {

        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="indiv-employee">
                <div key={employee.id} className="indiv-employeeCard">
                    <h4 className="indiv-employeeName">{employee.name}</h4>
                    <h6 className="indiv-employeeBreed">{employee.phone}</h6>
                    <button id="indiv-deleteButton" href="#" onClick={() => this.props.deleteEmployee("employees", employee.id)
                                            .then(() => this.props.history.push("/employees"))}
                            className="indiv-card-link">Delete</button>
                </div>
            </section>
        )
    }
}