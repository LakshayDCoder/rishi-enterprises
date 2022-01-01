import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB3rWFyan9RC0z9W4yXiVPjSLPJgcFhW9I",
	authDomain: "dostave-33085.firebaseapp.com",
	projectId: "dostave-33085",
	storageBucket: "dostave-33085.appspot.com",
	messagingSenderId: "772425773371",
	appId: "1:772425773371:web:631c4af9ba35896ca1471e",
	measurementId: "G-C26HNJXSE8",
};

let firebaseApp;

if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
}

export const app = firebaseApp;
export const auth = getAuth(app);
export const db = getFirestore(app);
