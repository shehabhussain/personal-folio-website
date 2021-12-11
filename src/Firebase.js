import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: "portfolio-website-form-fb7e4.firebaseapp.com",
	projectId: "portfolio-website-form-fb7e4",
	storageBucket: "portfolio-website-form-fb7e4.appspot.com",
	messagingSenderId: "449142162568",
	appId: "1:449142162568:web:d8055639def16b635d0b3d",
	measurementId: "G-41JLE3EDZN",
};

 initializeApp(firebaseConfig);
const db = getFirestore();  
export { db };
