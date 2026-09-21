// CultureMate AI Assistant Knowledge Engine

export const CULTUREMATE_SUGGESTIONS = [
  "Is this temple open to tourists?",
  "What should I wear?",
  "What food should I try?",
  "What local customs should I know?",
  "Plan a 3-day cultural trip."
];

export const getCultureMateResponse = (query) => {
  const q = query.toLowerCase().trim();

  // Temple / Religious open
  if (q.includes("temple") || q.includes("open to tourists") || q.includes("mosque") || q.includes("gurdwara")) {
    return {
      title: "Temple & Sacred Site Access in North India",
      content: "Most Hindu temples, Gurudwaras, and Sufi Dargahs in Haryana, Delhi, Rajasthan, and Uttar Pradesh warmly welcome international and non-Hindu travellers!\n\nKey rules to remember:\n1. Shoes & Leather: Always remove shoes and leather items (belts, wallets in certain Jain and orthodox shrines like Brahma temple in Pushkar).\n2. Head Coverings: In Sikh Gurudwaras (like Bangla Sahib) and Muslim Dargahs (like Nizamuddin), your head must be covered with a scarf or handkerchief.\n3. Sanctum Entry: In certain orthodox inner sanctums (like Kashi Vishwanath's Garbhagriha during specific pujas), visitors observe from the outer threshold.\n4. Photography: Almost all inner sanctums prohibit photography. Observe the sacred flame (Aarti) with eyes and folded hands."
    };
  }

  // What should I wear / Dress code
  if (q.includes("wear") || q.includes("dress") || q.includes("clothes") || q.includes("attire")) {
    return {
      title: "Respectful & Comfortable Dress Advice",
      content: "North Indian culture places high value on modesty in public and sacred spaces:\n\n• For Everyone: Light, breathable cotton or linen fabrics are ideal. Ensure shoulders and knees are covered when visiting monuments, rural towns, and holy sites.\n• Footwear: Slip-on sandals or loafers are easiest since you will remove shoes frequently at shrines and heritage homes.\n• Scarves / Dupatta: Carry a light cotton scarf—it protects you from the afternoon sun, covers your head at religious sites, and shows cultural consideration.\n• Color Nuance: During Holi, wear white cottons you don't mind discarding; at temples, avoid strictly black clothing if attending auspicious ceremonies."
    };
  }

  // Food / What food should I try / Spice
  if (q.includes("food") || q.includes("eat") || q.includes("try") || q.includes("dish") || q.includes("taste")) {
    return {
      title: "Must-Try Regional Specialties & Dining Etiquette",
      content: "Here is your regional culinary checklist across our 4 states:\n\n• Rajasthan: Savor authentic Dal Baati Churma (baked dough balls drowned in ghee), Gatte ki Sabzi, and sweet Ghevar.\n• Delhi: Don't miss Chandni Chowk Paranthas, Natraj Dahi Bhalla, and piping hot Chole Bhature.\n• Haryana: Taste Bajre ki Roti with fresh white butter (Taza Makkhan), Sarson da Saag, and sweet Churma.\n• Uttar Pradesh: Relish melt-in-mouth Galouti Kebabs in Lucknow, followed by a Banarasi Meetha Paan along the Varanasi ghats!\n\n💡 Etiquette: Eat with your right hand when enjoying thalis, and wash hands both before and after meals."
    };
  }

  // Local customs / Etiquette
  if (q.includes("custom") || q.includes("etiquette") || q.includes("behavior") || q.includes("polite") || q.includes("greeting")) {
    return {
      title: "Essential North Indian Cultural Courtesies",
      content: "A few simple courtesies will earn you warm, lifelong respect:\n\n1. Folded Hands: A warm 'Namaste' with hands folded at chest level acknowledges the divine in others.\n2. Regional Hellos: 'Khamma Ghani' in Rajasthan, 'Ram Ram' in Haryana, 'Aadab' in Lucknow!\n3. Right Hand Rule: Always use your right hand when handing money, receiving Prasad, or greeting.\n4. Shoe Etiquette: Point your shoes away from shrines or elders when sitting on carpets.\n5. Hospitality: If offered chai (tea) in a village home or artisan studio, accepting a few sips is a beautiful token of goodwill."
    };
  }

  // 3-day trip
  if (q.includes("3-day") || q.includes("plan") || q.includes("itinerary") || q.includes("trip")) {
    return {
      title: "Recommended 3-Day Cultural Itinerary",
      content: "Here is an incredible 3-Day North India Cultural Circuit:\n\n• Day 1 (Delhi): Sunrise at Humayun's Tomb → Chandni Chowk spice market walk → Thursday evening Qawwali at Nizamuddin Dargah.\n• Day 2 (Jaipur, Rajasthan): Dawn Amber Fort → Sanganer hand-block printing workshop → Heritage bazaar walk.\n• Day 3 (Agra / Mathura, UP): Sunrise at the Taj Mahal → Marble inlay artisan masterclass → Sunset across the Yamuna at Mehtab Bagh.\n\n👉 Tip: You can also use our interactive 'AI Trip Planner' on this site to customize duration, budget, and travel style!"
    };
  }

  // Varanasi / Kashi
  if (q.includes("varanasi") || q.includes("banaras") || q.includes("kashi")) {
    return {
      title: "Varanasi (Kashi) Insider Cultural Guide",
      content: "Varanasi is the spiritual capital of India:\n• Experience Subah-e-Banaras at Assi Ghat at 5:30 AM with morning classical ragas.\n• Do not photograph cremations at Manikarnika Ghat—it is deeply intrusive to grieving families.\n• Try a clay kulhad lassi and Banarasi Meetha Paan at Chowk.\n• Book a rowing boat for the evening Ganga Aarti at Dashashwamedh Ghat by 5:45 PM."
    };
  }

  // Default friendly response
  return {
    title: "CultureMate Cultural Advisory",
    content: `Great question! Traveling through North India (Haryana, Delhi, Rajasthan, and Uttar Pradesh) is a deeply rewarding experience when approached with curiosity and respect.\n\nKeep in mind that Indian hospitality ("Atithi Devo Bhava") treats travelers like divine guests. Simply showing a willingness to learn local greetings, dressing modestly at shrines, and eating with your right hand will unlock the most heartfelt smiles from locals.\n\nFeel free to ask me specifically about:\n• Dress codes for specific temples\n• Safe street food navigation\n• Photography etiquette in rural villages\n• Dialectal greetings in Rajasthan vs Haryana`
  };
};
