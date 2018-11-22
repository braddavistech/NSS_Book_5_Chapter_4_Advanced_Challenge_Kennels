import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.css";

class EmployeeList extends Component {
  render() {
    return (
      <div id="ApplicationView">
        <header>CURRENT EMPLOYEES</header>
        {
          this.props.employees.map(employee =>
            <section className="employees" key={employee.id}>
              <div className="employees" key={employee.id}>{employee.name}</div>
              <Link to={`/employees/${employee.id}`}><button className="detailsEmployee">Details</button></Link>
              <button id="deleteEmployee" href="#"
                onClick={() => this.props.deleteEmployee("employees", employee.id)}
                >Delete</button>
            </section>
          )
        }
      </div>
    );
  }
}

export default EmployeeList