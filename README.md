# Compte rendu de la technologie du web

**Prenom**: Mohammed Ali <br>
**Nom**: Essalihi <br>
**Groupe**: 4 <br>

## TP1

#### Exercice 1

```css
/* Bon selecteur pour h1 */
h1 {}

/* Tous les sous-titres h2 */
h2 {}

/* Les deux images */
img {}

/* La première image */
img:first-child {}

/* La dernière image */
img:last-child {}
img:nth-child(2) {}

/* Les paragraphes pairs */
p:nth-child(2n) {}

/* Les paragraphes impaires */
p:nth-child(2n+1) {}
```

#### Exercice 2

##### HTML

```html
<table>
<caption>Liste des inscrits</caption>
	<thead>
		<tr><th>Nom</th><th>Prenom</th><th>Code</th><th>Filiere</th></tr>
	</thead>
	<tbody>
		<tr><td>Azizi</td><td>Mohammed</td><td>N123456</td><td>SMI</td></tr>
		<tr><td>Kamili</td><td>Ahmed</td><td>N987654</td><td>SMI</td></tr>
		<tr><td>Touzani</td><td>Rachid</td><td>N67895</td><td>SMI</td></tr>
	</tbody>
</table>
```

##### CSS

```css
body {
  font-family: Arial;
  background-color: rgb(230, 249, 255);
}

caption {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

table {
  border-collapse: collapse;
}

td, th {
  border: 1px solid #000;
  text-align: center;
  padding: .5rem 2rem;
}

caption:only-child {
  color: #111;
}

caption {
  color: #000;
}

thead tr {
  background-color: #eee;
}

tbody tr {
  background-color: white;
}

tr:not(thead tr):hover {
  color: red;
}
```

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp1/ex2/screenshots/1.png)

### Exercice 3

#### HTML

```html
<form>
  <fieldset>
    <legend>Vos coordonnée</legend>
    <label>Nom complet: </label>
    <input class="champ" type="text" placeholder="Votre nom">
    <label>Date de naissance: </label>
    <input class="champ" type="date">
    <label>Email: </label>
    <input class="champ" type="email" placeholder="Votre email">
    <label>Site de votre institution: </label>
    <input class="champ" type="url" placeholder="http://www">
    <input type="radio" id="h" checked><label for="h">Homme</label>
    <input type="radio" id="h"><label for="f">Femme</label><br>
    <select><option selected>Choisir votre pays</option></select>
  </fieldset>
  <fieldset>
    <legend>Vos loisirs</legend>
    <input type="checkbox" name="l" id="1" checked><label for="1">Voyage</label>
    <input type="checkbox" name="l" id="2" checked><label for="2">Lecture</label>
    <input type="checkbox" name="l" id="3"><label for="3">Sport</label><br>
    <textarea rows="3" placeholder="Descrivez vos loisirs en detail"></textarea>
  </fieldset>
  <div>
    <input class="btn" type="reset" value="Effacer">
    <input class="btn" type="submit" value="Envoyer">
  </div>
</form>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

:root {
  --color: deepskyblue;
  --shadow: 0 0 .25rem var(--color);
  --label-width: 200px;
}

body {
  font-family: Arial;
}

form {
  width: 80%;
  margin: 0 auto;
}

fieldset {
  border-color: var(--color);
  box-shadow: var(--shadow);
  padding: 1rem;
  margin-bottom: 1rem;
}

legend {
  background-color: var(--color);
  color: white;
  box-shadow: var(--shadow);
}

label, input {
  margin-bottom: .5rem;
}

label {
  width: var(--label-width);
  display: inline-block;
}

input.champ {
  width: calc(100% - var(--label-width) - 6px);
}

select, textarea {
  width: 100%;
}

input.champ, select, textarea {
  border: 1px solid black;
  padding: .25rem;
}

input.champ:focus, select:focus, textarea:focus {
  box-shadow: var(--shadow);
  border-color: var(--color);
  outline: 0;
}

.btn {
  border: 1px solid var(--color);
  box-shadow: var(--shadow);
  width: calc(50% - 3px);
  display: inline-block;
  padding: 8px 6px;
  background: white;
  border-radius: 6px;
}
```

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp1/ex3/screenshots/1.png)

