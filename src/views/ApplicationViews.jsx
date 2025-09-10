import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navbar/navbar"

export const ApplicationViews = () => {
	const [currentUser, setCurrentUser] = useState({})

	useEffect(() => {
		const localUser = localStorage.getItem("user")
		const localUserObject = JSON.parse(localUser)

		setCurrentUser(localUserObject)
	}, [])

	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<NavBar />
						<Outlet />
					</>
				}
			>
				<Route index element={<h1>Order List</h1>} />
				<Route path="/neworder" element={<h1>Create New Order</h1>} />
				<Route path="/employees">
					<Route index element={<EmployeeList currentUser={currentUser} />} />
					<Route path =":employeeId" element={<EmployeeEdit />} />
				</Route>
				<Route path="/report" element={<h1>Sales Report</h1>} />
			</Route>
		</Routes>
	)
}
