const romblonSpots = 
[
  {
    id: 'bonbon', name: 'Bonbon Beach', location: 'Romblon Town', category: 'Beaches',
    description: 'Famous for its long, curving white sandbar connecting to Bang-og Island at low tide. Crystal clear waters ideal for swimming and sunset watching.',
    price: 'Free Entry', rawPrice: 0, rating: 4.9, 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=85'],
    highlights: ['White Sandbar', 'Sunset Point'], lat: 12.5833, lng: 122.2625,
    socials: { website: 'https://cms-romblon-lgu.e.gov.ph/tourism' },
    reviews: [{ user: 'Maria S.', stars: 5, comment: 'Breathtaking sandbar!' }]
  },
  {
    id: 'binucot', name: 'Binucot Beach Resort', location: 'Ferrol, Tablas', category: 'Resorts',
    description: 'A serene beachfront escape with cozy, air-conditioned rooms overlooking the sea or pool. Ideal for kayaking and scuba diving.',
    price: '₱845.50 / Night', rawPrice: 845.50, rating: 4.7, 
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85'],
    highlights: ['Pool', 'Beachfront'], lat: 12.3833, lng: 121.9667,
    reviews: [{ user: 'Erika R.', stars: 4, comment: 'Great coastal drive and calm waters.' }]
  },
  {
    id: 'footprints', name: 'Footprints Beach Resort', location: 'San Andres', category: 'Resorts',
    description: 'Quiet beachfront spot with simple bungalows, poolside dining, and a relaxed atmosphere under coconut palms.',
    price: '₱1,120.00 / Night', rawPrice: 1120.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85'],
    highlights: ['Bungalows', 'Bar'], lat: 12.5283, lng: 121.9861,
    reviews: [{ user: 'Leonard F.', stars: 5, comment: 'Awesome relaxing vibe!' }]
  },
  {
    id: 'g2', name: 'Mount Guiting-Guiting', location: 'Sibuyan Island', category: 'Mountains',
    description: 'Known as "G2", featuring knife-edge ridges and incredible untouched biodiversity. A must for serious hikers.',
    price: '₱500 Permit', rawPrice: 500.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85'],
    highlights: ['Hiking', 'Wildlife'], lat: 12.4161, lng: 122.5694,
    reviews: [{ user: 'Alex H.', stars: 5, comment: 'Challenging but unforgettable.' }]
  },
  {
    id: 'looc', name: 'Looc Bay Fish Sanctuary', location: 'Looc, Tablas', category: 'Beaches',
    description: 'A protected marine sanctuary featuring a floating pontoon where you can swim and feed hundreds of colorful tropical fish.',
    price: '₱100 Entry', rawPrice: 100.00, rating: 4.6, 
    image: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85'],
    highlights: ['Snorkeling', 'Marine Life'], lat: 12.2570, lng: 121.9961,
    reviews: [{ user: 'Samantha', stars: 5, comment: 'Lots of fish right off the dock!' }]
  },
  {
    id: 'carabao', name: 'Carabao Island (Hambil)', location: 'San Jose', category: 'Beaches',
    description: 'Often called Boracay’s quieter sister island. Famous for untouched white sand beaches and cliff diving spots.',
    price: '₱50 Envi Fee', rawPrice: 50.00, rating: 4.9, 
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85'],
    highlights: ['Pristine Sand', 'Cliff Diving'], lat: 12.0667, lng: 121.9333,
    reviews: [{ user: 'Jake M.', stars: 5, comment: 'Just like Boracay before the crowds.' }]
  },
  {
    id: 'aglicay', name: 'Aglicay Beach Resort', location: 'Alcantara, Tablas', category: 'Resorts',
    description: 'A sprawling resort tucked into a cove with beautiful white sand and a scenic hillside viewpoint perfect for photography.',
    price: '₱1,500.00 / Night', rawPrice: 1500.00, rating: 4.5, 
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85'],
    highlights: ['Scenic View', 'White Sand'], lat: 12.2858, lng: 122.0544,
    reviews: [{ user: 'Chris P.', stars: 4, comment: 'Great sunset view from the hill.' }]
  },
  {
    id: 'catingas', name: 'Catingas River', location: 'San Fernando, Sibuyan', category: 'Mountains',
    description: 'Awarded as one of the cleanest inland bodies of water in the Philippines. Features cool, crystal-clear water and diving platforms.',
    price: '₱30 Entry', rawPrice: 30.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85'],
    highlights: ['Crystal Clear', 'Cliff Diving'], lat: 12.3551, lng: 122.5684,
    reviews: [{ user: 'Daniel', stars: 5, comment: 'The water is so cold and refreshing!' }]
  },
  {
    id: 'tiamban', name: 'Tiamban Beach', location: 'Romblon Town', category: 'Beaches',
    description: 'A popular local beach with fine white sand and gentle waves, located very close to the town center. Great for picnics and family outings.',
    price: '₱50 Entry', rawPrice: 50.00, rating: 4.4, 
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85'],
    highlights: ['Family Friendly', 'Fine Sand'], lat: 12.5700, lng: 122.2541,
    socials: { website: 'https://cms-romblon-lgu.e.gov.ph/tourism' },
    reviews: [{ user: 'Anna L.', stars: 4, comment: 'Nice beach very near the town proper.' }]
  },
  {
    id: 'mablaran', name: 'Mablaran Falls', location: 'San Andres, Tablas', category: 'Mountains',
    description: 'A tranquil waterfall surrounded by lush tropical jungle. Offers cool, refreshing natural pools perfect for a quick dip.',
    price: '₱20 Entry', rawPrice: 20.00, rating: 4.5, 
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85'],
    highlights: ['Waterfalls', 'Nature Trail'], lat: 12.5333, lng: 122.0167,
    reviews: [{ user: 'Leo', stars: 5, comment: 'Very peaceful and secluded.' }]
  },
  {
    id: 'tinagongdagat', name: 'Tinagong Dagat', location: 'Calatrava, Tablas', category: 'Beaches',
    description: 'A stunning "hidden sea" consisting of saltwater lakes surrounded by dramatic limestone karst cliffs, accessible by boat.',
    price: '₱25 entrance (LGU guide; confirm locally)', rawPrice: 25.00, rating: 4.8, 
    // Actual Tinagong Dagat, Calatrava photos (remotely hosted by their publishers).
    // Sources: Municipality of Calatrava tourism portal, Journey Era / Jackson Groves,
    // and Travel Photos PH. Obtain permission/appropriate licenses for public redistribution.
    image: 'https://calatravaromblon.gov.ph/assets/destinations/Destinations_TinagongDagat1_web.jpg',
    gallery: [
      'https://calatravaromblon.gov.ph/assets/destinations/Destinations_TinagongDagat1_web.jpg',
      'https://www.journeyera.com/wp-content/uploads/2018/04/calatrava-island-hopping-tablas-0023.jpg',
      'https://www.journeyera.com/wp-content/uploads/2018/04/calatrava-island-hopping-tablas-0029.jpg',
      'https://www.journeyera.com/wp-content/uploads/2018/04/calatrava-island-hopping-tablas-0038.jpg',
      'https://travelphotosph.wordpress.com/wp-content/uploads/2016/09/romblon-tablas-island-2.jpeg?w=768'
    ],
    highlights: ['Hidden Lake', 'Limestone Cliffs'], lat: 12.6000, lng: 122.0667,
    socials: { facebook: 'https://www.facebook.com/calatravatourismcouncil', website: 'https://calatravaromblon.gov.ph/destinations.html' },
    reviews: [{ user: 'Sarah J.', stars: 5, comment: 'Reminds me of Palawan or El Nido!' }]
  }
];

