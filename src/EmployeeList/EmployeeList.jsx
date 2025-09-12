import { useEffect, useState } from "react";
import { getUsers } from "../service/userService.js";
import { useNavigate } from "react-router-dom"
import "./EmployeeList.css"

export const EmployeeList = ({ currentUser }) => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getUsers().then((usersArr) => {
      setUsers(usersArr);
    })
  }, [])

  if (!currentUser?.admin) {
    return (
        <div className="access-denied">
            <p>Sorry, you must be logged in as an Administrator to view this page.</p>
        </div>
    )
  }

  return (
    <div className="employee-info-card">
      {users.map((user) => {
        return (
          <div key={user.id} className="employee-info">
            <div>
              <h2>{user.name}</h2>
              <p>{user.address}</p>
              <p>{user.phoneNumber}</p>
              <p>{user.email}</p>
            </div>
            <button
              className="edit-employee-btn"
              onClick={() => {navigate(`/employees/${user.id}`)}}
            >
              Edit Info
            </button>
          </div>
        );
      })}
    </div>
  );
};
