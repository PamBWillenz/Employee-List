import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";

const EmployeeEditForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    date_of_birth: "",
    date_of_hiring: "",
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/employees/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.log("Error fetching employee:", error);
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/employees/${id}`,
        formData
      );
      console.log(response.data);
      window.location.href = "/?success=true&action=updated";
    } catch (error) {
      console.log("Error updating employee:", error);
    }
  };

  return (
    <EmployeeForm
      formData={formData}
      formTitle={"Edit Employee"}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      submitButtonTitle={"Update Employee"}
    />
  );
};

export default EmployeeEditForm;
