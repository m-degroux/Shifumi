console.log("Shifumi");
element = document.getElementById("text");
element.textContent = "Shifumi";

let choix = ["Pierre","Ciseaux","Feuille"];


document.getElementById("pierre").addEventListener("click", () => jouer("Pierre"));
document.getElementById("feuille").addEventListener("click", () => jouer("Feuille"));
document.getElementById("ciseaux").addEventListener("click", () => jouer("Ciseaux"));


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

function joueOrdi(){
    let random = Math.floor(Math.random() * choix.length);
    return choix[random];
}

function victoire (utilisateur, ordi){
      document.getElementById("resultat").textContent = 'Victoire ! Tu as choisi : ' +utilisateur +' , l’ordi a choisi :'+ ordi;
}
function defaite(utilisateur, ordi){
    document.getElementById("resultat").textContent = 'Défaite ! Tu as choisi : ' +utilisateur +' , l’ordi a choisi :'+ ordi;

}
function egaliter(utilisateur, ordi){
    document.getElementById("resultat").textContent = 'Egaliter ! Tu as choisi : ' +utilisateur +' , l’ordi a choisi :'+ ordi;    
}




