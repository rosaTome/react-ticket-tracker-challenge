import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer"
import { Employee } from "./types/Employee";

import CounterContainer from "./components/CounterContainer/CounterContainer";

// import the employees array from data file location
import employees from "./data/employees";


const App = () => {

  // imported array into AllEmployees variable 
  const AllEmployees: Employee[] = employees;

  return (
    <div className="app">
        <h1>Ticket Tracker</h1>
          <EmployeeContainer employees={AllEmployees}/>

          <CounterContainer incr={incr}/>
    </div>

   
  )
}

export default App;
