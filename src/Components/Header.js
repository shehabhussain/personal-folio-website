import React, { useState } from "react";
import Web from "./Web";
import Mobile from "./Mobile";
import "./header.css";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="header">
			<div className="logo">
				<h1> Shehab Hussain </h1>
			</div>
			<div className="menu"></div>
			<div className="web-menu">
				<Web />
			</div>
			<div className="mobile-menu">
				<div onClick={() => setIsOpen(!isOpen)}>
				<img
					src={
						require("./assets/menu.png")
							.default
					}
					alt="close"
					className="menu-icon"
				/>
				</div>
				{isOpen && (
					<Mobile
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
				)}
			</div>
		</div>
	);
};

export default Header;
