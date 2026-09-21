export const CULTURAL_INTELLIGENCE_CARDS = [
  {
    id: "do",
    type: "DO",
    headline: "Respect local dress codes",
    summary: "Cover shoulders and knees when visiting temples, mosques, gurdwaras, and traditional villages.",
    details: "Remove footwear outside temple sanctums. In Sikh Gurdwaras (like Bangla Sahib) and Sufi Dargahs (like Nizamuddin), covering your head with a scarf or rumal is mandatory. In rural Rajasthan and Haryana, modest clothing is appreciated as a sign of mutual honor.",
    badgeColor: "bg-forest-500/15 text-forest-600 border-forest-500/30",
    iconName: "CheckCircle2"
  },
  {
    id: "dont",
    type: "DON'T",
    headline: "Photograph people without permission",
    summary: "Never take candid close-ups of worshippers, sadhus, village women, or sacred funeral rituals.",
    details: "At Varanasi's Manikarnika and Harishchandra Ghats, photographing funeral pyres is strictly prohibited by sacred convention. In rural towns, always ask politely ('Kya main photo le sakta hoon?') before photographing artisans or local residents.",
    badgeColor: "bg-terracotta-500/15 text-terracotta-600 border-terracotta-500/30",
    iconName: "XCircle"
  },
  {
    id: "know",
    type: "KNOW",
    headline: "Understand religious & dining customs",
    summary: "Eat traditional thalis with your right hand and recognize the deep sanctity of vegetarian traditions.",
    details: "The left hand is traditionally reserved for personal ablutions; use only your right hand to dip bread, handle sweets, or receive sacred prasad. Be mindful that many historic temple towns (like Pushkar, Ayodhya, and Varanasi ghats) are strictly vegetarian and alcohol-free zones.",
    badgeColor: "bg-sand-500/20 text-indigo-950 border-sand-500/40",
    iconName: "Lightbulb"
  },
  {
    id: "try",
    type: "TRY",
    headline: "Learn a few regional greetings",
    summary: "A heartfelt regional greeting instantly breaks barriers and shows genuine cultural interest.",
    details: "In Rajasthan, say 'Khamma Ghani' (May you have manifold joy). In Haryana, greet villagers with 'Ram Ram ji'. In Lucknow and Old Delhi, a courteous 'Aadab' with hand raised to the chest evokes centuries of nawabi refinement. Everywhere, a folded-hands 'Namaste' is universally cherished.",
    badgeColor: "bg-gold-500/15 text-gold-600 border-gold-500/30",
    iconName: "MessageCircle"
  },
  {
    id: "respect",
    type: "RESPECT",
    headline: "Local traditions and sacred spaces",
    summary: "Walk clockwise around temple sanctums and honor elder hierarchy in social gatherings.",
    details: "Temple circumambulation (Pradakshina) is always performed in a clockwise direction with your right side facing the deity. When sitting on rugs or floor seating in havelis or baithaks, avoid pointing the soles of your feet directly toward shrines, elders, or religious books.",
    badgeColor: "bg-indigo-950/10 text-indigo-950 border-indigo-950/20",
    iconName: "Shield"
  }
];

