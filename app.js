// 🌙 DARK / LIGHT MODE
const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// 🚀 BUILDER LOGIC
function generate() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  alert(`Website Generated!\n\nTitle: ${title}\nDescription: ${desc}`);
}

function exportHTML() {
  alert("Export feature coming next 🚀");
}
