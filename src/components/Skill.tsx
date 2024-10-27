import { ReactElement } from "react";

import styles from "./comp_css/components.module.css";

const Skill = ({ icon, title }: { icon: ReactElement; title: string }) => {
	return (
		<>
			<div className={styles.skillWrapper}>
				<span>{icon}</span>
				{title}
			</div>
		</>
	);
};

export default Skill;
