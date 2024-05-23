import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EmployeeDetails() {
  const { id } = useParams(); // Get the ID from the URL
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/employees/${id}`
        );
        setEmployee(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching employee:", error);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]); // Dependency array ensures the effect runs when the ID changes

  if (loading) {
    return <div>Loading employee...</div>;
  }

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <div>
        <strong>Name:</strong> {employee.full_name}
      </div>
      <div>
        <strong>Email:</strong> {employee.email}
      </div>

      {/* Add more details here */}
    </div>
  );
}

export default EmployeeDetails;
