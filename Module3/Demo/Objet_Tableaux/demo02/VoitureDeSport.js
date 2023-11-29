import Voiture from "./Voiture.js";

class VoitureDeSport extends Voiture{
    constructor(marque, modele, vitesseMax) {
        super(marque, modele);
        this.vitesseMax = vitesseMax;
    }
    afficherVitesseMax() {
        console.log(`Marque : ${this.marque}, Modèle : ${this.modele}, Vitesse max : ${this.vitesseMax}`);
    }
}

export default VoitureDeSport;