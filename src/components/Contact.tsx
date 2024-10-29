import { LuChevronsUp } from "react-icons/lu";
import "./comp_css/contact.css";
import styles from "./comp_css/components.module.css";
import { FaCircleCheck } from "react-icons/fa6";

export default function Contact() {
	return (
		<>
			<div className="contact-section">
				{/* <h2>Get in touch</h2> */}
				<h3>
					Would you like to <span>work</span>, <span>collaborate</span> or{" "}
					<span>connect</span> with me?
				</h3>
				<div className="checkpoint">
					<span>
						<FaCircleCheck />
					</span>
					<p>
						If that's the case you can do so by reaching out to me on any of
						these platforms:
					</p>
				</div>
				<ul>
					<li>
						<a href="">Email</a>
					</li>
					<li>
						<a href="">LinkedIn</a>
					</li>
					<li>
						<a href="">GitHub</a>
					</li>
					<li>
						<a href="">Resume</a>
					</li>
				</ul>
				<a href="#navbar" className={styles.scroll}>
					<LuChevronsUp />
				</a>
			</div>
		</>
	);
}
