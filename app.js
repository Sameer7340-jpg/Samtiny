import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    msg.innerText = "Login successful ✅";
  } catch (e) {
    msg.innerText = e.message;
  }
};

window.signup = async () => {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    msg.innerText = "Account created 🎉";
  } catch (e) {
    msg.innerText = e.message;
  }
};

/* Theme toggle */
const toggle = document.getElementById("themeToggle");

if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}

toggle.onchange = () => {
  document.body.classList.toggle("dark");
  localStorage.theme =
    document.body.classList.contains("dark") ? "dark" : "";
};
