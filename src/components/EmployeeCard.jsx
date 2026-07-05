export default function EmployeeCard({ employee }) {
  return (
    <div
      className={`employee-card ${
        employee.salary > 100000 ? "highSalary" : ""
      }`}
    >
      <h3>{employee.name}</h3>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Designation:</strong> {employee.designation}
      </p>

      <p>
        <strong>Salary:</strong> ${employee.salary}
      </p>
    </div>
  );
}