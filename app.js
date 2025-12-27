let html = "";

function generate() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  html = `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <style>
    body {
      font-family: system-ui;
      padding: 40px;
      background: #f4f7ff;
    }
    h1 { color: #6366f1; }
  </style>
</head>
<body>
  <h1>${title}</h1>
  <p>${desc}</p>
</body>
</html>
`;

  document.getElementById("preview").srcdoc = html;
}

function exportHTML() {
  const blob = new Blob([html], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "website.html";
  a.click();
}

/* THEME TOGGLE — FIXED */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  const body = document.body;
  const current = body.getAttribute("data-theme");
  body.setAttribute(
    "data-theme",
    current === "light" ? "dark" : "light"
  );
};
