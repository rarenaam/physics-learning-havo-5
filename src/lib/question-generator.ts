import { AI } from '@/lib/ai-service';
import { Question } from '@/data/questions';
import { nanoid } from 'nanoid';

/**
 * Verwijdert markdown code block formatting rondom JSON strings
 */
const cleanJsonResponse = (response: string): string => {
  let cleaned = response.trim();
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.substring(7);
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.substring(3);
  }
  
  if (cleaned.endsWith('```')) {
    cleaned = cleaned.substring(0, cleaned.length - 3);
  }
  
  return cleaned.trim();
};

/**
 * Genereert dynamisch nieuwe natuurkunde vragen via AI
 */
export const generateQuestions = async (
  topic: string,
  difficulty: 'Makkelijk' | 'Gemiddeld' | 'Moeilijk',
  count: number = 5
): Promise<Question[]> => {
  const topicInstruction = topic === 'Gemengd' 
    ? 'verschillende willekeurige onderwerpen uit het HAVO natuurkunde examenprogramma (zoals Elektriciteit, Krachten, Straling, Energie)'
    : `het specifieke onderwerp: ${topic}`;

  let difficultyInstruction = "";
  if (difficulty === 'Moeilijk') {
    difficultyInstruction = "Dit is EXAMENNIVEAU (Moeilijk). De vragen moeten UITDAGEND zijn, direct geïnspireerd op echte eindexamens van examenblad.nl. Ze moeten contextrijke verhalen bevatten en vaak vereisen dat leerlingen meerdere denkstappen maken of formules uit de Binas combineren. Zorg dat de afleiders (foute antwoorden) gebaseerd zijn op typische examenfouten (bijv. vergeten om te rekenen van km/h naar m/s).";
  } else if (difficulty === 'Gemiddeld') {
    difficultyInstruction = "Gemiddeld niveau. Vereist een goed begrip van de theorie en rekenwerk met 1 à 2 stappen. Het niveau van een standaard schoolexamen.";
  } else {
    difficultyInstruction = "Makkelijk niveau. Focus op basisbegrip, definities, of simpele één-staps berekeningen waarbij direct een formule kan worden ingevuld.";
  }

  const prompt = `
    Je bent een senior examenmaker voor het College voor Toetsen en Examens (CvTE) voor HAVO 5 Natuurkunde in Nederland.
    Genereer exact ${count} unieke meerkeuzevragen voor het niveau HAVO 5.
    
    Je MOET je stijl, terminologie en complexiteit strikt baseren op eerdere officiële eindexamens zoals te vinden op examenblad.nl.
    
    Onderwerp: ${topicInstruction}
    Moeilijkheidsgraad: ${difficulty}
    Aanvullende instructie voor dit niveau: ${difficultyInstruction}
    
    Vereisten voor de vragen:
    - Ze moeten authentiek aanvoelen als echte Nederlandse centrale examenvragen.
    - Zorg voor realistische eenheden, contexten uit de echte wereld en let op significante cijfers indien relevant.
    - Geef exact 4 antwoordopties per vraag (A, B, C, D), waarvan er precies 1 correct is.

    Geef je antwoord STRICT als een geldige JSON array van objecten, zonder enige andere tekst of uitleg. Gebruik dit exacte schema:
[
      {
        "topic": "Naam van het onderwerp",
        "text": "De volledige tekst van de vraag inclusief eventuele benodigde gegevens.",
        "options":[
          { "text": "Antwoord A", "isCorrect": true of false },
          { "text": "Antwoord B", "isCorrect": true of false },
          { "text": "Antwoord C", "isCorrect": true of false },
          { "text": "Antwoord D", "isCorrect": true of false }
        ]
      }
    ]
  `;

  try {
    const response = await AI.generateText(prompt);
    const cleanedJson = cleanJsonResponse(response);
    const parsedData = JSON.parse(cleanedJson);

    if (!Array.isArray(parsedData)) {
      throw new Error("AI response is niet een array");
    }

    // Transformeer en valideer de data, voeg ID's toe
    const questions: Question[] = parsedData.map((q: any) => ({
      id: nanoid(),
      topic: q.topic || topic,
      text: q.text || "Vraag kon niet geladen worden.",
      examYear: "AI Gegenereerd (Examenblad Stijl)",
      options: (q.options ||[]).map((o: any) => ({
        id: nanoid(),
        text: String(o.text),
        isCorrect: Boolean(o.isCorrect)
      }))
    }));

    // Check of we echt 4 opties per vraag hebben, anders filteren we die eruit (veiligheid)
    const validQuestions = questions.filter(q => q.options.length >= 2);
    
    if (validQuestions.length === 0) {
         throw new Error("Geen geldige vragen geparseerd");
    }

    return validQuestions;
  } catch (error) {
    console.error("Fout bij het genereren van AI vragen:", error);
    throw error;
  }
};
