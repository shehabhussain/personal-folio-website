import React from "react";
import About from "./About";
import "./body.css";
import Contact from "./Contact";
import Form from "./Form";
import Projects from "./Projects";
import Skills from "./Skills";

const Body = () => {
	return (
		<div className="body">
			<section id="about">
				<About />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="project">
				<Projects />
			</section>
			<section id="contact">
				<Contact />
			</section>
			<section id="form">
             <Form />
			</section>
		</div>
	);
};

export default Body;
