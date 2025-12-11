// main.js
import { getBoxeurs } from './api.js';
import { afficherBoxeurs } from './ui.js';

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

async function init() {
    try {
        const boxeurs = await getBoxeurs();
        afficherBoxeurs(boxeurs);
        setupHelloButton();
    } catch (error) {
        console.error("Erreur lors de la récupération des boxeurs :", error);
    }
}

// On attend que le DOM soit complètement chargé
window.addEventListener("DOMContentLoaded", init);
