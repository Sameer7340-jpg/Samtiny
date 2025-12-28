import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

document.getElementById("loginBtn").onclick = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => location.href = "index.html")
    .catch(err => msg.innerText = err.message);
};

document.getElementById("signupBtn").onclick = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => location.href = "index.html")
    .catch(err => msg.innerText = err.message);
};

// Theme
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "";
};

if (localStorage.theme === "dark") document.body.classList.add("dark");
