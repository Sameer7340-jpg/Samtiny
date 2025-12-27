let generatedHTML = "";

function generate() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  generatedHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <style>
    body { font-family: Arial; padding: 30px; background:#f4f6fb; }
    h1 { color:#6366f1; }
  </style>
</head>
<body>
  <h1>${title}</h1>
  <p>${desc}</p>
</body>
</html>
`;

  document.getElementById("preview").srcdoc = generatedHTML;
}

function exportHTML() {
  const blob = new Blob([generatedHTML], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "website.html";
  link.click();
}

// Dark / Light mode
const toggle = document.getElementById("modeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  toggle.textContent =
    document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
};
