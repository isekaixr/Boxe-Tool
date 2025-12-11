// api.js
const SUPABASE_URL = 'https://uxfrfmahfymwuxgprsd.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cmZydG1haGZ5bXd1eGdwcnNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MDUzMTksImV4cCI6MjA4MDk4MTMxOX0.ge8mWR-cejDTxPC2zTm-Xl1eBma1KWro8-SEzM8zblk';

export async function getBoxeurs() {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/Boxeurs?select=id,LastName,FirstName`, {
        headers: {
            "apikey": API_KEY,
            "Authorization": "Bearer " + API_KEY
        }
    });
    return await res.json();
}
