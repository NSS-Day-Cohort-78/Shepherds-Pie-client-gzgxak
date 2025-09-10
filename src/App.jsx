import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Login } from "./auth/Login"
import { ApplicationViews } from "./views/ApplicationViews"
import { Authorized } from "./views/Authorized"

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />}></Route>
			<Route
				path="*"
				element={
					<Authorized>
						<ApplicationViews />
					</Authorized>
				}
			></Route>
		</Routes>
	)
}

export default App
