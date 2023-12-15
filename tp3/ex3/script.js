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