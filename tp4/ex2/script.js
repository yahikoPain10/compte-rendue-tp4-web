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