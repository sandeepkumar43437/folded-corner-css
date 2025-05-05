
function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(error => console.log(`Error loading ${file}:`, error));
}

includeHTML("header", "./header.html");
includeHTML("footer", "./footer.html");
