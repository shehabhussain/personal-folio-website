import React from "react";
import { SocialData } from "../Data/SocialData";
import "./socialmedia.css";

const SocialMedia = () => {
	const data = SocialData;
	return (
		<div className="social-media">
			{data.map((item) => {
				return (
					<a href={item.link}>
						<div className="social-icon-div">
							<img
								src={item.icon}
								alt="pic"
								className="social-icon"
							/>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default SocialMedia;
