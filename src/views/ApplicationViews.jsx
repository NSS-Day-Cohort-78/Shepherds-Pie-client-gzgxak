import { useEffect, useState } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navbar/navbar"
import { EmployeeList } from "../EmployeeList/EmployeeList"
import { EmployeeEdit } from "../EmployeeList/EmployeeEdit"
import { NewOrderForm } from "../components/form/CreateOrderForm"
import { OrderList } from "../Orders/OrderList"
import { SalesReport } from "../components/SalesReport/SalesReport"

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
				<Route
					index
					element={
						<h1>
							<OrderList currentUser={currentUser} />
						</h1>
					}
				/>
				<Route
					path="/neworder"
					element={
						<h1>
							<NewOrderForm currentUser={currentUser} />
						</h1>
					}
				/>
				<Route path="/employees">
					<Route index element={<EmployeeList currentUser={currentUser} />} />
					<Route path=":employeeId" element={<EmployeeEdit />} />
				</Route>
				<Route path="/report" element={<SalesReport />} />
			</Route>
		</Routes>
	)
}
