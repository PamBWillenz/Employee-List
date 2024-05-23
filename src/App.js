import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/employees/EmployeeList";
import EmployeeDetails from "./components/employees/EmployeeDetails";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1 className="mt-4 mb-3">React Frontend</h1>
    //     <EmployeeList />
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element=<EmployeeList /> />
        <Route path="/employee/:id" element=<EmployeeDetails /> />
      </Routes>
    </Router>
  );
}

export default App;
