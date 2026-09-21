export const romeData = {
  id: "rome",
  name: "Rome",
  country: "Italy",
  continent: "Europe",
  flag: "🇮🇹",
  language: "Italian",
  currency: "Euro (EUR, €)",
  tagline: "The Eternal City where coffee rituals, church modesty, and 'La Dolce Vita' blend seamlessly",
  overview: "Rome is an open-air museum where ancient Colosseum ruins coexist with bustling piazza life. Roman culture is deeply social, expressive, and rooted in family tradition and culinary purism. Understanding how Romans drink coffee, respect sacred basilic traditions, and embrace the evening 'passeggiata' (stroll) will turn your trip into an unforgettable journey.",
  bestTimeToVisit: "April to May & September to October (Warm sunny days without oppressive summer heat)",
  heroImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
  emergencyNumbers: {
    police: "112 (Universal) or 113",
    ambulance: "118",
    touristHotline: "060608 (Rome Tourism Contact Center)"
  },
  keyCulturalValues: [
    { term: "Passeggiata", meaning: "The ritual pre-dinner leisurely stroll to see and be seen" },
    { term: "Tradizione Culinaria", meaning: "Deep reverence for authentic recipes (no cream in carbonara!)" },
    { term: "Il Caffè al Banco", meaning: "Drinking espresso standing at the bar in 60 seconds" },
    { term: "Bella Figura", meaning: "Presenting yourself with style, dignity, and gracious comportment" }
  ],
  dosAndDonts: [
    {
      id: "rom-1",
      type: "dont",
      category: "dining",
      title: "Never Order a Cappuccino After 11:00 AM",
      description: "Italians consider milk-heavy coffee like cappuccino strictly breakfast beverages. Ordering a cappuccino after lunch or dinner is seen as upsetting digestion. Stick to an espresso ('un caffè') or macchiato.",
      culturalContext: "Dairy milk is seen as heavy on the stomach following savory meals.",
      severity: "essential"
    },
    {
      id: "rom-2",
      type: "do",
      category: "dress",
      title: "Cover Shoulders and Knees in Churches and the Vatican",
      description: "St. Peter's Basilica, the Pantheon, and all Roman Catholic churches enforce a strict dress code: no sleeveless tops, plunging necklines, or shorts above the knee. Carry a light scarf to wrap around your shoulders.",
      culturalContext: "Churches are active places of worship, not mere tourist attractions.",
      severity: "crucial"
    },
    {
      id: "rom-3",
      type: "dont",
      category: "dining",
      title: "Don't Cut Spaghetti with a Knife or Use a Spoon",
      description: "Twirl a few strands of pasta against the curve of your fork against the plate. Cutting pasta or using a soup spoon is considered clumsy in Italian table manners.",
      culturalContext: "Pasta craft and dining mechanics have centuries of refined regional discipline.",
      severity: "polite"
    },
    {
      id: "rom-4",
      type: "do",
      category: "dining",
      title: "Understand 'Coperto' vs Tipping",
      description: "Italian bills usually include a small 'coperto' (cover charge for bread and tableware, €1.50–€3 per person). Tipping is not customary; leaving small change or €2–€5 for great service is more than generous.",
      culturalContext: "Waitstaff earn regular salaries rather than relying on US-style tips.",
      severity: "polite"
    },
    {
      id: "rom-5",
      type: "dont",
      category: "safety",
      title: "Beware of Fake Gladiators & Bus 64 Pickpockets",
      description: "Men dressed as gladiators outside the Colosseum will offer photos and then aggressively demand €20–€50. Politely refuse. Additionally, keep bags zipped and held in front on crowded Bus 64 (Termini to Vatican).",
      culturalContext: "Piazza touts prey on photo-seeking tourists.",
      severity: "crucial"
    },
    {
      id: "rom-6",
      type: "do",
      category: "social",
      title: "Drink for Free from the 'Nasoni' Street Fountains",
      description: "Rome has over 2,500 curved iron drinking fountains nicknamed 'Nasoni' (big noses) flowing with cold, pristine mountain spring water. Cover the bottom spout hole with your thumb to create an upward drinking arc!",
      culturalContext: "An ancient legacy of public aqueduct engineering gifted freely to citizens.",
      severity: "polite"
    }
  ],
  transportEtiquette: {
    overview: "Rome's historic center is best explored on foot. The Metro has two main lines (Line A & Line B) intersecting at Roma Termini station.",
    subwayRules: [
      "Buy your BIT transit tickets (€1.50) at tabacchi shops or station kiosks BEFORE boarding buses or trams. You must stamp/validate them upon boarding.",
      "Hold onto handrails firmly; Roman bus drivers brake abruptly.",
      "Be hyper-vigilant around metro doors at Termini and Colosseo stations where pickpockets operate."
    ],
    taxiEtiquette: [
      "Take only official white cabs with the Rome coat of arms and 'Comune di Roma' on the door. Always demand the meter be turned on.",
      "Standard fixed fares exist between Fiumicino Airport and within the Aurelian Walls (€50)."
    ],
    walkingBiking: [
      "Cobblestone streets ('sanpietrini') are uneven and slippery when wet; wear sturdy flat footwear over heels.",
      "Watch out for darting Vespa scooters filtering between lanes."
    ],
    recommendedApps: [
      "Moovit or Citymapper (Real-time Roman bus and tram tracking)",
      "Free Now (Reliable official taxi hail app)",
      "Nasoni d'Italia (Map of all free drinking water fountains)"
    ]
  },
  mustVisitPlaces: [
    {
      name: "The Pantheon & Piazza della Rotonda",
      type: "Ancient Architectural Wonder",
      description: "A 2,000-year-old Roman temple with the world's largest unreinforced concrete dome and a 9-meter open oculus through which rain falls onto marble floors.",
      culturalContext: "Consecrated as the Basilica of St. Mary and the Martyrs in 609 AD.",
      insiderTip: "Pre-book admission tickets online on weekends. Stand directly under the open oculus at midday when the shaft of sunlight illuminates the bronze doors.",
      visitingHours: "9:00 AM – 7:00 PM daily",
      dressCode: "Shoulders and knees strictly covered."
    },
    {
      name: "Trastevere Neighborhood",
      type: "Historic Bohemian Quarter",
      description: "A labyrinth of narrow cobblestone alleyways draped in ivy, brimming with authentic trattorias, street musicians, and vibrant nocturnal energy.",
      culturalContext: "Historically an enclave across the Tiber where artisans maintained a fierce, distinct Roman identity.",
      insiderTip: "Order authentic Cacio e Pepe at Da Enzo al 29 (arrive 20 minutes before opening to queue) and savor gelato at Fior di Luna.",
      visitingHours: "Best experienced in the late afternoon and evening",
      dressCode: "Casual comfortable."
    }
  ],
  festivals: [
    {
      name: "Festa de' Noantri (Trastevere)",
      timing: "Mid-July",
      description: "An authentic working-class festival celebrating the Madonna del Carmine with a river procession carrying a statue down the Tiber, accompanied by fireworks."
    },
    {
      name: "Natale di Roma (Rome's Birthday)",
      timing: "April 21",
      description: "Commemorating the founding of Rome in 753 BC with historical reenactments, gladiatorial battles, and centurion parades through the Circus Maximus."
    }
  ],
  phrasebook: [
    { category: "greetings", phrase: "Good morning / Hello", native: "Buongiorno", phonetic: "Bwohn-johr-noh", meaning: "Standard daytime greeting", audioLang: "it-IT" },
    { category: "greetings", phrase: "Good evening", native: "Buonasera", phonetic: "Bwoh-nah-seh-rah", meaning: "Greeting used in late afternoon and night", audioLang: "it-IT" },
    { category: "greetings", phrase: "Please", native: "Per favore", phonetic: "Pehr fah-voh-reh", meaning: "Polite request", audioLang: "it-IT" },
    { category: "greetings", phrase: "Thank you", native: "Grazie", phonetic: "Grah-tsee-eh", meaning: "Polite thanks (pronounce the 'e' at the end!)", audioLang: "it-IT" },
    { category: "dining", phrase: "One coffee (espresso), please", native: "Un caffè, per favore", phonetic: "Oon kahf-feh, pehr fah-voh-reh", meaning: "How to order espresso at the bar", audioLang: "it-IT" },
    { category: "dining", phrase: "The check, please", native: "Il conto, per favore", phonetic: "Eel kohn-toh, pehr fah-voh-reh", meaning: "Requesting the bill", audioLang: "it-IT" },
    { category: "dining", phrase: "Delicious!", native: "Buonissimo!", phonetic: "Bwoh-nees-see-moh!", meaning: "Expressing joy with the food", audioLang: "it-IT" },
    { category: "transit", phrase: "Where is the bathroom?", native: "Dov'è il bagno?", phonetic: "Doh-veh eel bahn-yoh?", meaning: "Asking for the restroom", audioLang: "it-IT" },
    { category: "emergencies", phrase: "Help me!", native: "Aiuto!", phonetic: "Ah-yoo-toh!", meaning: "Emergency shout for help", audioLang: "it-IT" },
    { category: "shopping", phrase: "How much does this cost?", native: "Quanto costa?", phonetic: "Kwahn-toh kohs-tah?", meaning: "Asking price", audioLang: "it-IT" }
  ]
};
