import { Route, Routes } from "react-router-dom"
// import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./components/views/appview"
// import { NavBar } from "./nav/NavBar"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
// import "./Repairs.css"


export const GwMatList = () => {
	return <Routes>
		{/* <Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
 */}
		<Route path="*" element={
			
			// 	<>
			// 		<NavBar />
					<ApplicationViews />
			// 	</>
			

		} />
	</Routes>
}

