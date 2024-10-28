import { ReactElement } from "react";
import styles from "./comp_css/components.module.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Project = ({
	title,
	techStack,
	description,
	projectLink,
	linkText,
	projectImg,
}: {
	title: string;
	techStack: string;
	description: string;
	projectLink: string;
	linkText: string;
	projectImg: ReactElement;
}) => {
	return (
		<>
			<div className={styles.projectWrapper}>
				<div className={styles.projectImgWrapper}>{projectImg}</div>
				{/* {projectImg} */}

				<div className={styles.projectInfo}>
					<h3>{title}</h3>
					<h4>
						Technologies used: <span>{techStack}</span>
					</h4>
					<p>{description}</p>
					<a href={projectLink} target="_blank">
						{linkText}
						<BsBoxArrowUpRight />
					</a>
				</div>
			</div>
		</>
	);
};

export default Project;
