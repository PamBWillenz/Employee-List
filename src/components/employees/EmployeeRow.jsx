import React from "react";
import { Link } from "react-router-dom";

function EmployeeRow({ employee }) {
  return (
    <tr key={employee.id}>
      <td>{employee.full_name}</td>
      <td>{employee.email}</td>
      <td>
        <Link to={`/employee/${employee.id}`} className="btn btn-primary">
          View
        </Link>
      </td>
    </tr>
  );
}

export default EmployeeRow;