export const CULTURE_PILLARS = [
  {
    id: "food",
    icon: "🍛",
    name: "Food & Culinary Philosophy",
    subtitle: "From wood-fired clay chulhas to royal Nawabi dum kitchens",
    description: "North Indian cuisine is shaped by climate, royal patronages, and spiritual principles. Rajasthani food developed to survive arid voyages with minimal water (using milk, ghee, and dried berries like ker-sangri). Delhi street stalls balance fiery spices with cooling yogurt. Haryana champions wholesome dairy, bajra, and desi ghee. Lucknow perfected the slow-cooked 'Dum Pukht' method with fragrant aromatic spices.",
    regionalStories: [
      { state: "Rajasthan", highlight: "Dal Baati Churma cooked over dried cow-dung cakes for smoky earthy flavor." },
      { state: "Delhi", highlight: "Centuries-old chaat and parantha traditions passed down 6 generations in Chandni Chowk." },
      { state: "Haryana", highlight: "Steaming hot Bajre ki roti served with a mountain of fresh churned white butter (taza makkhan)." },
      { state: "Uttar Pradesh", highlight: "Melt-in-mouth Galouti Kebabs invented for Nawab Asad-ud-Daula with over 160 secret spices." }
    ],
    etiquetteRule: "Wash hands thoroughly before eating; thalis are a communal celebration where wasting food is deeply discouraged."
  },
  {
    id: "crafts",
    icon: "🎨",
    name: "Art & Crafts Heritage",
    subtitle: "Living craft guilds preserving centuries of handmade virtuosity",
    description: "North India is an open-air atelier. Master artisans in Sanganer and Bagru practice natural mud-resist Dabu block printing. Lucknow artisans create delicate Chikankari white-on-white shadow embroidery. Jaipur sculptors turn quartz and glass into royal Blue Pottery. Haryana's craftspeople showcase vibrant terracotta and hand-woven punja durries at the celebrated Surajkund Mela.",
    regionalStories: [
      { state: "Rajasthan", highlight: "Bagru natural indigo vats that ferment for weeks using jaggery, lime, and pomegranate rinds." },
      { state: "Uttar Pradesh", highlight: "Varanasi weavers spending months on wooden jacquard looms crafting pure gold zari Katan silks." },
      { state: "Haryana", highlight: "Phulkari floral needlework woven on coarse khaddar as maternal wedding heirlooms." },
      { state: "Delhi", highlight: "Zardozi metallic embroidery adorning Mughal royal robes, preserved in Shahjahanabad alleys." }
    ],
    etiquetteRule: "When visiting artisan workshops, ask before touching delicate looms, and remember that bargaining should be gentle—you are supporting generational heritage."
  },
  {
    id: "architecture",
    icon: "🕌",
    name: "Architecture & Sacred Space",
    subtitle: "Stepwells, Jharokhas, Mughal domes, and temple shikhars",
    description: "The built heritage of Haryana, Delhi, Rajasthan, and Uttar Pradesh represents some of humanity's finest structural poetry. Rajasthani forts (like Mehrangarh and Amber) master climatic insulation with sandstone lattice jharokhas and stepwells (baolis) that harvest every desert droplet. Mughal monuments in Delhi and Agra blend Persian symmetry with Indian red sandstone, while Varanasi's ghats form a stone amphitheater of salvation.",
    regionalStories: [
      { state: "Rajasthan", highlight: "Chand Baori at Abhaneri: 3,500 narrow stone steps forming an inverted geometric pyramid." },
      { state: "Delhi", highlight: "Humayun's Tomb: The prototype for the Taj Mahal, pioneering charbagh paradise gardens." },
      { state: "Haryana", highlight: "Pinjore Gardens: 17th-century terraced pleasure garden designed on seven ascending levels." },
      { state: "Uttar Pradesh", highlight: "Bara Imambara in Lucknow: The central hall is the world's largest unsupported arched roof built without a single iron beam." }
    ],
    etiquetteRule: "Maintain quiet voices inside arched domes to respect their natural acoustic reverb, and follow designated footwear drop points."
  },
  {
    id: "music",
    icon: "🎵",
    name: "Music, Dance & Folklore",
    subtitle: "From desert sarangis and sufi qawwalis to classical gharanas",
    description: "The musical traditions of this region evoke devotion, love, and seasonal joy. Rajasthan's desert tribes (Manganiyars and Langas) carry lineage oral histories sung with raw vocal power alongside the kamaicha and dholak. Delhi's Nizamuddin Dargah has hosted Thursday evening devotional Qawwali for 700 years. Haryana's folk ballads (Raaginis and Saangs) recount heroic folklore, while Banaras is the epicenter of classical thumri and shehnai.",
    regionalStories: [
      { state: "Rajasthan", highlight: "The hypnotic Kalbelia snake-charmer dance characterized by swirling black skirts and rhythm." },
      { state: "Delhi", highlight: "The legacy of Amir Khusrau, father of the qawwali and inventor of the sitar and tabla." },
      { state: "Uttar Pradesh", highlight: "Benares Gharana: The spiritual tabla solos and Ustad Bismillah Khan's dawn shehnai on the ghats." },
      { state: "Haryana", highlight: "Vibrant Saang folk theater performed under open village skies during harvest festivals." }
    ],
    etiquetteRule: "In devotional music gatherings (like Dargah Qawwalis or temple kirtans), do not step across listeners' prayer mats or talk loudly during recitals."
  },
  {
    id: "language",
    icon: "🗣",
    name: "Language & Nuance",
    subtitle: "Dialects woven with poetry, honorifics, and warmth",
    description: "North India is rich in linguistic melody. Hindi serves as the lingua franca, but regional identity shines through Marwari and Mewari in Rajasthan, Haryanvi's frank and hearty cadence, Delhi's blended Hindustani with colloquial Urdu idioms, and Uttar Pradesh's poetic Awadhi, Braj Bhasha, and refined Lucknowi Urdu with the revered 'Aap' (formal You) culture.",
    regionalStories: [
      { state: "Uttar Pradesh", highlight: "The famous Lucknowi 'Pehle Aap' (After you) culture embodying aristocratic modesty." },
      { state: "Rajasthan", highlight: "Marwari honorific suffix 'Ji' added to almost every name and title as standard respect." },
      { state: "Haryana", highlight: "Haryanvi's direct, humorous, and affectionate rustic dialect full of colorful agricultural metaphors." },
      { state: "Delhi", highlight: "A melting pot where street slang ('Jugaad', 'Bindaas') blends with courtly Urdu terms ('Shukriya', 'Janab')." }
    ],
    etiquetteRule: "Always address elders and service professionals with the polite 'Aap' rather than informal 'Tum' or 'Tu'."
  },
  {
    id: "clothing",
    icon: "👗",
    name: "Traditional Attire & Textiles",
    subtitle: "Turbans of honor, tie-dye ghagras, and pristine Lucknowi cottons",
    description: "Attire in North India tells stories of geography, caste, and climate. The Rajasthani pagri (turban) indicates a man's region and status with over 1,000 wrapping styles; women wear 80-kali lehengas and vibrant odhnis. In Haryana, men wear white dhotis with heavy turbans (khandwas) while women wear damans with silver hasli ornaments. Uttar Pradesh celebrates the airy elegance of muslin kurtas and Banarasi silk sarees.",
    regionalStories: [
      { state: "Rajasthan", highlight: "The saffron and yellow Leheriya turban worn specifically to celebrate monsoon arrival." },
      { state: "Haryana", highlight: "The traditional heavy pleat 'Daman' skirt requiring up to 20 meters of fabric." },
      { state: "Uttar Pradesh", highlight: "Feather-light Chikankari angrakhas designed to keep Lucknow aristocrats cool in scorching summers." },
      { state: "Delhi", highlight: "The bridal couture epicenter of Chandni Chowk where century-old embroidery shops craft heirloom zardozi." }
    ],
    etiquetteRule: "Wearing loose, breathable cottons with covered knees and shoulders keeps you comfortable and warmly accepted across towns and sacred sites."
  },
  {
    id: "festivals",
    icon: "🎉",
    name: "Festivals & Seasonal Fairs",
    subtitle: "Explosions of gulal color, thousands of floating oil lamps, and camel parades",
    description: "Festivals here are intimately tied to lunar calendars and agricultural cycles. Braj Bhoomi (Mathura-Vrindavan) celebrates Holi with flower petals, gulal, and singing for weeks. Pushkar hosts the world's most photogenic camel fair under the Kartik Purnima full moon. Dev Deepawali in Varanasi illuminates 84 stone ghats with one million clay diyas. Haryana's Surajkund Mela gathers craft masters from around the globe.",
    regionalStories: [
      { state: "Uttar Pradesh", highlight: "Lathmar Holi in Barsana where village women playfully beat men's shields with wooden sticks." },
      { state: "Rajasthan", highlight: "Pushkar Camel Fair where decorated livestock, mustache competitions, and bridal races converge." },
      { state: "Haryana", highlight: "Teej celebrations where swings (jhulas) are hung from banyan trees and women sing folk melodies." },
      { state: "Delhi", highlight: "Phoolwalon ki Sair: A historic syncretic festival celebrating communal harmony between Hindus and Muslims." }
    ],
    etiquetteRule: "During Holi, wear modest clothes you do not mind discarding, use natural herbal colors (herbal gulal), and always ask before applying color to elders."
  },
  {
    id: "traditions",
    icon: "🙏",
    name: "Living Traditions & Hospitality",
    subtitle: "Atithi Devo Bhava — The guest is an incarnation of the divine",
    description: "Hospitality across these states is not mere politeness—it is a sacred moral duty. From Haryana's village baithaks where visitors are plied with frothing cups of milk and jaggery, to Rajasthani palace guards offering traditional marigold garlands, guests are welcomed with profound warmth. Traditions like touching elders' feet (Charnasparsh), offering water before asking business, and sharing sweets bind families together.",
    regionalStories: [
      { state: "Rajasthan", highlight: "The Opium ceremony (Riyasan) historically shared between Rajput clans to cement peace and brotherhood." },
      { state: "Haryana", highlight: "The 'Hukka baithak' where village elders gather to discuss village affairs and share communal hospitality." },
      { state: "Uttar Pradesh", highlight: "Evening Ganga Aarti where priests perform synchronized fire offerings to the sacred river." },
      { state: "Delhi", highlight: "Langar at Gurdwara Bangla Sahib: serving 20,000 free, nutritious meals daily to all humans regardless of caste or creed." }
    ],
    etiquetteRule: "When entering someone's home, wait to be invited inside, remove your shoes at the foyer, and accept at least a few sips of tea or water as a token of goodwill."
  }
];
