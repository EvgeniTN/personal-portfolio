// import React from "react";
import "../components/comp_css/header.css";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

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
						<div className="actions">
							<a href="" className="social-links">
								<FaLinkedin />
							</a>
							<a href="" className="social-links">
								<FaGithub />
							</a>
						</div>
						<p>
							A passionate software engineer, web developer and motorsports
							enthusiast, currently in my final year studying BEng Softare
							Engineering at University of Greenwich 🎓.
						</p>
						<div>
							Get in touch 👉{" "}
							<a href="mailto:dev@evgeni.uk" className="mail-link">
								dev@evgeni.uk
							</a>
						</div>

						{/* <a href="" className="cv_download">
							View my CV <FaDownload />
						</a> */}
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
