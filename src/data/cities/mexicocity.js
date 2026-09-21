export const mexicoCityData = {
  id: "mexico-city",
  name: "Mexico City",
  country: "Mexico",
  continent: "Americas",
  flag: "🇲🇽",
  language: "Spanish",
  currency: "Mexican Peso (MXN, $)",
  tagline: "The High-Altitude Aztec & Colonial Metropolis of explosive culinary passion and warm 'Cariño'",
  overview: "Built atop the ancient Aztec capital of Tenochtitlan, Mexico City (CDMX) is a dynamic mega-city pulsing with lush jacarandas, muralist heritage, and street culinary glory. Mexican culture is characterized by exceptional warmth, politeness, devotion to family, and deep respect for elders. Greeting people with 'Buenos días' and understanding street taco rituals will make you feel instantly embraced.",
  bestTimeToVisit: "March to May (Pleasant weather, blooming purple Jacarandas) & October to November (Día de los Muertos)",
  heroImage: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1200&q=80",
  emergencyNumbers: {
    police: "911",
    touristAssistance: "55-5201-1111 (SECTUR Tourist Police)"
  },
  keyCulturalValues: [
    { term: "Cortesía", meaning: "Extreme politeness: softening direct speech with diminutives ('-ito') and greetings" },
    { term: "La Sobremesa", meaning: "The cherished conversation lingering around the table long after dessert" },
    { term: "La Propina", meaning: "Generous tipping culture supporting hardworking hospitality workers" },
    { term: "Familia", meaning: "Central pillar of social life and collective loyalty" }
  ],
  dosAndDonts: [
    {
      id: "cdmx-1",
      type: "do",
      category: "dining",
      title: "Always Say '¡Buen Provecho!' to Nearby Diners",
      description: "When entering or leaving a restaurant or taco stand, it is standard courtesy to nod to surrounding tables and say '¡Buen provecho!' (Enjoy your meal!). Diners will warmly smile and reply '¡Gracias!'.",
      culturalContext: "A cherished sign of communal respect and warmth shared across social classes.",
      severity: "essential"
    },
    {
      id: "cdmx-2",
      type: "do",
      category: "tipping",
      title: "Tip 10% to 15% at Sit-Down Restaurants ('La Propina')",
      description: "Tipping is an integral part of the service economy in Mexico. Leave 10% for standard service and 15% for attentive dining. Check your receipt to ensure the tip hasn't already been added without your consent.",
      culturalContext: "Waiters and kitchen staff rely heavily on tips for living wages.",
      severity: "crucial"
    },
    {
      id: "cdmx-3",
      type: "dont",
      category: "dining",
      title: "Never Assume 'No Pica' Means It Has Zero Spice",
      description: "When a taquero says a salsa 'no pica' (it's not spicy), that is by Mexican standards! Always test a single drop of salsa on the back of your hand or edge of your taco before dousing your dish.",
      culturalContext: "Chili tolerance in Mexico is developed from infancy.",
      severity: "polite"
    },
    {
      id: "cdmx-4",
      type: "dont",
      category: "safety",
      title: "Never Hail Street Cabs off the Curb at Night",
      description: "Do not hail green-and-white street taxis randomly at night due to the risk of 'secuestro exprés'. Instead, use Uber, Didi, or official 'Sitio' taxi stands.",
      culturalContext: "Rideshare apps provide GPS tracking and driver vetting.",
      severity: "crucial"
    },
    {
      id: "cdmx-5",
      type: "do",
      category: "social",
      title: "Use Diminutives and Formal 'Usted' with Elders",
      description: "Address elder shopkeepers and taxi drivers with 'Don' or 'Doña' and use formal 'Usted'. Mexican Spanish is soft and musical; adding '-ito' (un cafecito, un ratito) conveys friendliness.",
      culturalContext: "Softened language conveys gentleness, humility, and warmth.",
      severity: "polite"
    }
  ],
  transportEtiquette: {
    overview: "CDMX has an extensive Metro network (12 lines), the Metrobús (rapid bus lanes), and the scenic Cablebús gondolas above hill neighborhoods.",
    subwayRules: [
      "Metro and Metrobús have dedicated 'Mujeres y Niños' (Women & Children) carriages at the front during all operating hours; men are strictly prohibited.",
      "Metro fare is just 5 MXN (around $0.25 USD) using the rechargeable Integrated Mobility Card.",
      "Keep phones, wallets, and backpacks clutched to your chest during peak morning and evening rush."
    ],
    taxiEtiquette: [
      "Uber and Didi are extremely safe, affordable, and preferred by both locals and travelers.",
      "At AICM Airport, purchase pre-paid tickets only from official taxi booths inside the terminal."
    ],
    recommendedApps: [
      "Uber / Didi (Safest and easiest transport across CDMX)",
      "Metro-Metrobús México (Offline subway map)",
      "Ecobici (Citywide bike-share system with extensive bike lanes along Reforma)"
    ]
  },
  mustVisitPlaces: [
    {
      name: "National Museum of Anthropology (Chapultepec)",
      type: "World-Class Heritage Institution",
      description: "One of the greatest museums on Earth, housing monumental treasures of Mesoamerican civilizations, including the Aztec Sun Stone and Mayan jade masks.",
      culturalContext: "The definitive chronicle of Mexico's indigenous foundations.",
      insiderTip: "Dedicate at least 3 hours. Focus first on the Mexica (Aztec) and Maya halls on the ground floor. Have lunch at the on-site garden restaurant.",
      visitingHours: "9:00 AM – 6:00 PM (Closed Mondays)",
      dressCode: "Comfortable walking shoes."
    },
    {
      name: "Coyoacán & Frida Kahlo Museum (Casa Azul)",
      type: "Historic Bohemian Enclave",
      description: "The tranquil cobblestone village where artist Frida Kahlo was born and died, filled with colonial plazas, churro cafés, and indigenous artisan markets.",
      culturalContext: "The intellectual and artistic heart of 20th-century Mexican modernism.",
      insiderTip: "Tickets for Casa Azul MUST be booked online weeks in advance—they never sell tickets at the door!",
      visitingHours: "10:00 AM – 6:00 PM (Closed Mondays)",
      dressCode: "Casual comfortable."
    }
  ],
  festivals: [
    {
      name: "Día de los Muertos (Day of the Dead)",
      timing: "October 31 – November 2",
      description: "A joyful ancestral celebration honoring departed loved ones with marigold flower altars, sugar skulls, Catrina face paint, and grand parades on Paseo de la Reforma."
    },
    {
      name: "Independence Day (El Grito)",
      timing: "September 15–16",
      description: "The President re-enacts Father Hidalgo's battle cry from the National Palace balcony overlooking 100,000 cheering citizens in the Zócalo."
    }
  ],
  phrasebook: [
    { category: "greetings", phrase: "Good morning", native: "Buenos días", phonetic: "Bweh-nohs dee-ahs", meaning: "Mandatory morning greeting", audioLang: "es-MX" },
    { category: "greetings", phrase: "Good afternoon", native: "Buenas tardes", phonetic: "Bweh-nahs tar-dehs", meaning: "Greeting from noon to sunset", audioLang: "es-MX" },
    { category: "dining", phrase: "Enjoy your meal!", native: "¡Buen provecho!", phonetic: "Bwen proh-veh-choh", meaning: "Customary greeting to anyone dining", audioLang: "es-MX" },
    { category: "dining", phrase: "The check, please", native: "La cuenta, por favor", phonetic: "Lah kwen-tah, pohr fah-vohr", meaning: "Requesting the bill", audioLang: "es-MX" },
    { category: "dining", phrase: "With everything (onion & cilantro)", native: "Con todo, por favor", phonetic: "Kohn toh-doh, pohr fah-vohr", meaning: "Ordering authentic tacos", audioLang: "es-MX" },
    { category: "social", phrase: "Excuse me / Pardon", native: "Con permiso", phonetic: "Kohn pehr-mee-soh", meaning: "Used when passing through a crowd or leaving a table", audioLang: "es-MX" },
    { category: "shopping", phrase: "How much is it?", native: "¿Cuánto cuesta?", phonetic: "Kwan-toh kwes-tah?", meaning: "Asking prices", audioLang: "es-MX" },
    { category: "transit", phrase: "Where is the metro?", native: "¿Dónde está el metro?", phonetic: "Dohn-deh es-tah el meh-troh?", meaning: "Finding transit", audioLang: "es-MX" },
    { category: "emergencies", phrase: "I need help", native: "Necesito ayuda", phonetic: "Neh-seh-see-toh ah-yoo-dah", meaning: "Emergency request", audioLang: "es-MX" },
    { category: "greetings", phrase: "Thank you very much", native: "Muchas gracias", phonetic: "Moo-chahs grah-see-ahs", meaning: "Expressing heartfelt gratitude", audioLang: "es-MX" }
  ]
};
