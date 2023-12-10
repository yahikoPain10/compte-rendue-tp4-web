const form = document.forms[0];
const etudiantsEl = document.getElementById("etudiants");
const smi = new Filiere();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  smi.ajouter(new Etudiant(Object.fromEntries(formData)));
  etudiantsEl.innerHTML = smi.affiche();
})

function Etudiant({nom, cne, genre, formation}) {
  this.nom = nom;
  this.cne = cne;
  this.formation = formation;
  this.genre = genre;
  this.affiche = function() {
    return `
      <li class="card">
        <span class="${genre == "Feminin" ? "feminin" : "masculin"}"></span>
        <div>
          <strong>CNE: </strong>
          <span>${this.cne}</span>
        </div>
        <div>
          <strong>Nom: </strong>
          <span>${this.nom}</span>
        </div>
        <div>
          <strong>Formation: </strong>
          <span>${this.formation}</span>
        </div>
      </li>
    `
  }
}

function Filiere() {
  this.tableau = [];
  this.ajouter = function(etudiant) {
    this.tableau.push(etudiant)
  }
  this.affiche = function () {
    let html = "";
    this.tableau.forEach(function (e) {
      html += e.affiche();
    })
    return html;
  }
}