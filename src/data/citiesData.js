import { tokyoData } from './cities/tokyo.js';
import { parisData } from './cities/paris.js';
import { romeData } from './cities/rome.js';
import { bangkokData } from './cities/bangkok.js';
import { marrakechData } from './cities/marrakech.js';
import { mexicoCityData } from './cities/mexicocity.js';
import { seoulData } from './cities/seoul.js';
import { dubaiData } from './cities/dubai.js';
import { londonData } from './cities/london.js';
import { newYorkData } from './cities/newyork.js';

export const CITIES_DATA = [
  tokyoData,
  parisData,
  romeData,
  bangkokData,
  marrakechData,
  mexicoCityData,
  seoulData,
  dubaiData,
  londonData,
  newYorkData
];

export const CONTINENTS = ["All", "Asia", "Europe", "Americas", "Middle East", "Africa"];

export const TIP_OF_THE_DAY = [
  {
    city: "Tokyo, Japan",
    flag: "🇯🇵",
    tip: "Never tip in restaurants or taxis in Tokyo. High-standard service is considered a matter of personal honor ('Omotenashi'), and leaving extra cash can embarrass the staff.",
    category: "Tipping Etiquette"
  },
  {
    city: "Paris, France",
    flag: "🇫🇷",
    tip: "Before saying anything else to a shopkeeper, waiter, or ticket agent, always open with a friendly 'Bonjour Madame/Monsieur'. It acknowledges mutual human dignity.",
    category: "Social Politeness"
  },
  {
    city: "Rome, Italy",
    flag: "🇮🇹",
    tip: "Drink your morning espresso standing at the bar counter ('al banco'). It is half the price of sitting down at a table and takes just 60 seconds like a true Roman.",
    category: "Coffee Rituals"
  },
  {
    city: "Bangkok, Thailand",
    flag: "🇹🇭",
    tip: "Never touch anyone on the head, even affectionately to a child. In Thai Buddhist culture, the head is sacred, while the soles of the feet should never point toward statues or people.",
    category: "Body Language"
  },
  {
    city: "Marrakech, Morocco",
    flag: "🇲🇦",
    tip: "When served mint tea from high above, always accept the glass with your right hand. Refusing the first cup of tea is seen as rejecting the host's hospitality.",
    category: "Hospitality Customs"
  },
  {
    city: "Mexico City, Mexico",
    flag: "🇲🇽",
    tip: "When you enter a small taquería or pass nearby tables in a restaurant, a warm nod and '¡Buen provecho!' (Enjoy your meal!) is a beloved custom.",
    category: "Dining Courtesy"
  },
  {
    city: "Seoul, South Korea",
    flag: "🇰🇷",
    tip: "When handing your credit card, receiving a drink, or passing money, always present it with both hands or with your left hand lightly touching your right forearm.",
    category: "Two-Handed Respect"
  },
  {
    city: "Dubai, UAE",
    flag: "🇦🇪",
    tip: "Public displays of affection beyond holding hands between married couples are culturally and legally prohibited. Save romantic embraces for private quarters.",
    category: "Public Decorum"
  },
  {
    city: "London, UK",
    flag: "🇬🇧",
    tip: "On all London Underground escalators, stand strictly on the right side. The left lane is sacred for rushing commuters.",
    category: "Transit Rules"
  },
  {
    city: "New York City, USA",
    flag: "🇺🇸",
    tip: "If a packed subway train pulls up and one car is completely empty, do not enter it! There is always an unbearable smell, broken A/C, or biohazard.",
    category: "Subway Survival"
  }
];
