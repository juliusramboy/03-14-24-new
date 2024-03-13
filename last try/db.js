 
 // Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTSmW6RXc_1ENdvVpUEAsyKFAH_1qYbeg",
  authDomain: "it-project-442fc.firebaseapp.com",
  databaseURL: "https://it-project-442fc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "it-project-442fc",
  storageBucket: "it-project-442fc.appspot.com",
  messagingSenderId: "401060953684",
  appId: "1:401060953684:web:b22f0f52c54e6bb0d177c1",
  measurementId: "G-0D7TM1ZP3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const username = document.getElementById('username');
const email = document.getElementById('email'); 
const password = document.getElementById('password');
const submit = document.getElementById('submitsignup');


submit.addEventListener('submit',()=>{
  const reference = ref(db, 'user/' + username.value);
  set(reference, {
      usermame: username.value,
      email: email.value,
      password: password.value
  });

  if(username.value == '' || username.value  == null){
    alert('Enter username');
  }
});

