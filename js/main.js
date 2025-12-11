// main.js
// Point d'entrée de l'application : importe api.js et ui.js

import { getBoxeurs } from './api.js';
import { afficherBoxeurs } from './ui.js';

// Fonction pour le bouton Hello World
function setupHelloButton() {
    const btnHello = document.getElementById("btnHello");
    if (btnHello) {
        btnHello.addEventListener("click", () => {
            alert("Hello World !");
        });
    } else {
        console.warn("Bouton #btnHello introuvable !");
    }
}

// Fonction d'initialisation au chargement de la page
async function init() {
    try {
        const boxeurs = await getBoxeurs();
        afficherBoxeurs(boxeurs);
        setupHelloButton(); // On initialise le bouton ici
    } catch (error) {
        console.error("Erreur lors de la récupération des boxeurs :", error);
    }
}

// On attend que le DOM soit prêt
window.addEventListener("DOMContentLoaded", () => {
    init();
});
