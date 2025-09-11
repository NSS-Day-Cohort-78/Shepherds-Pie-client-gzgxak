import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../service/userService";

export const EmployeeEdit = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  useEffect(() => {
    getUsers().then((users) => {
      const employeeToEdit = users.find(
        (user) => user.id === parseInt(employeeId)
      );

      if (employeeToEdit) {
        setEmployee(employeeToEdit);
      }
    });
  }, [employeeId]);

  const handleSaveChanges = () => {
    return fetch(`http://localhost:8088/users/${employee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then((res) => res.json());
  };

  return (
    <>
      <form className="employee-edit">
        <h1>{employee.name}</h1>
        <fieldset>
          <div>
            <label>Address :</label>
            <input
              type="text"
              required
              value={employee.address}
              onChange={(event) => {
                const copy = { ...employee };
                copy.address = event.target.value;
                setEmployee(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Phone Number :</label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{4}"
              required
              value={employee.phoneNumber}
              onChange={(event) => {
                const copy = { ...employee };
                copy.phoneNumber = event.target.value;
                setEmployee(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Email :</label>
            <input
              type="email"
              required
              value={employee.email}
              onChange={(event) => {
                const copy = { ...employee };
                copy.email = event.target.value;
                setEmployee(copy);
              }}
            />
          </div>
        </fieldset>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleSaveChanges();
          }}
        >
          Save Changes
        </button>
      </form>
    </>
  );
};
