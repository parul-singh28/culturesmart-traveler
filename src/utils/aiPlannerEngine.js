// Intelligent Cultural Itinerary Generator for CultureSmart Traveller

export const generateCulturalItinerary = ({
  destination = "Rajasthan",
  duration = 5,
  budget = "Cultural Midscale",
  travelStyle = "Heritage",
  companions = "Couple",
  culturalInterests = ["Heritage", "Food", "Art", "Local traditions"]
}) => {
  const daysCount = parseInt(duration) || 5;

  const itineraryTemplates = {
    "Rajasthan": [
      {
        day: 1,
        title: "Jaipur — The Royal Pink Citadel",
        theme: "Rajput Sovereignty & Palace Forts",
        activities: [
          {
            time: "08:30 AM",
            title: "Amber Fort & Sheesh Mahal at Golden Hour",
            location: "Amer, Jaipur",
            duration: "3.5 Hours",
            cost: budget === "Heritage Luxury" ? "₹1,500 (Private Historian)" : "₹500",
            culturalContext: "Explore the Rajput-Mughal syncretic architecture. The Hall of Mirrors was engineered so a single oil candle illuminated the entire chamber.",
            etiquetteTip: "Remove shoes at the Shila Devi temple inside the Sun Gate; photograph respectfully without flash.",
            type: "Heritage"
          },
          {
            time: "01:00 PM",
            title: "Traditional Thali Feast at 150-Year-Old Establishment",
            location: "Johari Bazaar, Old City",
            duration: "1.5 Hours",
            cost: budget === "Heritage Luxury" ? "₹1,800" : "₹600",
            culturalContext: "Authentic Dal Baati Churma served with five distinct lentil preparations and warm ghee churned from local Gir cows.",
            etiquetteTip: "Eat with your right hand; leaving excessive food on the thali is considered disrespectful to Annapurna (goddess of nourishment).",
            type: "Food"
          },
          {
            time: "03:30 PM",
            title: "Hands-on Dabu Indigo Block-Printing in Sanganer",
            location: "Sanganer Artisan Quarter",
            duration: "3 Hours",
            cost: "₹1,200",
            culturalContext: "Meet 5th-generation Chhipa guild masters and stamp your own organic cotton dupatta using hand-carved teak wood blocks.",
            etiquetteTip: "Greet artisans with a gentle 'Khamma Ghani' and ask before photographing dye vats.",
            type: "Artisan"
          },
          {
            time: "07:00 PM",
            title: "Heritage Bazaar Walk & Night View of Hawa Mahal",
            location: "Bapu & Sireh Deori Bazaar",
            duration: "2 Hours",
            cost: "Free to wander",
            culturalContext: "Built in 1799 so royal women could observe street life through 953 honeycomb jharokhas without being seen.",
            etiquetteTip: "Bargain with smiles and cordial humor rather than sharp negotiation.",
            type: "Local Experience"
          }
        ]
      },
      {
        day: 2,
        title: "Jodhpur — Sun City & Blue Haveli Trails",
        theme: "Marwar Desert Fortresses & Spice Legacy",
        activities: [
          {
            time: "09:00 AM",
            title: "Mehrangarh Fort: The Citadel of the Sun",
            location: "Mehrangarh, Jodhpur",
            duration: "3 Hours",
            cost: "₹600",
            culturalContext: "Rising 400 feet above the city, carrying canon indentations from battles and the handprints of royal satis honoring ancestral duty.",
            etiquetteTip: "Hire a licensed community audio guide voiced by the Maharaja of Jodhpur.",
            type: "Heritage"
          },
          {
            time: "01:00 PM",
            title: "Marwari Ker Sangri & Mirchi Vada Tasting",
            location: "Clock Tower Market",
            duration: "1.5 Hours",
            cost: "₹350",
            culturalContext: "Spicy stuffed pepper fritters paired with sweet Mawa Kachori from Jodhpur's oldest halwai.",
            etiquetteTip: "Street food here is fiery; ask for 'Kam Teekha' if you prefer milder spice.",
            type: "Food"
          },
          {
            time: "03:30 PM",
            title: "Navchokiya Blue Alleys Cultural Walk with Local Resident",
            location: "Brahmin Quarter, Old Jodhpur",
            duration: "2.5 Hours",
            cost: "₹800",
            culturalContext: "Why are the houses blue? Copper sulfate and indigo were added to limestone to repel desert termites and reflect fierce sun rays.",
            etiquetteTip: "Keep conversational volume low as families sit in doorsteps knitting and talking.",
            type: "Local Experience"
          },
          {
            time: "06:30 PM",
            title: "Twilight Desert Sarangi & Langa Folk Gathering",
            location: "Stepwell Square (Toorji ka Jhalra)",
            duration: "2 Hours",
            cost: "₹500 / optional tip",
            culturalContext: "Intimate acoustic performance of desert ragas played on the rare 27-string Sindhi Sarangi.",
            etiquetteTip: "Offer nominal appreciative tips directly to musicians after the song concludes.",
            type: "Music"
          }
        ]
      },
      {
        day: 3,
        title: "Pushkar — Sacred Lake, Brahma Temple & Desert Dunes",
        theme: "Spirituality, Desert Pilgrimage & Nomadic Life",
        activities: [
          {
            time: "06:00 AM",
            title: "Sunrise Walk around the 52 Sacred Ghats",
            location: "Pushkar Lake",
            duration: "2 Hours",
            cost: "Free",
            culturalContext: "One of India's five sacred dhams. Hindu mythology recounts that a lotus petal fell from Lord Brahma's hand to create the holy lake.",
            etiquetteTip: "Remove your shoes far before descending ghat steps; beware of touts handing 'free flowers' and demanding large donations.",
            type: "Spiritual"
          },
          {
            time: "10:30 AM",
            title: "Brahma Temple Darshan & Rose Water Distilleries",
            location: "Pushkar Town",
            duration: "2 Hours",
            cost: "Free / ₹200",
            culturalContext: "The world's foremost temple dedicated to the Creator deity Brahma; visit local family-run rose petal (Gulab Jal) distilleries.",
            etiquetteTip: "Leather belts and bags are not permitted inside the sanctum.",
            type: "Heritage"
          },
          {
            time: "04:30 PM",
            title: "Sunset Desert Camel Ride & Kalbelia Dance Camp",
            location: "Thar Dunes, Pushkar",
            duration: "3.5 Hours",
            cost: "₹1,500",
            culturalContext: "Experience nomadic Kalbelia dancers performing acrobatic feats to the hypnotic drone of the pungi.",
            etiquetteTip: "Dress warmly as desert night temperatures plummet rapidly after dusk.",
            type: "Cultural Experience"
          }
        ]
      },
      {
        day: 4,
        title: "Udaipur — City of Lakes & Mewar Resilience",
        theme: "Romance, Water Architecture & Miniature Painting",
        activities: [
          {
            time: "09:00 AM",
            title: "City Palace Complex & Crystal Gallery",
            location: "Lake Pichola, Udaipur",
            duration: "3 Hours",
            cost: "₹800",
            culturalContext: "Built continuously across 400 years by 22 Maharanas of Mewar, who proudly never surrendered their sovereignty to foreign invaders.",
            etiquetteTip: "Notice the low doorway heights designed to force enemies to bow and enter one at a time.",
            type: "Heritage"
          },
          {
            time: "01:00 PM",
            title: "Mewari Dining with Lakeside Ghat View",
            location: "Ambrai Ghat",
            duration: "2 Hours",
            cost: "₹1,200",
            culturalContext: "Savor Mewari Gatta curry and fresh bajra roti while observing pilgrims and artists painting lake views.",
            etiquetteTip: "Reserve a waterfront table at least one day in advance for unobstructed views.",
            type: "Food"
          },
          {
            time: "04:00 PM",
            title: "Mewar Miniature Painting Workshop with Guild Master",
            location: "Near Jagdish Temple",
            duration: "2.5 Hours",
            cost: "₹1,000",
            culturalContext: "Learn single-hair squirrel tail brush techniques using stone powders (lapis lazuli, malachite, and gold leaf).",
            etiquetteTip: "Hold delicate silk canvas edges only with fingertips.",
            type: "Artisan"
          }
        ]
      },
      {
        day: 5,
        title: "Rural Shekhawati or Bagru — Open-Air Fresco Gallery",
        theme: "Merchant Haveli Murals & Departure Rituals",
        activities: [
          {
            time: "09:30 AM",
            title: "Exploration of Painted Havelis of Mandawa/Nawalgarh",
            location: "Shekhawati Region",
            duration: "3 Hours",
            cost: "₹500",
            culturalContext: "19th-century Marwari silk-route merchants decorated family mansions with opulent frescoes blending Hindu epics with steam trains and hot air balloons.",
            etiquetteTip: "Many havelis are still occupied by caretaker families; offer a modest ₹50–₹100 tip to the family for opening private inner courtyards.",
            type: "Heritage"
          },
          {
            time: "02:00 PM",
            title: "Farewell Cultural Lunch & Spice Souvenir Shopping",
            location: "Heritage Haveli Courtyard",
            duration: "2 Hours",
            cost: "₹800",
            culturalContext: "Pick up hand-ground Mathania red chilies, cumin seeds, and miniature block-print keepsakes to conclude your journey.",
            etiquetteTip: "Ensure organic spices are vacuum-sealed for travel.",
            type: "Food"
          }
        ]
      }
    ],

    "Delhi": [
      {
        day: 1,
        title: "Old Delhi (Shahjahanabad) — The Living Mughal Pulse",
        theme: "Emperors, Spices & Sufi Poetry",
        activities: [
          {
            time: "08:30 AM",
            title: "Jama Masjid & Historic Minaret Climb",
            location: "Old Delhi",
            duration: "2 Hours",
            cost: "Free (₹100 camera fee)",
            culturalContext: "India's largest historic mosque built by Emperor Shah Jahan in 1656 out of alternating red sandstone and white marble.",
            etiquetteTip: "Robes (lungis/shawls) are provided at the gate if shorts or bare shoulders are worn. Remove shoes at the top stairs.",
            type: "Heritage"
          },
          {
            time: "11:00 AM",
            title: "Cycle-Rickshaw Heritage Trail through Chandni Chowk & Khari Baoli",
            location: "Spice Market",
            duration: "2.5 Hours",
            cost: "₹400",
            culturalContext: "Explore Asia's largest wholesale spice market. The air is scented with cardamom, dried red chilies, and cloves.",
            etiquetteTip: "Carry a handkerchief; ground red chili dust in the market causes involuntary coughing even in locals!",
            type: "Local Experience"
          },
          {
            time: "01:30 PM",
            title: "Historic Lunch: Gali Paranthe Wali & Dahi Bhalla",
            location: "Chandni Chowk",
            duration: "1.5 Hours",
            cost: "₹350",
            culturalContext: "Deep-fried paranthas stuffed with rabri, bitter gourd, or mint, served with tangy pumpkin relish and mint chutney.",
            etiquetteTip: "Seating is communal and quick; finish and give your seat to the next waiting customer.",
            type: "Food"
          },
          {
            time: "06:00 PM",
            title: "Thursday Sufi Qawwali at Nizamuddin Dargah",
            location: "Hazrat Nizamuddin Basti",
            duration: "2.5 Hours",
            cost: "Free / ₹100 for rose petals",
            culturalContext: "700 years of living devotional poetry composed by Amir Khusrau honoring sufi saint Nizamuddin Auliya.",
            etiquetteTip: "Cover your head before entering; place shoes in the supervised shoe rack (chappal stand).",
            type: "Music"
          }
        ]
      },
      {
        day: 2,
        title: "South Delhi — Tombs, Stepwells & Modern Street Art",
        theme: "Mughal Symmetry to Contemporary Street Culture",
        activities: [
          {
            time: "09:00 AM",
            title: "Humayun's Tomb & Sunder Nursery Botanical Gardens",
            location: "Nizamuddin East",
            duration: "3 Hours",
            cost: "₹600",
            culturalContext: "The first monumental garden-tomb on the Indian subcontinent, initiating the architectural lineage that culminated in the Taj Mahal.",
            etiquetteTip: "Stroll early morning to catch morning light filtering through the red sandstone lattice screens (jalis).",
            type: "Heritage"
          },
          {
            time: "01:00 PM",
            title: "Langar (Communal Meal) Experience at Gurdwara Bangla Sahib",
            location: "Connaught Place",
            duration: "2 Hours",
            cost: "Free (Selfless service / Seva)",
            culturalContext: "Volunteers prepare and serve over 25,000 hot meals daily to every visitor without distinction of religion, caste, or wealth.",
            etiquetteTip: "Cover your head completely, wash hands and feet in the water channel, and sit cross-legged in the dining hall (Pangat).",
            type: "Spiritual"
          },
          {
            time: "03:30 PM",
            title: "Lodhi Art District Open-Air Street Mural Walk",
            location: "Lodhi Colony",
            duration: "2 Hours",
            cost: "Free",
            culturalContext: "India's first public open-air art district, where government colony walls have been transformed by 50+ global artists.",
            etiquetteTip: "Great spot for photography; please do not disturb residents living in the government quarters.",
            type: "Artisan"
          }
        ]
      },
      {
        day: 3,
        title: "Mehrauli — The First Medieval City & Qutub Complex",
        theme: "Ancient Iron Pillars & Forest Ruins",
        activities: [
          {
            time: "09:30 AM",
            title: "Qutub Minar & Rust-Resistant 4th Century Iron Pillar",
            location: "Mehrauli",
            duration: "2.5 Hours",
            cost: "₹600",
            culturalContext: "A 73-meter victory tower commissioned in 1192, featuring Arabic calligraphy and the legendary metallurgical iron pillar.",
            etiquetteTip: "Hire an ASI certified guide or use the government Ministry of Culture audio guide.",
            type: "Heritage"
          },
          {
            time: "01:00 PM",
            title: "Chic Rooftop Lunch Overlooking Qutub Minar",
            location: "Mehrauli Heritage Complex",
            duration: "2 Hours",
            cost: "₹1,500",
            culturalContext: "Contemporary Indian fusion celebrating regional ingredients like Morel mushrooms, moringa, and saffron.",
            etiquetteTip: "Smart casual attire is standard.",
            type: "Food"
          }
        ]
      }
    ],

    "Haryana": [
      {
        day: 1,
        title: "Kurukshetra — The Cradle of the Gita",
        theme: "Vedic Philosophy & Sacred Water Reservoirs",
        activities: [
          {
            time: "09:00 AM",
            title: "Brahma Sarovar & Jyotisar (Birthplace of the Gita)",
            location: "Kurukshetra",
            duration: "3 Hours",
            cost: "Free",
            culturalContext: "Stand under the sacred Banyan tree where Lord Krishna expounded the Bhagavad Gita's philosophy of duty and detachment to Arjuna.",
            etiquetteTip: "Maintain quiet contemplative decorum; avoid littering near sacred tank ghats.",
            type: "Spiritual"
          },
          {
            time: "01:00 PM",
            title: "Traditional Haryanvi Lunch: Bajra Roti, Kadhi & Churma",
            location: "Local Baithak / Dhabas",
            duration: "1.5 Hours",
            cost: "₹350",
            culturalContext: "Wholesome farmer's nutrition featuring stone-ground pearl millet flatbreads with fresh white butter and desi khand jaggery.",
            etiquetteTip: "Wash your hands before eating; food is served with immense motherly insistence on second helpings.",
            type: "Food"
          },
          {
            time: "03:30 PM",
            title: "Sheikh Chilli's Tomb & Harsh Ka Tila Excavations",
            location: "Thanesar, Kurukshetra",
            duration: "2 Hours",
            cost: "₹300",
            culturalContext: "A breathtaking pearly-white marble Mughal mausoleum dedicated to the spiritual master of Prince Dara Shikoh.",
            etiquetteTip: "Remove shoes at the raised marble pavilion.",
            type: "Heritage"
          }
        ]
      },
      {
        day: 2,
        title: "Surajkund & Faridabad — Ancient Crafts & Sun Temples",
        theme: "Folk Artisans, Terracotta & Earthen Architecture",
        activities: [
          {
            time: "09:30 AM",
            title: "10th Century Surajkund Amphitheater & Reservoir",
            location: "Faridabad",
            duration: "2.5 Hours",
            cost: "₹200",
            culturalContext: "Constructed by King Surajpal of the Tomara dynasty as an amphitheater dedicated to Surya (the Sun God).",
            etiquetteTip: "Wear comfortable walking shoes to explore the stepped stone reservoir.",
            type: "Heritage"
          },
          {
            time: "01:00 PM",
            title: "Artisan Village Pottery Masterclass & Rural Lunch",
            location: "Surajkund Crafts Village",
            duration: "3 Hours",
            cost: "₹800",
            culturalContext: "Learn traditional clay pot turning on foot-powered wheels and sample sugarcane juice and roasted corn.",
            etiquetteTip: "Support artisans directly by buying handcrafted terracotta planters or lamps.",
            type: "Artisan"
          }
        ]
      },
      {
        day: 3,
        title: "Rural Jhajjar/Rohtak — Akhara Wrestling & Pastoral Life",
        theme: "Village Brotherhood, Cow Milking & Clay Wrestling",
        activities: [
          {
            time: "06:30 AM",
            title: "Morning Visit to a Traditional Mud Akhara",
            location: "Rohtak Countryside",
            duration: "2 Hours",
            cost: "Free / Respectful Donation",
            culturalContext: "Watch young pehlwans practice ancient Indian clay wrestling (Kushti) governed by strict discipline, vegetarian diet, and reverence for Hanuman.",
            etiquetteTip: "Touch the earth at the edge of the pit with respect before stepping near the soil.",
            type: "Cultural Experience"
          },
          {
            time: "10:00 AM",
            title: "Organic Farmstead Walk & Buffalo Butter Churning",
            location: "Jhajjar Rural Retreat",
            duration: "3 Hours",
            cost: "₹1,200",
            culturalContext: "Participate in daily village routines: grinding flour on hand chakki, making spiced chaach, and resting under banyan shade.",
            etiquetteTip: "Always greet the village elders in the chaupal with 'Ram Ram ji'.",
            type: "Local Experience"
          }
        ]
      }
    ],

    "Uttar Pradesh": [
      {
        day: 1,
        title: "Varanasi — The Eternal City of Light (Kashi)",
        theme: "Sacred Ganges, Dawn Ragas & Evening Fire Aarti",
        activities: [
          {
            time: "05:30 AM",
            title: "Subah-e-Banaras Dawn Boat Ride along 84 Ghats",
            location: "Assi Ghat to Dashashwamedh",
            duration: "2.5 Hours",
            cost: "₹1,000 / boat",
            culturalContext: "Varanasi has been inhabited for 3,000+ years. Mark Twain wrote: 'Benares is older than history, older than tradition, older even than legend.'",
            etiquetteTip: "Float marigold diyas with a silent prayer for world peace.",
            type: "Spiritual"
          },
          {
            time: "08:30 AM",
            title: "Ghat Breakfast: Bedmi Puri, Kachori & Saffron Jalebi",
            location: "Chowk Alleys",
            duration: "1 Hour",
            cost: "₹200",
            culturalContext: "Piping hot lentil kachoris served on dried leaf plates (donas) with thick creamy malai lassi in terracotta kulhads.",
            etiquetteTip: "Locals stand and eat right at the counter; finish and toss your clay kulhad in the clay bin where it biodegrades back into earth.",
            type: "Food"
          },
          {
            time: "02:00 PM",
            title: "Weaver's Colony Walk: Varanasi Zari & Katan Silk Looms",
            location: "Madanpura & Peeli Kothi",
            duration: "3 Hours",
            cost: "₹500 guide",
            culturalContext: "Generational Muslim weavers create pure gold and silver brocades that take up to 6 months to weave a single saree.",
            etiquetteTip: "Respect the artisans' prayer times (Namaaz hours) when visits pause.",
            type: "Artisan"
          },
          {
            time: "06:30 PM",
            title: "Grand Evening Ganga Maha Aarti at Dashashwamedh Ghat",
            location: "Dashashwamedh Ghat",
            duration: "2 Hours",
            cost: "Free (₹200 for river boat seat)",
            culturalContext: "Young saffron-robed priests perform synchronized fire rituals honoring the river, sun, and universe with conch shells and incense.",
            etiquetteTip: "Arrive by 5:45 PM to get a front-row river boat or steps seat.",
            type: "Spiritual"
          }
        ]
      },
      {
        day: 2,
        title: "Lucknow — The City of Nawabs & Poetic Courtesy",
        theme: "Awadhi Architecture, Chikankari & Gastronomy",
        activities: [
          {
            time: "09:00 AM",
            title: "Bara Imambara & The Astonishing Bhulbhulaiya Maze",
            location: "Old Lucknow",
            duration: "3 Hours",
            cost: "₹500",
            culturalContext: "Constructed without a single wooden beam or iron girder. The acoustic whispering gallery transmits a match-strike sound across 50 meters.",
            etiquetteTip: "Take off shoes before entering the main hall; dress modestly.",
            type: "Heritage"
          },
          {
            time: "01:00 PM",
            title: "Legendary Tunday Kababi & Sheermal in Chowk",
            location: "Aminabad / Chowk",
            duration: "1.5 Hours",
            cost: "₹450",
            culturalContext: "Taste the 160-spice Galouti Kebab that melts instantly on the tongue, paired with saffron-infused flatbread (Sheermal).",
            etiquetteTip: "Enjoy with a cup of spiced Kashmiri chai afterward.",
            type: "Food"
          },
          {
            time: "03:30 PM",
            title: "Chikankari Masterclass & Attar (Perfume) Distillers",
            location: "Chowk Bazaar",
            duration: "2.5 Hours",
            cost: "₹800",
            culturalContext: "Meet perfumers in Kannauj attar shops who distill wild monsoon rain scent (Mitti attar) using copper stills (deg-bapka).",
            etiquetteTip: "Apply attar only to pulse points; never rub it between wrists as it damages top notes.",
            type: "Artisan"
          }
        ]
      },
      {
        day: 3,
        title: "Agra — The Imperial Mughal Canvas",
        theme: "Marble Pietra Dura & The Monument to Eternal Love",
        activities: [
          {
            time: "06:00 AM",
            title: "Taj Mahal at Sunrise (Zero Crowds)",
            location: "Agra",
            duration: "3 Hours",
            cost: "₹1,100 (foreign) / ₹250 (domestic)",
            culturalContext: "Built by Shah Jahan for Empress Mumtaz Mahal between 1631 and 1648. The translucent white marble changes color from pale peach to bright pearl.",
            etiquetteTip: "No tripods, food, or tobacco are allowed past security. Shoe covers are provided for the marble platform.",
            type: "Heritage"
          },
          {
            time: "10:30 AM",
            title: "Marble Inlay (Pietra Dura / Parchin Kari) Demonstration",
            location: "Fatehabad Road",
            duration: "1.5 Hours",
            cost: "Free demonstration",
            culturalContext: "Direct descendants of the artisans who built the Taj demonstrate carving semiprecious stones (lapis, malachite, jasper) into marble.",
            etiquetteTip: "Marvel at how single flowers contain up to 35 individual stones seamlessly glued together.",
            type: "Artisan"
          },
          {
            time: "04:30 PM",
            title: "Agra Fort & Sunset across the Yamuna from Mehtab Bagh",
            location: "Mehtab Bagh",
            duration: "2.5 Hours",
            cost: "₹300",
            culturalContext: "The view where an imprisoned Shah Jahan spent his final years gazing across the river at the tomb of his beloved.",
            etiquetteTip: "Capture the starlight silhouette reflection on the water.",
            type: "Heritage"
          }
        ]
      }
    ]
  };

  // Select target templates or fallback to Rajasthan
  const rawDays = itineraryTemplates[destination] || itineraryTemplates["Rajasthan"];
  const selectedDays = [];

  // Generate dynamic days up to daysCount
  for (let i = 0; i < daysCount; i++) {
    const templateIndex = i % rawDays.length;
    const baseDay = rawDays[templateIndex];
    selectedDays.push({
      ...baseDay,
      dayNumber: i + 1,
      title: `Day ${String(i + 1).padStart(2, '0')} — ${baseDay.title.split('—')[1] || baseDay.title}`,
    });
  }

  // Calculate estimated total
  const estimatedCost = budget === "Heritage Luxury" ? `₹${daysCount * 14000}` : budget === "Budget Backpacker" ? `₹${daysCount * 2500}` : `₹${daysCount * 6500}`;

  return {
    destination,
    durationDays: daysCount,
    budget,
    travelStyle,
    companions,
    estimatedCost,
    culturalPillarsCovered: culturalInterests,
    itineraryTitle: `${destination} Cultural Odyssey`,
    summary: `A personalized ${daysCount}-day journey through ${destination}, curated for ${companions.toLowerCase()} travelers interested in ${culturalInterests.slice(0, 3).join(", ")}. Designed with respectful cultural immersion, artisan masterclasses, and authentic dining.`,
    days: selectedDays
  };
};
