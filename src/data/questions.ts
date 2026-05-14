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

export const fallbackQuestions: Question[] = [
  // ELEKTRICITEIT (30 vragen)
  {
    id: 'q1',
    topic: 'Elektriciteit',
    text: 'Een gloeilampje is aangesloten op een batterij van 4,5 V. De stroomsterkte door het lampje is 0,30 A. Wat is de weerstand van het lampje?',
    examYear: '2019-I',
    options: [
      { id: 'o1', text: '1,35 Ω', isCorrect: false },
      { id: 'o2', text: '15 Ω', isCorrect: true },
      { id: 'o3', text: '0,067 Ω', isCorrect: false },
      { id: 'o4', text: '4,8 Ω', isCorrect: false },
    ]
  },
  {
    id: 'q2',
    topic: 'Elektriciteit',
    text: 'Een koperen draad heeft een lengte van 2 m en een dwarsdoorsnede van 1 mm². De soortelijke weerstand van koper is 1,7 × 10⁻⁸ Ω·m. Wat is de weerstand van deze draad?',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: '3,4 × 10⁻² Ω', isCorrect: true },
      { id: 'o2', text: '8,5 × 10⁻⁹ Ω', isCorrect: false },
      { id: 'o3', text: '0,85 Ω', isCorrect: false },
      { id: 'o4', text: '1,7 × 10⁻⁸ Ω', isCorrect: false },
    ]
  },
  {
    id: 'q3',
    topic: 'Elektriciteit',
    text: 'Twee weerstanden van 6 Ω en 3 Ω zijn in serie geschakeld. Wat is de totale weerstand?',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: '2 Ω', isCorrect: false },
      { id: 'o2', text: '3 Ω', isCorrect: false },
      { id: 'o3', text: '9 Ω', isCorrect: true },
      { id: 'o4', text: '18 Ω', isCorrect: false },
    ]
  },
  {
    id: 'q4',
    topic: 'Elektriciteit',
    text: 'Twee weerstanden van 6 Ω en 3 Ω zijn parallel geschakeld. Wat is de totale weerstand?',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: '2 Ω', isCorrect: true },
      { id: 'o2', text: '3 Ω', isCorrect: false },
      { id: 'o3', text: '9 Ω', isCorrect: false },
      { id: 'o4', text: '18 Ω', isCorrect: false },
    ]
  },
  {
    id: 'q5',
    topic: 'Elektriciteit',
    text: 'Een elektrische apparaat gebruikt een vermogen van 500 W gedurende 2 uur. Hoeveel energie verbruikt het apparaat?',
    examYear: '2019-II',
    options: [
      { id: 'o1', text: '250 kJ', isCorrect: false },
      { id: 'o2', text: '1000 Wh', isCorrect: true },
      { id: 'o3', text: '1000 J', isCorrect: false },
      { id: 'o4', text: '250 J', isCorrect: false },
    ]
  },
  {
    id: 'q6',
    topic: 'Elektriciteit',
    text: 'Een LED heeft een voedingsspanning van 12 V nodig en trekt een stroom van 0,5 A. Wat is het vermogen van de LED?',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: '6 W', isCorrect: true },
      { id: 'o2', text: '24 W', isCorrect: false },
      { id: 'o3', text: '12 W', isCorrect: false },
      { id: 'o4', text: '0,5 W', isCorrect: false },
    ]
  },
  {
    id: 'q7',
    topic: 'Elektriciteit',
    text: 'Wat is de spanning over een weerstand van 10 Ω als er een stroomsterkte van 2 A door loopt?',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: '5 V', isCorrect: false },
      { id: 'o2', text: '20 V', isCorrect: true },
      { id: 'o3', text: '0,2 V', isCorrect: false },
      { id: 'o4', text: '12 V', isCorrect: false },
    ]
  },
  {
    id: 'q8',
    topic: 'Elektriciteit',
    text: 'Een batterij heeft een EMV van 9 V en een inwendige weerstand van 1 Ω. Wat is de klemspanning als een apparaat een stroomsterkte van 2 A trekt?',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: '7 V', isCorrect: true },
      { id: 'o2', text: '9 V', isCorrect: false },
      { id: 'o3', text: '11 V', isCorrect: false },
      { id: 'o4', text: '4,5 V', isCorrect: false },
    ]
  },
  {
    id: 'q9',
    topic: 'Elektriciteit',
    text: 'Een potloodlijn heeft een weerstand die afhangt van de lengte en breedte. Welke formule is correct?',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'R = ρ × (b/l)', isCorrect: false },
      { id: 'o2', text: 'R = ρ × (l/b)', isCorrect: true },
      { id: 'o3', text: 'R = l × b', isCorrect: false },
      { id: 'o4', text: 'R = b/l', isCorrect: false },
    ]
  },
  {
    id: 'q10',
    topic: 'Elektriciteit',
    text: 'Een weerstand is gemaakt van hetzelfde materiaal. Als je een dikker exemplaar neemt, wat gebeurt er met de weerstand?',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: 'De weerstand wordt groter', isCorrect: false },
      { id: 'o2', text: 'De weerstand wordt kleiner', isCorrect: true },
      { id: 'o3', text: 'De weerstand blijft gelijk', isCorrect: false },
      { id: 'o4', text: 'Dit hangt af van de lengte', isCorrect: false },
    ]
  },
  {
    id: 'q11',
    topic: 'Elektriciteit',
    text: 'Een gesloten schakelkring bevat een batterij van 12 V en een weerstand van 4 Ω. Wat is de stroomsterkte?',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: '3 A', isCorrect: true },
      { id: 'o2', text: '4 A', isCorrect: false },
      { id: 'o3', text: '12 A', isCorrect: false },
      { id: 'o4', text: '48 A', isCorrect: false },
    ]
  },
  {
    id: 'q12',
    topic: 'Elektriciteit',
    text: 'Wat is het juiste symbool in een schakelschema voor een batterij?',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: 'Een enkele lijn', isCorrect: false },
      { id: 'o2', text: 'Twee parallelle lijnen (één lang, één kort)', isCorrect: true },
      { id: 'o3', text: 'Een cirkel', isCorrect: false },
      { id: 'o4', text: 'Een driehoek', isCorrect: false },
    ]
  },
  {
    id: 'q13',
    topic: 'Elektriciteit',
    text: 'Een LED brandt optimaal bij 2 V en 20 mA. Wat is het vermogen van de LED?',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: '0,04 W', isCorrect: true },
      { id: 'o2', text: '0,4 W', isCorrect: false },
      { id: 'o3', text: '4 W', isCorrect: false },
      { id: 'o4', text: '40 W', isCorrect: false },
    ]
  },
  {
    id: 'q14',
    topic: 'Elektriciteit',
    text: 'Hoe worden twee lampen verbonden als je wilt dat ze beide vol branden, maar het uitvallen van één lamp niet de ander beïnvloedt?',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'In serie', isCorrect: false },
      { id: 'o2', text: 'Parallel', isCorrect: true },
      { id: 'o3', text: 'Dit maakt niet uit', isCorrect: false },
      { id: 'o4', text: 'In een driehoekschakeling', isCorrect: false },
    ]
  },
  {
    id: 'q15',
    topic: 'Elektriciteit',
    text: 'Een weerstand van 5 Ω geeft met een bepaalde spanning een vermogen van 20 W. Wat is deze spanning?',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: '4 V', isCorrect: false },
      { id: 'o2', text: '10 V', isCorrect: true },
      { id: 'o3', text: '20 V', isCorrect: false },
      { id: 'o4', text: '100 V', isCorrect: false },
    ]
  },
  {
    id: 'q16',
    topic: 'Elektriciteit',
    text: 'Een elektriciteitsleiding heeft een weerstand van 0,5 Ω. De stroomsterkte is 10 A. Hoeveel vermogen wordt verspild in deze leiding?',
    examYear: '2024-II',
    options: [
      { id: 'o1', text: '5 W', isCorrect: true },
      { id: 'o2', text: '50 W', isCorrect: false },
      { id: 'o3', text: '0,05 W', isCorrect: false },
      { id: 'o4', text: '20 W', isCorrect: false },
    ]
  },
  {
    id: 'q17',
    topic: 'Elektriciteit',
    text: 'Een halogenlampmaat heeft een weerstand van 240 Ω en is aangesloten op 12 V. Wat is de stroomsterkte?',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: '0,05 A', isCorrect: true },
      { id: 'o2', text: '0,5 A', isCorrect: false },
      { id: 'o3', text: '5 A', isCorrect: false },
      { id: 'o4', text: '50 A', isCorrect: false },
    ]
  },
  {
    id: 'q18',
    topic: 'Elektriciteit',
    text: 'Een transformator heeft 100 wikkelingen aan de primaire zijde en 500 wikkelingen aan de secundaire zijde. De ingangssspanning is 10 V. Wat is de uitgangsspanning?',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: '2 V', isCorrect: false },
      { id: 'o2', text: '10 V', isCorrect: false },
      { id: 'o3', text: '50 V', isCorrect: true },
      { id: 'o4', text: '500 V', isCorrect: false },
    ]
  },
  {
    id: 'q19',
    topic: 'Elektriciteit',
    text: 'Bij het gebruik van elektriciteit is de opgewekte warmte gelijk aan I²Rt. Wat geeft dit aan?',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'De totale energie', isCorrect: false },
      { id: 'o2', text: 'Het vermogen omgezet in warmte', isCorrect: true },
      { id: 'o3', text: 'De elektrische weerstand', isCorrect: false },
      { id: 'o4', text: 'De totale spanning', isCorrect: false },
    ]
  },
  {
    id: 'q20',
    topic: 'Elektriciteit',
    text: 'Een batterij met EMV 1,5 V en inwendige weerstand 0,1 Ω is aangesloten op een extern apparaat met weerstand 4,9 Ω. Wat is de klemspanning?',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: '1,5 V', isCorrect: false },
      { id: 'o2', text: '1,47 V', isCorrect: true },
      { id: 'o3', text: '1,3 V', isCorrect: false },
      { id: 'o4', text: '0,3 V', isCorrect: false },
    ]
  },
  {
    id: 'q21',
    topic: 'Elektriciteit',
    text: 'Drie weerstanden van elk 2 Ω zijn parallel geschakeld. Wat is de equivalente weerstand?',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: '0,67 Ω', isCorrect: true },
      { id: 'o2', text: '2 Ω', isCorrect: false },
      { id: 'o3', text: '6 Ω', isCorrect: false },
      { id: 'o4', text: '3 Ω', isCorrect: false },
    ]
  },
  {
    id: 'q22',
    topic: 'Elektriciteit',
    text: 'Een gloeispiraal dissipeert 100 W vermogen. Hoe veel energie wordt er in 10 minuten verbruikt?',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: '1000 J', isCorrect: false },
      { id: 'o2', text: '60000 J', isCorrect: true },
      { id: 'o3', text: '600 J', isCorrect: false },
      { id: 'o4', text: '10000 J', isCorrect: false },
    ]
  },
  {
    id: 'q23',
    topic: 'Elektriciteit',
    text: 'De soortelijke weerstand van zilver is 1,6 × 10⁻⁸ Ω·m. Dit betekent dat zilver...',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: 'Een zeer goede geleider is', isCorrect: true },
      { id: 'o2', text: 'Een zeer slechte geleider is', isCorrect: false },
      { id: 'o3', text: 'Een isolator is', isCorrect: false },
      { id: 'o4', text: 'Een halfgeleider is', isCorrect: false },
    ]
  },
  {
    id: 'q24',
    topic: 'Elektriciteit',
    text: 'Een verwarmingselement met weerstand 24 Ω wordt aangesloten op een spanning van 240 V. Hoeveel warmte wordt per seconde geproduceerd?',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: '1000 J/s', isCorrect: true },
      { id: 'o2', text: '10000 J/s', isCorrect: false },
      { id: 'o3', text: '100 J/s', isCorrect: false },
      { id: 'o4', text: '24 J/s', isCorrect: false },
    ]
  },
  {
    id: 'q25',
    topic: 'Elektriciteit',
    text: 'Een stroomdraad is vervaardigd van constantaan met soortelijke weerstand 4,9 × 10⁻⁷ Ω·m. Dit is gebruikt omdat...',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'Het zeer goedkoop is', isCorrect: false },
      { id: 'o2', text: 'De weerstand niet veel met temperatuur verandert', isCorrect: true },
      { id: 'o3', text: 'Het zeer flexibel is', isCorrect: false },
      { id: 'o4', text: 'Het zeer goed geleid', isCorrect: false },
    ]
  },
  {
    id: 'q26',
    topic: 'Elektriciteit',
    text: 'Twee identieke lampen met weerstand 10 Ω worden in serie aan 20 V aangesloten. Wat is de spanning over één lamp?',
    examYear: '2024-II',
    options: [
      { id: 'o1', text: '5 V', isCorrect: false },
      { id: 'o2', text: '10 V', isCorrect: true },
      { id: 'o3', text: '20 V', isCorrect: false },
      { id: 'o4', text: '40 V', isCorrect: false },
    ]
  },
  {
    id: 'q27',
    topic: 'Elektriciteit',
    text: 'Een potloodlijn met breedte 0,5 cm, lengte 10 cm en dikte 0,1 mm heeft een weerstand van 20 Ω. Wat is de soortelijke weerstand?',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: '1 × 10⁻⁴ Ω·m', isCorrect: true },
      { id: 'o2', text: '1 × 10⁻² Ω·m', isCorrect: false },
      { id: 'o3', text: '2 × 10⁻³ Ω·m', isCorrect: false },
      { id: 'o4', text: '1 × 10⁻⁶ Ω·m', isCorrect: false },
    ]
  },
  {
    id: 'q28',
    topic: 'Elektriciteit',
    text: 'Een reostaat is een weerstand die in een schakelkring kan worden gebruikt om...',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: 'De spanning te controleren', isCorrect: false },
      { id: 'o2', text: 'De stroomsterkte aan te passen', isCorrect: true },
      { id: 'o3', text: 'De weers tandswaarde te vergoten', isCorrect: false },
      { id: 'o4', text: 'Kortsluiting te voorkomen', isCorrect: false },
    ]
  },
  {
    id: 'q29',
    topic: 'Elektriciteit',
    text: 'Een fusekeuring in een huisinstallatie werkt door...',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: 'De weerstand van de leiding te vergroten', isCorrect: false },
      { id: 'o2', text: 'De stroomsterkte te beperken en door te smelten bij overbelasting', isCorrect: true },
      { id: 'o3', text: 'Een magneetveld op te bouwen', isCorrect: false },
      { id: 'o4', text: 'De spanning te stabiliseren', isCorrect: false },
    ]
  },
  {
    id: 'q30',
    topic: 'Elektriciteit',
    text: 'Een apparaat werkt op wisselspanning. De effectieve spanning is 230 V. Wat is de piekspanning?',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: '115 V', isCorrect: false },
      { id: 'o2', text: '230 V', isCorrect: false },
      { id: 'o3', text: '325 V', isCorrect: true },
      { id: 'o4', text: '460 V', isCorrect: false },
    ]
  },

  // KRACHTEN EN BEWEGING (30 vragen)
  {
    id: 'q31',
    topic: 'Krachten en Beweging',
    text: 'Een auto van 1200 kg versnelt vanuit stilstand met een constante versnelling van 2,5 m/s². Hoe groot is de resulterende kracht op de auto?',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: '480 N', isCorrect: false },
      { id: 'o2', text: '3000 N', isCorrect: true },
      { id: 'o3', text: '12000 N', isCorrect: false },
      { id: 'o4', text: '0 N', isCorrect: false },
    ]
  },
  {
    id: 'q32',
    topic: 'Krachten en Beweging',
    text: 'Een object beweegt met constante snelheid. Dit betekent dat de netto kracht op het object is:',
    examYear: '2019-I',
    options: [
      { id: 'o1', text: 'Groter dan nul', isCorrect: false },
      { id: 'o2', text: 'Gelijk aan nul', isCorrect: true },
      { id: 'o3', text: 'Kleiner dan nul', isCorrect: false },
      { id: 'o4', text: 'Dit kan niet bepaald worden', isCorrect: false },
    ]
  },
  {
    id: 'q33',
    topic: 'Krachten en Beweging',
    text: 'Een voorwerp van 5 kg wordt verticaal omhoog gesmeten met een beginsnelheid van 10 m/s. Hoe lang duurt het voordat het voorwerp op dezelfde hoogte terugkomt?',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: '1 s', isCorrect: false },
      { id: 'o2', text: '2 s', isCorrect: true },
      { id: 'o3', text: '5 s', isCorrect: false },
      { id: 'o4', text: '10 s', isCorrect: false },
    ]
  },
  {
    id: 'q34',
    topic: 'Krachten en Beweging',
    text: 'Een bal wordt horizontaal van een gebouw gegooid. De zwaartekracht werkt verticaal. Wat kan gezegd worden over de horizontale snelheid?',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'Deze neemt toe', isCorrect: false },
      { id: 'o2', text: 'Deze neemt af', isCorrect: false },
      { id: 'o3', text: 'Deze blijft constant', isCorrect: true },
      { id: 'o4', text: 'Deze wordt eerst groter, dan kleiner', isCorrect: false },
    ]
  },
  {
    id: 'q35',
    topic: 'Krachten en Beweging',
    text: 'Een auto rijdt met 20 m/s en remt af tot 5 m/s in 3 seconden. Wat is de vertraging?',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: '5 m/s²', isCorrect: true },
      { id: 'o2', text: '-5 m/s²', isCorrect: false },
      { id: 'o3', text: '15 m/s²', isCorrect: false },
      { id: 'o4', text: '25 m/s²', isCorrect: false },
    ]
  },
  {
    id: 'q36',
    topic: 'Krachten en Beweging',
    text: 'Twee krachten van 3 N en 4 N werken loodrecht op elkaar in op een object. Wat is de resultante kracht?',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: '1 N', isCorrect: false },
      { id: 'o2', text: '5 N', isCorrect: true },
      { id: 'o3', text: '7 N', isCorrect: false },
      { id: 'o4', text: '12 N', isCorrect: false },
    ]
  },
  {
    id: 'q37',
    topic: 'Krachten en Beweging',
    text: 'Een voorwerp van 2 kg hangt aan een touw. De spankracht in het touw is:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: '2 N', isCorrect: false },
      { id: 'o2', text: '10 N', isCorrect: false },
      { id: 'o3', text: '20 N', isCorrect: true },
      { id: 'o4', text: '0 N', isCorrect: false },
    ]
  },
  {
    id: 'q38',
    topic: 'Krachten en Beweging',
    text: 'Een blok glijdt op een helling. De wrijvingskracht is tegengesteld aan...',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: 'De normaalvector', isCorrect: false },
      { id: 'o2', text: 'De bewegingsrichting', isCorrect: true },
      { id: 'o3', text: 'De zwaartekracht', isCorrect: false },
      { id: 'o4', text: 'De hoogte van de helling', isCorrect: false },
    ]
  },
  {
    id: 'q39',
    topic: 'Krachten en Beweging',
    text: 'De wrijvingscoëfficiënt tussen een doos en de grond is 0,2. De doos weegt 50 kg. Welke horizontale kracht is nodig om de doos met constante snelheid voort te trekken?',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: '50 N', isCorrect: false },
      { id: 'o2', text: '100 N', isCorrect: true },
      { id: 'o3', text: '250 N', isCorrect: false },
      { id: 'o4', text: '500 N', isCorrect: false },
    ]
  },
  {
    id: 'q40',
    topic: 'Krachten en Beweging',
    text: 'Een voorwerp beweegt in een cirkel met constant snelheid. De versnelling is...',
    examYear: '2024-II',
    options: [
      { id: 'o1', text: 'Nul', isCorrect: false },
      { id: 'o2', text: 'Gericht naar het midden van de cirkel', isCorrect: true },
      { id: 'o3', text: 'Gericht naar buiten toe', isCorrect: false },
      { id: 'o4', text: 'Tangentieel aan de cirkel', isCorrect: false },
    ]
  },
  {
    id: 'q41',
    topic: 'Krachten en Beweging',
    text: 'Een voorwerp van 3 kg wordt opgeheven met een versnelling van 2 m/s². Wat is de spankracht in het touw?',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: '30 N', isCorrect: true },
      { id: 'o2', text: '6 N', isCorrect: false },
      { id: 'o3', text: '36 N', isCorrect: false },
      { id: 'o4', text: '24 N', isCorrect: false },
    ]
  },
  {
    id: 'q42',
    topic: 'Krachten en Beweging',
    text: 'Een massa van 4 kg versnelt met 3 m/s² op een horizontaal vlak. De normaalvector is:',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: '4 N', isCorrect: false },
      { id: 'o2', text: '40 N', isCorrect: true },
      { id: 'o3', text: '12 N', isCorrect: false },
      { id: 'o4', text: '52 N', isCorrect: false },
    ]
  },
  {
    id: 'q43',
    topic: 'Krachten en Beweging',
    text: 'Een voorwerp van 6 kg glijdt over een helling van 30° hoek. De versnelling langs de helling (zonder wrijving) is:',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: '5 m/s²', isCorrect: true },
      { id: 'o2', text: '10 m/s²', isCorrect: false },
      { id: 'o3', text: '8,66 m/s²', isCorrect: false },
      { id: 'o4', text: '3 m/s²', isCorrect: false },
    ]
  },
  {
    id: 'q44',
    topic: 'Krachten en Beweging',
    text: 'In een lift staat een persoon van 70 kg. De lift beweegt met constante snelheid omhoog. De schaal leest:',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: '0 kg', isCorrect: false },
      { id: 'o2', text: '50 kg', isCorrect: false },
      { id: 'o3', text: '70 kg', isCorrect: true },
      { id: 'o4', text: '90 kg', isCorrect: false },
    ]
  },
  {
    id: 'q45',
    topic: 'Krachten en Beweging',
    text: 'De wrijvingskracht op een object staat rechtstreeks gelijk aan:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: 'De massa van het object', isCorrect: false },
      { id: 'o2', text: 'De wrijvingscoëfficiënt en de normaalvector', isCorrect: true },
      { id: 'o3', text: 'De snelheid van het object', isCorrect: false },
      { id: 'o4', text: 'De versnelling van het object', isCorrect: false },
    ]
  },
  {
    id: 'q46',
    topic: 'Krachten en Beweging',
    text: 'Een voertuig maakt een bocht. De centripetale kracht wordt geleverd door:',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: 'De wrijving tussen de band en de weg', isCorrect: true },
      { id: 'o2', text: 'De motor van het voertuig', isCorrect: false },
      { id: 'o3', text: 'De zwaartekracht', isCorrect: false },
      { id: 'o4', text: 'De luchtdruk', isCorrect: false },
    ]
  },
  {
    id: 'q47',
    topic: 'Krachten en Beweging',
    text: 'Newtons eerste wet zegt dat...',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'F = ma', isCorrect: false },
      { id: 'o2', text: 'Een object in rust blijft in rust, tenzij een kracht erop werkt', isCorrect: true },
      { id: 'o3', text: 'Actie = Reactie', isCorrect: false },
      { id: 'o4', text: 'De snelheid is constant', isCorrect: false },
    ]
  },
  {
    id: 'q48',
    topic: 'Krachten en Beweging',
    text: 'Newtons derde wet zegt dat...',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'De versnelling neemt af', isCorrect: false },
      { id: 'o2', text: 'Voor elke actie is er een gelijke en tegengestelde reactie', isCorrect: true },
      { id: 'o3', text: 'De zwaartekracht is constant', isCorrect: false },
      { id: 'o4', text: 'Wrijving neemt toe met de snelheid', isCorrect: false },
    ]
  },
  {
    id: 'q49',
    topic: 'Krachten en Beweging',
    text: 'Een object valt zonder luchtweerstand. Na 2 seconden is de snelheid:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: '10 m/s', isCorrect: false },
      { id: 'o2', text: '20 m/s', isCorrect: true },
      { id: 'o3', text: '40 m/s', isCorrect: false },
      { id: 'o4', text: '5 m/s', isCorrect: false },
    ]
  },
  {
    id: 'q50',
    topic: 'Krachten en Beweging',
    text: 'Impuls is het product van:',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: 'Massa en versnelling', isCorrect: false },
      { id: 'o2', text: 'Kracht en tijd', isCorrect: true },
      { id: 'o3', text: 'Snelheid en afstand', isCorrect: false },
      { id: 'o4', text: 'Energie en massa', isCorrect: false },
    ]
  },
  {
    id: 'q51',
    topic: 'Krachten en Beweging',
    text: 'Twee voetballers botsen samen. De impuls verandert het snelst voor de speler met:',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: 'De kleinste massa', isCorrect: true },
      { id: 'o2', text: 'De grootste massa', isCorrect: false },
      { id: 'o3', text: 'Dit hangt niet van massa af', isCorrect: false },
      { id: 'o4', text: 'Gelijke massa hebben hetzelfde effect', isCorrect: false },
    ]
  },
  {
    id: 'q52',
    topic: 'Krachten en Beweging',
    text: 'De snelheid van een voorwerp verdubbeld. Zijn kinetische energie wordt:',
    examYear: '2024-II',
    options: [
      { id: 'o1', text: 'Twee keer zo groot', isCorrect: false },
      { id: 'o2', text: 'Vier keer zo groot', isCorrect: true },
      { id: 'o3', text: 'Half zo groot', isCorrect: false },
      { id: 'o4', text: 'Onveranderd', isCorrect: false },
    ]
  },
  {
    id: 'q53',
    topic: 'Krachten en Beweging',
    text: 'Een voorwerp wordt omhoog gegooid en bereikt de maximale hoogte. Op dat moment is de snelheid...',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Maximaal', isCorrect: false },
      { id: 'o2', text: 'Nul', isCorrect: true },
      { id: 'o3', text: 'Gelijk aan de initiële snelheid', isCorrect: false },
      { id: 'o4', text: 'Groter dan initieel', isCorrect: false },
    ]
  },
  {
    id: 'q54',
    topic: 'Krachten en Beweging',
    text: 'De zwaartekracht op een voorwerp van 5 kg is (g = 10 m/s²):',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: '0,5 N', isCorrect: false },
      { id: 'o2', text: '5 N', isCorrect: false },
      { id: 'o3', text: '50 N', isCorrect: true },
      { id: 'o4', text: '500 N', isCorrect: false },
    ]
  },
  {
    id: 'q55',
    topic: 'Krachten en Beweging',
    text: 'Een massa versnelt op een horizontaal vlak. De nettowerk verricht is gelijk aan:',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: 'De massa maal de versnelling', isCorrect: false },
      { id: 'o2', text: 'De verandering in kinetische energie', isCorrect: true },
      { id: 'o3', text: 'De nettokracht', isCorrect: false },
      { id: 'o4', text: 'De potentiële energie', isCorrect: false },
    ]
  },
  {
    id: 'q56',
    topic: 'Krachten en Beweging',
    text: 'Een trein versnelt met 2 m/s². Hoelang duurt het voordat de snelheid van 100 m/s wordt bereikt?',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: '50 s', isCorrect: true },
      { id: 'o2', text: '200 s', isCorrect: false },
      { id: 'o3', text: '10 s', isCorrect: false },
      { id: 'o4', text: '100 s', isCorrect: false },
    ]
  },
  {
    id: 'q57',
    topic: 'Krachten en Beweging',
    text: 'Een voorwerp heeft een massa van 2 kg en beweegt met een snelheid van 5 m/s. Zijn momentum is:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: '2.5 kg·m/s', isCorrect: false },
      { id: 'o2', text: '10 kg·m/s', isCorrect: true },
      { id: 'o3', text: '7 kg·m/s', isCorrect: false },
      { id: 'o4', text: '3 kg·m/s', isCorrect: false },
    ]
  },
  {
    id: 'q58',
    topic: 'Krachten en Beweging',
    text: 'Een auto weegt 1000 kg en rijdt met 20 m/s. Wat is zijn momentum?',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: '50 kg·m/s', isCorrect: false },
      { id: 'o2', text: '20000 kg·m/s', isCorrect: true },
      { id: 'o3', text: '1020 kg·m/s', isCorrect: false },
      { id: 'o4', text: '980 kg·m/s', isCorrect: false },
    ]
  },
  {
    id: 'q59',
    topic: 'Krachten en Beweging',
    text: 'Een springende larve bereikt zijn maximale hoogte. Op dat moment is zijn versnelling:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Nul', isCorrect: false },
      { id: 'o2', text: 'Gelijk aan g omlaag', isCorrect: true },
      { id: 'o3', text: 'Maximaal', isCorrect: false },
      { id: 'o4', text: 'Gelijk aan de initiële versnelling', isCorrect: false },
    ]
  },
  {
    id: 'q60',
    topic: 'Krachten en Beweging',
    text: 'Bij botsingen is het behoud van momentum altijd van toepassing. Dit is waar omdat:',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'De kinetische energie behouden blijft', isCorrect: false },
      { id: 'o2', text: 'De interne krachten veel groter zijn dan externe krachten', isCorrect: true },
      { id: 'o3', text: 'De zwaartekracht nul is', isCorrect: false },
      { id: 'o4', text: 'De versnelling constant is', isCorrect: false },
    ]
  },

  // TRILLINGEN EN GOLVEN (30 vragen)
  {
    id: 'q61',
    topic: 'Trillingen en Golven',
    text: 'Een geluidsgolf heeft een frequentie van 440 Hz en de geluidssnelheid in lucht is 340 m/s. Wat is de golflengte van dit geluid?',
    options: [
      { id: 'o1', text: '0,77 m', isCorrect: true },
      { id: 'o2', text: '1,29 m', isCorrect: false },
      { id: 'o3', text: '149600 m', isCorrect: false },
      { id: 'o4', text: '100 m', isCorrect: false },
    ]
  },
  {
    id: 'q62',
    topic: 'Trillingen en Golven',
    text: 'De periode T van een trilling is:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: 'Hetzelfde als frequentie', isCorrect: false },
      { id: 'o2', text: 'Het omgekeerde van frequentie', isCorrect: true },
      { id: 'o3', text: 'Gelijk aan de golflengte', isCorrect: false },
      { id: 'o4', text: 'Het gemiddelde van verschillende golven', isCorrect: false },
    ]
  },
  {
    id: 'q63',
    topic: 'Trillingen en Golven',
    text: 'Een golf met frequentie 50 Hz heeft een golflengte van 2 m. Wat is de golfsnelheid?',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: '25 m/s', isCorrect: false },
      { id: 'o2', text: '100 m/s', isCorrect: true },
      { id: 'o3', text: '52 m/s', isCorrect: false },
      { id: 'o4', text: '0,04 m/s', isCorrect: false },
    ]
  },
  {
    id: 'q64',
    topic: 'Trillingen en Golven',
    text: 'Een trillend voorwerp heeft een amplitude van 5 cm. De afstand van hoogste tot laagste positie is:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: '2,5 cm', isCorrect: false },
      { id: 'o2', text: '5 cm', isCorrect: false },
      { id: 'o3', text: '10 cm', isCorrect: true },
      { id: 'o4', text: '20 cm', isCorrect: false },
    ]
  },
  {
    id: 'q65',
    topic: 'Trillingen en Golven',
    text: 'Een lichtgolf heeft een golflengte van 500 nm (zichtbaar licht). Wat is de frequentie? (c = 3 × 10⁸ m/s)',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: '6 × 10¹⁴ Hz', isCorrect: true },
      { id: 'o2', text: '1,67 × 10⁻¹⁵ Hz', isCorrect: false },
      { id: 'o3', text: '3 × 10⁸ Hz', isCorrect: false },
      { id: 'o4', text: '5 × 10⁻⁷ Hz', isCorrect: false },
    ]
  },
  {
    id: 'q66',
    topic: 'Trillingen en Golven',
    text: 'Twee golven interferen constructief als:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'De amplitudes tegengesteld zijn', isCorrect: false },
      { id: 'o2', text: 'Ze in fase zijn', isCorrect: true },
      { id: 'o3', text: 'Ze verschillende frequenties hebben', isCorrect: false },
      { id: 'o4', text: 'Ze halvegolf uit fase zijn', isCorrect: false },
    ]
  },
  {
    id: 'q67',
    topic: 'Trillingen en Golven',
    text: 'De kaval heeft een laagste toonhoogte van 277 Hz. De golflengte van deze toon in lucht (v = 340 m/s) is:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: '0,81 m', isCorrect: true },
      { id: 'o2', text: '1,23 m', isCorrect: false },
      { id: 'o3', text: '617 m', isCorrect: false },
      { id: 'o4', text: '94090 m', isCorrect: false },
    ]
  },
  {
    id: 'q68',
    topic: 'Trillingen en Golven',
    text: 'Een staande golf in een snaar ontstaat door:',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: 'Twee golven in dezelfde richting', isCorrect: false },
      { id: 'o2', text: 'Twee golven in tegengestelde richting met dezelfde frequentie', isCorrect: true },
      { id: 'o3', text: 'Eén golf met hoge frequentie', isCorrect: false },
      { id: 'o4', text: 'Eén golf die absorbeert', isCorrect: false },
    ]
  },
  {
    id: 'q69',
    topic: 'Trillingen en Golven',
    text: 'In een staande golf zijn de knopen:',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: 'Punten met maximale amplitude', isCorrect: false },
      { id: 'o2', text: 'Punten met nul amplitude', isCorrect: true },
      { id: 'o3', text: 'Punten met halve amplitude', isCorrect: false },
      { id: 'o4', text: 'Punten waar de golf breekt', isCorrect: false },
    ]
  },
  {
    id: 'q70',
    topic: 'Trillingen en Golven',
    text: 'Een buik in een staande golf is:',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'Een punt met nul amplitude', isCorrect: false },
      { id: 'o2', text: 'Een punt met maximale amplitude', isCorrect: true },
      { id: 'o3', text: 'Hetzelfde als een knoop', isCorrect: false },
      { id: 'o4', text: 'Een punt waar energie verdwijnt', isCorrect: false },
    ]
  },
  {
    id: 'q71',
    topic: 'Trillingen en Golven',
    text: 'Een open buis met twee open uiteinden heeft de laagste toon als de lengte gelijk is aan:',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: '¼λ', isCorrect: false },
      { id: 'o2', text: '½λ', isCorrect: true },
      { id: 'o3', text: 'λ', isCorrect: false },
      { id: 'o4', text: '2λ', isCorrect: false },
    ]
  },
  {
    id: 'q72',
    topic: 'Trillingen en Golven',
    text: 'Een gesloten buis (één open, één gesloten uiteinde) heeft de laagste toon als de lengte gelijk is aan:',
    examYear: '2024-II',
    options: [
      { id: 'o1', text: '¼λ', isCorrect: true },
      { id: 'o2', text: '½λ', isCorrect: false },
      { id: 'o3', text: 'λ', isCorrect: false },
      { id: 'o4', text: '2λ', isCorrect: false },
    ]
  },
  {
    id: 'q73',
    topic: 'Trillingen en Golven',
    text: 'Een resonantie treedt op als:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'De frequentie van aandrijving veel hoger is', isCorrect: false },
      { id: 'o2', text: 'De aandrijffrequentie gelijk is aan de eigenfrequentie', isCorrect: true },
      { id: 'o3', text: 'De amplitude nul is', isCorrect: false },
      { id: 'o4', text: 'De fase tegengesteld is', isCorrect: false },
    ]
  },
  {
    id: 'q74',
    topic: 'Trillingen en Golven',
    text: 'Het Doppler effect treedt op wanneer:',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'Een geluidsbron stil staat', isCorrect: false },
      { id: 'o2', text: 'Een geluidsbron beweegt ten opzichte van waarnemer', isCorrect: true },
      { id: 'o3', text: 'De golflengte constant is', isCorrect: false },
      { id: 'o4', text: 'De temperatuur te hoog is', isCorrect: false },
    ]
  },
  {
    id: 'q75',
    topic: 'Trillingen en Golven',
    text: 'Diffractie gebeurt wanneer:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: 'Twee golven elkaar versterken', isCorrect: false },
      { id: 'o2', text: 'Een golf rond een obstakel buigt', isCorrect: true },
      { id: 'o3', text: 'Een golf wordt geabsorbeerd', isCorrect: false },
      { id: 'o4', text: 'Twee golven elkaar verzwakken', isCorrect: false },
    ]
  },
  {
    id: 'q76',
    topic: 'Trillingen en Golven',
    text: 'De snelheid van geluid in lucht bij 20°C is ongeveer:',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: '200 m/s', isCorrect: false },
      { id: 'o2', text: '340 m/s', isCorrect: true },
      { id: 'o3', text: '3000 m/s', isCorrect: false },
      { id: 'o4', text: '100 m/s', isCorrect: false },
    ]
  },
  {
    id: 'q77',
    topic: 'Trillingen en Golven',
    text: 'De snelheid van licht in vacuüm is:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: '3 × 10⁷ m/s', isCorrect: false },
      { id: 'o2', text: '3 × 10⁸ m/s', isCorrect: true },
      { id: 'o3', text: '3 × 10⁹ m/s', isCorrect: false },
      { id: 'o4', text: '3 × 10¹⁰ m/s', isCorrect: false },
    ]
  },
  {
    id: 'q78',
    topic: 'Trillingen en Golven',
    text: 'Een trilling heeft periode 0,02 s. Wat is de frequentie?',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: '0,02 Hz', isCorrect: false },
      { id: 'o2', text: '20 Hz', isCorrect: false },
      { id: 'o3', text: '50 Hz', isCorrect: true },
      { id: 'o4', text: '0,5 Hz', isCorrect: false },
    ]
  },
  {
    id: 'q79',
    topic: 'Trillingen en Golven',
    text: 'Een voorwerp trilt harmonisch. De maximale snelheid is:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Nul', isCorrect: false },
      { id: 'o2', text: 'In het middelpunt van trillen', isCorrect: true },
      { id: 'o3', text: 'In de uiterste posities', isCorrect: false },
      { id: 'o4', text: 'Constant', isCorrect: false },
    ]
  },
  {
    id: 'q80',
    topic: 'Trillingen en Golven',
    text: 'Wisselstroom met frequentie 50 Hz betekent dat het signaal per seconde:',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: '25 keer van teken wisselt', isCorrect: true },
      { id: 'o2', text: '50 keer van teken wisselt', isCorrect: false },
      { id: 'o3', text: '100 keer van teken wisselt', isCorrect: false },
      { id: 'o4', text: 'Niet van teken wisselt', isCorrect: false },
    ]
  },
  {
    id: 'q81',
    topic: 'Trillingen en Golven',
    text: 'Bij breking van licht verandert:',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: 'De frequentie', isCorrect: false },
      { id: 'o2', text: 'De golflengte en snelheid', isCorrect: true },
      { id: 'o3', text: 'De amplitude', isCorrect: false },
      { id: 'o4', text: 'Niets, alleen de richting', isCorrect: false },
    ]
  },
  {
    id: 'q82',
    topic: 'Trillingen en Golven',
    text: 'De brekingswet van Snellius is:',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'n₁ sin θ₁ = n₂ sin θ₂', isCorrect: true },
      { id: 'o2', text: 'n₁ cos θ₁ = n₂ cos θ₂', isCorrect: false },
      { id: 'o3', text: 'sin θ₁ / sin θ₂ = constant', isCorrect: false },
      { id: 'o4', text: 'θ₁ = θ₂', isCorrect: false },
    ]
  },
  {
    id: 'q83',
    topic: 'Trillingen en Golven',
    text: 'Totale interne reflectie treedt op als:',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: 'Licht van dun naar dicht medium gaat', isCorrect: false },
      { id: 'o2', text: 'Licht van dicht naar dun medium gaat en hoek groter is dan kritische hoek', isCorrect: true },
      { id: 'o3', text: 'Licht loodrecht invalt', isCorrect: false },
      { id: 'o4', text: 'Licht evenwijdig invalt', isCorrect: false },
    ]
  },
  {
    id: 'q84',
    topic: 'Trillingen en Golven',
    text: 'Een lenzen werking is gebaseerd op:',
    examYear: '2024-II',
    options: [
      { id: 'o1', text: 'Absorptie', isCorrect: false },
      { id: 'o2', text: 'Breking', isCorrect: true },
      { id: 'o3', text: 'Reflectie', isCorrect: false },
      { id: 'o4', text: 'Diffractie', isCorrect: false },
    ]
  },
  {
    id: 'q85',
    topic: 'Trillingen en Golven',
    text: 'Een bolle lens werkt als:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Een verspreider van licht', isCorrect: false },
      { id: 'o2', text: 'Een concentrator van licht', isCorrect: true },
      { id: 'o3', text: 'Een absorbeerder van licht', isCorrect: false },
      { id: 'o4', text: 'Een reflector van licht', isCorrect: false },
    ]
  },
  {
    id: 'q86',
    topic: 'Trillingen en Golven',
    text: 'Een virtueel beeld ontstaat bij:',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'Een bolle spiegel', isCorrect: false },
      { id: 'o2', text: 'Een bolle lens op kleine afstand', isCorrect: true },
      { id: 'o3', text: 'Een holle spiegel op grote afstand', isCorrect: false },
      { id: 'o4', text: 'Een vlakke spiegel ver weg', isCorrect: false },
    ]
  },
  {
    id: 'q87',
    topic: 'Trillingen en Golven',
    text: 'De lensformule is:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: '1/f = 1/u + 1/v', isCorrect: true },
      { id: 'o2', text: 'f = u + v', isCorrect: false },
      { id: 'o3', text: '1/u = 1/v + 1/f', isCorrect: false },
      { id: 'o4', text: 'f = u × v', isCorrect: false },
    ]
  },
  {
    id: 'q88',
    topic: 'Trillingen en Golven',
    text: 'De vergroting is gedefinieerd als:',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: 'M = v/u', isCorrect: true },
      { id: 'o2', text: 'M = u/v', isCorrect: false },
      { id: 'o3', text: 'M = f/u', isCorrect: false },
      { id: 'o4', text: 'M = u + v', isCorrect: false },
    ]
  },
  {
    id: 'q89',
    topic: 'Trillingen en Golven',
    text: 'Een golf met een lange golflengte diffracteert meer dan een golf met korte golflengte. Dit is omdat:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: 'De energie hoger is', isCorrect: false },
      { id: 'o2', text: 'De golflengte groter is dan de opening', isCorrect: true },
      { id: 'o3', text: 'De frequentie lager is', isCorrect: false },
      { id: 'o4', text: 'De amplitude groter is', isCorrect: false },
    ]
  },
  {
    id: 'q90',
    topic: 'Trillingen en Golven',
    text: 'Transversale golven hebben:',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: 'Trillingen parallel aan voortplanting', isCorrect: false },
      { id: 'o2', text: 'Trillingen loodrecht op voortplanting', isCorrect: true },
      { id: 'o3', text: 'Geen trillingen', isCorrect: false },
      { id: 'o4', text: 'Willekeurige trillingen', isCorrect: false },
    ]
  },

  // STRALING EN GEZONDHEID (30 vragen)
  {
    id: 'q91',
    topic: 'Straling en Gezondheid',
    text: 'Welk type ioniserende straling heeft het grootste doordringend vermogen, maar het kleinste ioniserend vermogen?',
    examYear: '2018-I',
    options: [
      { id: 'o1', text: 'Alfastraling (α)', isCorrect: false },
      { id: 'o2', text: 'Bètastraling (β)', isCorrect: false },
      { id: 'o3', text: 'Gammastraling (γ)', isCorrect: true },
      { id: 'o4', text: 'Infraroodstraling', isCorrect: false },
    ]
  },
  {
    id: 'q92',
    topic: 'Straling en Gezondheid',
    text: 'Alfadeeltjes zijn:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: 'Elektronen', isCorrect: false },
      { id: 'o2', text: 'Heliumkernen', isCorrect: true },
      { id: 'o3', text: 'Fotonen', isCorrect: false },
      { id: 'o4', text: 'Neutronen', isCorrect: false },
    ]
  },
  {
    id: 'q93',
    topic: 'Straling en Gezondheid',
    text: 'Bètadeeltjes zijn:',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'Heliumkernen', isCorrect: false },
      { id: 'o2', text: 'Protonen', isCorrect: false },
      { id: 'o3', text: 'Elektronen', isCorrect: true },
      { id: 'o4', text: 'Positronen (kan ook)', isCorrect: false },
    ]
  },
  {
    id: 'q94',
    topic: 'Straling en Gezondheid',
    text: 'Gammastraling bestaat uit:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: 'Deeltjes', isCorrect: false },
      { id: 'o2', text: 'Elektromagnetische straling (fotonen)', isCorrect: true },
      { id: 'o3', text: 'Geluidsgolven', isCorrect: false },
      { id: 'o4', text: 'Neutronen', isCorrect: false },
    ]
  },
  {
    id: 'q95',
    topic: 'Straling en Gezondheid',
    text: 'Een halveringstijd van 5 jaar betekent dat na 5 jaar:',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: 'Alles verdwenen is', isCorrect: false },
      { id: 'o2', text: 'De helft van de atomen vervallen is', isCorrect: true },
      { id: 'o3', text: 'Een kwart van de atomen vervallen is', isCorrect: false },
      { id: 'o4', text: 'Alle atomen verdwenen zijn', isCorrect: false },
    ]
  },
  {
    id: 'q96',
    topic: 'Straling en Gezondheid',
    text: 'Na twee halveringstijden blijft er over:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: '50% van het origineel', isCorrect: false },
      { id: 'o2', text: '25% van het origineel', isCorrect: true },
      { id: 'o3', text: '75% van het origineel', isCorrect: false },
      { id: 'o4', text: '10% van het origineel', isCorrect: false },
    ]
  },
  {
    id: 'q97',
    topic: 'Straling en Gezondheid',
    text: 'De activiteit van een radioactief monster is:',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: 'Het aantal atomen dat vervalt per seconde', isCorrect: true },
      { id: 'o2', text: 'Het totale aantal atomen', isCorrect: false },
      { id: 'o3', text: 'De massa van het monster', isCorrect: false },
      { id: 'o4', text: 'De temperatuur van het monster', isCorrect: false },
    ]
  },
  {
    id: 'q98',
    topic: 'Straling en Gezondheid',
    text: 'De eenheid van activiteit is:',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: 'Joule', isCorrect: false },
      { id: 'o2', text: 'Becquerel (Bq) = dezelfde als decay per seconde', isCorrect: true },
      { id: 'o3', text: 'Watt', isCorrect: false },
      { id: 'o4', text: 'Pascal', isCorrect: false },
    ]
  },
  {
    id: 'q99',
    topic: 'Straling en Gezondheid',
    text: 'Röntgenstraling is:',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: 'Ioniserende elektromagnetische straling', isCorrect: true },
      { id: 'o2', text: 'Radioactief verval', isCorrect: false },
      { id: 'o3', text: 'Zichtbaar licht', isCorrect: false },
      { id: 'o4', text: 'Infrarood', isCorrect: false },
    ]
  },
  {
    id: 'q100',
    topic: 'Straling en Gezondheid',
    text: 'Een Gray (Gy) is de eenheid van:',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: 'Radioactiviteit', isCorrect: false },
      { id: 'o2', text: 'Geabsorbeerde dosis straling', isCorrect: true },
      { id: 'o3', text: 'Effectieve dosis', isCorrect: false },
      { id: 'o4', text: 'Stralingsvermogen', isCorrect: false },
    ]
  },
  {
    id: 'q101',
    topic: 'Straling en Gezondheid',
    text: 'De ioniserende vermogen van alfastraling in materie is:',
    examYear: '2024-II',
    options: [
      { id: 'o1', text: 'Klein', isCorrect: false },
      { id: 'o2', text: 'Groot', isCorrect: true },
      { id: 'o3', text: 'Nul', isCorrect: false },
      { id: 'o4', text: 'Afhangt van de temperatuur', isCorrect: false },
    ]
  },
  {
    id: 'q102',
    topic: 'Straling en Gezondheid',
    text: 'Het doordringend vermogen van alfastraling is:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Hoog', isCorrect: false },
      { id: 'o2', text: 'Laag', isCorrect: true },
      { id: 'o3', text: 'Nul', isCorrect: false },
      { id: 'o4', text: 'Oneindig', isCorrect: false },
    ]
  },
  {
    id: 'q103',
    topic: 'Straling en Gezondheid',
    text: 'Bètadeeltjes hebben een doordringend vermogen dat groter is dan alfa omdat:',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'Ze zwaarder zijn', isCorrect: false },
      { id: 'o2', text: 'Ze sneller zijn en minder ioniseren per lengte-eenheid', isCorrect: true },
      { id: 'o3', text: 'Ze zijn gefocust', isCorrect: false },
      { id: 'o4', text: 'De temperatuur beter verandert', isCorrect: false },
    ]
  },
  {
    id: 'q104',
    topic: 'Straling en Gezondheid',
    text: 'Een atoom met atoomnummer 6 heeft een massagetal van 14. Dit atoom bevat:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: '6 neutronen', isCorrect: false },
      { id: 'o2', text: '14 neutronen', isCorrect: false },
      { id: 'o3', text: '8 neutronen', isCorrect: true },
      { id: 'o4', text: '20 neutronen', isCorrect: false },
    ]
  },
  {
    id: 'q105',
    topic: 'Straling en Gezondheid',
    text: 'C-14 verval naar N-14. Dit is een voorbeeld van:',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'Alfaverval', isCorrect: false },
      { id: 'o2', text: 'Bètaverval', isCorrect: true },
      { id: 'o3', text: 'Gammaverval', isCorrect: false },
      { id: 'o4', text: 'Koolstofverval', isCorrect: false },
    ]
  },
  {
    id: 'q106',
    topic: 'Straling en Gezondheid',
    text: 'De massa van een atoom is altijd:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: 'Gelijk aan het massagetal', isCorrect: false },
      { id: 'o2', text: 'Iets kleiner dan de som van nucleonen', isCorrect: true },
      { id: 'o3', text: 'Gelijk aan de kernmassa', isCorrect: false },
      { id: 'o4', text: 'Onveranderd bij radioactief verval', isCorrect: false },
    ]
  },
  {
    id: 'q107',
    topic: 'Straling en Gezondheid',
    text: 'De bindingsenergie is:',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: 'De energie nodig om de kern samen te houden', isCorrect: false },
      { id: 'o2', text: 'De energie die vrijkomt wanneer de kern uit elkaar gaat', isCorrect: true },
      { id: 'o3', text: 'De kernenergie', isCorrect: false },
      { id: 'o4', text: 'De vervalenergie', isCorrect: false },
    ]
  },
  {
    id: 'q108',
    topic: 'Straling en Gezondheid',
    text: 'E = mc² geeft de relatie tussen:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Energie en kracht', isCorrect: false },
      { id: 'o2', text: 'Massa en energie', isCorrect: true },
      { id: 'o3', text: 'Energie en snelheid', isCorrect: false },
      { id: 'o4', text: 'Massa en temperatuur', isCorrect: false },
    ]
  },
  {
    id: 'q109',
    topic: 'Straling en Gezondheid',
    text: 'Bij kernfissie:',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: 'Lichte kernen fuseren', isCorrect: false },
      { id: 'o2', text: 'Een zware kern splitst', isCorrect: true },
      { id: 'o3', text: 'Energie verdwijnt', isCorrect: false },
      { id: 'o4', text: 'Geen stralingsenergie vrijkomt', isCorrect: false },
    ]
  },
  {
    id: 'q110',
    topic: 'Straling en Gezondheid',
    text: 'Bij kernfusie:',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: 'Zware kernen splitsen', isCorrect: false },
      { id: 'o2', text: 'Lichte kernen fuseren tot zwaardere', isCorrect: true },
      { id: 'o3', text: 'Energie verdwijnt', isCorrect: false },
      { id: 'o4', text: 'Alleen gammastraling vrijkomt', isCorrect: false },
    ]
  },
  {
    id: 'q111',
    topic: 'Straling en Gezondheid',
    text: 'Het elektromagnetische spectrum van langzaam naar snel is:',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: 'Radio, infrarood, zichtbaar, ultraviolet, röntgen, gamma', isCorrect: true },
      { id: 'o2', text: 'Gamma, röntgen, ultraviolet, zichtbaar, infrarood, radio', isCorrect: false },
      { id: 'o3', text: 'Zichtbaar, infrarood, ultraviolet, radio, röntgen', isCorrect: false },
      { id: 'o4', text: 'Radio, zichtbaar, gamma, röntgen', isCorrect: false },
    ]
  },
  {
    id: 'q112',
    topic: 'Straling en Gezondheid',
    text: 'Infrarood ziet men als:',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: 'Zichtbaar licht', isCorrect: false },
      { id: 'o2', text: 'Warmte', isCorrect: true },
      { id: 'o3', text: 'Radiostraling', isCorrect: false },
      { id: 'o4', text: 'Röntgenstraling', isCorrect: false },
    ]
  },
  {
    id: 'q113',
    topic: 'Straling en Gezondheid',
    text: 'Ultraviolet licht kan:',
    examYear: '2024-II',
    options: [
      { id: 'o1', text: 'Geen DNA schade veroorzaken', isCorrect: false },
      { id: 'o2', text: 'DNA beschadigen en huidkanker veroorzaken', isCorrect: true },
      { id: 'o3', text: 'Alleen het uiterlijk veranderen', isCorrect: false },
      { id: 'o4', text: 'Goed voor alle huidtypen', isCorrect: false },
    ]
  },
  {
    id: 'q114',
    topic: 'Straling en Gezondheid',
    text: 'De dosis-effect relatie betekent:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Meer straling = meer effect', isCorrect: true },
      { id: 'o2', text: 'Straling heeft geen effect', isCorrect: false },
      { id: 'o3', text: 'Minder straling = beter effect', isCorrect: false },
      { id: 'o4', text: 'Effect is onafhankelijk van dosis', isCorrect: false },
    ]
  },
  {
    id: 'q115',
    topic: 'Straling en Gezondheid',
    text: 'De COCONUTS-2b exoplaneet werd gefotografeerd met infrarood omdat:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Het zichtbaar licht te zwak is', isCorrect: true },
      { id: 'o2', text: 'Infrarood beter door atmosfeer gaat', isCorrect: false },
      { id: 'o3', text: 'Zichtbaar licht geen golven zijn', isCorrect: false },
      { id: 'o4', text: 'Dit is conventie', isCorrect: false },
    ]
  },
  {
    id: 'q116',
    topic: 'Straling en Gezondheid',
    text: 'Een thermische camera detecteert:',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'Zichtbaar licht', isCorrect: false },
      { id: 'o2', text: 'Infrarood straling', isCorrect: true },
      { id: 'o3', text: 'Röntgenstraling', isCorrect: false },
      { id: 'o4', text: 'Ultraviolet', isCorrect: false },
    ]
  },
  {
    id: 'q117',
    topic: 'Straling en Gezondheid',
    text: 'Radiotherapie werkt door:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: 'Temperatuur van tumor te verhogen', isCorrect: false },
      { id: 'o2', text: 'Kankercel DNA te beschadigen met straling', isCorrect: true },
      { id: 'o3', text: 'Tumor te verwijderen', isCorrect: false },
      { id: 'o4', text: 'Chemicaliën toe te voegen', isCorrect: false },
    ]
  },
  {
    id: 'q118',
    topic: 'Straling en Gezondheid',
    text: 'Een PET-scan gebruikt:',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'Röntgenstraling', isCorrect: false },
      { id: 'o2', text: 'Positronemiters die annihileren', isCorrect: true },
      { id: 'o3', text: 'Alleen zichtbaar licht', isCorrect: false },
      { id: 'o4', text: 'Geluidsgolven', isCorrect: false },
    ]
  },
  {
    id: 'q119',
    topic: 'Straling en Gezondheid',
    text: 'De intensiteit van ioniserende straling neemt af met afstand volgens:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: 'Een lineaire wet', isCorrect: false },
      { id: 'o2', text: 'Het omgekeerde kwadraatwet (1/r²)', isCorrect: true },
      { id: 'o3', text: 'Een exponentiële wet', isCorrect: false },
      { id: 'o4', text: 'Een logaritmische wet', isCorrect: false },
    ]
  },
  {
    id: 'q120',
    topic: 'Straling en Gezondheid',
    text: 'Bij afscherming met lood wordt alfastraling vooral geblokkeerd door:',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: 'Een papieren laag', isCorrect: true },
      { id: 'o2', text: 'Een dik pak lood', isCorrect: false },
      { id: 'o3', text: 'Inert gas', isCorrect: false },
      { id: 'o4', text: 'Water', isCorrect: false },
    ]
  },

  // ENERGIE OMZETTINGEN (30 vragen)
  {
    id: 'q121',
    topic: 'Energie Omzettingen',
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
    id: 'q122',
    topic: 'Energie Omzettingen',
    text: 'De potentiële energie van een object op hoogte h is:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: 'E_p = ½mv²', isCorrect: false },
      { id: 'o2', text: 'E_p = mgh', isCorrect: true },
      { id: 'o3', text: 'E_p = ma', isCorrect: false },
      { id: 'o4', text: 'E_p = Fv', isCorrect: false },
    ]
  },
  {
    id: 'q123',
    topic: 'Energie Omzettingen',
    text: 'De kinetische energie van een bewegend object is:',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'E_k = mgh', isCorrect: false },
      { id: 'o2', text: 'E_k = ½mv²', isCorrect: true },
      { id: 'o3', text: 'E_k = Fv', isCorrect: false },
      { id: 'o4', text: 'E_k = Fd', isCorrect: false },
    ]
  },
  {
    id: 'q124',
    topic: 'Energie Omzettingen',
    text: 'Arbeid is het product van:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: 'Massa en versnelling', isCorrect: false },
      { id: 'o2', text: 'Kracht en afstand (in richting van kracht)', isCorrect: true },
      { id: 'o3', text: 'Snelheid en tijd', isCorrect: false },
      { id: 'o4', text: 'Energie en vermogen', isCorrect: false },
    ]
  },
  {
    id: 'q125',
    topic: 'Energie Omzettingen',
    text: 'Vermogen is:',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: 'Arbeid per tijdseenheid', isCorrect: true },
      { id: 'o2', text: 'Kracht per afstand', isCorrect: false },
      { id: 'o3', text: 'Energie per massa', isCorrect: false },
      { id: 'o4', text: 'Snelheid per tijd', isCorrect: false },
    ]
  },
  {
    id: 'q126',
    topic: 'Energia Omzettingen',
    text: 'Een apparaat verbruikt 1000 J arbeid in 5 seconden. Het vermogen is:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: '5000 W', isCorrect: false },
      { id: 'o2', text: '200 W', isCorrect: true },
      { id: 'o3', text: '1000 W', isCorrect: false },
      { id: 'o4', text: '5 W', isCorrect: false },
    ]
  },
  {
    id: 'q127',
    topic: 'Energia Omzettingen',
    text: 'De wet van behoud van energie zegt dat:',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'Energie kan verdwijnen', isCorrect: false },
      { id: 'o2', text: 'Energie kan omgezet worden, maar totaal blijft constant', isCorrect: true },
      { id: 'o3', text: 'Energie neemt altijd toe', isCorrect: false },
      { id: 'o4', text: 'Energie is alleen thermisch', isCorrect: false },
    ]
  },
  {
    id: 'q128',
    topic: 'Energia Omzettingen',
    text: 'Wrijving omzet mechanische energie in:',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: 'Potentiële energie', isCorrect: false },
      { id: 'o2', text: 'Thermische energie (warmte)', isCorrect: true },
      { id: 'o3', text: 'Kinetische energie', isCorrect: false },
      { id: 'o4', text: 'Straling', isCorrect: false },
    ]
  },
  {
    id: 'q129',
    topic: 'Energia Omzettingen',
    text: 'Een dynamo in een fiets zet om:',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: 'Warmte in licht', isCorrect: false },
      { id: 'o2', text: 'Mechanische beweging in elektrische energie', isCorrect: true },
      { id: 'o3', text: 'Licht in beweging', isCorrect: false },
      { id: 'o4', text: 'Elektrische in thermische energie', isCorrect: false },
    ]
  },
  {
    id: 'q130',
    topic: 'Energia Omzettingen',
    text: 'Een gloeilamp zet elektrische energie om in:',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: 'Alleen licht', isCorrect: false },
      { id: 'o2', text: 'Warmte en licht', isCorrect: true },
      { id: 'o3', text: 'Alleen beweging', isCorrect: false },
      { id: 'o4', text: 'Kinetische energie', isCorrect: false },
    ]
  },
  {
    id: 'q131',
    topic: 'Energia Omzettingen',
    text: 'Het rendement van een machine is:',
    examYear: '2024-II',
    options: [
      { id: 'o1', text: 'De input vermogen gedeeld door output', isCorrect: false },
      { id: 'o2', text: 'De nuttige output gedeeld door totale input (× 100%)', isCorrect: true },
      { id: 'o3', text: 'De totale energie verbruikt', isCorrect: false },
      { id: 'o4', text: 'De arbeid verrichte', isCorrect: false },
    ]
  },
  {
    id: 'q132',
    topic: 'Energia Omzettingen',
    text: 'De zon levert energie door:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Verbrand fossiele brandstoffen', isCorrect: false },
      { id: 'o2', text: 'Kernfusie in de kern', isCorrect: true },
      { id: 'o3', text: 'Kernfissie', isCorrect: false },
      { id: 'o4', text: 'Chemische reacties', isCorrect: false },
    ]
  },
  {
    id: 'q133',
    topic: 'Energia Omzettingen',
    text: 'Zonnepanelen zetten om:',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: 'Warmte in licht', isCorrect: false },
      { id: 'o2', text: 'Zonne-energie (fotonen) in elektrische energie', isCorrect: true },
      { id: 'o3', text: 'Licht in warmte', isCorrect: false },
      { id: 'o4', text: 'Beweging in elektrische energie', isCorrect: false },
    ]
  },
  {
    id: 'q134',
    topic: 'Energia Omzettingen',
    text: 'Het groenehuiseffect veroorzaakt door:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: 'UV-straling van de zon', isCorrect: false },
      { id: 'o2', text: 'Infrarood terugkaatsing door broeikasgassen', isCorrect: true },
      { id: 'o3', text: 'Overmatige zonnige dagen', isCorrect: false },
      { id: 'o4', text: 'Te veel planten', isCorrect: false },
    ]
  },
  {
    id: 'q135',
    topic: 'Energia Omzettingen',
    text: 'Een hydro-elektrische centrale zet om:',
    examYear: '2022-I',
    options: [
      { id: 'o1', text: 'Potentiële energie van water in elektriciteit', isCorrect: true },
      { id: 'o2', text: 'Kinestische energie van wind in elektriciteit', isCorrect: false },
      { id: 'o3', text: 'Warmte in elektriciteit', isCorrect: false },
      { id: 'o4', text: 'Zonne-energie in elektriciteit', isCorrect: false },
    ]
  },
  {
    id: 'q136',
    topic: 'Energia Omzettingen',
    text: 'Een windmolen zet om:',
    examYear: '2023-I',
    options: [
      { id: 'o1', text: 'Kinetische energie van wind in elektriciteit', isCorrect: true },
      { id: 'o2', text: 'Potentiële energie in elektriciteit', isCorrect: false },
      { id: 'o3', text: 'Warmte in kinetische energie', isCorrect: false },
      { id: 'o4', text: 'Zonne-energie rechtstreeks', isCorrect: false },
    ]
  },
  {
    id: 'q137',
    topic: 'Energia Omzettingen',
    text: 'Een verbrandingsmotor zet om:',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: 'Chemische energie in mechanische energie', isCorrect: true },
      { id: 'o2', text: 'Elektrische in mechanische energie', isCorrect: false },
      { id: 'o3', text: 'Thermische in kinetische energie', isCorrect: false },
      { id: 'o4', text: 'Zonne-energie in beweging', isCorrect: false },
    ]
  },
  {
    id: 'q138',
    topic: 'Energia Omzettingen',
    text: 'Een batterij zet om:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Chemische energie in elektrische energie', isCorrect: true },
      { id: 'o2', text: 'Thermische in kinetische energie', isCorrect: false },
      { id: 'o3', text: 'Mechanische in elektrische energie', isCorrect: false },
      { id: 'o4', text: 'Zonne-energie in warmte', isCorrect: false },
    ]
  },
  {
    id: 'q139',
    topic: 'Energia Omzettingen',
    text: 'De specifieke warmtecapaciteit geeft aan:',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'Totale warmte van een voorwerp', isCorrect: false },
      { id: 'o2', text: 'Warmte nodig per kg per graad Celsius', isCorrect: true },
      { id: 'o3', text: 'Warmte verlies per seconde', isCorrect: false },
      { id: 'o4', text: 'Maximale warmte', isCorrect: false },
    ]
  },
  {
    id: 'q140',
    topic: 'Energia Omzettingen',
    text: 'Energie omzettingen zijn altijd:',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: '100% efficiënt', isCorrect: false },
      { id: 'o2', text: 'Minder dan 100% efficiënt door verlieswarmte', isCorrect: true },
      { id: 'o3', text: 'Onafhankelijk van verliezen', isCorrect: false },
      { id: 'o4', text: 'Altijd meer dan 100%', isCorrect: false },
    ]
  },
  {
    id: 'q141',
    topic: 'Energia Omzettingen',
    text: 'Een springende larve zet om:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Chemische energie (uit spieren) in kinetische en potentiële energie', isCorrect: true },
      { id: 'o2', text: 'Thermische in kinetische energie', isCorrect: false },
      { id: 'o3', text: 'Potentiële in kinetische energie', isCorrect: false },
      { id: 'o4', text: 'Zonne-energie in beweging', isCorrect: false },
    ]
  },
  {
    id: 'q142',
    topic: 'Energia Omzettingen',
    text: 'Het vermogen van een springende larve is:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Laag vanwege kleine massa', isCorrect: false },
      { id: 'o2', text: 'Hoog per kg vanwege efficiënte spierwerking', isCorrect: true },
      { id: 'o3', text: 'Nul als het laagt', isCorrect: false },
      { id: 'o4', text: 'Alleen thermisch', isCorrect: false },
    ]
  },
  {
    id: 'q143',
    topic: 'Energia Omzettingen',
    text: 'Thermische energie is gerelateerd aan:',
    examYear: '2020-I',
    options: [
      { id: 'o1', text: 'Ordeningsweerstand', isCorrect: false },
      { id: 'o2', text: 'Willekeurige beweging van atomen', isCorrect: true },
      { id: 'o3', text: 'Alleen temperatuur', isCorrect: false },
      { id: 'o4', text: 'Alleen straling', isCorrect: false },
    ]
  },
  {
    id: 'q144',
    topic: 'Energia Omzettingen',
    text: 'De geluidssnelheid in lucht neemt toe met:',
    examYear: '2021-I',
    options: [
      { id: 'o1', text: 'Afnemende temperatuur', isCorrect: false },
      { id: 'o2', text: 'Stijgende temperatuur', isCorrect: true },
      { id: 'o3', text: 'Druk alleen', isCorrect: false },
      { id: 'o4', text: 'Vochtigheid', isCorrect: false },
    ]
  },
  {
    id: 'q145',
    topic: 'Energia Omzettingen',
    text: 'Een effectieve energieconversie betekent:',
    examYear: '2022-II',
    options: [
      { id: 'o1', text: 'Veel verlieswarmte', isCorrect: false },
      { id: 'o2', text: 'Hoog rendement, weinig verspilling', isCorrect: true },
      { id: 'o3', text: 'Alle energie verloren', isCorrect: false },
      { id: 'o4', text: 'Geen omzetting nodig', isCorrect: false },
    ]
  },
  {
    id: 'q146',
    topic: 'Energia Omzettingen',
    text: 'Gegeven: een massa van 2 kg valt 10 meter. De snelheid onderaan is:',
    examYear: '2023-II',
    options: [
      { id: 'o1', text: '10 m/s', isCorrect: false },
      { id: 'o2', text: '14 m/s', isCorrect: true },
      { id: 'o3', text: '20 m/s', isCorrect: false },
      { id: 'o4', text: '5 m/s', isCorrect: false },
    ]
  },
  {
    id: 'q147',
    topic: 'Energia Omzettingen',
    text: 'Bij beweging tegen wrijving:',
    examYear: '2024-I',
    options: [
      { id: 'o1', text: 'Kinetische energie blijft gelijk', isCorrect: false },
      { id: 'o2', text: 'Kinetische energie neemt af, wrijving zet om in warmte', isCorrect: true },
      { id: 'o3', text: 'Alleen potentiële energie verandert', isCorrect: false },
      { id: 'o4', text: 'Geen energie gaat verloren', isCorrect: false },
    ]
  },
  {
    id: 'q148',
    topic: 'Energia Omzettingen',
    text: 'Een atoomkernenergie wordt vrijgesteld door:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Chemische verbrandingsprocessen', isCorrect: false },
      { id: 'o2', text: 'Massa te omzetten met E=mc²', isCorrect: true },
      { id: 'o3', text: 'Alleen thermische processen', isCorrect: false },
      { id: 'o4', text: 'Zonder energieverlies', isCorrect: false },
    ]
  },
  {
    id: 'q149',
    topic: 'Energia Omzettingen',
    text: 'Wanneer een voorwerp op zijn maximale hoogte is na verticaal omhoog gooien:',
    examYear: '2020-II',
    options: [
      { id: 'o1', text: 'Alle energie is kinetisch', isCorrect: false },
      { id: 'o2', text: 'Alle energie is potentieel', isCorrect: true },
      { id: 'o3', text: 'Er is geen energie', isCorrect: false },
      { id: 'o4', text: 'Potentieel = kinetisch', isCorrect: false },
    ]
  },
  {
    id: 'q150',
    topic: 'Energia Omzettingen',
    text: 'De voortplantingssnelheid van een golf hangt af van:',
    examYear: '2021-II',
    options: [
      { id: 'o1', text: 'Alleen frequentie', isCorrect: false },
      { id: 'o2', text: 'Het medium waardoor het gaat', isCorrect: true },
      { id: 'o3', text: 'De amplitudo', isCorrect: false },
      { id: 'o4', text: 'Niets bepaalds', isCorrect: false },
    ]
  },

  // AARDE EN HEELAL (30 vragen)
  {
    id: 'q151',
    topic: 'Aarde en Heelal',
    text: 'COCONUTS-2b is een exoplaneet die draait rond:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'De Zon', isCorrect: false },
      { id: 'o2', text: 'COCONUTS-2a ster', isCorrect: true },
      { id: 'o3', text: 'Een zwart gat', isCorrect: false },
      { id: 'o4', text: 'Een neutronster', isCorrect: false },
    ]
  },
  {
    id: 'q152',
    topic: 'Aarde en Heelal',
    text: 'De massa van ster COCONUTS-2a is 0,35 keer die van:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'De Aarde', isCorrect: false },
      { id: 'o2', text: 'De Zon', isCorrect: true },
      { id: 'o3', text: 'Jupiter', isCorrect: false },
      { id: 'o4', text: 'Het Heelal', isCorrect: false },
    ]
  },
  {
    id: 'q153',
    topic: 'Aarde en Heelal',
    text: 'De baansnelheid van COCONUTS-2b is 2,2 × 10² m/s. Dit is:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: '220 m/s', isCorrect: true },
      { id: 'o2', text: '22 m/s', isCorrect: false },
      { id: 'o3', text: '2200 m/s', isCorrect: false },
      { id: 'o4', text: '22000 m/s', isCorrect: false },
    ]
  },
  {
    id: 'q154',
    topic: 'Aarde en Heelal',
    text: 'Kepler derde wet zegt dat (T²) afhangt van:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Alleen de massa van de planeet', isCorrect: false },
      { id: 'o2', text: 'De baanstraal in het kwadraat (r³)', isCorrect: true },
      { id: 'o3', text: 'De snelheid van de planeet', isCorrect: false },
      { id: 'o4', text: 'De temperatuur van de ster', isCorrect: false },
    ]
  },
  {
    id: 'q155',
    topic: 'Aarde en Heelal',
    text: 'Een jaar op COCONUTS-2b is:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Hetzelfde als op Aarde (365 dagen)', isCorrect: false },
      { id: 'o2', text: 'Afhankelijk van baanstraal en sterrenchemisering', isCorrect: true },
      { id: 'o3', text: 'Altijd korter dan op Aarde', isCorrect: false },
      { id: 'o4', text: 'Oneindig lang', isCorrect: false },
    ]
  },
  {
    id: 'q156',
    topic: 'Aarde en Heelal',
    text: 'Het gravitatieverskyf formule is F = G(m₁m₂)/r². Wat is G?',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Een constante = 6,67 × 10⁻¹¹', isCorrect: true },
      { id: 'o2', text: 'De massa van een object', isCorrect: false },
      { id: 'o3', text: 'De afstand tussen objecten', isCorrect: false },
      { id: 'o4', text: 'De versnelling door zwaartekracht', isCorrect: false },
    ]
  },
  {
    id: 'q157',
    topic: 'Aarde en Heelal',
    text: 'De middelpuntzoekende kracht voor een baan wordt geleverd door:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'De rotatie van de planeet', isCorrect: false },
      { id: 'o2', text: 'De gravitatiekracht van de ster', isCorrect: true },
      { id: 'o3', text: 'De eigenbeweging van de planeet', isCorrect: false },
      { id: 'o4', text: 'Magnetische krachten', isCorrect: false },
    ]
  },
  {
    id: 'q158',
    topic: 'Aarde en Heelal',
    text: 'De ontdekking van exoplaneten werd initieel gedaan via:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Directe waarneming met zichtbaar licht', isCorrect: false },
      { id: 'o2', text: 'Infraroodfotografie (zoals COCONUTS-2b)', isCorrect: true },
      { id: 'o3', text: 'Alleen gravitatiewolven', isCorrect: false },
      { id: 'o4', text: 'Radiotelescopen', isCorrect: false },
    ]
  },
  {
    id: 'q159',
    topic: 'Aarde en Heelal',
    text: 'De omloop periode T kan berekend met:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'T = 2πr/v', isCorrect: true },
      { id: 'o2', text: 'T = r/v²', isCorrect: false },
      { id: 'o3', text: 'T = v/r', isCorrect: false },
      { id: 'o4', text: 'T = 2π/r', isCorrect: false },
    ]
  },
  {
    id: 'q160',
    topic: 'Aarde en Heelal',
    text: 'Waarom kan de transitmethode COCONUTS-2b niet detecteren?',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'De planeet mist in een sector van baan',isCorrect: true },
      { id: 'o2', text: 'De planeet is te ver weg', isCorrect: false },
      { id: 'o3', text: 'De ster is te flauw', isCorrect: false },
      { id: 'o4', text: 'Geen reden gegeven', isCorrect: false },
    ]
  },
  {
    id: 'q161',
    topic: 'Aarde en Heelal',
    text: 'De waarschijnlijkheid dat een planeet een transit veroorzaakt hangt af van:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'De inclinatie van de baan ten opzichte van ons gezichtspunt', isCorrect: true },
      { id: 'o2', text: 'Alleen de grote van de planeet', isCorrect: false },
      { id: 'o3', text: 'De kleur van de ster', isCorrect: false },
      { id: 'o4', text: 'De temperatuur van de planeet', isCorrect: false },
    ]
  },
  {
    id: 'q162',
    topic: 'Aarde en Heelal',
    text: 'De oppervlaktetemperatuur van COCONUTS-2b is 160°C, wat betekent:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Het is geschikt voor leven', isCorrect: false },
      { id: 'o2', text: 'Het straalt sterk in infrarood uit', isCorrect: true },
      { id: 'o3', text: 'Het kan niet bestaan', isCorrect: false },
      { id: 'o4', text: 'Het is dood gesteente', isCorrect: false },
    ]
  },
  {
    id: 'q163',
    topic: 'Aarde en Heelal',
    text: 'Wien wet vertelt ons:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Hoe ver een object weg is', isCorrect: false },
      { id: 'o2', text: 'De piekgolflengte van straling wordt bepaald door temperatuur', isCorrect: true },
      { id: 'o3', text: 'Hoe snel een object beweegt', isCorrect: false },
      { id: 'o4', text: 'Hoe oud een object is', isCorrect: false },
    ]
  },
  {
    id: 'q164',
    topic: 'Aarde en Heelal',
    text: 'De kijkhoek tussen twee hemellichamen als gezien van Aarde was 0,165°. Dit is:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Een grote hoek', isCorrect: false },
      { id: 'o2', text: 'Een zeer kleine hoek, moeilijk waar te nemen',isCorrect: true },
      { id: 'o3', text: 'Een rechte hoek', isCorrect: false },
      { id: 'o4', text: '45 graden', isCorrect: false },
    ]
  },
  {
    id: 'q165',
    topic: 'Aarde en Heelal',
    text: 'De afstand 35,4 lichtjaar betekent:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: '35,4 miljoen km', isCorrect: false },
      { id: 'o2', text: 'De afstand die licht in 35,4 jaar aflegt', isCorrect: true },
      { id: 'o3', text: 'Een astronomische eenheid', isCorrect: false },
      { id: 'o4', text: 'De straal van het heelal', isCorrect: false },
    ]
  },
  {
    id: 'q166',
    topic: 'Aarde en Heelal',
    text: 'Een zwart gat vormt zich wanneer:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Een ster explodeert', isCorrect: false },
      { id: 'o2', text: 'Zeer massieve ster inzakt boven de Schwarzschild straal', isCorrect: true },
      { id: 'o3', text: 'Een planeet verdwijnt', isCorrect: false },
      { id: 'o4', text: 'Het universum eindigt', isCorrect: false },
    ]
  },
  {
    id: 'q167',
    topic: 'Aarde en Heelal',
    text: 'Het licht kan niet ontsnappen aan een zwart gat omdat:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Het licht wordt geabsorbeerd', isCorrect: false },
      { id: 'o2', text: 'De ontsnappingssnelheid groter is dan de lichtsnelheid', isCorrect: true },
      { id: 'o3', text: 'Er is geen licht dichtbij', isCorrect: false },
      { id: 'o4', text: 'Dit is een wiskundige fout', isCorrect: false },
    ]
  },
  {
    id: 'q168',
    topic: 'Aarde en Heelal',
    text: 'De Hubble-Lemaitre Wet zegt:',
    examYear: '2025-I',
    options: [
      { id: 'o1', text: 'Alle sterren bewegen naar elkaar', isCorrect: false },
      { id: 'o2', text: 'Verre sterrenstelsels bewegen weg, sneller naarmate verder', isCorrect: true },
      { id: 'o3', text: 'Alle licht heeft dezelfde roodverschuiving', isCorrect: false },
      { id: 'o4', text: 'Het universum staat stil', isCorrect: false },
    ]
  };
