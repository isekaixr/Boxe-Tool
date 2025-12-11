// ui.js
// Contient toutes les fonctions pour afficher les boxeurs à l'écran

export function afficherBoxeurs(boxeurs) {
    const container = document.getElementById("liste");
    container.innerHTML = "";

    boxeurs.forEach(b => {
        const div = document.createElement("div");
        div.textContent = `${b.LastName}`; // On n'affiche pas l'id
        div.style.padding = "6px 0";
        container.appendChild(div);
    });
}
