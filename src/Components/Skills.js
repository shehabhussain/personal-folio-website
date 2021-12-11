import React from "react";
import { SkillsData } from "./Data/Skills";
import Separator from "./Separator";
import SkillCard from "./SkillCard";
import "./skills.css";

const Skills = () => {
	const data = SkillsData;
	return (
		<div className="skills">
			<Separator />
			<label className="section-title">Skills</label>
			<div className="skills-container">
				{data.map((item) => {
					return (
						<div className="skills-section">
							<div className="skills-list">
								{item.List.map(
									(
										skill
									) => {
										return (
											<SkillCard
												skill={
													skill
												}
											/>
										);
									}
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
