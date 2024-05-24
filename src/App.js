import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/employees/EmployeeList";
import EmployeeDetails from "./components/employees/EmployeeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element=<EmployeeList /> />
        <Route path="/employee/:id" element=<EmployeeDetails /> />
      </Routes>
    </Router>
  );
}

export default App;
