import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTDb-RiuIKmXC4MJJQgSidWbLylNO-NHw",
  authDomain: "mayapetsproject.firebaseapp.com",
  projectId: "mayapetsproject",
  storageBucket: "mayapetsproject.firebasestorage.app",
  messagingSenderId: "988493888178",
  appId: "1:988493888178:web:a1984309337782333a27ab",
  measurementId: "G-NS8119FGW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
