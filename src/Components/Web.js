import React from "react";
import "./web.css";

const Web = () => {
	return (
		<div className="web">
			<div className="web-option">
				<a href="#skills">
					<img
						src={
							require("./assets/skill.png")
								.default
						}
						alt="skills"
						className="option-icon"
					/>
					Skills
					{/* <i class="fi-rr-laptop option-icon"></i>
					Skills */}
				</a>
			</div>
			<div className="web-option">
				<a href="#about">
					<img
						src={
							require("./assets/about.png")
								.default
						}
						alt="about"
						className="option-icon"
					/>
					{/* <i class="fi-rr-info option-icon"></i> */}
					About
				</a>
			</div>
			<div className="web-option">
				<a href="#project">
					{/* <i class="fi-rr-edit-alt option-icon"></i> */}
					<img
						src={
							require("./assets/project.png")
								.default
						}
						alt="project"
						className="option-icon"
					/>
					Projects
				</a>
			</div>
			<div className="web-option">
				<a href="#contact">
					{/* <i class="fi-rr-envelope option-icon"></i> */}
					<img
						src={
							require("./assets/contact.png")
								.default
						}
						alt="contact"
						className="option-icon"
					/>
					Contact
				</a>
			</div>
		</div>
	);
};

export default Web;

