// fetch.js : récupère les boxeurs et affiche directement

const SUPABASE_URL = 'https://uxrfrtmahfymwuxgprsd.supabase.co/rest/v1/Boxeurs?select=LastName,FirstName';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cmZydG1haGZ5bXd1eGdwcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MDUzMTksImV4cCI6MjA4MDk4MTMxOX0.ge8mWR-cejDTxPC2zTm-Xl1eBma1KWro8-SEzM8zblk';

async function fetchAndDisplayBoxeurs() {
    try {
        const res = await fetch(SUPABASE_URL, {
            headers: {
                "apikey": API_KEY,
                "Authorization": "Bearer " + API_KEY
            }
        });
        const boxeurs = await res.json();

        const listeDiv = document.getElementById("liste");
        listeDiv.innerHTML = "";

        boxeurs.forEach(b => {
            const div = document.createElement("div");
            div.textContent = `${b.FirstName || ''} ${b.LastName || ''}`;
            listeDiv.appendChild(div);
        });

        // Message en dur
        const divKevin = document.createElement("div");
        divKevin.textContent = "Bonjour Kevin";
        listeDiv.appendChild(divKevin);

    } catch (error) {
        console.error("Erreur fetch Supabase :", error);
    }
}

window.addEventListener("DOMContentLoaded", fetchAndDisplayBoxeurs);
