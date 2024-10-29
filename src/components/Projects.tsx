// import React from "react";
import { FaDownload } from "react-icons/fa";
import "./comp_css/projects.css";
import styles from "./comp_css/components.module.css";
import Project from "./Project";
import portfolioLanding from "../assets/portfolioLanding.png";
import greenandspotHeader from "../assets/greenandspot_header.png";

function Projects() {
	return (
		<>
			<div className="projects">
				<div className="projects-title">
					<h2>Projects</h2>
					<a href="/" className={styles.cvDownload}>
						CV <FaDownload />
					</a>
				</div>
				<div className="projects-wrapper">
					<Project
						title="Green & Spot Joinery"
						techStack="React.js JavaScript Vite"
						description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure velit illo repellat? Repellendus nam vel fugiat quae voluptas similique aspernatur."
						projectLink="https://greenandspot.co.uk/"
						linkText="Live "
						projectImg={
							<img
								src={greenandspotHeader}
								alt="Laptop with carpentry website on the screen"
							/>
						}
					/>
					<Project
						title="My Personal Portfolio"
						techStack="React.js TypeScript Vite Git"
						description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure velit illo repellat? Repellendus nam vel fugiat quae voluptas similique aspernatur."
						projectLink="/"
						linkText="Github "
						projectImg={
							<img
								src={portfolioLanding}
								alt="Laptop with carpentry website on the screen"
							/>
						}
					/>
				</div>
			</div>
		</>
	);
}

export default Projects;
