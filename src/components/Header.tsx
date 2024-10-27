// import React from "react";
import "../components/comp_css/header.css";

function Header() {
	return (
		<>
			<header>
				<div className="header-wrapper">
					<div className="header-left">
						<h1>
							<span>👋</span> Hello, I'm Evgeni
						</h1>
						<h2>Software Engineer and Web Developer</h2>
						<p>
							A passionate software engineer and web developer, currently in my
							final year studying BEng Softare Engineering at University of
							Greenwich.
						</p>
						<a href="" className="cv_download">
							Check out my CV!
						</a>
					</div>
					<div className="header-right">
						<div className="img-wrapper"></div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
