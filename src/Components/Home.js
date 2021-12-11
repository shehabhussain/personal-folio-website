import React from "react";
import "./home.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
	return (
		<div className="home">
			<div>
				<Header />
			</div>
			<div>
				<Body />
			</div>
			<div className="foot-color">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
