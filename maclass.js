/**
 * J'apprends à créer des classes en JavaScript.
 */

/**
 * Comment déclarer une classe?
 * Pour déclasser, je commence par le mot-clé "class" suivi du nom de la classe.
 * 1. je commence par le mot-clé "class"
 * 2. je donne un nom à ma classe (en majuscule par convention)
 * 3. je définie les propriétés et les méthodes à l'intérieur des accolades {}
 */


// Ma classe Personne
class Personne {
    // Le constructeur permet d'initialiser les propriétés de la classe lors de la création d'une instance
    /**
     * 
     * @param {*} nomPersonne 
     * @param {*} villagePersonne 
     * @param {*} anneeNaissance 
     */
    constructor(nomPersonne, villagePersonne, anneeNaissance) {
        this.nom = nomPersonne; // Propriété nom
        this.village = villagePersonne; // Propriété village
        this.anneeNaissance = anneeNaissance; // Propriété anneeNaissance
    }

    /** */

    // Méthode 
    Bienvenue() {
        alert("Bienvenue " + this.nom);
    }

    calculerAge() {
    let anneeActuelle = new Date().getFullYear(); // Obtient l'année actuelle
    this.age = anneeActuelle - this.anneeNaissance; // Calcule l'age

    alert("L'age de " + this.nom + " est de " + this.age + " ans."); // Affiche une alerte avec l'age calculé
    return this.age;
};
}


// J'utilise la classe personne pour créer des instances (objets) de personne.Notre personne s'appelle NAEL.Il habite à kahani, il est agé de 19 ans et est né en 2006.

let personne1 = new Personne("NAEL","Kahani", 2006);
console.log(personne1); // Affiche l'objet personne1 dans la console

// Création d'une autre instance de la classe Personne
let personne2 = new Personne("FATIMA","Chiconi", 2014);
console.log(personne2); // Affiche l'objet personne2 dans la console

// Je fais appel à la méthode Bienvenue de l'objet personne1
personne1.Bienvenue(); // Affiche une alerte "Bienvenue NAEL"
console.log(personne1);

// Méthode qui calcule automatiquement l'age de la personne 1
personne2.calculerAge();

console.log("Age calculé de " + personne2.nom + " : " + personne2.calculerAge()); // Affiche l'age calculé de FATIMA
console.log(personne2);