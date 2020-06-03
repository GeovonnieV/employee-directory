import React, { useState } from "react";
// getting that jsx from components 
import Table from "./components/Table";
import employees from "./empoyees.json"
import SearchBar from "./components/SearchBar"

// this will 
function App() {

  const [employeeList, setEmployeeList] = useState(employees);

  const filterEmployees = (filter) => {
    if (filter) {
      const filteredEmployees = employeeList.filter((employee) => {
        return employee.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      });
      setEmployeeList(filteredEmployees);
    } else {
      setEmployeeList(employees);
    }
  }

  return (
    // wrapper
    <>
      <SearchBar searchHandler={filterEmployees} />

      <h1>Employee List</h1>
      {employeeList.map((employee) => {
        return (
          <Table
            key={employee.id}
            image={employee.image}
            name={employee.name}
            occupation={employee.occupation}
            email={employee.email}
          />
        )
      })}
    </>
  )
}

export default App;
