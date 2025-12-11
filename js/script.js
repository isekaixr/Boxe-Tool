// --- Configuration Supabase ---
const SUPABASE_URL = 'https://uxfrfmahfymwuxgprsd.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cmZydG1haGZ5bXd1eGdwcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MDUzMTksImV4cCI6MjA4MDk4MTMxOX0.ge8mWR-cejDTxPC2zTm-Xl1eBma1KWro8-SEzM8zblk';

// --- Fonction pour récupérer les boxeurs ---
async function getBoxeurs() {
    try {
        const res = await fetch(`$https://uxfrfmahfymwuxgprsd.supabase.co/rest/v1/Boxeurs?select=id,LastName,FirstName`, {
            headers: {
                "apikey": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cmZydG1haGZ5bXd1eGdwcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MDUzMTksImV4cCI6MjA4MDk4MTMxOX0.ge8mWR-cejDTxPC2zTm-Xl1eBma1KWro8-SEzM8zblk,
                "Authorization": "Bearer " + eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cmZydG1haGZ5bXd1eGdwcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MDUzMTksImV4cCI6MjA4MDk4MTMxOX0.ge8mWR-cejDTxPC2zTm-Xl1eBma1KWro8-SEzM8zblk
            }
        });
        return await res.json();
    } catch (error) {
        console.error("Erreur fetch Supabase :", error);
        return [];
    }
}

// --- Fonction pour afficher les boxeurs ---
function afficherBoxeurs(boxeurs) {
    const listeDiv = document.getElementById("liste");
    listeDiv.innerHTML = "";
    boxeurs.forEach(b => {
        const div = document.createElement("div");
        div.textContent = `${b.FirstName || ''} ${b.LastName || ''}`;
        listeDiv.appendChild(div);
    });
}

// --- Initialisation ---
window.addEventListener("DOMContentLoaded", async () => {
    const boxeurs = await getBoxeurs();
    afficherBoxeurs(boxeurs);
});
