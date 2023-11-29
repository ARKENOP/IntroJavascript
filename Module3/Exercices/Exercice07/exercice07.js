class Chambre {
    constructor(numero, type) {
        this.numero = numero;
        this.type = type;
        this.estOccupe = false
    }

    changerStatus() {
        this.estOccupe = !this.estOccupe;
    }
}

class Client {
    constructor(nom, tel) {
        this.nom = nom;
        this.tel = tel;
    }
}

class Reservation{
    constructor(chambre, client, dateArrivee, dateDepart) {
        this.chambre = chambre;
        this.client = client;
        this.dateArrivee = dateArrivee;
        this.dateDepart = dateDepart;
    }
}

class Hotel {
    constructor() {
        this.chambres = [];
        this.reservations = [];
    }
    
    ajouterChambre(chambre) {
        this.chambres.push(chambre);
    }
    
    ajouterReservation(client, numeroChambre, dateArrivee, dateDepart) {
        const chambre = this.chambres.find(ch => ch.numero === numeroChambre);
        if (chambre && !chambre.estOccupe) {
            const reservation = new Reservation(chambre, client, dateArrivee, dateDepart);
            this.reservations.push(reservation);
            chambre.changerStatus();
        }
    }
    
    checkDispo(chambre) {
        if (chambre.statusReservation === "libre") {
            return true;
        } else {
            return false;
        }
    }
}
//Exemple d'utilisation
let hotel = new Hotel();
hotel.ajouterChambre(new Chambre(101, "simple"));
hotel.ajouterChambre(new Chambre(102, "simple"));
hotel.ajouterChambre(new Chambre(103, "simple"));
hotel.ajouterChambre(new Chambre(201, "double"));
hotel.ajouterChambre(new Chambre(202, "double"));

let client = new Client("Paul", "0102030405");
hotel.ajouterReservation(client, 101, new Date("2019-01-01"), new Date("2019-01-05"));