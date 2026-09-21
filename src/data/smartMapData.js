export const MAP_CATEGORIES = [
  { id: "all", label: "All Sights", icon: "Compass" },
  { id: "heritage", label: "Heritage", icon: "Landmark" },
  { id: "food", label: "Food Stops", icon: "Utensils" },
  { id: "artisans", label: "Artisans", icon: "Palette" },
  { id: "festivals", label: "Fairs & Melas", icon: "Sparkles" },
  { id: "experiences", label: "Local Experiences", icon: "Users" }
];

export const MAP_POINTS = [
  {
    id: "mp-1",
    name: "Amber Fort & Shila Devi Shrine",
    state: "Rajasthan",
    city: "Jaipur",
    category: "heritage",
    coords: { x: 38, y: 55 }, // Relative percentage coordinates on North India region map
    description: "Amer's majestic 16th-century fortress featuring the Sheesh Mahal (Palace of Mirrors) and morning Rajput drum rituals.",
    culturalTip: "Walk up via the cobblestone royal elephant ramp at sunrise to beat crowds and admire Maota lake reflections.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-2",
    name: "Bagru Natural Indigo Dyeing Workshops",
    state: "Rajasthan",
    city: "Bagru (Jaipur)",
    category: "artisans",
    coords: { x: 35, y: 59 },
    description: "Living textile village where families print Dabu mud-resist fabrics and dip them into deep natural indigo pits.",
    culturalTip: "Wear dark clothing as splashes of organic indigo are common in the washing fields (Chhipa Mohalla).",
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-3",
    name: "Pushkar Sacred Lake & Brahma Temple",
    state: "Rajasthan",
    city: "Pushkar",
    category: "festivals",
    coords: { x: 31, y: 62 },
    description: "One of the holiest pilgrim lakes surrounded by 52 bathing ghats and white marble temples.",
    culturalTip: "Remove footwear 50 meters before reaching the lake steps. The town is strictly pure vegetarian and alcohol-free.",
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-4",
    name: "Chandni Chowk & Khari Baoli Spice Market",
    state: "Delhi",
    city: "Old Delhi",
    category: "food",
    coords: { x: 52, y: 44 },
    description: "Asia's largest wholesale spice market and 350-year-old culinary labyrinth established by Mughal royalty.",
    culturalTip: "Climb to the rooftop of Gadodia Market for a panoramic view of spice sacks and minarets.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-5",
    name: "Hazrat Nizamuddin Dargah Sufi Shrine",
    state: "Delhi",
    city: "New Delhi",
    category: "experiences",
    coords: { x: 54, y: 47 },
    description: "Spiritual sanctuary where evening Qawwalis echo through marble courtyards with rose petals and sweet attar.",
    culturalTip: "Cover your head before entering and sit quietly along the side carpets during devotional recitals.",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-6",
    name: "Surajkund Sun Reservoir & Crafts Village",
    state: "Haryana",
    city: "Faridabad",
    category: "artisans",
    coords: { x: 53, y: 50 },
    description: "Ancient 10th-century semi-circular stone sun pool and host to India's foremost international folk crafts fair.",
    culturalTip: "Visit in February during the Mela to watch live regional potters, weavers, and metal smiths in action.",
    image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-7",
    name: "Brahma Sarovar & Kurukshetra Heritage",
    state: "Haryana",
    city: "Kurukshetra",
    category: "heritage",
    coords: { x: 48, y: 34 },
    description: "Vast holy water tank mentioned in Mahabharata epics, where the Bhagavad Gita was expounded at Jyotisar.",
    culturalTip: "Visit during the Gita Jayanti festival in winter when devotional lamps illuminate the colossal water tank.",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-8",
    name: "Rural Chulha & Dairy Farmstead",
    state: "Haryana",
    city: "Jhajjar / Rohtak",
    category: "experiences",
    coords: { x: 45, y: 46 },
    description: "Authentic countryside home where travellers experience clay hearth baking, cattle milking, and baithak hospitality.",
    culturalTip: "Greet village elders with folded hands ('Ram Ram ji') and enjoy a glass of spiced chaach.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-9",
    name: "Dashashwamedh & Manikarnika Ghats",
    state: "Uttar Pradesh",
    city: "Varanasi",
    category: "heritage",
    coords: { x: 82, y: 64 },
    description: "The spiritual heart of Kashi along the sacred Ganga, hosting grand evening Maha Aartis and eternal rituals.",
    culturalTip: "Observe cremation rituals at Manikarnika with silent contemplation from boats; never take photographs.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-10",
    name: "Bara Imambara & Rumi Darwaza",
    state: "Uttar Pradesh",
    city: "Lucknow",
    category: "heritage",
    coords: { x: 74, y: 53 },
    description: "Nawabi architectural marvel built as a famine relief project in 1784, containing the intricate Bhulbhulaiya labyrinth.",
    culturalTip: "Hire a licensed local guide inside the Bhulbhulaiya maze to understand the astonishing acoustic whispering walls.",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-11",
    name: "Old Lucknow Kebab & Chikankari Guilds",
    state: "Uttar Pradesh",
    city: "Chowk, Lucknow",
    category: "food",
    coords: { x: 76, y: 55 },
    description: "Atmospheric quarter where 100-year-old Tunday Kababi stoves sizzle beside Chikankari master needlework houses.",
    culturalTip: "Practice the gentle art of Lucknowi politeness ('Pehle Aap') when interacting with generational shopkeepers.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "mp-12",
    name: "Taj Mahal & Mehtab Bagh at Sunset",
    state: "Uttar Pradesh",
    city: "Agra",
    category: "heritage",
    coords: { x: 57, y: 56 },
    description: "The pinnacle of Mughal symmetry, built in pristine white Makrana marble on the banks of the Yamuna River.",
    culturalTip: "Cross the Yamuna River to Mehtab Bagh (Moonlight Garden) for quiet sunset vistas away from crowd lines.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80"
  }
];
