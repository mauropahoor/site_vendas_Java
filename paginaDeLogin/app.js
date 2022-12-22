/*// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
*/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnOso_p8FPwe4DsLCMCTvNpFjiuWppYpY",
    authDomain: "sitedevendas-dba5c.firebaseapp.com",
    projectId: "sitedevendas-dba5c",
    storageBucket: "sitedevendas-dba5c.appspot.com",
    messagingSenderId: "771408312784",
    appId: "1:771408312784:web:5ab53d38113b6c3d19a1d5",
    measurementId: "G-N568NZ9ZH9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
/* const db = firebase.firestore(); */
/* const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth(); */

//firebase.initializeApp(config);

function createUser(){

    let newUserName = document.getElementById("newUserName");
    let newUserEmail = document.getElementById("newUserEmail");
    let newUserPassword = document.getElementById("newUserPassword");
    let newUserSecondPassword = document.getElementById("newUserSecondPassword");
    let RegisterErrorMessage = document.getElementById("registerErrorMessage");

    if(newUserName.value != "" && newUserPassword.value == newUserSecondPassword.value){
        firebase.auth().createUserWithEmailAndPassword(newUserEmail.value, newUserPassword.value)
        .then(user => {
            //alert("Cadastrado com sucesso");
            window.location.href = "../registered/registered.html";
        }).catch(error => {
            //alert("Falha ao cadastrar");
            RegisterErrorMessage.innerHTML = error;

        })
    } else if(newUserName.value == ""){
        RegisterErrorMessage.innerHTML = "Error: Name field can't be empty.";
    } else{
        RegisterErrorMessage.innerHTML = "Error: Passwords are different.";
    }
}

function login(){

    let userEmail = document.getElementById("userEmail");
    let userPassword = document.getElementById("userPassword");
    let loginErrorMessage = document.getElementById("loginErrorMessage");

    auth.signInWithEmailAndPassword(userEmail.value, userPassword.value)
    .then(loggedUser => {
        window.location.href = "../../index.html";
    }).catch(error => {
       loginErrorMessage.innerHTML = error;
    })

}

// Signs-in Friendly Chat.
async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}