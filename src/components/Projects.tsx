import React from "react";
import { FaDownload } from "react-icons/fa";
import "./comp_css/projects.css";
import styles from "./comp_css/components.module.css";
import Project from "./Project";

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
						description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure velit illo repellat? Repellendus nam vel fugiat quae voluptas similique aspernatur."
						projectLink="/"
						linkText="Live Website"
					/>
				</div>
			</div>
		</>
	);
}

export default Projects;
