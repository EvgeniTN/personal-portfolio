import React from "react";

const Project = ({
	title,
	description,
	projectLink,
	linkText,
}: {
	title: string;
	description: string;
	projectLink: string;
	linkText: string;
}) => {
	return (
		<>
			<div className="project-wrapper">
				<h3>{title}</h3>
				<p>{description}</p>
				<a href={projectLink}>{linkText}</a>
			</div>
		</>
	);
};

export default Project;
