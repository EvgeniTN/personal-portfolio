// import React from "react";
import "../components/comp_css/navbar.css";

function Navbar() {
	return (
		<>
			<nav>
				<div className="nav-left">Evgeni.</div>
				<div className="nav-right">
					<ul className="nav-links">
						<li className="nav-item">Home</li>
						<li className="nav-item">Projects</li>
						<li className="nav-item">Contact</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
