// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			<div>
				<Navbar />
				<Header />
				<Skills />
			</div>
		</>
	);
}

export default App;
