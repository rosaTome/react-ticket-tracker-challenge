import { Employee } from "../../types/Employee";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeContainer.scss";

type EmployeeContainerProps = {
    employees: Employee[];
}

const EmployeeContainer = ({employees}: EmployeeContainerProps) => {
    return (
        <div className="employee-container">
            {
                employees.map((employee) => (
                    <EmployeeCard
                        id={employee.id}
                        name={employee.name}
                        role={employee.role}
                    />
                ))
            }
        </div>
    )
}

export default EmployeeContainer;









