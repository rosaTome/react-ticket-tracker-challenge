import EmployeeContainer from "./containers/EmployeeContainer/EmployeeContainer"
import { Employee } from "./types/Employee";

import CounterContainer from "./containers/CounterContainer/CounterContainer";

// import the employees array from data file location
import employees from "./data/employees";
import "./App.scss"


const App = () => {

  // imported array into AllEmployees variable 
  const AllEmployees: Employee[] = employees;

  return (
    <div className="app">
        <h1>Ticket Tracker</h1>
          <EmployeeContainer employees={AllEmployees}/>
    </div>

   
  )
}

export default App;
