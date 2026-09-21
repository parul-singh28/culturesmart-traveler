export const londonData = {
  id: "london",
  name: "London",
  country: "United Kingdom",
  continent: "Europe",
  flag: "🇬🇧",
  language: "English",
  currency: "British Pound (GBP, £)",
  tagline: "The Historic Royal & Multicultural Hub governed by queue etiquette, dry wit, and pub camaraderie",
  overview: "London blends centuries of royal pageantry with contemporary world-class theater, music, and culinary innovation. British social dynamics revolve around queueing discipline, understated humor, personal space, and the democratic haven of the neighborhood pub. Respecting escalator rules and saying 'please' and 'sorry' will make you feel right at home.",
  bestTimeToVisit: "May to September (Warmest days, outdoor parks, long daylight hours until 9:30 PM)",
  heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  emergencyNumbers: {
    police: "999 (Emergency) or 101 (Non-emergency)",
    ambulance: "999",
    medicalAdvice: "111 (NHS non-emergency medical line)"
  },
  keyCulturalValues: [
    { term: "The Sacred Queue", meaning: "Unwavering respect for orderly lines; jumping a queue is a cardinal sin" },
    { term: "Apologetic Politeness", meaning: "Saying 'sorry' even when someone else bumps into you" },
    { term: "Pub Culture", meaning: "Ordering and paying directly at the bar counter with round-buying etiquette" },
    { term: "Mind the Gap", meaning: "Civic mindfulness and keeping Tube commuters moving smoothly" }
  ],
  dosAndDonts: [
    {
      id: "lon-1",
      type: "do",
      category: "transit",
      title: "Stand on the RIGHT of Escalators (Always!)",
      description: "On all London Underground escalators, you MUST stand on the right. The left side is strictly for walking commuters. Blocking the left side will earn you exasperated sighs and sharp taps on the shoulder.",
      culturalContext: "Underground commuter etiquette that keeps 4 million passengers moving daily.",
      severity: "crucial"
    },
    {
      id: "lon-2",
      type: "dont",
      category: "social",
      title: "Never Ever Cut or Jump a Queue",
      description: "Queueing is a sacred British institution. When approaching a bus stop, coffee shop, or ticket counter, find the back of the line. Cutting in line is viewed with fierce indignation.",
      culturalContext: "Queueing represents fairness, egalitarianism, and civic mutual respect.",
      severity: "crucial"
    },
    {
      id: "lon-3",
      type: "do",
      category: "dining",
      title: "Order Drinks at the Bar in Pubs (No Table Service)",
      description: "In traditional British pubs, you do not sit at a table and wait for a server. Walk up to the bar counter, catch the bartender's eye patiently (never snap fingers or wave cash), order, and pay immediately.",
      culturalContext: "The pub is an egalitarian British communal lounge operating on self-service bar hospitality.",
      severity: "essential"
    },
    {
      id: "lon-4",
      type: "dont",
      category: "tipping",
      title: "Don't Double-Tip If 12.5% Service Charge is Already Included",
      description: "Most sit-down restaurants in London automatically add an optional 12.5% service charge to the bill. Check your bill; if it is included, you do not need to leave anything extra.",
      culturalContext: "Discretionary service charges cover the waitstaff pool.",
      severity: "polite"
    },
    {
      id: "lon-5",
      type: "dont",
      category: "safety",
      title: "Beware of Phone-Snatchers on Electric Bikes",
      description: "Thieves on high-speed electric bikes frequently swoop onto sidewalks and snatch smartphones right out of pedestrians' hands, especially near Oxford Circus, Soho, and train stations. Keep your phone secure when near the street curb.",
      culturalContext: "A prevalent street crime issue in central London shopping districts.",
      severity: "crucial"
    }
  ],
  transportEtiquette: {
    overview: "The Tube (London Underground) is the oldest underground railway in the world, supplemented by iconic red double-decker buses and black cabs.",
    subwayRules: [
      "Use contactless credit/debit cards or Apple/Google Pay—no need to buy paper tickets or Oyster cards anymore.",
      "Have your card or phone ready in hand BEFORE reaching the ticket barriers to avoid holding up the rush-hour line.",
      "Let passengers off the train completely before attempting to board."
    ],
    taxiEtiquette: [
      "London Black Cabs (Hackney Carriages) are legendary for 'The Knowledge'. Hail them when the yellow 'TAXI' light is lit.",
      "Tipping 10% or rounding up to the nearest pound is customary."
    ],
    recommendedApps: [
      "Citymapper (Born in London, unmatched transit routing)",
      "TfL Go (Official Transport for London live service updates)",
      "Gett (App for booking licensed London Black Cabs)"
    ]
  },
  mustVisitPlaces: [
    {
      name: "The British Museum",
      type: "Global Antiquities Treasury",
      description: "An extraordinary chronicle of human history, art, and culture housing the Rosetta Stone, Parthenon Sculptures, and Egyptian mummies beneath Norman Foster's Great Court glass dome.",
      culturalContext: "Founded in 1753 as the first public national museum in the world.",
      insiderTip: "Admission is 100% FREE! Pre-book a timed entry slot online to bypass the main security queue. Visit on Friday evenings when galleries stay open until 8:30 PM.",
      visitingHours: "10:00 AM – 5:00 PM daily (Fridays until 8:30 PM)",
      dressCode: "Comfortable smart casual."
    },
    {
      name: "Borough Market",
      type: "Historic Culinary Epicenter",
      description: "London's oldest food market dating back to 1014 AD, packed with British cheeses, sizzling artisan sausage rolls, Scottish oysters, and international street gastronomy.",
      culturalContext: "Millennium-old trading post beneath Victorian railway arches.",
      insiderTip: "Visit on Wednesday or Thursday morning to avoid the massive Saturday crowds. Don't miss the Kappacasein melted raclette or freshly baked doughnuts from Bread Ahead.",
      visitingHours: "10:00 AM – 5:00 PM (Closed Mondays)",
      dressCode: "Casual."
    }
  ],
  festivals: [
    {
      name: "Notting Hill Carnival",
      timing: "August Bank Holiday weekend",
      description: "Europe's biggest street festival celebrating Afro-Caribbean culture with vibrant calypso, massive sound systems, steel drum bands, and elaborate feathered costumes."
    },
    {
      name: "The Proms at Royal Albert Hall",
      timing: "Mid-July to mid-September",
      description: "Historic eight-week summer season of classical concerts culminating in the raucous patriotic celebration of 'Last Night of the Proms'."
    }
  ],
  phrasebook: [
    { category: "greetings", phrase: "You alright?", native: "You alright?", phonetic: "Y'alright?", meaning: "Informal British greeting equivalent to 'Hello, how are you?'", audioLang: "en-GB" },
    { category: "greetings", phrase: "Cheers", native: "Cheers", phonetic: "Cheerz", meaning: "Multi-purpose word for thanks, goodbye, or clinking glasses", audioLang: "en-GB" },
    { category: "social", phrase: "Sorry!", native: "Sorry!", phonetic: "Soh-ree!", meaning: "Used instinctively for polite interruptions, apologies, or getting attention", audioLang: "en-GB" },
    { category: "dining", phrase: "Could we have the bill, please?", native: "Could we have the bill, please?", phonetic: "Kuud wee hav thuh bill, pleez?", meaning: "Polite request for the restaurant check", audioLang: "en-GB" },
    { category: "dining", phrase: "A pint of ale, please", native: "A pint of ale, please", phonetic: "Uh pynt ov ayl, pleez", meaning: "Ordering at the pub bar", audioLang: "en-GB" },
    { category: "transit", phrase: "Mind the gap", native: "Mind the gap", phonetic: "Mynd thuh gap", meaning: "Famous safety warning about the space between train and platform", audioLang: "en-GB" },
    { category: "shopping", phrase: "How much is this, please?", native: "How much is this, please?", phonetic: "How much iz this, pleez?", meaning: "Price inquiry", audioLang: "en-GB" },
    { category: "emergencies", phrase: "Excuse me, I need some help", native: "Excuse me, I need some help", phonetic: "Ek-skyooz mee, eye need suhm help", meaning: "Polite emergency request", audioLang: "en-GB" }
  ]
};
