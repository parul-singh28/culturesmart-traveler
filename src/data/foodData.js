export const FOOD_CARDS = [
  {
    id: "rajasthani-thali",
    name: "Rajasthani Royal Thali",
    origin: "Rajasthan",
    state: "Rajasthan",
    spiceLevel: "Medium-High",
    diet: "Vegetarian",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    dishes: ["Dal Baati Churma", "Gatte ki Sabzi", "Ker Sangri", "Mirchi Vada", "Ghevar"],
    culturalStory: "Born from the arid desert where water was scarce and war campaigns were frequent. Baati dumplings baked in sand embers and soaked in pure desi ghee can stay fresh for days without spoiling. Ker berries and Sangri beans grow wild on desert Khejri trees, providing nutrition without cultivation.",
    bestPlaceToTry: "Chokhi Dhani or LMB (Laxmi Mishtan Bhandar), Jaipur"
  },
  {
    id: "delhi-street-food",
    name: "Old Delhi Street Gastronomy",
    origin: "Old Delhi (Shahjahanabad)",
    state: "Delhi",
    spiceLevel: "High",
    diet: "Vegetarian & Non-Veg",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    dishes: ["Gali Paranthe Wali stuffed breads", "Slow-cooked Nihari", "Chole Bhature", "Natraj Dahi Bhalla"],
    culturalStory: "Old Delhi's food is a sensory time machine. In 1648, Emperor Shah Jahan built the capital and his daughter Jahanara designed Chandni Chowk. Legendary halwais and kebab-makers have operated out of the exact same wooden shophouses for 150+ years, surviving partitions and dynastic shifts.",
    bestPlaceToTry: "Paranthe Wali Gali & Karim's near Jama Masjid, Old Delhi"
  },
  {
    id: "banarasi-paan",
    name: "Banarasi Paan & Ghat Breakfast",
    origin: "Varanasi",
    state: "Uttar Pradesh",
    spiceLevel: "Mild (Paan) / Medium (Kachori)",
    diet: "Pure Vegetarian",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    dishes: ["Banarasi Meetha Paan", "Kachori Sabzi", "Crisp Saffron Jalebi", "Lassi in Clay Kulhad"],
    culturalStory: "In Kashi, eating is a meditative ritual. Pilgrims and locals begin the dawn with crisp kachoris dipped in spicy hing-potato curry followed by coiled hot jalebis. The grand finale is the Banarasi Paan—a betel leaf filled with gulkand (rose petal paste), fennel, and spices that melts in your mouth without tobacco.",
    bestPlaceToTry: "Ramchandra Chaurasia Paan at Chowk & Blue Lassi near Manikarnika, Varanasi"
  },
  {
    id: "haryanvi-cuisine",
    name: "Haryanvi Rustic Farm Feast",
    origin: "Rural Haryana",
    state: "Haryana",
    spiceLevel: "Mild-Medium",
    diet: "Pure Vegetarian",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    dishes: ["Bajre ki Roti with Taza White Butter", "Sarson ka Saag", "Sweet Ghee Churma", "Kadhi Pakora", "Chaach (Spiced Buttermilk)"],
    culturalStory: "The agricultural pride of Haryana centers on 'Doodh, Dahi, and Desi Ghee'. Farmers working sunup to sundown required sustained energy. Bajra (pearl millet) flatbreads cooked over earthen stoves (chulha) topped with fresh hand-churned white butter and accompanied by jaggery (gud) represent pure rustic wellness.",
    bestPlaceToTry: "Haveli Murthal or Pratapgarh Farms, Jhajjar"
  },
  {
    id: "awadhi-cuisine",
    name: "Awadhi Nawabi Dawat",
    origin: "Lucknow",
    state: "Uttar Pradesh",
    spiceLevel: "Aromatic & Subtle",
    diet: "Non-Vegetarian & Veg",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    dishes: ["Galouti Kebab", "Lucknowi Dum Biryani", "Kakori Kebab", "Sheermal", "Shahi Tukda"],
    culturalStory: "In 18th-century Awadh, the Nawabs turned dining into high art. When an aging Nawab lost his teeth, royal bawarchis invented the Galouti Kebab—finely minced lamb marinated with raw papaya and 160 aromatic spices that literally liquifies on the tongue without needing teeth to chew.",
    bestPlaceToTry: "Tunday Kababi, Chowk & Dastarkhwan, Lucknow"
  }
];

export const AI_FOOD_RECOMMENDATIONS = [
  {
    criteria: { diet: "Pure Vegetarian", spice: "Mild", occasion: "Lavish Feast" },
    dish: "Royal Rajasthani Gatte ki Sabzi with Mawa Kachori",
    location: "Jaipur, Rajasthan",
    why: "Gram-flour dumplings poached in a mildly spiced, fragrant yogurt curry, followed by a sweet dry-fruit stuffed mawa kachori."
  },
  {
    criteria: { diet: "Pure Vegetarian", spice: "Medium", occasion: "Wholesome Rustic Comfort" },
    dish: "Haryanvi Bajra Roti with Taza Makkhan & Gur (Jaggery)",
    location: "Rural Haryana",
    why: "Hearty, unpretentious, and deeply satisfying—packed with complex carbs, calcium, and creamy homemade churned butter."
  },
  {
    criteria: { diet: "Vegetarian", spice: "High", occasion: "Quick Street Snack" },
    dish: "Old Delhi Bedmi Puri with Aloo ki Teekhi Sabzi & Dahi Bhalla",
    location: "Chandni Chowk, Delhi",
    why: "Lentil-stuffed puffed fried breads paired with zesty fenugreek-spiced potato gravy, balanced by cool sweet-tangy lentil dumplings in yogurt."
  },
  {
    criteria: { diet: "Non-Vegetarian", spice: "Aromatic & Subtle", occasion: "Lavish Feast" },
    dish: "Lucknowi Dum Biryani & Galouti Kebab with Ulte Tawe ka Parantha",
    location: "Lucknow, Uttar Pradesh",
    why: "Cooked on gentle charcoal embers using the ancient Persian Dum technique, sealing in aromas of saffron, rose water, and tender meat."
  },
  {
    criteria: { diet: "Pure Vegetarian", spice: "Mild", occasion: "Sweet Dessert" },
    dish: "Makhan Malai (Nimish) in Lucknow & Malai Ghevar in Jaipur",
    location: "Lucknow & Jaipur",
    why: "Whipped milk foam infused with saffron and dew drops under winter night skies, garnished with silver vark and crushed pistachios."
  }
];
