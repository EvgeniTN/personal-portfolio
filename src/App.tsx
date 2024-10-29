// import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			<div>
				<Navbar />
				<Header />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</>
	);
}

export default App;
