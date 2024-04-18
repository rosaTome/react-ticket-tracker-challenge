

type EmployeeCardProps = {
  id: number;
  name: string;
  role: string;
}

const EmployeeCard = ({id, name, role}: EmployeeCardProps)=> {
  return (
    <div className="employee-card">
      <div className="employee-card__content">
        <p className="employee-card__id">{id}</p>
        <p className="employee-card__name">{name}</p>
        <p className="employee-card__role">{role}</p>
      </div>
    </div>
  )
}

export default EmployeeCard;
