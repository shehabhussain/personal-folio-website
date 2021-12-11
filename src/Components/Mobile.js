import React from "react";
import "./mobile.css";

const Mobile = ({ isOpen, setIsOpen }) => {
	return (
		<div className="mobile">
			<div
				className="close-icon"
				onClick={() => setIsOpen(!isOpen)}
			>
					<img
					src={
						require("./assets/close.png")
							.default
					}
					alt="close"
					className="menu-icon"
				/>
			</div>
			<div className="mobile-options">
				<div className="mobile-option">
					<a href="#skills">
					<img
					src={
						require("./assets/skill.png")
							.default
					}
					alt="close"
					className="mobile-menu-icon"
				/>
						Skills
					</a>
				</div>
				<div className="mobile-option">
					<a href="#about">
					<img
					src={
						require("./assets/about.png")
							.default
					}
					alt="close"
					className="mobile-menu-icon"
				/>
						About
					</a>
				</div>
				<div className="mobile-option">
					<a href="#project">
					<img
					src={
						require("./assets/project.png")
							.default
					}
					alt="close"
					className="mobile-menu-icon"
				/>
						Projects
					</a>
				</div>
				<div className="mobile-option">
					<a href="#contact">
					<img
					src={
						require("./assets/contact.png")
							.default
					}
					alt="close"
					className="mobile-menu-icon"
				/>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