## TP2

### Exercice 1

#### HTML

```html
<div class="carre c1">Carre 1</div>
<div class="carre c2">Carre 2</div>
<div class="carre c3">Carre 3</div>
<div class="carre c4">Carre 4</div>
```

#### CSS

```css
:root {
  --w: 100px;
  --h: 100px;
  --gap: 20px; /*Utilisé pour la superposition des carrés*/
}
body {
  margin: 0;
  width: calc(2 * var(--w));
}

.carre {
  width: var(--w);
  height: var(--h);
  display: grid;
  place-items: center;
}

.c1 {background-color: aqua}
.c2 {background-color: plum}
.c3 {background-color: burlywood}
.c4 {background-color: darksalmon}

/* le positionnement absolu */
.carre.abs {position: absolute}
.c1.abs {left: 0;top: 0}
.c2.abs {left: 0;top: var(--h)}
.c3.abs {left: var(--w);top: 0}
.c4.abs {left: var(--w);top: var(--h)}

/* le positionnement flottant */
.c3.flt, .c4.flt {float: right}
.c3.flt {margin-top: calc(-2 * var(--h))}
.c4.flt {margin-top: calc(-1 * var(--h))}

/* le positionnement relatif */
.carre.rel {position: relative}
.c1.rel {left: 0;top: 0}
.c3.rel, .c4.rel {left: var(--w); top: calc(-2 * var(--h))}

/* Superposition des carrés */
.carre.sup {position: absolute}
.c1.sup {
  left: 0;
  top: 0;
}
.c2.sup {
  left: calc(var(--w) - var(--gap));
  top: calc(var(--h) - var(--gap));
  z-index: 1;
}
.c3.sup {
  left: 0;
  top: calc(var(--h) + var(--gap));
}
.c4.sup {
  left: calc(var(--w) - var(--gap));
  top: calc(var(--h) * 2);
}
```

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp2/ex1/screenshots/1.png)

### Exercice 2

#### HTML

```html
<div class="card">
	<ion-icon name="add-sharp"></ion-icon>
	<div>22 Mars 2022</div>
</div>
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
```

#### CSS

```css
.card {
  width: 150px;
  height: 150px;
  background: url("https://loremflickr.com/150/150") center / cover no-repeat;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
}
```

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp2/ex2/screenshots/1.png)

### Exercice 3

#### HTML

```html
<div class="card">
	<img src="https://loremflickr.com/100/100">
	<div>22 Mars 2022</div>
	<h3>Lorem, ipsum.</h3>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit necessitatibus ducimus expedita voluptatum ut minus aliquam quasi cumque. Soluta inventore odit quam ut quibusdam error perspiciatis dolorum ea, possimus distinctio.</p>
	<button>Voir mon profil</button>
</div>
<div class="card">
	<img src="https://loremflickr.com/200/200">
	<div>22 Mars 2022</div>
	<h3>Lorem, ipsum.</h3>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit necessitatibus ducimus expedita voluptatum ut minus aliquam quasi cumque. Soluta inventore odit quam ut quibusdam error perspiciatis dolorum ea, possimus distinctio.</p>
	<button>Voir mon profil</button>
</div>
```

#### CSS

```css
body {
  display: flex;
  gap: 2rem;
}

.card {
  color: white;
  background-color: #3e6abc;
  border-radius: 8px;
  width: 200px;
  padding: 16px;
  text-align: center;
  margin-top: 66px;
}

.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: -66px;
}
```

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp2/ex3/screenshots/1.png)

## TP3

### Exercice 1

#### HTML

```html
<form>
  <input type="number" name="nb">
  <input type="number" name="nbLignes">
  <input type="submit" value="Generer le tableau">
</form>
<table id="table"></table>
```

#### JavaScript

```jsx
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
```

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp3/ex1/screenshots/1.png)

### Exercice 2

#### JavaScript

```jsx
const sum = (a,b) => a + b;
console.log(sum(6, 4))
```

#### Resulat

```bash
10
```

### Exercice 3

#### HTML

