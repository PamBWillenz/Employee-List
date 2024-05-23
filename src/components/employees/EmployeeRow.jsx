import React from "react";

function EmployeeRow({ employee }) {
  return (
    <tr key={employee.id}>
      <td>{employee.id}</td>
      <td>{employee.full_name}</td>
      <td>{employee.email}</td>
      <td>{employee.contact_number}</td>
      <td>{employee.address}</td>
      <td>{employee.pincode}</td>
      <td>{employee.city}</td>
      <td>{employee.state}</td>
      <td>{employee.date_of_birth}</td>
      <td>{employee.date_of_hiring}</td>
    </tr>
  );
}

export default EmployeeRow;
