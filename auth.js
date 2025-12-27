import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.signup = () => {
  const email = signupEmail.value;
  const pass = signupPassword.value;
  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => location.href = "/")
    .catch(e => alert(e.message));
};

window.login = () => {
  const email = loginEmail.value;
  const pass = loginPassword.value;
  signInWithEmailAndPassword(auth, email, pass)
    .then(() => location.href = "/")
    .catch(e => alert(e.message));
};

window.logout = () => signOut(auth);

onAuthStateChanged(auth, user => {
  if (!user && location.pathname === "/") {
    location.href = "/login.html";
  }
});
