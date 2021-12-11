import React from "react";
import "./contact.css";
import Separator from "./Separator";
import SocialMedia from "./CommonFiles/SocialMedia";


const Contact = () => {
	return (
		<div className="contact">
			<Separator />

			<label className="section-title">Contact</label>
			<div className="contact-container">
				<div className="contact-left">
					<p className="contact-para">
						Want to get in touch? Contact me
						on any social media platform.
					</p>
					<SocialMedia />
				</div>
				
				<div className="download">
					<a
						download
						href={
							require("../Components/assets/shehab_resume.pdf")
								.default
						}
					>
						<img
							src={
								require("./assets/download.png")
									.default
							}
							alt="download"
							className="download-icon"
						/>
						Download Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
