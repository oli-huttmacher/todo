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

//fonction RENDER-----------------------------------------
function render() {
  // preventDefault();
  //affiche l'input vide achaque render();
  list.innerHTML = "";
  //boucle de création -------------------------------------
  //let el = nb et objTab[el] = name
  for (let el = 0; el < tabElements.length; el++) {
    const item = tabElements[el]; // { name, id, bool }

    const li = document.createElement("li");
    li.classList = "list-name";

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.bool; // ← coche si true
    //span
    const span = document.createElement("span");
    span.textContent = item.name;
    if (item.bool) {
      span.classList.add("done");
    }

    const garbage = document.createElement("button");
    garbage.textContent = "x";
    garbage.dataset.index = el; // ← ici on met l’index du tableau

    label.appendChild(checkbox);
    label.appendChild(span);
    li.appendChild(label);
    li.appendChild(garbage);
    list.appendChild(li);

    // Suppression
    garbage.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      tabElements.splice(index, 1);

      render();
    });
    //fait ou pas fait done:
    checkbox.addEventListener("change", (e) => {
      console.log(tabElements);
      tabElements[el].bool = checkbox.checked;
      render();
      if (tabElements[0].bool === true) {
        span.classList.add("done");
      }
    });
  }

  counterEl.textContent = `${tabElements.length} tâche(s)`;
  clrBtn;
}
//fonction ajout un name-------------------------------------------------
//function -------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const a = input.value.trim();
  if (!a) return; // si la chaîne est vide après trim, on arrête

  //construction du tableaux : name:,id:,bool:
  tabElements.unshift({
    name: a,
    id: Date.now(), // identifiant unique
    bool: false, // non coché au départ
  });
  //render---
  render();
  //vide l'input---
  input.value = "";

  console.log(tabElements);
});

//Fonction Suppression tout ---------------------------------------------------------
//function------------
clrBtn.addEventListener("click", (e) => {
  if (tabElements.length === 0) {
    return;
  }
  const reponse = confirm("Voulez-vous vraiment supprimer toutes les tâches ?");
  if (!reponse) {
    return; // l’utilisateur a cliqué sur Annuler
  }

  tabElements = []; // vider
  render();
});
//fuction la tâche est faite
// checkbox.addEventListener("click", (e) => {});
render();
