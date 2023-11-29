// Initialisation de l'échiquier
const echiquier = [
    ['T', 'C', 'F', 'D', 'R', 'F', 'C', 'T'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['t', 'c', 'f', 'd', 'r', 'f', 'c', 't'],
  ];
  
  // Fonction pour afficher l'échiquier
  function afficherEchiquier() {
    for (let ligne = 0; ligne < echiquier.length; ligne++) {
      console.log(echiquier[ligne].join(' '));
    }
    console.log("-------------------------");
  }
  
  // Fonction pour déplacer une pièce sur l'échiquier
  function deplacerPiece(depart, arrivee) {
    const [ligneDepart, colonneDepart] = depart;
    const [ligneArrivee, colonneArrivee] = arrivee;
  
    echiquier[ligneArrivee][colonneArrivee] = echiquier[ligneDepart][colonneDepart];
    echiquier[ligneDepart][colonneDepart] = ' ';
  }
  
  // Fonction pour vérifier si une case spécifique est vide
  function estCaseVide(coordonnees) {
    const [ligne, colonne] = coordonnees;
    return echiquier[ligne][colonne] === ' ';
  }
  
  // Fonction pour compter le nombre total de pièces sur l'échiquier
  function compterPieces() {
    let nombreDePieces = 0;
    for (let ligne = 0; ligne < echiquier.length; ligne++) {
      for (let colonne = 0; colonne < echiquier[ligne].length; colonne++) {
        if (echiquier[ligne][colonne] !== ' ') {
          nombreDePieces++;
        }
      }
    }
    return nombreDePieces;
  }
  
  // Fonction pour supprimer toutes les pièces d'un type spécifique
  function supprimerPieces(type) {
    for (let ligne = 0; ligne < echiquier.length; ligne++) {
      for (let colonne = 0; colonne < echiquier[ligne].length; colonne++) {
        if (echiquier[ligne][colonne] === type) {
          echiquier[ligne][colonne] = ' ';
        }
      }
    }
  }
  
  // Exemples d'utilisation
  afficherEchiquier();
  
  deplacerPiece([6, 4], [4, 4]);
  afficherEchiquier();
  
  console.log("La case [0, 0] est vide ?", estCaseVide([0, 0]));
  
  console.log("Nombre total de pièces :", compterPieces());
  
  supprimerPieces('p');
  afficherEchiquier();
  