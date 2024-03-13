// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAWaSrYQPNLprAYy1fhYaJq3Sj1f5UOgSM",
 authDomain: "finalproj-b9ade.firebaseapp.com",
 projectId: "finalproj-b9ade",
 storageBucket: "finalproj-b9ade.appspot.com",
 messagingSenderId: "95102138737",
 appId: "1:95102138737:web:f297e49a4c2291ed41ded0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const buttonSignup = document.getElementById("button_signup");
const buttonSignin = document.getElementById("button_signin");

buttonSignup.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission
  let name = document.getElementById("name").value;
  let nohp = document.getElementById("nohp").value;
  let emailSignup = document.getElementById("email_signup").value;
  let passwordSignup = document.getElementById("psw_signup").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
      .then((userCredentials) => {
          // signup
          const user = userCredentials.user;
          set(ref(database, "users/" + user.uid), {
              name: name,
              nohp: nohp,
              email: emailSignup,
              password: passwordSignup
          });
      })
      .then(() => {
          alert("User registered successfully");
      })
      .catch((error) => {
          alert(error.message);
      });
});

buttonSignin.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_sign").value; // Corrected ID
  
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
      .then((userCredentials) => {
          //signin
          const user = userCredentials.user;
          location.href = "http://127.0.0.1:5500/index.html"
      })
      .catch((error) => {
          alert(error.message);
      });
})