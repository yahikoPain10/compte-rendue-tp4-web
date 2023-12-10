# TP4

**Prenom**: Mohammed Ali <br>
**Nom**: Essalihi <br>
**Groupe**: 4 <br>

## Exercice 1

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
  <title>Exercice 1</title>
</head>
<body>
  <form>
    <fieldset>
      <legend>Ajouter un etudiant</legend>
      <input type="text" name="cne" placeholder="CNE" required><br>
      <input type="text" name="nom" placeholder="Nom" required><br>
      <input type="radio" id="m" name="genre" value="Masculin" checked required>
      <label for="m">Masculin</label>
      <input type="radio" id="f" name="genre" value="Feminin" required>
      <label for="f">Feminin</label><br>
      <input type="text" name="formation" placeholder="Formation" required><br><br>
      <input type="submit" value="Ajouter">
    </fieldset>
  </form>

  <ul id="etudiants"></ul>
</body>
</html>

```

### CSS

```css
body {
  font-family: sans-serif;
}

ul#etudiants {
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: .5rem;
  border-radius: .5rem;
  background-color: whitesmoke;
}

.masculin, .feminin {
  font-size: 3rem;
}

.masculin::after {
  color: cornflowerblue;
  content: "♂️";
}

.feminin::after {
  color: palevioletred;
  content: "♀️";
}

```

### JavaScript

```jsx
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

```

### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex1/screenshots/1.png)

## Exercice 2

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercice 2</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
</head>
<body>
  <input type="number" id="ordre" placeholder="Ordre" />
  <button id="generator">Generer le polynome</button><br><br>
  <div id="polynome"></div><br>
  <button hidden id="calc">Calculer</button><br><br>
  <div id="result"></div>
</body>
</html>
```

### CSS

```css
#polynome input {
  width: 40px;
  text-align: center;
}
#result {
  color: red;
  font-size: 2rem;
}
```

### JavaScript

```jsx
const ordreInput = document.getElementById("ordre");
const generatorBtn = document.getElementById("generator");
const polynomeContainer = document.getElementById("polynome");
const calcBtn = document.getElementById("calc");
const resultEl = document.getElementById("result");

function generePolynome(ordre) {
  let els = [];
  for(let i = 0; i <= ordre; i++) {
    els.push(`
      <input type="number" placeholder="C${i + 1}" data-exp="${ordre - i}" />
      <span>x<sup>${ordre - i}</sup></span>
    `)
  }
  polynomeContainer.innerHTML = `
    P(<input type="number" placeholder="x" id="x" />) =
    ${els.join(" + ")}
  `
}

generatorBtn.addEventListener("click", function() {
  let ordre = parseInt(ordreInput.value);
  if(!isNaN(ordre) && ordre >= 0) {
    generePolynome(ordre);
    calcBtn.hidden = false;
  }
})

calcBtn.addEventListener("click", function() {
  const coeffsInps = polynomeContainer.querySelectorAll("[data-exp]");
  const x = parseInt(document.getElementById("x").value);
  let result = 0;

  if(isNaN(x)) return;

  coeffsInps.forEach(inp => {
    let coeff = parseInt(inp.value);
    let exp = parseInt(inp.getAttribute("data-exp"));
    result += isNaN(coeff) ? 0 : coeff * Math.pow(x, exp);
  })
  
  resultEl.textContent = result;
})
```

### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex2/screenshots/1.png)

## Exercice 3

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercice 3</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
</head>
<body>
  <h1>Jeu devine</h1>
  <button id="nouveau">Nouvelle partie</button><br><br>
  <table>
    <thead>
      <tr>
        <th>Joueur</th>
        <th>Nombre de tentatives effectuées</th>
      </tr>
    </thead>
    <tbody id="joueurs"></tbody>
  </table>
</body>
</html>
```

### CSS

```css
body {
  font-family: sans-serif;
}

table {
  border-collapse: collapse;
}

td, th {
  padding: .5rem 1rem;
  border: 1px solid gray;
  text-align: center;
}
```

### JavaScript

```jsx
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
```

### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex3/screenshots/1.png)

![2.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex3/screenshots/2.png)

![3.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex3/screenshots/3.png)

![4.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex3/screenshots/4.png)

![5.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex3/screenshots/5.png)

![6.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex3/screenshots/6.png)

![7.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex3/screenshots/7.png)

![8.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/ex3/screenshots/8.png)