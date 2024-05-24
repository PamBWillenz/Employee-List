import React, { useState } from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";

function EmployeeNewForm() {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/employees",
        formData
      );
      console.log(response.data);

      setFormData({
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
      }); // Clear the form
    } catch (error) {
      console.log("Error creating employee:", error);
    }
  };

  return (
    <EmployeeForm
      formData={formData}
      formTitle={"Create New Employee"}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      submitButtonTitle={"Create Employee"}
    />
  );
}

export default EmployeeNewForm;
