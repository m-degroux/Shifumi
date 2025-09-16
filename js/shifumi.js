console.log("Shifumi");

let choix = ["Pierre", "Ciseaux", "Feuille"];

let victoires = 0;
let defaites = 0;
let egalites = 0;


document.getElementById("pierre").addEventListener("click", () => jouer("Pierre"));
document.getElementById("feuille").addEventListener("click", () => jouer("Feuille"));
document.getElementById("ciseaux").addEventListener("click", () => jouer("Ciseaux"));
document.getElementById("recommence").addEventListener("click", () => recommecer());

function jouer(choixUtilisateur) {
    let choixOrdi = joueOrdi();

    if (choixUtilisateur === choixOrdi) {
        egaliter(choixUtilisateur, choixOrdi);
    } else if (
        (choixUtilisateur === "Pierre" && choixOrdi === "Ciseaux") ||
        (choixUtilisateur === "Feuille" && choixOrdi === "Pierre") ||
        (choixUtilisateur === "Ciseaux" && choixOrdi === "Feuille")
    ) {
        victoire(choixUtilisateur, choixOrdi);
    } else {
        defaite(choixUtilisateur, choixOrdi);
    }
    choixOrdi = joueOrdi();
}

function joueOrdi() {
    let random = Math.floor(Math.random() * choix.length);
    return choix[random];
}

function victoire(utilisateur, ordi) {
    document.getElementById("resultat").textContent = 'Victoire ! Tu as choisi : ' + utilisateur + ' , bot a choisi : ' + ordi;
    victoires++;
    updateScore();
}
function defaite(utilisateur, ordi) {
    document.getElementById("resultat").textContent = 'Défaite ! Tu as choisi : ' + utilisateur + ' , bot a choisi : ' + ordi;
    defaites++;
    updateScore();
}
function egaliter(utilisateur, ordi) {
    document.getElementById("resultat").textContent = 'Egaliter ! Tu as choisi : ' + utilisateur + ' , bot a choisi : ' + ordi;
    egalites++;
    updateScore();
}
function updateScore() {
      document.getElementById("victoires").textContent = victoires;
      document.getElementById("defaites").textContent = defaites;
      document.getElementById("egalites").textContent = egalites;    
    }


function recommecer() {
    let scores = document.querySelectorAll(".score");

        scores.forEach(s => {
        s.classList.remove("scale-in");
        s.classList.add("scale-out");
    });
   setTimeout(() => {
        victoires = 0;
        defaites = 0;
        egalites = 0;
        updateScore();

        scores.forEach(s => {
            s.classList.remove("scale-out");
            s.classList.add("scale-in");
        });
    }, 400);
}

