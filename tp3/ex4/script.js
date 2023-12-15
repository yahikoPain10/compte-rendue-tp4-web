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