// Classe Voiture pour définir des objets voiture
class Voiture {
    constructor(nombrePedales, boiteVitesse, couleur, nombrePortes, nombreSieges, volant, roues) {
        this.nombrePedales = nombrePedales; // Propriété pédales
        this.boiteVitesse = boiteVitesse; // Propriété boîte de vitesse
        this.couleur = couleur; // Propriété couleur
        this.nombrePortes = nombrePortes; // Propriété nombre de portes
        this.nombreSieges = nombreSieges; // Propriété nombre de sièges
        this.volant = volant; // Propriété volant
        this.roues = roues; // Propriété roues
    }
}

// Création d'une instance de la classe Voiture
let maVoiture = new Voiture(true, "automatique", "rouge", 4, 5, "standard", 4);
console.log(maVoiture); // Affiche l'objet maVoiture dans la console

let voiture2 = new Voiture(true, "manuelle", "bleue", 2, 2, "sport", 4);
console.log(voiture2); // Affiche l'objet voiture2 dans la console 

// Méthode: faire démarrer la voiture ,arretée , klaxonner
Voiture.prototype.demarrer = function() {
    console.log("La voiture démarre.");
};
Voiture.prototype.klaxonner = function() {
    console.log("La voiture klaxonne: Beep Beep!");
}
voiture2.demarrer(); // Appel de la méthode démarrer
voiture2.klaxonner(); // Appel de la méthode klaxonner


