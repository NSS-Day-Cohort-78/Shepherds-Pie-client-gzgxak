import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
	const navigate = useNavigate()
	return (
		<ul className="flex bg-gray-800 p-4 space-x-6">
			<li>
				<Link
					to="/"
					className="text-white hover:text-blue-300 transition-colors duration-200 "
				>
					Order List
				</Link>
			</li>
			<li>
				<Link
					to="/neworder"
					className="text-white hover:text-blue-300 transition-colors duration-200 "
				>
					Create New Order
				</Link>
			</li>
			<li>
				<Link
					to="/employeelist"
					className="text-white hover:text-blue-300 transition-colors duration-200"
				>
					Employee List
				</Link>
			</li>
			<li>
				<Link
					to="/report"
					className="text-white hover:text-blue-300 transition-colors duration-200"
				>
					Sales Report
				</Link>
			</li>
			{localStorage.getItem("user") ? (
				<li className="ml-auto">
					<Link
						to=""
						onClick={() => {
							localStorage.removeItem("user")
							navigate("/", { replace: true })
						}}
						className="text-white hover:text-red-300 bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition-colors duration-200"
					>
						Logout
					</Link>
				</li>
			) : (
				""
			)}
		</ul>
	)
}
