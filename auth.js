import { auth, db } from "./firebase-config.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// DOM Elements
const authBtn = document.getElementById("authActionBtn");

// Track Auth State Globally
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // User is signed in
    console.log("User logged in:", user.email);
    
    // Update Auth Button UI across all pages
    if (authBtn) {
      // Create a nice avatar based on name or email
      const displayName = user.displayName || user.email.split('@')[0];
      const initial = displayName.charAt(0).toUpperCase();
      
      authBtn.innerHTML = `<div class="user-avatar-mini" title="Signed in as ${displayName}. Click to logout.">${initial}</div>`;
      
      // Override click to Logout instead of going to login.html
      authBtn.onclick = (e) => {
        e.preventDefault();
        const confirmLogout = confirm("Are you sure you want to log out?");
        if(confirmLogout) {
          logOutUser();
        }
      };
    }

    // If we are on the login page and just logged in, redirect to index
    if (window.location.pathname.includes('login.html')) {
        window.location.href = "index.html";
    }

  } else {
    // User is signed out
    console.log("User signed out");
    
    // Revert Auth Button UI to default Person icon
    if (authBtn) {
      authBtn.innerHTML = `<span class="material-symbols-outlined">person</span>`;
      authBtn.onclick = () => {
        window.location.href = "login.html";
      };
    }
  }
});

// Authentication Methods
export async function registerUser(name, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Set display name in Firebase Auth
    await updateProfile(user, { displayName: name });
    
    // Also save user profile to Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: name,
      email: email,
      createdAt: new Date()
    });

    return { success: true, user };
  } catch (error) {
    console.error("Error registering:", error);
    return { success: false, message: error.message };
  }
}

export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Error logging in:", error);
    return { success: false, message: error.message };
  }
}

export async function logOutUser() {
  try {
    await signOut(auth);
    // Optional redirect after logout, or just let state change handle UI
    // if viewing a protected route, should redirect.
  } catch (error) {
    console.error("Error signing out:", error);
  }
}
