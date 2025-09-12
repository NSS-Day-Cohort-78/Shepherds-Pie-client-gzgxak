import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../service/userService";
import "./EmployeeEdit.css";

export const EmployeeEdit = () => {
  const [employee, setEmployee] = useState({});
  const { employeeId } = useParams();

  const isValidPhone = (phone) => {
    return /^\d{3}-\d{3}-\d{4}$/.test(phone);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

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
        <h1 className="employee-edit-name">{employee.name}</h1>
        <fieldset>
          <div>
            <label>Address :</label>
            <div>
              <input
                className="employee-edit-input"
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
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Phone Number :</label>
            <div>
              <input
                className="employee-edit-input"
                type="tel"
                required
                value={employee.phoneNumber}
                onChange={(event) => {
                  const copy = { ...employee };
                  copy.phoneNumber = event.target.value;
                  setEmployee(copy);
                }}
              />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label>Email :</label>
            <div>
              <input
                className="employee-edit-input"
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
          </div>
        </fieldset>
        <button
          className="save-changes-btn"
          onClick={(event) => {
            event.preventDefault();
            if (
              employee.address &&
              employee.phoneNumber &&
              isValidPhone(employee.phoneNumber) &&
              employee.email &&
              isValidEmail(employee.email)
            ) {
              window.alert("Changes Saved");
              handleSaveChanges();
            } else {
              window.alert(
                `All fields are required before changes can be saved.
Phone number must be in format: 123-456-7890
Email must be a valid email address.`
              );
            }
          }}
        >
          Save Changes
        </button>
      </form>
    </>
  );
};
