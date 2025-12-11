// ui.js
export function afficherBoxeurs(boxeurs) {
    const listeDiv = document.getElementById("liste");
    listeDiv.innerHTML = "";

    boxeurs.forEach(b => {
        const div = document.createElement("div");
        div.textContent = `${b.FirstName || ''} ${b.LastName || ''}`;
        listeDiv.appendChild(div);
    });
}
