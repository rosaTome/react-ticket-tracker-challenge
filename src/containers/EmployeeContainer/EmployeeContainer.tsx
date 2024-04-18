import { useState } from 'react';
import { Employee } from "../../types/Employee";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import CounterContainer from "../CounterContainer/CounterContainer";
import "./EmployeeContainer.scss";

type EmployeeContainerProps = {
    employees: Employee[];
}

const EmployeeContainer = ({employees}: EmployeeContainerProps) => {

    const [counts, setCounts] = useState<number[]>(new Array(employees.length).fill(0));

    // Function to increment count for a specific employee
    const incrementCount = (index: number) => {
      const newCounts = [...counts];
      newCounts[index] += 1;
      setCounts(newCounts);
    };
  
    // Function to decrement count for a specific employee
    const decrementCount = (index: number) => {
      const newCounts = [...counts];
      newCounts[index] -= 1;
      setCounts(newCounts);
    };


    return (
        <div className="employee-container">
            {
                employees.map((employee, index) => (
                    <div key={employee.id}>
                        <EmployeeCard
                            key={employee.id}
                            id={employee.id}
                            name={employee.name}
                            role={employee.role}
                        />

                        <CounterContainer
                            key={employee.id} // Ensure each CounterContainer has a unique key
                            count={counts[index]} // Pass count for the current employee
                            increment={() => incrementCount(index)} // Pass increment function
                            decrement={() => decrementCount(index)} // Pass decrement function
                        />

                    </div>
                ))
            }

        </div>


    )
}

export default EmployeeContainer;









