export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  topic: string;
  text: string;
  options: Option[];
  examYear?: string;
}

export const physicsTopics = [
  "Elektriciteit",
  "Krachten en Beweging",
  "Straling en Gezondheid",
  "Materialen",
  "Trillingen en Golven",
  "Aarde en Heelal",
  "Energie Omzettingen"
];

// Dit is nu de 'fallback' lijst voor het geval de AI faalt of offline is.
export const fallbackQuestions: Question[] =[
  {
    id: 'q1',
    topic: 'Elektriciteit',
    text: 'Een gloeilampje is aangesloten op een batterij van 4,5 V. De stroomsterkte door het lampje is 0,30 A. Wat is de weerstand van het lampje?',
    examYear: '2019-I',
    options:[
      { id: 'o1', text: '1,35 Ω', isCorrect: false },
      { id: 'o2', text: '15 Ω', isCorrect: true },
      { id: 'o3', text: '0,067 Ω', isCorrect: false },
      { id: 'o4', text: '4,8 Ω', isCorrect: false },
    ]
  },
  {
    id: 'q2',
    topic: 'Krachten en Beweging',
    text: 'Een auto van 1200 kg versnelt vanuit stilstand met een constante versnelling van 2,5 m/s². Hoe groot is de resulterende kracht op de auto?',
    examYear: '2021-II',
    options:[
      { id: 'o1', text: '480 N', isCorrect: false },
      { id: 'o2', text: '3000 N', isCorrect: true },
      { id: 'o3', text: '12000 N', isCorrect: false },
      { id: 'o4', text: '0 N', isCorrect: false },
    ]
  },
  {
    id: 'q3',
    topic: 'Straling',
    text: 'Welk type ioniserende straling heeft het grootste doordringend vermogen, maar het kleinste ioniserend vermogen?',
    examYear: '2018-I',
    options:[
      { id: 'o1', text: 'Alfastraling (α)', isCorrect: false },
      { id: 'o2', text: 'Bètastraling (β)', isCorrect: false },
      { id: 'o3', text: 'Gammastraling (γ)', isCorrect: true },
      { id: 'o4', text: 'Infraroodstraling', isCorrect: false },
    ]
  },
  {
    id: 'q4',
    topic: 'Energie',
    text: 'Een bal van 0,5 kg wordt vanaf 4 meter hoogte losgelaten. Wat is de kinetische energie vlak voordat de bal de grond raakt? (Neem g = 9,81 m/s² en verwaarloos wrijving)',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: '2,0 J', isCorrect: false },
      { id: 'o2', text: '19,6 J', isCorrect: true },
      { id: 'o3', text: '9,8 J', isCorrect: false },
      { id: 'o4', text: '0 J', isCorrect: false },
    ]
  },
  {
    id: 'q5',
    topic: 'Trillingen en Golven',
    text: 'Een geluidsgolf heeft een frequentie van 440 Hz en de geluidssnelheid in lucht is 340 m/s. Wat is de golflengte van dit geluid?',
    options:[
      { id: 'o1', text: '0,77 m', isCorrect: true },
      { id: 'o2', text: '1,29 m', isCorrect: false },
      { id: 'o3', text: '149600 m', isCorrect: false },
      { id: 'o4', text: '100 m', isCorrect: false },
    ]
  }
];
