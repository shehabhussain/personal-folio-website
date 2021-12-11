import React from "react";
import "./about.css";
import SocialMedia from "./CommonFiles/SocialMedia";

const About = () => {
	return (
		<div className="about">
			<div className="about-top">
				<div className="about-info">
					<h2>
						Hi There, I am <br />{" "}
						<span className="info-name">
							Shehab Hussain.
						</span>{" "}
						<br />I love experimenting with
						the web.{" "}
					</h2>
				</div>
				<div className="about-photo">
					<img
						src={
							require("./assets/coder.png")
								.default
						}
						alt="coder"
						className="picture"
					/>
				</div>
			</div>
			<div className="about-bottom"></div>
			<SocialMedia />
		</div>
	);
};

export default About;
