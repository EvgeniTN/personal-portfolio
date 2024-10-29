// import React from "react";
import "../components/comp_css/navbar.css";

function Navbar() {
	return (
		<>
			<nav id="navbar">
				<div className="nav-left">Evgeni.</div>
				<div className="nav-right">
					<ul className="nav-links">
						<li className="nav-item">
							<a href="#projects">Projects</a>
						</li>
						<li className="nav-item">
							<a href="#contact-section">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
