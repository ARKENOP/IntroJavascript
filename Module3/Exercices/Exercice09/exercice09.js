//Créer un tableau reservations contenant les réservations suivantes :
let reservations = [
    {id: 1, nomClient: "Lévisse", chambre: "101", nombreNuits: 2, payé: false}, 
    {id: 2, nomClient: "Nelsonne", chambre: "102", nombreNuits: 3, payé: true},
    {id: 3, nomClient: "Atwood", chambre: "103", nombreNuits: 4, payé: true},
    {id: 4, nomClient: "Johannson", chambre: "104", nombreNuits: 5, payé: false},
    {id: 5, nomClient: "Tremblay", chambre: "105", nombreNuits: 1, payé: true} 
];

//Lister les reservations non payées 
console.log("Liste des reservations non payées :");
for (let i = 0; i < reservations.length; i++) {
    if (reservations[i].payé == false) {
        console.log(reservations[i].nomClient);
    }
}

//Calculer le revenu total potentiel de toutes les réservations non payées 
let revenuTotal = 100;
for (let i = 0; i < reservations.length; i++) {
    if (reservations[i].payé == false) {
        revenuTotal += reservations[i].nombreNuits * 100;
    }
}

//Trouver une réservation spécifique par id et changer son statut de payé à true.
let id = 4;
for (let i = 0; i < reservations.length; i++) {
    if (reservations[i].id == id) {
        reservations[i].payé = true;
    }
}

//Ajouter une nouvelle réservation au tableau
let nouvelleReservation = {id: 6, nomClient: "Laprise", chambre: "106", nombreNuits: 2, payé: false};