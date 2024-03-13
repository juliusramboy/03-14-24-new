import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWaSrYQPNLprAYy1fhYaJq3Sj1f5UOgSM",
    authDomain: "finalproj-b9ade.firebaseapp.com",
    databaseURL: "https://finalproj-b9ade-default-rtdb.firebaseio.com",
    projectId: "finalproj-b9ade",
    storageBucket: "finalproj-b9ade.appspot.com",
    messagingSenderId: "95102138737",
    appId: "1:95102138737:web:f297e49a4c2291ed41ded0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Element references
const userEmailElement = document.getElementById("Email");
const userSubscriptionElement = document.getElementById("subscription");
const userLanguageElement = document.getElementById("lang");
const userRatingsElement = document.getElementById("phoneNumber");
const userNameElement = document.getElementById("name");

// Listen for changes in authentication state
onAuthStateChanged(auth, (user) => {
if (user) {
    // User is signed in
    const userId = user.uid;
    const userRef = ref(db, `users/${userId}`);

    // Fetch user data from the database
    onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
            // Update HTML elements with user data
            document.getElementById("name").textContent = userData.name || "Username";
            document.getElementById("email").textContent = userData.email || "Email";
            document.getElementById("number").textContent = userData.nohp || "Phone Number";
        }
    });
} else {
    // No user signed in
    // You can handle this case if needed
}
});

// Listen for clicks on the "Change Password" button
document.getElementById("changepass").addEventListener("click", () => {
const user = auth.currentUser;
if (user) {
    const providerId = user.providerData[0].providerId;
    if (providerId === "password") {
        const newPassword = prompt("Enter your new password:");
        if (newPassword !== null && newPassword !== "") {
            user.updatePassword(newPassword)
                .then(() => {
                    alert("Password changed successfully!");
                })
                .catch((error) => {
                    console.error("Error changing password:", error);
                    alert("Error changing password. Please try again.");
                });
        } else {
            alert("Password change canceled or invalid password!");
        }
    } else {
        alert("You are not authenticated with a password. Please use the provider's interface to manage your credentials.");
    }
} else {
    alert("No user signed in. Please sign in again.");
}
});

// Listen for clicks on the sign-out button
document.getElementById("Button_signout").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            alert("Logged out successfully!");
            window.location.href = "http://127.0.0.1:5500/login.html"; // Redirect to login page
        })
        .catch((error) => {
            // error happened.
            console.error("Error signing out:", error);
        });
});