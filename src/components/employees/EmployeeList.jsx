import React, { useState, useEffect } from "react";
import axios from "axios";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/employees"
        );
        setEmployees(response.data);
      } catch (error) {
        console.log("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>City</th>
            <th>State</th>
            <th>Date of Birth</th>
            <th>Date of Hiring</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.contact_number}</td>
              <td>{employee.address}</td>
              <td>{employee.pincode}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.date_of_birth}</td>
              <td>{employee.date_of_hiring}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeList;
