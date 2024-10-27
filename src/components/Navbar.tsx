// import React from "react";
import "../components/comp_css/navbar.css";

function Navbar() {
	return (
		<>
			<nav>
				<div className="nav-left">Evgeni.</div>
				<div className="nav-right">
					<ul className="nav-links">
						<li className="nav-item">
							<a href="/">Home</a>
						</li>
						<li className="nav-item">
							<a href="/">Projects</a>
						</li>
						<li className="nav-item">
							<a href="/">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