```html
<form>
  <input type="number" name="nb" placeholder="Nombre" required><br>
  <input type="radio" id="1" name="choix" value="iterative" required checked>
  <label for="1">Iterative</label><br>
  <input id="2" type="radio" name="choix" value="recursive" required>
  <label for="2">Recursive</label><br>
  <input type="submit" value="Calculer la fonction Fibonacci">
</form>
```

#### JavaScript

```jsx
const form = document.forms[0];

function fibRecursive(nb) {
  if(nb === 0) return 0;
  if(nb === 1) return 1;
  return fibRecursive(nb - 1) + fibRecursive(nb - 2);
}

function fibIterative(nb) {
  let f0 = 0, f1 = 1, f = 0;
  for(let i = 2; i <= nb; i++) {
    f = f0 + f1;
    f0 = f1;
    f1 = f;
  }
  if(nb === 0) return f0;
  if(nb === 1) return f1;
  return f;
}

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const choix = formData.get("choix");
  const nb = parseInt(formData.get("nb"));

  if(isNaN(nb)) {
    alert("Entrer un nombre");
    return;
  }

  if(choix === "iterative") {
    alert(`Fibonacci avec une fonction iterative est: ${fibIterative(nb)}`);
  }
  else {
    alert(`Fibonacci avec une fonction recursive est: ${fibRecursive(nb)}`);
  }

}

form.addEventListener("submit", handleSubmit);
```

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp3/ex3/screenshots/1.png)

### Exercice 4

#### HTML

```html
<form>
  <input type="text" name="text" placeholder="Chaine de caracteres" required><br>
  <input type="radio" id="1" name="choix" value="iterative" required checked>
  <label for="1">Boucle iterative</label><br>
  <input id="2" type="radio" name="choix" value="string" required>
  <label for="2">Fonctions String</label><br>
  <input type="submit" value="Inverser">
</form>
```

#### JavaScript

```jsx
const form = document.forms[0];

function revIterative(text) {
  let result = "";
  for(let i = text.length - 1; i >= 0; i--)
    result += text.charAt(i);
  return result;
}

function revString(text) {
  return text.split("").reverse().join('');
}

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const text = formData.get("text");
  const choix = formData.get("choix");

  alert(choix === "iterative" ? revIterative(text) : revString(text));
}

form.addEventListener("submit", handleSubmit);
```

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp3/ex4/screenshots/1.png)

### Exercice 5

#### JavaScript

```jsx
// 1
function sysDate(sep) {
  const now = new Date();
  return [
    now.getDate().toString().padStart(2, "0"),
    (now.getMonth() + 1).toString().padStart(2, "0"),
    now.getFullYear().toString()
  ].join(sep);
}

// 2
function getSystemMonthName() {
  const month = new Date().getMonth();
  return [
    "January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"
  ][month];
}

// 3
function calcAge(date) {

  if(!(date instanceof Date))
    throw new TypeError("Invalid date");

  const diff = Date.now() - date.getTime();
  if(diff <= 0) return 0;

  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
}

console.log(sysDate('-'));
console.log(getSystemMonthName());
console.log(calcAge(new Date(2004, 6, 23)));
```

### Resultat

```bash
15-12-2023
December
19
```

## TP4

### Exercice 1

#### HTML

```html
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

```

#### CSS

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

#### JavaScript

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

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex1/screenshots/1.png)

### Exercice 2

#### HTML

```html
<input type="number" id="ordre" placeholder="Ordre" />
<button id="generator">Generer le polynome</button><br><br>
<div id="polynome"></div><br>
<button hidden id="calc">Calculer</button><br><br>
<div id="result"></div>
```

#### CSS

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

#### JavaScript

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

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex2/screenshots/1.png)

### Exercice 3

#### HTML

```html
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
```

#### CSS

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

#### JavaScript

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

#### Captures d'écran

![1.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex3/screenshots/1.png)

![2.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex3/screenshots/2.png)

![3.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex3/screenshots/3.png)

![4.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex3/screenshots/4.png)

![5.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex3/screenshots/5.png)

![6.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex3/screenshots/6.png)

![7.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex3/screenshots/7.png)

![8.png](https://raw.githubusercontent.com/yahikoPain10/compte-rendue-tp4-web/main/tp4/ex3/screenshots/8.png)