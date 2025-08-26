import "./style.css";
import { registerSW } from "virtual:pwa-register";

/**element de la todo ----------------------------- */
const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const actions = document.getElementById("actions");
/** fonction du tableau---------------------------- */
const add = document.getElementById("add");
const clrBtn = document.getElementById("clrBtn");
const counterEl = document.getElementById("counterEl");
console.log("counterEl =", counterEl);
/**tableaux stockage des éléments */
let tabElements = [];
console.log(tabElements);

/**fonction RENDER */
function render() {
  // preventDefault();
  list.innerHTML = "";

  for (let el = 0; el < tabElements.length; el++) {
    const name = tabElements[el];
    console.log(name);
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
    console.log(tabElements);

    console.log("Count =", tabElements.length);
  }
  counterEl.textContent = `${tabElements.length} tâche(s)`;
  clrBtn
}
form.addEventListener('submit', (e) => {
  
  e.preventDefault();  
  const a = input.value.trim();
  if (!a) return;   // si la chaîne est vide après trim, on arrête
  tabElements.unshift(a);
  render();
  input.value = '';

  console.log(tabElements);

 
});
clrBtn.addEventListener('click', (e) => {
  if (tabElements.length === 0) {
    return;
  
  }
  const reponse = confirm("Voulez-vous vraiment supprimer toutes les tâches ?");
  if (!reponse) {
    return; // l’utilisateur a cliqué sur Annuler
  }

  tabElements = [];   // vider
  render();

});
render();
