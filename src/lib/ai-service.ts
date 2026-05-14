export const AI = {
    async generateText(prompt: string): Promise<string> {
        // We halen de sleutel op uit de omgevingsvariabelen die via de YAML zijn geïnjecteerd
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        if (!apiKey) {
            throw new Error("Gemini API Key is missing. Controleer je GitHub Secrets en YAML env.");
        }

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }]
                }),
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error?.message || "Gemini API request failed");
            }

            // Dit haalt de tekst uit de Gemini-respons
            return data.candidates[0].content.parts[0].text;

        } catch (error: any) {
            console.error("[Gemini Service] Error:", error);
            throw error;
        }
    }
};
