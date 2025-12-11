// ui.js
// Gestion de l'affichage dans le DOM

export function afficherBoxeurs(boxeurs) {
    const listeDiv = document.getElementById("liste");
    listeDiv.innerHTML = ""; // vide avant affichage

    boxeurs.forEach(b => {
        const div = document.createElement("div");
        div.textContent = `${b.FirstName || ''} ${b.LastName || ''}`;
        listeDiv.appendChild(div);
    });
}
