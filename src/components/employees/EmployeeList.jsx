import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeRow from "./EmployeeRow";
import { Link } from "react-router-dom";
import Pagination from "../shared/Pagination";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleDelete = (deletedId) => {
    setEmployees(employees.filter((employee) => employee.id !== deletedId));
  };

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

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedEmployees = employees.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Employee List</h1>
      <Link to={`/employee/new`} className="btn btn-primary">
        Create New Employee
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedEmployees.map((employee) => (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        pageCount={Math.ceil(employees.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default EmployeeList;
