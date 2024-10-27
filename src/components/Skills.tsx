// import React from "react";
import "../components/comp_css/skills.css";
import {
	FaBootstrap,
	FaCss3,
	FaGitAlt,
	FaHtml5,
	FaJava,
	FaJs,
	FaNodeJs,
	FaPython,
	FaReact,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiCsharp, SiVite } from "react-icons/si";
import Skill from "./Skill";
import { TbSql } from "react-icons/tb";

function Skills() {
	return (
		<>
			<div className="skills-section">
				<h2>Technical Skills</h2>
				<div className="icon-wrapper">
					<Skill title="React.JS" icon={<FaReact />} />
					<Skill title="HTML5" icon={<FaHtml5 />} />
					<Skill title="CSS" icon={<FaCss3 />} />
					<Skill title="JavaScript" icon={<FaJs />} />
					<Skill title="TypeScript" icon={<BiLogoTypescript />} />
					<Skill title="Python" icon={<FaPython />} />
					<Skill title="Java" icon={<FaJava />} />
					<Skill title="C#" icon={<SiCsharp />} />
					<Skill title="Vite" icon={<SiVite />} />
					<Skill title="Node.js" icon={<FaNodeJs />} />
					<Skill title="SQL" icon={<TbSql />} />
					<Skill title="git" icon={<FaGitAlt />} />
					<Skill title="Bootstrap" icon={<FaBootstrap />} />
				</div>
			</div>
		</>
	);
}

export default Skills;
