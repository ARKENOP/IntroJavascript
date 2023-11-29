import Voiture from "./Voiture.js";
import VoitureDeSport from "./VoitureDeSport.js";

let maVoiture = new Voiture("Range Rover", "V8");

maVoiture.afficherDetails();

let maVoitureDeSport = new VoitureDeSport("Ferrari", "F40", 324);
maVoitureDeSport.afficherDetails();
maVoitureDeSport.afficherVitesseMax();