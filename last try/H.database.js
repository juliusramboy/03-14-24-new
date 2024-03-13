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
            
        }
    });
} else {
    // No user signed in
    // You can handle this case if needed
}
});