import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Protect app
onAuthStateChanged(auth, user => {
  if (!user) location.href = "login.html";
});

// Logout
document.getElementById("logout").onclick = () => {
  signOut(auth).then(() => location.href = "login.html");
};

// Theme
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "";
};
if (localStorage.theme === "dark") document.body.classList.add("dark");

// Generate
window.generate = () => {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const html = `
  <html><body>
  <h1>${title}</h1>
  <p>${content}</p>
  </body></html>`;

  document.getElementById("preview").srcdoc = html;
};

// Export
window.exportHTML = () => {
  const blob = new Blob(
    [document.getElementById("preview").srcdoc],
    { type: "text/html" }
  );
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "samtiny.html";
  a.click();
};
