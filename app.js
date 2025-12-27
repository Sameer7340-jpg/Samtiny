function generate() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  document.getElementById("preview").srcdoc = `
    <h1>${title}</h1>
    <p>${desc}</p>
  `;
}
