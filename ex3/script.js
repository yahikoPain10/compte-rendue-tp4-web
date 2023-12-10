const nouveauBtn = document.getElementById("nouveau");
const jouersTbody = document.getElementById("joueurs");
let tableauJoueurs = [];

nouveauBtn.addEventListener("click", function() {
  const partie = new Partie();
  partie.commencer();
  afficherJouers();
})

function Joueur(nom, nbTentatives) {
  this.nom = nom;
  this.nbTentatives = nbTentatives;
  this.html = function () {
    return `
      <tr>
        <td>${this.nom}</td>
        <td>${this.nbTentatives}</td>
      </tr>
    `
  }
}

function Partie() {
  this.joueur = null;
  this.nombre = null;

  this.commencer = function () {
    this.joueur = new Joueur(prompt("Quel est votre nom: ") || "Inconnue", 0);
    this.nombre = random(0, 100);
    let nb;
    while(true) {
      nb = parseInt(prompt("Devinez un nombre entre 0 et 100: "));
      if(isNaN(nb)) {
        alert("Entrez un nombre!");
        continue;
      }
      this.joueur.nbTentatives++;
      if(nb > this.nombre) alert("Plus grande");
      else if(nb < this.nombre) alert("Plus petite");
      else {
        this.finPartie();
        break;
      }
    }
  }

  this.finPartie = function () {
    alert(`
      Correct!
      Nom du jouer: ${this.joueur.nom}
      Nombre de tentatives effectuées: ${this.joueur.nbTentatives}
    `)
    tableauJoueurs.push(this.joueur);
  }
}

function random(min, max) {
  return Math.round((Math.random() * (max - min)) + min);
}

function afficherJouers() {
  jouersTbody.innerHTML = "";
  tableauJoueurs.forEach(function (joueur) {
    jouersTbody.innerHTML += joueur.html();
  })
}