import type { JournalEntry, Product, RunClub } from "./types";

export const brandPillars = [
  {
    title: "Freedom",
    text: "Running as exploration: movement beyond routine and into terrain, culture, and identity."
  },
  {
    title: "Function",
    text: "Every garment has a technical purpose, from breathability to long-distance moisture control."
  },
  {
    title: "Form",
    text: "Minimal luxury silhouette with editorial influence and precise construction details."
  }
] as const;

export const featuredProducts: Product[] = [
  {
    slug: "altitude-trail-shorts",
    name: "Altitude Trail Shorts",
    category: "Trail Shorts",
    price: "€145",
    images: [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=1200&q=80"
    ],
    useCases: ["Trail", "Ultra distance", "Urban running"],
    description:
      "Ultralight shorts for maximal mobility in long elevation sessions.",
    productStory:
      "Designed after dawn climbs in Sierra de Guadarrama where range of motion and low weight define pace.",
    materialStory:
      "Italian stretch nylon with silver-thread anti-odor treatment and laser-cut ventilation channels.",
    features: [
      { name: "4-way stretch", description: "Full mobility on climbs and technical descents." },
      { name: "Ultralight", description: "118 g build tuned for all-day comfort." },
      { name: "Quick dry", description: "Fast moisture transfer for stable body temperature." },
      { name: "Anti-odor", description: "Silver fiber integration for multi-session freshness." },
      { name: "Laser ventilation", description: "Precision perforations in heat zones." }
    ],
    specs: [
      { label: "Weight", value: "118 g" },
      { label: "Material", value: "Italian stretch nylon" },
      { label: "Use", value: "Trail / Ultra" },
      { label: "Temperature", value: "10–25 °C" }
    ],
    reviews: [
      {
        author: "L. Navarro",
        text: "No restriction on climbs, and the fabric stays stable in humid sessions.",
        rating: 5
      },
      {
        author: "T. Becker",
        text: "Perfect balance between minimal weight and real technical utility.",
        rating: 5
      }
    ],
    relatedSlugs: ["strata-technical-tee", "rift-shell-outerwear"]
  },
  {
    slug: "strata-technical-tee",
    name: "Strata Technical Tee",
    category: "Technical Tees",
    price: "€120",
    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531842470156-9507e4c9d977?auto=format&fit=crop&w=1200&q=80"
    ],
    useCases: ["Trail", "Urban running"],
    description:
      "Second-skin tee with breathable geometry for high-output mountain days.",
    productStory:
      "Inspired by layered terrain lines and rhythm-based pacing in mixed environments.",
    materialStory:
      "Merino-blend knit with hydrophobic capillary structure for continuous evaporation.",
    features: [
      { name: "Quick dry", description: "Rapid evaporation during effort surges." },
      { name: "Anti-odor", description: "Merino fibers regulate odor naturally." },
      { name: "Laser ventilation", description: "Micro-zones to dissipate heat buildup." },
      { name: "Ultralight", description: "Less than 150 g for unrestricted cadence." },
      { name: "4-way stretch", description: "Adapts to arm drive and upper-body rotation." }
    ],
    specs: [
      { label: "Weight", value: "132 g" },
      { label: "Material", value: "Merino technical blend" },
      { label: "Use", value: "Trail / Urban" },
      { label: "Temperature", value: "8–24 °C" }
    ],
    reviews: [
      {
        author: "S. Dubois",
        text: "Breathes exceptionally well during tempo efforts in the city.",
        rating: 5
      },
      {
        author: "M. Ortega",
        text: "Technical feel with a clean silhouette I can also wear daily.",
        rating: 4
      }
    ],
    relatedSlugs: ["altitude-trail-shorts", "rift-shell-outerwear"]
  },
  {
    slug: "rift-shell-outerwear",
    name: "Rift Shell Outerwear",
    category: "Outerwear",
    price: "€310",
    images: [
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1200&q=80"
    ],
    useCases: ["Trail", "Ultra distance"],
    description: "Protective shell engineered for variable terrain and shifting weather.",
    productStory:
      "Created for exposed ridgelines where sudden wind and rain require instant adaptability.",
    materialStory:
      "Three-layer membrane with elastic face fabric, sealed seams, and silver reflective accents.",
    features: [
      { name: "Quick dry", description: "Outer face sheds water and dries quickly between storms." },
      { name: "Laser ventilation", description: "Underarm vents balance protection and airflow." },
      { name: "4-way stretch", description: "Maintains comfort with loaded hydration packs." },
      { name: "Anti-odor", description: "Interior treatment supports multi-day use." },
      { name: "Ultralight", description: "Packable profile for mandatory gear lists." }
    ],
    specs: [
      { label: "Weight", value: "246 g" },
      { label: "Material", value: "3-layer technical membrane" },
      { label: "Use", value: "Trail / Ultra" },
      { label: "Temperature", value: "0–18 °C" }
    ],
    reviews: [
      {
        author: "E. Laurent",
        text: "Wind protection is outstanding without the usual bulk.",
        rating: 5
      },
      {
        author: "J. Miles",
        text: "Packability made it my default shell for mountain weekends.",
        rating: 5
      }
    ],
    relatedSlugs: ["altitude-trail-shorts", "strata-technical-tee"]
  }
];

export const runClubs: RunClub[] = [
  {
    city: "Madrid",
    country: "Spain",
    coordinates: { lat: 40.4168, lng: -3.7038 },
    schedule: "Sunrise run · Tue/Thu 07:00"
  },
  {
    city: "Barcelona",
    country: "Spain",
    coordinates: { lat: 41.3851, lng: 2.1734 },
    schedule: "Urban exploration · Wed 20:00"
  },
  {
    city: "Paris",
    country: "France",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    schedule: "River intervals · Tue 19:30"
  },
  {
    city: "Berlin",
    country: "Germany",
    coordinates: { lat: 52.52, lng: 13.405 },
    schedule: "Trail weekends · Sat 08:30"
  },
  {
    city: "London",
    country: "United Kingdom",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    schedule: "Long run collective · Sun 08:00"
  }
];

export const events = [
  "Sunrise runs",
  "Trail weekends",
  "Urban exploration runs"
] as const;

export const challenges = [
  "Monthly mileage challenges",
  "Elevation challenges",
  "Segment competitions"
] as const;

export const journalEntries: JournalEntry[] = [
  {
    slug: "running-as-freedom",
    title: "Running as Freedom",
    excerpt: "How movement became cultural expression beyond race-day metrics.",
    category: "Running philosophy"
  },
  {
    slug: "five-trail-routes-near-madrid",
    title: "Five Trail Routes Near Madrid",
    excerpt: "Technical terrain guides for elevation sessions and long Sunday efforts.",
    category: "Trail route guides"
  },
  {
    slug: "athlete-profile-lea-navarro",
    title: "Athlete Profile · Lea Navarro",
    excerpt: "A conversation on endurance, design minimalism, and mountain identity.",
    category: "Athlete profiles"
  }
];
