import "./App.css";

import { Routes, Route } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Home from "./components/pages/Home";

function App() {
	return (
		<div>
			{/* <Header /> */}
			<div className="content-wrapper">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="menu" element={<Menu />} />
					{/* <Route path="reservation" element={<Reservation />} /> */}
					{/* <Route path="admin" element={<Admin />} /> */}
				</Routes>
			</div>
		</div>
	);
}

export default App;
