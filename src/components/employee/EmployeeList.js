import React, { Component } from "react"
import "./EmployeeList.css";

class EmployeeList extends Component {
  render() {
    return (
      <div  id="ApplicationView">
        <header>CURRENT EMPLOYEES</header>
        {
          this.props.employees.map(employee =>
            <div className="employees" key={employee.id}>{employee.name}</div>
          )
        }
      </div>
    );
  }
}

export default EmployeeList