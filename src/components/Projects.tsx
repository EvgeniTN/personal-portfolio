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
			<div className="projects" id="projects">
				<div className="projects-title">
					<h2>Projects</h2>
					<a
						href="Evgeni Nikolov CV.pdf"
						target="_blank"
						className={styles.cvDownload}
					>
						CV <FaDownload />
					</a>
				</div>
				<div className="projects-wrapper">
					<Project
						title="Green & Spot Joinery"
						techStack="React.js JavaScript Vite"
						description="Green & Spot Joinery is a family-run carpentry business. I worked with React.JS in order create a website which allows them to promote their business and connect with customers."
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
						description="This is the very portfolio you are currently scrolling through 😁. I created this in order display some of my projects as well make it easier for people to connect with me."
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