const STORE_KEY = 'ecotour-v2';
const ISLAND_OPTIONS = ['All','Tablas','Romblon','Sibuyan','Carabao'];
const INTEREST_OPTIONS = ['balanced','beach','adventure','nature','culture'];
const KNOWN_ISLANDS = {
  bonbon:'Romblon',binucot:'Tablas',footprints:'Tablas',g2:'Sibuyan',
  looc:'Tablas',carabao:'Carabao',aglicay:'Tablas',catingas:'Sibuyan',
  tiamban:'Romblon',mablaran:'Tablas',tinagongdagat:'Tablas'
};
const VISIT_TIPS = {
  bonbon:'Check the tide before walking onto the sandbar. Arrange transport from Romblon town.',
  binucot:'Travel to Ferrol on Tablas and ask the resort for the current access route.',
  footprints:'Head toward San Andres, Tablas; confirm the property entrance with its operator.',
  g2:'Ask local tourism staff about permits, guide requirements, and trail conditions.',
  looc:'Ask Looc tourism staff about access to the sanctuary and boat arrangements.',
  carabao:'Confirm boat transfers and weather conditions before traveling to Carabao Island.',
  aglicay:'Travel to Alcantara on Tablas and check current resort access rules.',
  catingas:'Check local river and weather conditions before swimming.',
  tiamban:'Arrange local transport from Romblon town and check site rules.',
  mablaran:'Check waterfall trail conditions with San Andres tourism staff.',
  tinagongdagat:'Contact the Calatrava Tourism Council for the current boat and access arrangements.'
};
function islandForSpot(spot) {
  if (!spot) return 'Other';
  if (ISLAND_OPTIONS.includes(spot.island) && spot.island !== 'All') return spot.island;
  if (Object.prototype.hasOwnProperty.call(KNOWN_ISLANDS, spot.id)) return KNOWN_ISLANDS[spot.id];
  const loc = String(spot.location || '').toLowerCase();
  if (/sibuyan/.test(loc)) return 'Sibuyan';
  if (/tablas|ferrol|looc|alcantara|calatrava|odiongan/.test(loc)) return 'Tablas';
  if (/carabao island|hambil/.test(loc)) return 'Carabao';
  if (/romblon town|romblon island/.test(loc)) return 'Romblon';
  return 'Other';
}
function offlineSnapshot(spot) {
  return {
    id:String(spot.id), name:String(spot.name||''), location:String(spot.location||''),
    category:String(spot.category||'Beaches'), description:String(spot.description||''),
    price:String(spot.price||'Confirm locally'), rawPrice:Number(spot.rawPrice)||0,
    rating:Number(spot.rating)||0, island:islandForSpot(spot), image:String(spot.image||''),
    gallery:Array.isArray(spot.gallery)?spot.gallery.slice(0,5):[],
    highlights:Array.isArray(spot.highlights)?spot.highlights.slice(0,12):[],
    lat:spot.lat==null?null:Number(spot.lat), lng:spot.lng==null?null:Number(spot.lng),
    socials:spot.socials&&typeof spot.socials==='object'?{...spot.socials}:{},
    visitorInfo:spot.visitorInfo&&typeof spot.visitorInfo==='object'?{...spot.visitorInfo}:{},
    reviews:[]
  };
}
function cacheSavedGuides() {
  const stored={...(state.offlineGuides||{})};
  let changed=false;
  state.favorites.forEach(id=>{
    const live=romblonSpots.find(s=>s.id===id);
    if(!live)return;
    const snap=offlineSnapshot(live);
    if(JSON.stringify(stored[id])!==JSON.stringify(snap)){stored[id]=snap;changed=true;}
  });
  Object.keys(stored).forEach(id=>{if(!state.favorites.includes(id)){delete stored[id];changed=true;}});
  if(changed) state.offlineGuides=stored;
  return changed;
}
function allSavedSpots(){
  return state.favorites.map(id=>romblonSpots.find(s=>s.id===id)||(state.offlineGuides||{})[id]).filter(Boolean);
}

const TAB_SCREENS = { home: 'screen-home', saved: 'screen-saved', guide: 'screen-guide', map: 'screen-map', profile: 'screen-profile' };
const NAV_HIDDEN = ['screen-welcome', 'screen-login', 'screen-signup', 'screen-details'];
const FALLBACK_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#CBD5E1"/><text x="50%" y="50%" font-family="sans-serif" font-size="28" fill="#64748B" text-anchor="middle" dominant-baseline="middle">Image unavailable</text></svg>');

const defaultState = () => ({
  user: null,
  guest: false,
  favorites: [],
  localReviews: {},
  savedItineraries: [],
  offlineGuides: {},
  preferences: { island:'All', interest:'balanced', travelTips:true },
  theme: 'light'
});

let state = loadState();
let activeCategory = 'All';
let activeIsland = state.preferences.island;
let searchQuery = '';
let sortMode = 'featured';
let currentSpot = null;
let currentGalleryIndex = 0;
let navStack = [];
let currentScreen = 'screen-welcome';
let returnTo = null;
let leafletMap = null;
let mapMarkersGroup = [];
let slideIndex = 0;
let carouselTimer = null;
let carouselBound = false;
let reviewRating = 5;
let remoteLoaded = false;
let searchTimer = null;
let currentGeneratedPlan = null;
let selectedExperienceId = null;
let activeExperienceFilter = 'All';

// Sample marketplace listings. Replace these with verified local operator listings before launch.
const localExperiences = [
  { id:'exp-bonbon', title:'Bonbon Beach & Sandbar Visit', placeId:'bonbon', area:'Romblon Town', type:'Water', duration:'2–3 hours', price:150, unit:'person', icon:'🏖️', description:'A relaxed beach visit with time for swimming and the sandbar at suitable tide conditions.' },
  { id:'exp-looc', title:'Looc Marine Sanctuary Snorkeling', placeId:'looc', area:'Looc, Tablas', type:'Water', duration:'2 hours', price:250, unit:'person', icon:'🤿', description:'Explore the marine sanctuary and learn why reef-friendly visitor behavior matters.' },
  { id:'exp-carabao', title:'Carabao Island Coastal Day', placeId:'carabao', area:'San Jose', type:'Water', duration:'Half day', price:450, unit:'person', icon:'🛶', description:'A sample island day featuring coastal viewpoints and time by the water.' },
  { id:'exp-g2', title:'Guiting-Guiting Nature Experience', placeId:'g2', area:'Sibuyan Island', type:'Adventure', duration:'Half day intro', price:500, unit:'person', icon:'🥾', description:'A sample guided nature outing. Full summit climbs require separate permits and accredited guides.' },
  { id:'exp-catingas', title:'Catingas River Nature Stop', placeId:'catingas', area:'San Fernando, Sibuyan', type:'Nature', duration:'1–2 hours', price:100, unit:'person', icon:'🌿', description:'Enjoy the river landscape and follow local safety and conservation guidance.' },
  { id:'exp-mablaran', title:'Mablaran Falls Visit', placeId:'mablaran', area:'San Andres, Tablas', type:'Nature', duration:'2 hours', price:120, unit:'person', icon:'💧', description:'A sample waterfall visit with a reminder to leave no waste and respect trail conditions.' }
];

// Pilot-only sample values, not independently verified environmental certifications.
const ecoProfiles = {
  bonbon:{waste:3,nature:4,community:3,resources:3}, binucot:{waste:3,nature:4,community:4,resources:3},
  footprints:{waste:3,nature:3,community:4,resources:3}, g2:{waste:4,nature:5,community:4,resources:3},
  looc:{waste:4,nature:5,community:4,resources:3}, carabao:{waste:3,nature:4,community:3,resources:3},
  aglicay:{waste:3,nature:4,community:3,resources:3}, catingas:{waste:4,nature:4,community:4,resources:3},
  tiamban:{waste:3,nature:3,community:3,resources:3}, mablaran:{waste:4,nature:4,community:4,resources:3},
  tinagongdagat:{waste:3,nature:4,community:3,resources:3}
};

function sanitizeState(raw) {
  const base = defaultState();
  const src = raw && typeof raw === 'object' ? raw : {};
  return {
    ...base,
    user: src.user && typeof src.user === 'object' ? src.user : null,
    guest: Boolean(src.guest),
    favorites: Array.isArray(src.favorites) ? src.favorites : [],
    localReviews: src.localReviews && typeof src.localReviews === 'object' ? src.localReviews : {},
    savedItineraries: Array.isArray(src.savedItineraries) ? src.savedItineraries : [],
    offlineGuides: src.offlineGuides && typeof src.offlineGuides === 'object' && !Array.isArray(src.offlineGuides) ? src.offlineGuides : {},
    preferences: {
      island: ISLAND_OPTIONS.includes(src.preferences?.island) ? src.preferences.island : 'All',
      interest: INTEREST_OPTIONS.includes(src.preferences?.interest) ? src.preferences.interest : 'balanced',
      travelTips: src.preferences?.travelTips !== false
    },
    theme: src.theme === 'dark' ? 'dark' : 'light'
  };
}

