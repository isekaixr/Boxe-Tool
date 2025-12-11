// main.js
// Point d'entrée de l'application : importe api.js et ui.js

import { getBoxeurs } from './api.js';
import { afficherBoxeurs } from './ui.js';

// Fonction d'initialisation au chargement de la page
async function init() {
    try {
        const boxeurs = await getBoxeurs();
        afficherBoxeurs(boxeurs);
    } catch (error) {
        console.error("Erreur lors de la récupération des boxeurs :", error);
    }
}

init();
