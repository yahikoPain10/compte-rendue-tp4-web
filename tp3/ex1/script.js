const table = document.getElementById("table");
const form = document.forms[0];

let nb = parseInt(prompt("Entrer un nombre: "));

if(!isNaN(nb)) {
  displayMultiplicationTable(nb, 10);
}

function displayMultiplicationTable(nb, nbLignes) {
  let html = "<tbody>";
  for(let i = 1; i <= nbLignes; i++) {
    html += `
      <tr>
        <td>${nb}</td>
        <td>&times;</td>
        <td>${i}</td>
        <td>=</td>
        <td>${nb * i}</td>
      </tr>
    `
  }
  table.innerHTML = `${html}</tbody>`;
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  let nb = parseInt(formData.get("nb"));
  let nbLignes = parseInt(formData.get("nbLignes"));
  if(!isNaN(nb) && !isNaN(nbLignes))
    displayMultiplicationTable(nb, nbLignes)
}

form.addEventListener("submit", handleSubmit);