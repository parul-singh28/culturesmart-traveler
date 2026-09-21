export const newYorkData = {
  id: "new-york",
  name: "New York City",
  country: "United States",
  continent: "Americas",
  flag: "🇺🇸",
  language: "English (Spanish widely spoken)",
  currency: "US Dollar (USD, $)",
  tagline: "The City That Never Sleeps powered by relentless ambition, direct candor, and diverse neighborhoods",
  overview: "New York City is an electrifying global powerhouse of culture, finance, theater, and culinary diversity across five boroughs. New Yorkers are famous for their fast walking pace, direct communication, and deep civic pride. While interactions are fast-paced, New Yorkers are exceptionally helpful when you ask directly and respect the rhythm of sidewalk and subway traffic.",
  bestTimeToVisit: "September to November (Crisp autumn, Central Park foliage) & May to June (Lush spring, outdoor dining)",
  heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
  emergencyNumbers: {
    police: "911",
    ambulance: "911",
    cityInfo: "311 (NYC Government non-emergency information)"
  },
  keyCulturalValues: [
    { term: "Sidewalk Pace", meaning: "Walking with purpose; step to the side if you need to stop and look at your phone" },
    { term: "Direct Efficiency", meaning: "Brevity and directness are seen as respectful of others' time, not rudeness" },
    { term: "The 20% Tip", meaning: "Standard tipping etiquette supporting waitstaff, bartenders, and food couriers" },
    { term: "Bodega Culture", meaning: "Neighborhood deli corner stores serving as communal anchors and egg-and-cheeses" }
  ],
  dosAndDonts: [
    {
      id: "nyc-1",
      type: "do",
      category: "transit",
      title: "Keep Up the Walking Pace and Step Aside to Stop",
      description: "NYC sidewalks are like pedestrian highways. Never stop abruptly in the middle of a crowded sidewalk to look at maps or take photos. Pull over to the building wall or curb out of foot traffic.",
      culturalContext: "With 8.5 million residents commuting on foot, sidewalk congestion is a serious civic friction point.",
      severity: "essential"
    },
    {
      id: "nyc-2",
      type: "do",
      category: "tipping",
      title: "Tip 18% to 22% at Sit-Down Restaurants and Bars",
      description: "In New York City, tipping is mandatory in practice. 18% is the baseline for acceptable service, 20% is standard, and 22%+ for great service. Bartenders receive $1 to $2 per drink or 20% of the bar tab.",
      culturalContext: "US labor laws allow lower tipped minimum wages; tips form the livelihood of service staff.",
      severity: "crucial"
    },
    {
      id: "nyc-3",
      type: "dont",
      category: "dining",
      title: "Never Hesitate When Ordering at a Busy Deli or Coffee Counter",
      description: "Have your exact order and payment method ready before stepping to the counter. Know your bagel type, toasted or not, cream cheese variety, etc. Hesitating holds up a line of 15 caffeinated commuters.",
      culturalContext: "Efficiency and speed are tokens of mutual respect in morning NYC rush hours.",
      severity: "polite"
    },
    {
      id: "nyc-4",
      type: "dont",
      category: "transit",
      title: "Never Enter an Empty Subway Car on a Crowded Train",
      description: "If a subway train pulls in packed with commuters, but one car is completely empty, DO NOT enter it! There is always a reason: the air conditioning is broken in summer, or there is an unbearable odor/mess.",
      culturalContext: "A legendary universal rule of NYC subway commuting.",
      severity: "essential"
    },
    {
      id: "nyc-5",
      type: "dont",
      category: "safety",
      title: "Ignore CD Hustlers & Costumed Characters in Times Square",
      description: "Do not accept 'free' mix CDs handed to you by young men on sidewalks (they will sign it and demand $20). In Times Square, costumed Elmo or Spider-Man characters will pose aggressively and demand cash.",
      culturalContext: "Well-known high-density tourist aggressive solicitation.",
      severity: "crucial"
    }
  ],
  transportEtiquette: {
    overview: "The NYC Subway runs 24 hours a day, 365 days a year across 472 stations. OMNY contactless tap-and-pay makes riding effortless.",
    subwayRules: [
      "Tap your contactless credit card, phone, or watch at OMNY turnstiles (7-day fare cap applies automatically after 12 rides!).",
      "Take off your backpack on crowded trains and hold it by your legs to make room.",
      "Do not lean against the center subway pole—others need to hold on as well.",
      "Check local vs express signs on platforms: Express trains skip smaller stations!"
    ],
    taxiEtiquette: [
      "Iconic Yellow Taxis: Hail them from the street when the roof center numbers are lit. Pay by credit card or cash; tip 15–20% on the terminal screen."
    ],
    recommendedApps: [
      "MYmta (Official MTA subway and bus live countdowns)",
      "Transit App (Outstanding real-time bus and train predictions)",
      "Citymapper (Flawless multi-modal NYC routing)"
    ]
  },
  mustVisitPlaces: [
    {
      name: "The High Line & Chelsea Market",
      type: "Elevated Urban Park & Culinary Landmark",
      description: "A 1.45-mile elevated freight railway transformed into a breathtaking landscaped public park hovering above Manhattan's West Side streets.",
      culturalContext: "A pioneer of industrial adaptive reuse in modern urban architecture.",
      insiderTip: "Walk from Hudson Yards south toward the Meatpacking District in late afternoon, then descend into Chelsea Market for lobster rolls at The Lobster Place.",
      visitingHours: "7:00 AM – 10:00 PM (Summer); 7:00 AM – 7:00 PM (Winter)",
      dressCode: "Comfortable sneakers."
    },
    {
      name: "Central Park: The Ramble & Bethesda Terrace",
      type: "Masterpiece Public Parkland",
      description: "843 acres of sculpted nature designed by Olmsted & Vaux, featuring the iconic Angel of the Waters fountain, rowboats on the lake, and the wild woodlands of The Ramble.",
      culturalContext: "New York's democratic green backyard and sanctuary from urban intensity.",
      insiderTip: "Rent a classic green rowboat at Loeb Boathouse ($25/hr) and admire the neoclassical tile ceiling under Bethesda Terrace arcade.",
      visitingHours: "6:00 AM – 1:00 AM daily",
      dressCode: "Casual comfortable."
    }
  ],
  festivals: [
    {
      name: "Macy's Thanksgiving Day Parade",
      timing: "Fourth Thursday of November",
      description: "Giant character balloons, Broadway musical performances, marching bands, and Santa Claus parading from Central Park West to 34th Street Herald Square."
    },
    {
      name: "New Year's Eve Times Square Ball Drop",
      timing: "December 31",
      description: "One million revelers count down under tons of confetti as the Waterford Crystal ball drops at midnight."
    }
  ],
  phrasebook: [
    { category: "dining", phrase: "A regular coffee", native: "A regular coffee", phonetic: "Uh reg-yuh-luhr kaw-fee", meaning: "In NYC delis, this means coffee with milk and two sugars!", audioLang: "en-US" },
    { category: "dining", phrase: "Bacon, egg, and cheese on a roll", native: "B.E.C. on a roll", phonetic: "Bee-ee-see onna rohl", meaning: "The undisputed champion of NYC breakfast bodega sandwiches", audioLang: "en-US" },
    { category: "social", phrase: "Excuse me", native: "Excuse me", phonetic: "Ek-skyooz mee", meaning: "Said briskly when passing through crowds or signaling servers", audioLang: "en-US" },
    { category: "transit", phrase: "Is this train running local or express?", native: "Is this train local or express?", phonetic: "Iz this trayn loh-kuhl or ek-spres?", meaning: "Essential NYC subway sanity check", audioLang: "en-US" },
    { category: "dining", phrase: "Can I get the check?", native: "Can I get the check?", phonetic: "Kan eye get thuh chek?", meaning: "Asking for the restaurant bill", audioLang: "en-US" },
    { category: "shopping", phrase: "How much for this?", native: "How much for this?", phonetic: "How much for this?", meaning: "Asking price", audioLang: "en-US" },
    { category: "emergencies", phrase: "Call 911!", native: "Call 911!", phonetic: "Kawl nyn-wuhn-wuhn!", meaning: "Emergency police / medical cry", audioLang: "en-US" }
  ]
};
