import { auth, db } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let currentUser = null;

// 🔐 Protect App
onAuthStateChanged(auth, user => {
  if (!user) {
    location.href = "login.html";
  } else {
    currentUser = user;
    loadProjects();
  }
});

// 🚪 Logout
document.getElementById("logout").onclick = () => {
  signOut(auth).then(() => location.href = "login.html");
};

// 🌙 Theme
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "";
};
if (localStorage.theme === "dark") document.body.classList.add("dark");

// 🧠 Generate Preview
window.generate = () => {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const html = `
  <html>
  <body>
    <h1>${title}</h1>
    <p>${content}</p>
  </body>
  </html>`;

  document.getElementById("preview").srcdoc = html;
};

// 💾 Save Project
document.getElementById("saveBtn").onclick = async () => {
  if (!currentUser) return;

  await addDoc(collection(db, "projects"), {
    uid: currentUser.uid,
    title: document.getElementById("title").value,
    content: document.getElementById("content").value,
    created: Date.now()
  });

  loadProjects();
};

// 📂 Load Projects
async function loadProjects() {
  const list = document.getElementById("projectList");
  list.innerHTML = "";

  const q = query(
    collection(db, "projects"),
    where("uid", "==", currentUser.uid)
  );

  const snap = await getDocs(q);

  snap.forEach(doc => {
    const data = doc.data();
    const item = document.createElement("div");
    item.innerText = data.title || "Untitled";
    item.onclick = () => {
      document.getElementById("title").value = data.title;
      document.getElementById("content").value = data.content;
      generate();
    };
    list.appendChild(item);
  });
}

// 📤 Export
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
