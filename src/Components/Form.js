
import React, { useState } from "react";
import "./form.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
// import { getDatabase, ref, set } from "firebase/database";

const Form = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// const db = getDatabase();

		addDoc(collection(db, "formUsers"), {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone,
			message: message,
		}).then(() => {
			alert(
				"Your Message has been submitted successfully 👍 "
			);
		});

		// set(ref(db, "formUsers"), {

		setFirstName("");
		setLastName("");
		setEmail("");
		setPhone("");
		setMessage("");
	};

	return (
		<div className="form">
			<form className="contact-form" onSubmit={handleSubmit}>
				<label className="labels">
					<h3>First Name</h3>
				</label>
				<input
					className="fn-txt"
					type="text"
					value={firstName}
					onChange={(e) =>
						setFirstName(e.target.value)
					}
				></input>
				<label className="labels">
					<h3>Last Name</h3>
				</label>
				<input
					className="ln-txt"
					type="text"
					value={lastName}
					onChange={(e) =>
						setLastName(e.target.value)
					}
				></input>
				<label className="labels">
					<h3> E-mail</h3>
				</label>
				<input
					className="fn-txt"
					type="email"
					value={email}
					onChange={(e) =>
						setEmail(e.target.value)
					}
				></input>
				<label className="labels">
					<h3> Phone number</h3>
				</label>
				<input
					className="fn-txt"
					type="tel"
					required
					minLength="10"
					maxLength="10"
					value={phone}
					onChange={(e) =>
						setPhone(e.target.value)
					}
				></input>
				<label className="labels">
					<h3>Message</h3>
				</label>
				<textarea
					className="message"
					type="text"
					required
					minlenght="10"
					maxLength="500"
					value={message}
					onChange={(e) =>
						setMessage(e.target.value)
					}
				></textarea>
				<input className="submit-btn" type="submit" />
			</form>
		</div>
	);
};

export default Form;

