// import React from "react";
import { LuChevronsDown } from "react-icons/lu";
import "../components/comp_css/header.css";
import styles from "./comp_css/components.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pfp from "../assets/pfp.jpg";

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
							<a
								href="https://linkedin.com/in/e-nikolov"
								className="social-links"
								target="_blank"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://github.com/EvgeniTN"
								className="social-links"
								target="_blank"
							>
								<FaGithub />
							</a>
						</div>
						<p>
							A passionate software engineer, web developer and motorsports
							enthusiast, currently in my final year studying BEng Sofwtare
							Engineering at University of Greenwich 🎓.
						</p>
						<div>
							Get in touch 👉{" "}
							<a href="mailto:dev@evgeni.uk" className="mail-link">
								dev@evgeni.uk
							</a>
						</div>
					</div>
					<div className="header-right">
						<div className="img-wrapper">
							<img src={pfp} alt="" />
						</div>
					</div>
				</div>
				<a href="#skills-section" className={styles.scroll}>
					<LuChevronsDown />
				</a>
			</header>
		</>
	);
}

export default Header;