function loadState() {
  try { return sanitizeState(JSON.parse(localStorage.getItem(STORE_KEY) || '{}')); }
  catch (e) { return defaultState(); }
}

function saveState() {
  state = sanitizeState(state);
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  const uid = state.user && state.user.uid;
  if (uid && window.firebaseAuthApi) {
    window.firebaseAuthApi.saveUserState(uid, state).catch((error) => console.warn('Cloud sync failed:', error));
  }
}

const $ = (id) => document.getElementById(id);

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function safeUrl(url) {
  return /^(https:\/\/|data:image\/)/i.test(String(url || '')) ? url : FALLBACK_IMG;
}

function peso(amount) {
  return '₱' + Number(amount).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function toISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function fromISO(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function addDays(iso, n) {
  const d = fromISO(iso);
  d.setDate(d.getDate() + n);
  return toISO(d);
}

function diffDays(a, b) {
  return Math.round((fromISO(b) - fromISO(a)) / 86400000);
}

function fmtDate(iso) {
  return fromISO(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function fmtShort(iso) {
  return fromISO(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function today() {
  return toISO(new Date());
}

function toast(message, type = '') {
  const wrap = $('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = message;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function setError(id, message) {
  const input = $(id);
  const err = document.querySelector(`[data-error-for="${id}"]`);
  if (err) err.textContent = message || '';
  if (input) input.classList.toggle('invalid', Boolean(message));
}

function clearErrors(container) {
  container.querySelectorAll('.field-error').forEach((e) => { e.textContent = ''; });
  container.querySelectorAll('.invalid').forEach((e) => e.classList.remove('invalid'));
}

function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function validPhone(v) {
  return /^\+?[0-9\s-]{7,16}$/.test(v);
}

function isSignedIn() {
  return Boolean(state.user);
}

function ratingFor(spot) {
  const all = spotReviews(spot);
  if (!all.length) return spot.rating;
  const avg = all.reduce((s, r) => s + r.stars, 0) / all.length;
  return Math.round(((avg * all.length + spot.rating * 3) / (all.length + 3)) * 10) / 10;
}

function spotReviews(spot) {
  const mine = state.localReviews[spot.id] || [];
  const seen = new Set();
  return [...(spot.reviews || []), ...mine].filter((r) => {
    const key = `${r.user}|${r.stars}|${r.comment}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function mergeRemote(data) {
  if (!data || typeof data !== 'object') return;
  Object.keys(data).forEach((key) => {
    const s = data[key];
    if (!s || typeof s !== 'object') return;
    const remoteReviews = s.reviews ? Object.values(s.reviews).filter((r) => r && r.comment) : [];
    const existing = romblonSpots.find((x) => x.id === key);
    if (existing) {
      if (s.socials && typeof s.socials === 'object') existing.socials = { ...(existing.socials || {}), ...s.socials };
      if (s.visitorInfo && typeof s.visitorInfo === 'object') existing.visitorInfo = { ...(existing.visitorInfo || {}), ...s.visitorInfo };
      const known = new Set((existing.reviews || []).map((r) => `${r.user}|${r.stars}|${r.comment}`));
      remoteReviews.forEach((r) => {
        const k = `${r.user}|${r.stars}|${r.comment}`;
        if (!known.has(k)) { existing.reviews.push({ user: String(r.user || 'Guest'), stars: Math.min(5, Math.max(1, Number(r.stars) || 5)), comment: String(r.comment) }); known.add(k); }
      });
      return;
    }
    if (!s.name || !s.location || !s.image) return;
    romblonSpots.push({
      id: key,
      name: String(s.name),
      location: String(s.location),
      category: ['Resorts', 'Beaches', 'Mountains'].includes(s.category) ? s.category : 'Beaches',
      description: String(s.description || ''),
      price: String(s.price || 'See details'),
      rawPrice: Number(s.rawPrice) >= 0 ? Number(s.rawPrice) : 0,
      rating: Number(s.rating) || 4.5,
      image: s.image,
      gallery: Array.isArray(s.gallery) && s.gallery.length ? s.gallery : [s.image],
      highlights: Array.isArray(s.highlights) ? s.highlights : [],
      lat: Number(s.lat) || null,
      lng: Number(s.lng) || null,
      reviews: remoteReviews,
      socials: s.socials && typeof s.socials === 'object' ? s.socials : {},
      island: ISLAND_OPTIONS.includes(s.island) && s.island !== 'All' ? s.island : '',
      visitorInfo: s.visitorInfo && typeof s.visitorInfo === 'object' ? s.visitorInfo : {}
    });
  });
}

window.onFirebaseDataLoaded = function (data) {
  mergeRemote(data);
  remoteLoaded = true;
  const badge = $('db-status-badge');
  badge.textContent = 'Places Loaded';
  badge.classList.add('online');
  refreshAll();
  if (currentScreen === 'screen-details' && currentSpot) renderReviews();
};

window.onFirebaseError = function () {
  if (remoteLoaded) return;
  const badge = $('db-status-badge');
  badge.textContent = 'Offline';
  badge.classList.remove('online');
};


window.onFirebaseAuthChanged = async function (user) {
  if (!user) {
    if (state.user && !state.user.uid) {
      state.user = null;
      state.guest = false;
      activeIsland = state.preferences.island;
      saveState();
      renderUser();
      refreshAll();
    }
    return;
  }
  try {
    const cloudState = await window.firebaseAuthApi.loadUserState(user.uid);
    if (!state.user || !state.user.uid || state.user.uid === user.uid) {
      state = sanitizeState({ ...(cloudState || state), user: {
        name: user.displayName || cloudState?.user?.name || user.email.split('@')[0],
        email: user.email, uid: user.uid
      }});
      state.guest = false;
      saveState();
      renderUser();
      refreshAll();
    }
  } catch (error) { console.warn('Could not restore cloud profile:', error); }
};

function applyTheme() {
  const dark = state.theme === 'dark';
  document.body.classList.toggle('dark-mode', dark);
  document.body.classList.toggle('light-mode', !dark);
  $('theme-btn').textContent = dark ? '☀️' : '🌙';
  $('settings-theme-icon').textContent = dark ? '☀️' : '🌙';
  $('theme-status-text').textContent = dark ? 'On' : 'Off';
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  saveState();
  applyTheme();
}

function firstName() {
  if (state.user && state.user.name) return state.user.name.split(' ')[0];
  return 'Traveler';
}

function renderUser() {
  $('home-user-name').textContent = firstName();
  const signedIn = isSignedIn();
  $('profile-name').textContent = signedIn ? state.user.name : 'Traveler';
  $('profile-email').textContent = signedIn ? state.user.email : 'Not signed in';
  $('member-badge').style.display = signedIn ? 'inline-block' : 'none';
  $('member-badge').textContent = 'Romblon Explorer';
  $('profile-edit-btn').style.display = signedIn ? '' : 'none';
  const btn = $('auth-action-btn');
  btn.textContent = signedIn ? 'Sign Out' : 'Sign In or Create Account';
  btn.style.color = signedIn ? '#DC2626' : 'var(--primary-brand)';
  btn.dataset.action = signedIn ? 'sign-out' : 'go-welcome';
}

function skipAuth() {
  state.user = null;
  state.guest = true;
  saveState();
  renderUser();
  switchTab('home');
}

async function handleSignup(e) {
  e.preventDefault();
  const form = $('signup-form');
  clearErrors(form);
  const name = $('reg-name').value.trim();
  const email = $('reg-email').value.trim().toLowerCase();
  const pass = $('reg-pass').value;
  if (name.length < 2) { setError('reg-name', 'Enter your full name.'); return; }
  if (!validEmail(email)) { setError('reg-email', 'Enter a valid email address.'); return; }
  if (pass.length < 8) { setError('reg-pass', 'Use at least 8 characters.'); return; }
  if (!window.firebaseAuthApi) { toast('Authentication is unavailable. Check your connection.', 'error'); return; }
  try {
    const user = await window.firebaseAuthApi.createAccount(name, email, pass);
    completeSignIn({ name: user.displayName || name, email: user.email, uid: user.uid });
    form.reset();
  } catch (error) {
    const messages = { 'auth/email-already-in-use':'An account with this email already exists.', 'auth/weak-password':'Use a stronger password.', 'auth/invalid-email':'Enter a valid email address.' };
    setError('reg-email', messages[error.code] || 'Could not create your account. Please try again.');
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const form = $('login-form');
  clearErrors(form);
  const email = $('login-email').value.trim().toLowerCase();
  const pass = $('login-pass').value;
  if (!validEmail(email)) { setError('login-email', 'Enter a valid email address.'); return; }
  if (!pass) { setError('login-pass', 'Enter your password.'); return; }
  if (!window.firebaseAuthApi) { toast('Authentication is unavailable. Check your connection.', 'error'); return; }
  try {
    const user = await window.firebaseAuthApi.signIn(email, pass);
    completeSignIn({ name: user.displayName || email.split('@')[0], email: user.email, uid: user.uid });
    form.reset();
  } catch (error) {
    setError('login-pass', error.code === 'auth/too-many-requests' ? 'Too many attempts. Try again later.' : 'Incorrect email or password.');
  }
}

function completeSignIn(user) {
  state.user = user;
  state.guest = false;
  saveState();
  renderUser();
  toast(`Welcome, ${firstName()}!`, 'success');
  if (returnTo) {
    const target = returnTo;
    returnTo = null;
    navStack = [];
    refreshAll();
    navigateTo(target.screen, { push: false });
    if (target.screen === 'screen-details') navStack = ['screen-home'];
    return;
  }
  switchTab('home');
}

function forgotPassword() {
  const email = $('login-email').value.trim().toLowerCase();
  if (!validEmail(email)) { setError('login-email', 'Enter your email first.'); return; }
  if (!window.firebaseAuthApi) { toast('Authentication is unavailable. Check your connection.', 'error'); return; }
  window.firebaseAuthApi.resetPassword(email).then(() => toast('Password reset email sent.', 'success')).catch(() => toast('Could not send the reset email. Check the address and try again.', 'error'));
}

function signOut() {
  if (!confirm('Are you sure you want to sign out?')) return;
  if (window.firebaseAuthApi) window.firebaseAuthApi.signOut().catch(() => {});
  state.user = null;
  state.guest = false;
  saveState();
  renderUser();
  refreshAll();
  navStack = [];
  navigateTo('screen-welcome', { push: false });
}

function clearData() {
  if (!confirm('This removes your saved places, itineraries, and local account details on this device. Continue?')) return;
  try { localStorage.removeItem(STORE_KEY); } catch (e) {}
  state = defaultState();
  applyTheme();
  renderUser();
  refreshAll();
  navStack = [];
  navigateTo('screen-welcome', { push: false });
  toast('Saved data cleared.');
}


function openAccountPage(screenId) {
  if (screenId === 'screen-travel-preferences') renderPreferences();
  navigateTo(screenId);
}
function renderPreferences() {
  $('pref-island').value=state.preferences.island;
  $('pref-interest').value=state.preferences.interest;
  $('pref-travelTips').checked=state.preferences.travelTips!==false;
}
function saveTravelPreferences() {
  const island=$('pref-island').value,interest=$('pref-interest').value;
  state.preferences={
    island:ISLAND_OPTIONS.includes(island)?island:'All',
    interest:INTEREST_OPTIONS.includes(interest)?interest:'balanced',
    travelTips:$('pref-travelTips').checked
  };
  saveState();
  setIsland(state.preferences.island);
  toast('Travel preferences saved!', 'success');
  switchTab('profile');
}

function openEditProfile() {
  if (!isSignedIn()) return;
  clearErrors($('edit-profile-modal'));
  $('ep-name').value = state.user.name;
  $('ep-email').value = state.user.email;
  openModal('edit-profile-modal');
}

async function saveProfile() {
  clearErrors($('edit-profile-modal'));
  const name = $('ep-name').value.trim();
  const email = $('ep-email').value.trim().toLowerCase();
  if (name.length < 2) { setError('ep-name', 'Enter your name.'); return; }
  if (!validEmail(email)) { setError('ep-email', 'Enter a valid email address.'); return; }
  if (!window.firebaseAuthApi || !state.user?.uid) { toast('Sign in again to update your profile.', 'error'); return; }
  try {
    await window.firebaseAuthApi.updateUserProfile(name, email);
    state.user = { ...state.user, name, email };
    saveState();
    renderUser();
    closeModal('edit-profile-modal');
    toast('Profile updated.', 'success');
  } catch (error) {
    setError('ep-email', error.code === 'auth/requires-recent-login'
      ? 'Please sign out and sign in again before changing your email.'
      : 'Could not update your profile. Please try again.');
  }
}

function openModal(id) {
  $(id).classList.remove('hidden');
  const first = $(id).querySelector('input, textarea, button');
  if (first) setTimeout(() => first.focus(), 50);
}

function closeModal(id) {
  $(id).classList.add('hidden');
}

function closeTopModal() {
  const open = Array.from(document.querySelectorAll('.modal-overlay:not(.hidden)'));
  if (open.length) closeModal(open[open.length - 1].id);
}

function matchesSearch(spot) {
  if (!searchQuery) return true;
  const hay = [spot.name, spot.location, spot.category, ...(spot.highlights || [])].join(' ').toLowerCase();
  return searchQuery.split(/\s+/).every((word) => hay.includes(word));
}

function filteredSpots() {
  const list = romblonSpots.filter((s) => (activeIsland === 'All' || islandForSpot(s) === activeIsland) && (activeCategory === 'All' || s.category === activeCategory) && matchesSearch(s));
  if (sortMode === 'rating') list.sort((a, b) => ratingFor(b) - ratingFor(a));
  return list;
}

function handleSearch(value, source) {
  searchQuery = value.trim().toLowerCase();
  if (source !== 'sw-location') $('sw-location').value = value;
  if (source !== 'map-search') $('map-search').value = value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    renderDestinations();
    renderCarousel();
    updateMarkers();
  }, 120);
}

function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll('#category-tags .tag-chip').forEach((c) => c.classList.toggle('active', c.dataset.category === category));
  renderDestinations();
  renderCarousel();
  updateMarkers(true);
}
function setIsland(island) {
  activeIsland=ISLAND_OPTIONS.includes(island)?island:'All';
  document.querySelectorAll('#island-filters .island-chip').forEach(btn=>{
    const active=btn.dataset.island===activeIsland;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',String(active));
  });
  renderDestinations();
  renderCarousel();
  updateMarkers(true);
}

function cardHtml(s, withDesc) {
  const fav = state.favorites.includes(s.id);
  return `
    <div class="spot-card" role="button" tabindex="0" data-action="open-spot" data-id="${esc(s.id)}">
      <img src="${esc(safeUrl(s.image))}" alt="${esc(s.name)}" loading="lazy" data-fallback />
      <div class="spot-card-info">
        <h5>${esc(s.name)}</h5>
        <p class="spot-location">📍 ${esc(s.location)}</p>
        <span class="spot-island-label">🏝 ${islandForSpot(s) === 'Other' ? 'Romblon province' : esc(islandForSpot(s))}</span>
        ${withDesc ? `<p class="spot-desc">${esc(s.description)}</p>` : ''}
        <div class="spot-meta"><span class="spot-rating">★ ${ratingFor(s)}</span><span class="spot-category">${esc(s.category)}</span></div>
      </div>
      <button class="fav-btn ${fav ? 'active' : ''}" aria-label="${fav ? 'Remove from saved' : 'Save'}" aria-pressed="${fav}" data-action="toggle-favorite" data-id="${esc(s.id)}">
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>`;
}

function renderDestinations() {
  const container = $('destinations-list');
  const list = filteredSpots();
  $('results-count').textContent = `${list.length} place${list.length === 1 ? '' : 's'}`;
  if (!list.length) {
    container.innerHTML = `<div class="empty-state"><span class="emoji">🔍</span>No results found. Try a different search or category.</div>`;
    return;
  }
  container.innerHTML = list.map((s) => cardHtml(s, true)).join('');
}

function renderSaved() {
  const container = $('saved-items-list');
  const filter = $('saved-search').value.trim().toLowerCase();
  const saved = allSavedSpots().filter(s => (s.name + ' ' + s.location).toLowerCase().includes(filter));
  if (!saved.length) {
    container.innerHTML = `<div class="empty-state"><span class="emoji">💙</span>${state.favorites.length ? 'No saved places match your filter.' : 'Nothing saved yet. Tap the heart on any place to keep it here.'}<br><button class="btn btn-primary" data-tab="home">Browse places</button></div>`;
    return;
  }
  container.innerHTML = saved.map((s) => cardHtml(s, false)).join('');
}

function toggleFavorite(id) {
  const i = state.favorites.indexOf(id);
  if (i >= 0) state.favorites.splice(i, 1); else state.favorites.push(id);
  cacheSavedGuides();
  saveState();
  renderDestinations();
  renderSaved();
  if (currentSpot && currentSpot.id === id) updateFavoriteButton();
}

function updateFavoriteButton() {
  const b = $('detail-favorite-btn');
  const on = state.favorites.includes(currentSpot.id);
  b.classList.toggle('active', on);
  b.setAttribute('aria-pressed', String(on));
}

function mapPopup(s) {
  return `
    <div class="map-popup-card" data-action="open-spot" data-id="${esc(s.id)}">
      <img src="${esc(safeUrl(s.image))}" class="map-popup-img" alt="" />
      <div class="map-popup-info">
        <strong>${esc(s.name)}</strong>
        <p class="map-popup-loc">📍 ${esc(s.location)}</p>
        <button class="map-popup-btn" type="button">View Details</button><a class="map-directions-link" href="https://www.google.com/maps/dir/?api=1&destination=${Number(s.lat)},${Number(s.lng)}" target="_blank" rel="noopener">Get directions ↗</a>
      </div>
    </div>`;
}

function ensureMap() {
  const container = $('map-container');
  if (typeof maplibregl === 'undefined') {
    if (!container.querySelector('.map-fallback')) container.innerHTML = '<div class="map-fallback">Map library could not load. Check your internet connection. <a href="https://www.openstreetmap.org/#map=9/12.45/122.25" target="_blank" rel="noopener">Open OpenStreetMap</a></div>';
    return;
  }
  if (!leafletMap) {
    container.innerHTML = '';
    leafletMap = new maplibregl.Map({
      container: 'map-container',
      style: 'https://tiles.openfreemap.org/styles/liberty',
      center: [122.25, 12.45],
      zoom: 9,
      attributionControl: true
    });
    leafletMap.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'bottom-right');
    leafletMap.on('load', () => {
      const notice = $('map-tile-notice');
      if (notice) notice.classList.add('hidden');
      updateMarkers(true);
    });
    leafletMap.on('error', () => {
      const notice = $('map-tile-notice');
      if (notice) notice.classList.remove('hidden');
    });
  }
  setTimeout(() => { if (leafletMap) { leafletMap.resize(); updateMarkers(true); } }, 150);
}

function updateMarkers(fit) {
  if (!leafletMap || typeof maplibregl === 'undefined' || !leafletMap.loaded()) return;
  (mapMarkersGroup || []).forEach((marker) => marker.remove());
  mapMarkersGroup = [];
  const bounds = new maplibregl.LngLatBounds();
  let count = 0;
  filteredSpots().forEach((spot) => {
    if (typeof spot.lat !== 'number' || typeof spot.lng !== 'number') return;
    const popup = new maplibregl.Popup({ offset: 24, maxWidth: '260px' }).setHTML(mapPopup(spot));
    const marker = new maplibregl.Marker({ color: '#B85C38' })
      .setLngLat([spot.lng, spot.lat])
      .setPopup(popup)
      .addTo(leafletMap);
    mapMarkersGroup.push(marker);
    bounds.extend([spot.lng, spot.lat]);
    count += 1;
  });
  if (fit && count > 0) leafletMap.fitBounds(bounds, { padding: 50, maxZoom: 11, duration: 500 });
}

// Per-place Facebook/Instagram pages may be set in the Firebase destinations/{id}/socials object.
// Only the Tinagong Dagat tourism-office link is prefilled from an official municipal site.
function checkedSocialUrl(value, hosts) {
  try {
    const url = new URL(String(value || ''));
    if (url.protocol !== 'https:') return '';
    return hosts.some(host => url.hostname === host || url.hostname.endsWith('.' + host)) ? url.href : '';
  } catch (e) { return ''; }
}

function socialLinksFor(spot) {
  const socials = spot.socials || {};
  const facebook = checkedSocialUrl(socials.facebook, ['facebook.com', 'fb.com']);
  const instagram = checkedSocialUrl(socials.instagram, ['instagram.com']);
  const website = checkedSocialUrl(socials.website, ['calatravaromblon.gov.ph','cms-romblon-lgu.e.gov.ph']);
  const query = encodeURIComponent(spot.name + ' ' + spot.location + ' Romblon');
  const tag = (spot.name + 'Romblon').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g, '');
  return {
    facebook, instagram, website,
    facebookSearch: 'https://www.facebook.com/search/top/?q=' + query,
    instagramTag: 'https://www.instagram.com/explore/tags/' + encodeURIComponent(tag || 'romblon') + '/'
  };
}

function renderSpotSocial(spot) {
  const links = socialLinksFor(spot);
  const parts = [];
  if (links.facebook) parts.push('<a class="place-social-link" target="_blank" rel="noopener noreferrer" href="' + esc(links.facebook) + '">ⓕ Local tourism Facebook</a>');
  if (links.instagram) parts.push('<a class="place-social-link" target="_blank" rel="noopener noreferrer" href="' + esc(links.instagram) + '">◎ Instagram page</a>');
  if (links.website) parts.push('<a class="place-social-link" target="_blank" rel="noopener noreferrer" href="' + esc(links.website) + '">🌐 Official tourism info</a>');
  parts.push('<a class="place-social-link place-social-search" target="_blank" rel="noopener noreferrer" href="' + esc(links.facebookSearch) + '">ⓕ Search Facebook photos</a>');
  if (!links.instagram) parts.push('<a class="place-social-link place-social-search" target="_blank" rel="noopener noreferrer" href="' + esc(links.instagramTag) + '">◎ Explore Instagram tags</a>');
  $('detail-social-links').innerHTML = parts.join('');
  $('detail-social-footer').href = links.facebook || links.website || links.facebookSearch;
  $('detail-social-footer').textContent = links.facebook ? 'ⓕ Ask / View Photos' : links.website ? '🌐 Official guide' : 'ⓕ Find Photos';
}

function setDetailsDirections(spot) {
  const hasCoords = Number.isFinite(Number(spot.lat)) && Number.isFinite(Number(spot.lng)) && spot.lat != null && spot.lng != null;
  $('detail-directions-link').href = hasCoords
    ? 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(spot.lat + ',' + spot.lng)
    : 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(spot.name + ' ' + spot.location + ' Romblon');
}

function renderVisitInfo(spot) {
  const info=spot.visitorInfo&&typeof spot.visitorInfo==='object'?spot.visitorInfo:{};
  const fee=spot.price && spot.price !== 'See details'?spot.price:'Ask locally';
  const hours=typeof info.hours==='string'&&info.hours.trim()?info.hours.trim():'Confirm with local tourism staff';
  const access=typeof info.access==='string'&&info.access.trim()?info.access.trim():(VISIT_TIPS[spot.id]||'Confirm transport and site access with local tourism staff.');
  const cell=(icon,label,value)=>'<div class="visit-info-item"><span class="visit-info-icon">'+icon+'</span><div><small>'+esc(label)+'</small><strong>'+esc(value)+'</strong></div></div>';
  const island=islandForSpot(spot);
  $('detail-visit-info').innerHTML=
    cell('🏝️','Island',island==='Other'?'Romblon Province':island+' Island')+
    cell('🎟️','Listed cost · unverified',fee)+
    cell('🕒','Hours · check locally',hours)+
    '<div class="visit-access"><b>🧭 Getting there</b><p>'+esc(access)+'</p></div>'+
    (state.preferences.travelTips!==false?'<div class="visit-travel-tip"><b>🌱 Travel tip</b><p>Respect the community, leave no waste, and check weather and site rules.</p></div>':'')+
    '<p class="visit-disclaimer">Prototype travel details; fees, routes and opening times may change. Confirm directly with local operators.</p>';
}

function openSpot(id) {
  const s = romblonSpots.find((x) => x.id === id) || (state.offlineGuides || {})[id];
  if (!s) return;
  currentSpot = s;
  closeModalsAll();
  currentGalleryIndex = 0;
  $('detail-main-img').src = safeUrl((s.gallery && s.gallery[0]) || s.image);
  $('detail-main-img').alt = s.name;
  $('detail-title').textContent = s.name;
  $('detail-location').textContent = s.location;
  $('detail-rating').textContent = ratingFor(s);
  $('detail-desc').textContent = s.description;
  renderDetailEcoScore(s);
  $('detail-tags').innerHTML = `<span class="tag">${esc(s.category)}</span>${ratingFor(s) >= 4.7 ? '<span class="tag">Top Rated</span>' : ''}`;
  renderSpotGallery(s);
  $('detail-highlights').innerHTML = (s.highlights || []).map((h) => `<span class="tag">✓ ${esc(h)}</span>`).join('') || '<span class="text-muted">No highlights listed.</span>';
  renderReviews();
  updateFavoriteButton();
  renderSpotSocial(s);
  renderVisitInfo(s);
  setDetailsDirections(s);
  navigateTo('screen-details');
  $('screen-details').scrollTop = 0;
}

function renderSpotGallery(spot) {
  const images = Array.isArray(spot.gallery) && spot.gallery.length ? spot.gallery : [spot.image];
  currentGalleryIndex = Math.min(currentGalleryIndex, images.length - 1);
  const hero = $('detail-main-img');
  const nextSrc = safeUrl(images[currentGalleryIndex]);
  if (hero.getAttribute('src') !== nextSrc) {
    hero.classList.add('gallery-changing');
    hero.addEventListener('load', () => hero.classList.remove('gallery-changing'), { once: true });
    hero.src = nextSrc;
    if (hero.complete) hero.classList.remove('gallery-changing');
  }
  hero.alt = `${spot.name} photo ${currentGalleryIndex + 1}`;
  const thumbs = $('gallery-thumbs');
  if (thumbs.children.length !== images.length || thumbs.dataset.spotId !== spot.id) {
    thumbs.innerHTML = images.map((url, i) => `<img src="${esc(safeUrl(url))}" alt="Photo ${i + 1}" class="thumb-img" data-action="set-image" data-index="${i}" data-fallback />`).join('');
    thumbs.dataset.spotId = spot.id;
  }
  thumbs.querySelectorAll('.thumb-img').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === currentGalleryIndex);
    thumb.setAttribute('aria-current', i === currentGalleryIndex ? 'true' : 'false');
  });
  const activeThumb = thumbs.children[currentGalleryIndex];
  if (activeThumb) activeThumb.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  document.querySelectorAll('.gallery-arrow').forEach((button) => { button.hidden = images.length < 2; });
}
function changeSpotGalleryImage(step) {
  if (!currentSpot) return;
  const images = Array.isArray(currentSpot.gallery) && currentSpot.gallery.length ? currentSpot.gallery : [currentSpot.image];
  currentGalleryIndex = (currentGalleryIndex + step + images.length) % images.length;
  renderSpotGallery(currentSpot);
}

function renderReviews() {
  const reviews = spotReviews(currentSpot);
  $('review-count').textContent = `${reviews.length} review${reviews.length === 1 ? '' : 's'}`;
  $('detail-rating').textContent = ratingFor(currentSpot);
  $('reviews-container').innerHTML = reviews.length
    ? reviews.slice().reverse().map((r) => `
      <div class="review-card">
        <div class="review-header"><span class="review-user">${esc(r.user)}</span><span class="review-stars" aria-label="${r.stars} out of 5">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span></div>
        <p class="review-text">${esc(r.comment)}</p>
      </div>`).join('')
    : '<p class="text-muted">No reviews yet. Be the first to share your experience.</p>';
}

function renderStarPicker() {
  $('star-picker').innerHTML = [1, 2, 3, 4, 5].map((n) => `<button type="button" class="${n <= reviewRating ? 'on' : ''}" data-action="pick-star" data-value="${n}" aria-label="${n} star${n > 1 ? 's' : ''}">★</button>`).join('');
}

function openReviewModal() {
  if (!isSignedIn()) {
    returnTo = { screen: 'screen-details' };
    toast('Sign in to write a review.');
    navigateTo('screen-login');
    return;
  }
  reviewRating = 5;
  renderStarPicker();
  $('new-review-comment').value = '';
  $('review-error').textContent = '';
  openModal('review-modal');
}

function submitReview() {
  const comment = $('new-review-comment').value.trim();
  if (comment.length < 5) { $('review-error').textContent = 'Please write at least a few words.'; return; }
  const mine = state.localReviews[currentSpot.id] || [];
  if (mine.some((r) => r.email === state.user.email)) { $('review-error').textContent = 'You have already reviewed this place.'; return; }
  const review = { user: state.user.name, stars: reviewRating, comment, email: state.user.email };
  state.localReviews[currentSpot.id] = [...mine, review];
  saveState();
  if (window.firebaseDb && window.firebasePush && window.firebaseRef) {
    try {
      const target = window.firebaseRef(window.firebaseDb, `destinations/${currentSpot.id}/reviews`);
      window.firebaseSet(window.firebasePush(target), { user: review.user, stars: review.stars, comment: review.comment }).catch(() => {});
    } catch (e) {}
  }
  renderReviews();
  renderDestinations();
  closeModal('review-modal');
  toast('Thanks for your review!', 'success');
}

function openTripPlanner() {
  renderSavedItineraries();
  $('planner-interest').value=state.preferences.interest;
  $('planner-results').innerHTML = '';
  navigateTo('screen-trip-planner');
}

function interestMatches(spot, interest) {
  const text = `${spot.category} ${spot.description} ${(spot.highlights || []).join(' ')}`.toLowerCase();
  if (interest === 'beach') return /beach|island|sea|snorkel|sandbar|coast/.test(text);
  if (interest === 'adventure') return /mountain|hiking|cliff|adventure|trail/.test(text);
  if (interest === 'nature') return /nature|river|waterfall|wildlife|sanctuary|forest/.test(text);
  if (interest === 'culture') return /town|community|local|heritage|sanctuary/.test(text) || spot.location.includes('Romblon');
  return true;
}

function generateTripPlan() {
  const days = Number($('planner-days').value);
  const guests = Number($('planner-guests').value);
  const budget = Number($('planner-budget').value);
  const interest = $('planner-interest').value;
  const output = $('planner-results');
  if (!Number.isFinite(budget) || budget < 500) { toast('Enter a trip budget of at least ₱500.', 'error'); return; }
  const candidates = romblonSpots.filter(s => interestMatches(s, interest)).sort((a,b) => ratingFor(b)-ratingFor(a));
  const activityPool = localExperiences.filter(x => interest === 'balanced' || (interest === 'beach' && x.type === 'Water') || (interest === 'adventure' && x.type === 'Adventure') || (interest === 'nature' && x.type === 'Nature') || (interest === 'culture' && ['exp-looc','exp-catingas'].includes(x.id)));
  const chosen = [];
  const perDayBudget = budget / days;
  const selectedExperience = localExperiences.find(x => x.id === selectedExperienceId);
  const affordablePool = activityPool.filter(x => x.price * guests <= perDayBudget).sort((a,b)=>a.price-b.price);
  const planningPool = affordablePool.length ? affordablePool : activityPool.slice().sort((a,b)=>a.price-b.price);
  for (let d=0; d<days; d++) {
    const experience = (d === 0 && selectedExperience) ? selectedExperience : planningPool[d % Math.max(1, planningPool.length)];
    const spot = experience ? romblonSpots.find(s => s.id === experience.placeId) : candidates[d % candidates.length];
    if (spot) chosen.push({ day:d+1, spotId:spot.id, title: experience ? experience.title : spot.name, place:spot.name, area:spot.location, estimatedCost: experience ? experience.price * guests : spot.rawPrice * guests, duration:experience ? experience.duration : 'Flexible visit', experienceId:experience ? experience.id : null });
  }
  const activityTotal = chosen.reduce((sum,x)=>sum+x.estimatedCost,0);
  const buffer = Math.max(0, Math.round((budget-activityTotal)*0.25));
  const estimated = activityTotal + buffer;
  const plan = { id:'plan-'+Date.now(), days, guests, budget, interest, items:chosen, activityTotal, buffer, estimated, createdAt:new Date().toISOString() };
  currentGeneratedPlan = plan;
  output.innerHTML = `<div class="planner-result-head"><div><span class="eyebrow">YOUR STARTER ITINERARY</span><h3>${days}-day Romblon escape</h3><p>${guests} traveler${guests===1?'':'s'} · ${peso(budget)} budget</p></div><span class="planner-result-icon">🗺️</span></div>
    <div class="planner-budget-row"><div><small>Estimated activities + buffer</small><strong>${peso(estimated)}</strong></div><div><small>Remaining budget</small><strong>${peso(Math.max(0,budget-estimated))}</strong></div></div>
    ${chosen.map(x=>`<div class="itinerary-day"><span class="day-number">DAY ${x.day}</span><div><strong>${esc(x.title)}</strong><p>📍 ${esc(x.area)} · ${esc(x.duration)}</p><small>Indicative activity cost: ${peso(x.estimatedCost)}</small></div><button class="link-btn" data-action="planner-view-place" data-id="${esc(x.spotId)}">View</button></div>`).join('')}
    <div class="planner-disclaimer">${activityTotal > budget ? 'Your selected activities exceed the entered budget. Reduce the number of activities or increase the budget. ' : ''}This is a suggested sequence, not a confirmed route or booking. Transport, meals, accommodation and ferry costs are not included. Check schedules and local conditions before traveling.</div>
    <button class="btn btn-secondary btn-block" style="margin-bottom:8px;" data-action="open-plan-route">🗺️ Open suggested route in Google Maps</button>
    <button class="btn btn-primary btn-block" data-action="save-generated-trip">♡ Save this itinerary</button>`;
}

function openPlanRoute() {
  if (!currentGeneratedPlan || !currentGeneratedPlan.items.length) { toast('Generate an itinerary first.', 'error'); return; }
  const places = currentGeneratedPlan.items.map(item => romblonSpots.find(s => s.id === item.spotId)).filter(Boolean);
  const coords = places.map(s => `${s.lat},${s.lng}`);
  const url = `https://www.google.com/maps/dir/${coords.map(encodeURIComponent).join('/')}`;
  window.open(url, '_blank', 'noopener');
}

function saveGeneratedTrip() {
  if (!currentGeneratedPlan) { toast('Generate an itinerary first.', 'error'); return; }
  if (!(state.savedItineraries || []).some(p=>p.id===currentGeneratedPlan.id)) state.savedItineraries.unshift(currentGeneratedPlan);
  saveState(); renderSavedItineraries(); toast('Itinerary saved on this device.', 'success');
}

function renderSavedItineraries() {
  const host = $('saved-itineraries');
  if (!host) return;
  const list = state.savedItineraries || [];
  host.innerHTML = list.length ? `<h3 class="subsection-title">Your saved itineraries</h3>${list.map(p=>`<div class="saved-itinerary-card"><div><strong>${p.days}-day Romblon plan</strong><small>${p.guests} travelers · ${peso(p.budget)} budget · ${fmtShort((p.createdAt||'').slice(0,10) || today())}</small></div><button class="link-btn danger-link" data-action="remove-itinerary" data-id="${esc(p.id)}">Remove</button></div>`).join('')}` : '';
}

function removeItinerary(id) {
  state.savedItineraries = (state.savedItineraries || []).filter(p=>p.id!==id);
  saveState(); renderSavedItineraries(); toast('Saved itinerary removed.');
}

function openExperiences() { renderExperiences(); navigateTo('screen-experiences'); }
function renderExperiences() {
  const host = $('experiences-list');
  if (!host) return;
  document.querySelectorAll('[data-experience-filter]').forEach(b=>b.classList.toggle('active', b.dataset.experienceFilter===activeExperienceFilter));
  const list = localExperiences.filter(x=>activeExperienceFilter==='All' || x.type===activeExperienceFilter);
  host.innerHTML = list.map(x=>`<article class="experience-card"><div class="experience-icon">${x.icon}</div><div class="experience-copy"><span class="experience-type">${esc(x.type)} · ${esc(x.duration)}</span><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p><small>📍 ${esc(x.area)}</small><div class="experience-card-bottom"><strong>From ${peso(x.price)} / person</strong><span class="demo-tag">Sample listing</span></div><div class="experience-actions"><button class="btn btn-secondary" data-action="experience-view-place" data-id="${esc(x.placeId)}">Explore place</button><button class="btn btn-primary" data-action="add-experience-to-plan" data-id="${esc(x.id)}">Add to trip</button></div></div></article>`).join('');
}

function addExperienceToPlan(id) {
  const exp = localExperiences.find(x=>x.id===id);
  if (!exp) return;
  selectedExperienceId = id;
  $('planner-interest').value = exp.type==='Water' ? 'beach' : exp.type==='Adventure' ? 'adventure' : 'nature';
  openTripPlanner();
  toast('Choose your budget and generate a trip including similar activities.');
}

function ecoScoreFor(spot) {
  const v = ecoProfiles[spot.id] || {waste:3,nature:3,community:3,resources:3};
  const score = Math.round((v.waste+v.nature+v.community+v.resources)/20*100);
  return { ...v, score };
}

function renderEcoScore() {
  const host = $('ecoscore-list');
  if (!host) return;
  host.innerHTML = romblonSpots.map(s=>{const e=ecoScoreFor(s);return `<article class="eco-score-row"><div class="eco-score-main"><div><strong>${esc(s.name)}</strong><small>${esc(s.location)} · Pilot demo score</small></div><span class="eco-score-number">${e.score}<small>/100</small></span></div><div class="eco-score-meter"><span style="width:${e.score}%"></span></div><div class="eco-score-tags"><span>Waste ${e.waste}/5</span><span>Nature ${e.nature}/5</span><span>Community ${e.community}/5</span><span>Resources ${e.resources}/5</span></div><button class="link-btn" data-action="ecoscore-view-place" data-id="${esc(s.id)}">View destination →</button></article>`}).join('');
}

function openEcoScore() { renderEcoScore(); navigateTo('screen-ecoscore'); }
function renderDetailEcoScore(spot) {
  const host = $('detail-ecoscore');
  if (!host || !spot) return;
  const e=ecoScoreFor(spot);
  host.innerHTML=`<div class="detail-eco-score"><strong>${e.score}<small>/100</small></strong><span><b>Pilot EcoScore</b><small>Illustrative demo rating · not verified</small></span></div><div class="eco-score-tags"><span>Waste ${e.waste}/5</span><span>Nature ${e.nature}/5</span><span>Community ${e.community}/5</span><span>Resources ${e.resources}/5</span></div><button class="link-btn" data-action="open-ecoscore">How EcoScore works →</button>`;
}

function carouselSpots() {
  return filteredSpots().slice().sort((a, b) => ratingFor(b) - ratingFor(a)).slice(0, 4);
}

function renderCarousel() {
  const track = $('carousel-track');
  const spots = carouselSpots();
  if (slideIndex >= spots.length) slideIndex = 0;
  if (!spots.length) { track.innerHTML='<div class="carousel-empty">No featured places match these filters yet.</div>'; $('carousel-dots').innerHTML=''; stopCarousel(); return; }
  track.innerHTML = spots.map((s) => `
    <div class="carousel-slide" role="button" tabindex="0" style="background-image: url('${esc(safeUrl(s.image))}');" data-action="open-spot" data-id="${esc(s.id)}">
      <div class="banner-content"><h2>${esc(s.name)}</h2><p>📍 ${esc(s.location)}</p></div>
    </div>`).join('');
  $('carousel-dots').innerHTML = spots.map((_, i) => `<div class="dot ${i === slideIndex ? 'active' : ''}"></div>`).join('');
  updateCarousel();
  if (!carouselBound) {
    carouselBound = true;
    const wrap = $('carousel-wrapper');
    let startX = 0;
    wrap.addEventListener('touchstart', (e) => { startX = e.changedTouches[0].screenX; stopCarousel(); }, { passive: true });
    wrap.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].screenX - startX;
      if (dx < -40) moveSlide(1);
      if (dx > 40) moveSlide(-1);
      startCarousel();
    }, { passive: true });
    wrap.addEventListener('mouseenter', stopCarousel);
    wrap.addEventListener('mouseleave', startCarousel);
    document.addEventListener('visibilitychange', () => { if (document.hidden) stopCarousel(); else startCarousel(); });
  }
  startCarousel();
}

function updateCarousel() {
  $('carousel-track').style.transform = `translateX(-${slideIndex * 100}%)`;
  document.querySelectorAll('#carousel-dots .dot').forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

function moveSlide(dir) {
  const n = carouselSpots().length;
  if (!n) return;
  slideIndex = (slideIndex + dir + n) % n;
  updateCarousel();
}

function startCarousel() {
  stopCarousel();
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  carouselTimer = setInterval(() => { if (currentScreen === 'screen-home') moveSlide(1); }, 4500);
}

function stopCarousel() {
  clearInterval(carouselTimer);
  carouselTimer = null;
}

function closeModalsAll() {
  document.querySelectorAll('.modal-overlay').forEach((m) => m.classList.add('hidden'));
}

function navigateTo(screenId, opts = {}) {
  const push = opts.push !== false;
  if (push && currentScreen && currentScreen !== screenId && currentScreen !== 'screen-welcome') navStack.push(currentScreen);
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  $(screenId).classList.add('active');
  currentScreen = screenId;
  const hideNav = NAV_HIDDEN.includes(screenId);
  $('bottom-nav').classList.toggle('hidden', hideNav);
  $('app').classList.toggle('no-nav', hideNav);
  const tab = Object.keys(TAB_SCREENS).find((k) => TAB_SCREENS[k] === screenId);
  if (tab) document.querySelectorAll('.nav-item').forEach((b) => b.classList.toggle('active', b.id === 'nav-' + tab));
  if (screenId === 'screen-map') ensureMap();
  if (screenId === 'screen-saved') renderSaved();
}

function goBack() {
  const prev = navStack.pop();
  if (prev) navigateTo(prev, { push: false });
  else switchTab('home');
}

function switchTab(tab) {
  navStack = [];
  navigateTo(TAB_SCREENS[tab], { push: false });
}

function refreshAll() {
  if(cacheSavedGuides()) saveState();
  document.querySelectorAll('#island-filters .island-chip').forEach(btn=>{
    const active=btn.dataset.island===activeIsland;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',String(active));
  });
  renderCarousel();
  renderDestinations();
  renderSaved();
  updateMarkers();
}

const actions = {
  'skip-auth': skipAuth,
  'forgot-password': forgotPassword,
  'toggle-theme': toggleTheme,
  'open-trip-planner': openTripPlanner,
  'generate-trip': generateTripPlan,
  'save-generated-trip': saveGeneratedTrip,
  'open-plan-route': openPlanRoute,
  'remove-itinerary': (el) => removeItinerary(el.dataset.id),
  'open-experiences': openExperiences,
  'open-ecoscore': openEcoScore,
  'planner-view-place': (el) => openSpot(el.dataset.id),
  'experience-view-place': (el) => openSpot(el.dataset.id),
  'ecoscore-view-place': (el) => openSpot(el.dataset.id),
  'add-experience-to-plan': (el) => addExperienceToPlan(el.dataset.id),
  'back-to-home': () => switchTab('home'),
  'scroll-destinations': () => $('destinations-anchor').scrollIntoView({ behavior: 'smooth' }),
  'sign-out': signOut,
  'go-welcome': () => { navStack = []; navigateTo('screen-welcome', { push: false }); },
  'clear-data': clearData,
  'open-edit-profile': openEditProfile,
  'open-travel-preferences': () => openAccountPage('screen-travel-preferences'),
  'save-travel-preferences': saveTravelPreferences,
  'open-help': () => openAccountPage('screen-help'),
  'back-to-profile': () => switchTab('profile'),
  'save-profile': saveProfile,
  'back': goBack,
  'toggle-favorite-current': () => toggleFavorite(currentSpot.id),
  'open-review-modal': openReviewModal,
  'submit-review': submitReview,
  'pick-star': (el) => { reviewRating = Number(el.dataset.value); renderStarPicker(); },
  'open-spot': (el) => openSpot(el.dataset.id),
  'toggle-favorite': (el) => toggleFavorite(el.dataset.id),
  'set-image': (el) => { currentGalleryIndex = Number(el.dataset.index) || 0; renderSpotGallery(currentSpot); },
  'prev-image': () => changeSpotGalleryImage(-1),
  'next-image': () => changeSpotGalleryImage(1)
};

function bindEvents() {
  document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('[data-close]');
    if (closeBtn) { closeModal(closeBtn.dataset.close); return; }
    if (e.target.classList && e.target.classList.contains('modal-overlay')) { closeModal(e.target.id); return; }
    const island=e.target.closest('[data-island]');
    if(island){setIsland(island.dataset.island);return;}
    const cat = e.target.closest('[data-category]');
    if (cat) { setCategory(cat.dataset.category); return; }
    const expFilter = e.target.closest('[data-experience-filter]');
    if (expFilter) { activeExperienceFilter = expFilter.dataset.experienceFilter; renderExperiences(); return; }
    const nav = e.target.closest('[data-nav]');
    if (nav) { navigateTo(nav.dataset.nav); return; }
    const tab = e.target.closest('[data-tab]');
    if (tab) { switchTab(tab.dataset.tab); return; }
    if (e.target.closest('a[href]')) return;
    const act = e.target.closest('[data-action]');
    if (act && actions[act.dataset.action]) {
      if (act.dataset.action === 'open-spot' && e.target.closest('[data-action="toggle-favorite"]')) return;
      actions[act.dataset.action](act);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTopModal();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[role="button"][data-action], [role="button"][data-nav]')) {
      e.preventDefault(); e.target.click();
    }
  });
  document.addEventListener('error', (e) => {
    if (e.target && e.target.tagName === 'IMG' && e.target.src !== FALLBACK_IMG) e.target.src = FALLBACK_IMG;
  }, true);
  $('login-form').addEventListener('submit', handleLogin);
  $('signup-form').addEventListener('submit', handleSignup);
  $('sw-location').addEventListener('input', (e) => handleSearch(e.target.value, 'sw-location'));
  $('map-search').addEventListener('input', (e) => handleSearch(e.target.value, 'map-search'));
  $('saved-search').addEventListener('input', renderSaved);
  $('sort-select').addEventListener('change', (e) => { sortMode = e.target.value; renderDestinations(); });
  // Travel preferences are persisted by the explicit Save button.
}

function init() {
  activeIsland=state.preferences.island;
  applyTheme();
  renderUser();
  bindEvents();
  refreshAll();
  if (window.__pendingFirebaseData) window.onFirebaseDataLoaded(window.__pendingFirebaseData);
  // The native Android launch screen is the only splash; do not replay a web splash.
  if (isSignedIn() || state.guest) switchTab('home');
  else navigateTo('screen-welcome', { push: false });
}

document.addEventListener('DOMContentLoaded', init);
if ('serviceWorker' in navigator && !window.Capacitor?.isNativePlatform?.()) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(e => console.warn('Offline shell unavailable:', e)));
}
