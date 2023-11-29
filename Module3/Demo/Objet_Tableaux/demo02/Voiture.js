class Voiture {
    constructor(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }

    afficherDetails() {
        console.log(`Marque : ${this.marque}, Modèle : ${this.modele}`);
    }
}

export default Voiture;