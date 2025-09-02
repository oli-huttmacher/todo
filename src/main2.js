let tablObj = [
  { id: 1, name: "oli", bool: false },
  { id: 2, name: "didi", bool: false },
  { id: 3, name: "val", bool: false },
];
//filter garde certain objet garde l'objet avec id 1
const filter = tablObj.filter((el) => el.id === 1);
console.log(filter);
const filterA = filter[0].bool;
console.log(filterA);
//find() trouver un objet
const find = tablObj.find()

//comment ajuter a tabOjet[0] une clé et sa valeurs
tablObj[0].prenom = "koko";
console.log(tablObj);

//
//je creer un objet tableauName qui a un tableaux du nom que l'on ajoute
//avec un id qui est la place du tableaux et un bool qui est false
//et prend sa place dans la list de l'ul en <li>oli</li>
//si j'appui sur la crois alors la valeurs prend true et supprime le nom de la liste
//comment i je connais ton id et je verifie ta place dans le tableaux si c'est ta bon emplacement je te supprime
