const romblonSpots = 
[
  {
    id: 'bonbon', name: 'Bonbon Beach', location: 'Romblon Town', category: 'Beaches',
    description: 'Famous for its long, curving white sandbar connecting to Bang-og Island at low tide. Crystal clear waters ideal for swimming and sunset watching.',
    price: 'Free Entry', rawPrice: 0, rating: 4.9, 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'],
    highlights: ['White Sandbar', 'Sunset Point'], lat: 12.5833, lng: 122.2625,
    reviews: [{ user: 'Maria S.', stars: 5, comment: 'Breathtaking sandbar!' }]
  },
  {
    id: 'binucot', name: 'Binucot Beach Resort', location: 'Ferrol, Tablas', category: 'Resorts',
    description: 'A serene beachfront escape with cozy, air-conditioned rooms overlooking the sea or pool. Ideal for kayaking and scuba diving.',
    price: '₱845.50 / Night', rawPrice: 845.50, rating: 4.7, 
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Pool', 'Beachfront'], lat: 12.3833, lng: 121.9667,
    reviews: [{ user: 'Erika R.', stars: 4, comment: 'Great coastal drive and calm waters.' }]
  },
  {
    id: 'footprints', name: 'Footprints Beach Resort', location: 'San Andres', category: 'Resorts',
    description: 'Quiet beachfront spot with simple bungalows, poolside dining, and a relaxed atmosphere under coconut palms.',
    price: '₱1,120.00 / Night', rawPrice: 1120.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Bungalows', 'Bar'], lat: 12.5283, lng: 121.9861,
    reviews: [{ user: 'Leonard F.', stars: 5, comment: 'Awesome relaxing vibe!' }]
  },
  {
    id: 'g2', name: 'Mount Guiting-Guiting', location: 'Sibuyan Island', category: 'Mountains',
    description: 'Known as "G2", featuring knife-edge ridges and incredible untouched biodiversity. A must for serious hikers.',
    price: '₱500 Permit', rawPrice: 500.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Hiking', 'Wildlife'], lat: 12.4161, lng: 122.5694,
    reviews: [{ user: 'Alex H.', stars: 5, comment: 'Challenging but unforgettable.' }]
  },
  {
    id: 'looc', name: 'Looc Bay Fish Sanctuary', location: 'Looc, Tablas', category: 'Beaches',
    description: 'A protected marine sanctuary featuring a floating pontoon where you can swim and feed hundreds of colorful tropical fish.',
    price: '₱100 Entry', rawPrice: 100.00, rating: 4.6, 
    image: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Snorkeling', 'Marine Life'], lat: 12.2570, lng: 121.9961,
    reviews: [{ user: 'Samantha', stars: 5, comment: 'Lots of fish right off the dock!' }]
  },
  {
    id: 'carabao', name: 'Carabao Island (Hambil)', location: 'San Jose', category: 'Beaches',
    description: 'Often called Boracay’s quieter sister island. Famous for untouched white sand beaches and cliff diving spots.',
    price: '₱50 Envi Fee', rawPrice: 50.00, rating: 4.9, 
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Pristine Sand', 'Cliff Diving'], lat: 12.0667, lng: 121.9333,
    reviews: [{ user: 'Jake M.', stars: 5, comment: 'Just like Boracay before the crowds.' }]
  },
  {
    id: 'aglicay', name: 'Aglicay Beach Resort', location: 'Alcantara, Tablas', category: 'Resorts',
    description: 'A sprawling resort tucked into a cove with beautiful white sand and a scenic hillside viewpoint perfect for photography.',
    price: '₱1,500.00 / Night', rawPrice: 1500.00, rating: 4.5, 
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Scenic View', 'White Sand'], lat: 12.2858, lng: 122.0544,
    reviews: [{ user: 'Chris P.', stars: 4, comment: 'Great sunset view from the hill.' }]
  },
  {
    id: 'catingas', name: 'Catingas River', location: 'San Fernando, Sibuyan', category: 'Mountains',
    description: 'Awarded as one of the cleanest inland bodies of water in the Philippines. Features cool, crystal-clear water and diving platforms.',
    price: '₱30 Entry', rawPrice: 30.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Crystal Clear', 'Cliff Diving'], lat: 12.3551, lng: 122.5684,
    reviews: [{ user: 'Daniel', stars: 5, comment: 'The water is so cold and refreshing!' }]
  },
  {
    id: 'tiamban', name: 'Tiamban Beach', location: 'Romblon Town', category: 'Beaches',
    description: 'A popular local beach with fine white sand and gentle waves, located very close to the town center. Great for picnics and family outings.',
    price: '₱50 Entry', rawPrice: 50.00, rating: 4.4, 
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Family Friendly', 'Fine Sand'], lat: 12.5700, lng: 122.2541,
    reviews: [{ user: 'Anna L.', stars: 4, comment: 'Nice beach very near the town proper.' }]
  },
  {
    id: 'mablaran', name: 'Mablaran Falls', location: 'San Andres, Tablas', category: 'Mountains',
    description: 'A tranquil waterfall surrounded by lush tropical jungle. Offers cool, refreshing natural pools perfect for a quick dip.',
    price: '₱20 Entry', rawPrice: 20.00, rating: 4.5, 
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Waterfalls', 'Nature Trail'], lat: 12.5333, lng: 122.0167,
    reviews: [{ user: 'Leo', stars: 5, comment: 'Very peaceful and secluded.' }]
  },
  {
    id: 'tinagongdagat', name: 'Tinagong Dagat', location: 'Calatrava, Tablas', category: 'Beaches',
    description: 'A stunning "hidden sea" consisting of saltwater lakes surrounded by dramatic limestone karst cliffs, accessible by boat.',
    price: '₱500 Boat Tour', rawPrice: 500.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1505993597083-3bd19fa85e54?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1505993597083-3bd19fa85e54?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Hidden Lake', 'Limestone Cliffs'], lat: 12.6000, lng: 122.0667,
    reviews: [{ user: 'Sarah J.', stars: 5, comment: 'Reminds me of Palawan or El Nido!' }]
  }
];

const STORE_KEY = 'ecotour-v2';
const ACCOUNTS_KEY = 'ecotour-accounts-v2';
const MEMBER_DISCOUNT = 0.1;
const TAB_SCREENS = { home: 'screen-home', saved: 'screen-saved', trips: 'screen-trips', map: 'screen-map', profile: 'screen-profile' };
const NAV_HIDDEN = ['screen-splash', 'screen-welcome', 'screen-login', 'screen-signup', 'screen-details', 'screen-booking', 'screen-payment', 'screen-confirmation'];
const FALLBACK_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#CBD5E1"/><text x="50%" y="50%" font-family="sans-serif" font-size="28" fill="#64748B" text-anchor="middle" dominant-baseline="middle">Image unavailable</text></svg>');

const defaultState = () => ({
  user: null,
  guest: false,
  favorites: [],
  trips: [],
  localReviews: {},
  paymentMethods: [],
  travelers: [],
  availability: {},
  savedItineraries: [],
  preferences: { bookingUpdates: true, promotions: false, emailUpdates: true },
  theme: 'light',
  trip: { checkIn: '', checkOut: '', guests: 2, rooms: 1 },
  guestDetails: { name: '', email: '', phone: '' }
});

let state = loadState();
let activeCategory = 'All';
let searchQuery = '';
let sortMode = 'featured';
let currentSpot = null;
let navStack = [];
let currentScreen = 'screen-splash';
let returnTo = null;
let leafletMap = null;
let mapMarkersGroup = [];
let slideIndex = 0;
let carouselTimer = null;
let carouselBound = false;
let reviewRating = 5;
let tripDetailId = null;
let tripTab = 'upcoming';
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

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed,
      trip: { ...defaultState().trip, ...(parsed.trip || {}) },
      guestDetails: { ...defaultState().guestDetails, ...(parsed.guestDetails || {}) },
      paymentMethods: Array.isArray(parsed.paymentMethods) ? parsed.paymentMethods : [],
      travelers: Array.isArray(parsed.travelers) ? parsed.travelers : [],
      availability: parsed.availability && typeof parsed.availability === 'object' ? parsed.availability : {},
      savedItineraries: Array.isArray(parsed.savedItineraries) ? parsed.savedItineraries : [],
      preferences: { ...defaultState().preferences, ...(parsed.preferences || {}) }
    };
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {}
  const uid = state.user && state.user.uid;
  if (uid && window.firebaseAuthApi) {
    window.firebaseAuthApi.saveUserState(uid, state).catch((error) => console.warn('Cloud sync failed:', error));
  }
}

function loadAccounts() {
  try { return JSON.parse(localStorage.getItem(ACCOUNTS_KEY)) || {}; } catch (e) { return {}; }
}

function saveAccounts(accounts) {
  try { localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts)); } catch (e) {}
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

function ensureTripDefaults() {
  const t = state.trip;
  if (!t.checkIn || t.checkIn < today()) t.checkIn = addDays(today(), 1);
  if (!t.checkOut || t.checkOut <= t.checkIn) t.checkOut = addDays(t.checkIn, 1);
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

async function hashPassword(password, salt) {
  const text = salt + ':' + password;
  if (window.crypto && window.crypto.subtle) {
    const buf = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) >>> 0;
  return 'x' + h.toString(16);
}

function newSalt() {
  if (window.crypto && window.crypto.getRandomValues) {
    return Array.from(window.crypto.getRandomValues(new Uint8Array(8))).map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  return Math.random().toString(16).slice(2, 10);
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

function isResort(spot) {
  return spot.category === 'Resorts';
}

function priceUnit(spot) {
  if (spot.rawPrice === 0) return 'free';
  return isResort(spot) ? 'night' : 'person';
}

function quote(spot) {
  const t = state.trip;
  const unit = priceUnit(spot);
  const nights = isResort(spot) ? Math.max(1, diffDays(t.checkIn, t.checkOut)) : 1;
  const rooms = isResort(spot) ? t.rooms : 1;
  let subtotal = 0;
  let line = '';
  if (unit === 'night') {
    subtotal = spot.rawPrice * nights * rooms;
    line = `${peso(spot.rawPrice)} × ${nights} night${nights > 1 ? 's' : ''} × ${rooms} room${rooms > 1 ? 's' : ''}`;
  } else if (unit === 'person') {
    subtotal = spot.rawPrice * t.guests;
    line = `${peso(spot.rawPrice)} × ${t.guests} guest${t.guests > 1 ? 's' : ''}`;
  } else {
    line = 'No entry fee';
  }
  const discount = isSignedIn() && subtotal > 0 ? Math.round(subtotal * MEMBER_DISCOUNT * 100) / 100 : 0;
  return { unit, nights, rooms, subtotal, discount, total: subtotal - discount, line };
}

function mergeRemote(data) {
  if (!data || typeof data !== 'object') return;
  Object.keys(data).forEach((key) => {
    const s = data[key];
    if (!s || typeof s !== 'object') return;
    const remoteReviews = s.reviews ? Object.values(s.reviews).filter((r) => r && r.comment) : [];
    const existing = romblonSpots.find((x) => x.id === key);
    if (existing) {
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
      reviews: remoteReviews
    });
  });
}

window.onFirebaseDataLoaded = function (data) {
  mergeRemote(data);
  remoteLoaded = true;
  const badge = $('db-status-badge');
  badge.textContent = 'Live Deals';
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
  if (!user) return;
  try {
    const cloudState = await window.firebaseAuthApi.loadUserState(user.uid);
    if (cloudState && (!state.user || state.user.uid === user.uid)) {
      state = { ...defaultState(), ...cloudState, user: {
        name: user.displayName || cloudState.user?.name || user.email.split('@')[0],
        email: user.email, uid: user.uid
      }};
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
  $('member-badge').textContent = `Member · ${Math.round(MEMBER_DISCOUNT * 100)}% off`;
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
  if (!state.guestDetails.name) state.guestDetails.name = user.name;
  if (!state.guestDetails.email) state.guestDetails.email = user.email;
  saveState();
  renderUser();
  toast(`Welcome, ${firstName()}!`, 'success');
  if (returnTo) {
    const target = returnTo;
    returnTo = null;
    navStack = [];
    refreshAll();
    navigateTo(target.screen, { push: false });
    if (target.screen === 'screen-details' || target.screen === 'screen-booking') navStack = ['screen-home'];
    if (target.screen === 'screen-booking') prepareBooking();
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
  if (!confirm('This removes saved places, bookings and your local account on this device. Continue?')) return;
  try { localStorage.removeItem(STORE_KEY); localStorage.removeItem(ACCOUNTS_KEY); } catch (e) {}
  state = defaultState();
  applyTheme();
  renderUser();
  ensureTripDefaults();
  refreshAll();
  navStack = [];
  navigateTo('screen-welcome', { push: false });
  toast('Saved data cleared.');
}


function openAccountPage(screenId) {
  if (screenId === 'screen-payment-methods') renderPaymentMethods();
  if (screenId === 'screen-notifications') renderPreferences();
  navigateTo(screenId);
}

function cardBrand(number) {
  if (/^4/.test(number)) return 'Visa';
  if (/^(5[1-5]|2[2-7])/.test(number)) return 'Mastercard';
  if (/^3[47]/.test(number)) return 'American Express';
  return 'Bank card';
}

function renderPaymentMethods() {
  const host = $('saved-payment-methods');
  const methods = state.paymentMethods || [];
  if (!methods.length) {
    host.innerHTML = '<div class="empty-state"><span class="emoji">💳</span>No saved payment methods yet.<br>Add a card to make future demo checkouts quicker.</div>';
    return;
  }
  host.innerHTML = methods.map((m) => `
    <div class="saved-method-card">
      <div class="saved-method-icon">💳</div>
      <div class="saved-method-copy">
        <strong>${esc(m.brand)} •••• ${esc(m.last4)}</strong>
        <span>Expires ${esc(m.expiry)}${m.default ? ' · Default' : ''}</span>
      </div>
      <button class="link-btn danger-link" data-action="remove-payment-method" data-id="${esc(m.id)}">Remove</button>
    </div>`).join('');
}

function openAddCardModal() {
  if (!isSignedIn()) {
    toast('Sign in to manage payment methods.');
    navigateTo('screen-welcome');
    return;
  }
  $('saved-card-name').value = state.user.name || '';
  $('saved-card-number').value = '';
  $('saved-card-expiry').value = '';
  $('saved-card-error').textContent = '';
  openModal('add-card-modal');
}

function addSavedCard() {
  const name = $('saved-card-name').value.trim();
  const number = $('saved-card-number').value.replace(/\D/g, '');
  const expiry = $('saved-card-expiry').value.trim();
  const match = /^(\d{2})\/(\d{2})$/.exec(expiry);
  let error = '';
  if (name.length < 2) error = 'Enter the cardholder name.';
  else if (!/^\d{13,19}$/.test(number) || !luhn(number)) error = 'Enter a valid card number.';
  else if (!match || Number(match[1]) < 1 || Number(match[1]) > 12) error = 'Use MM/YY for expiry.';
  else {
    const expiryDate = new Date(2000 + Number(match[2]), Number(match[1]), 0, 23, 59, 59);
    if (expiryDate < new Date()) error = 'This card has expired.';
  }
  if (error) { $('saved-card-error').textContent = error; return; }
  const method = {
    id: 'pm_' + Date.now().toString(36),
    brand: cardBrand(number),
    last4: number.slice(-4),
    expiry,
    holder: name,
    default: !(state.paymentMethods || []).length
  };
  state.paymentMethods = [...(state.paymentMethods || []), method];
  saveState();
  closeModal('add-card-modal');
  renderPaymentMethods();
  toast('Card added. Only its brand, last four digits and expiry are saved.', 'success');
}

function removePaymentMethod(id) {
  state.paymentMethods = (state.paymentMethods || []).filter((m) => m.id !== id);
  if (state.paymentMethods.length && !state.paymentMethods.some((m) => m.default)) state.paymentMethods[0].default = true;
  saveState();
  renderPaymentMethods();
  toast('Payment method removed.');
}

function renderPreferences() {
  const p = state.preferences || {};
  ['bookingUpdates', 'promotions', 'emailUpdates'].forEach((key) => {
    const el = $('pref-' + key);
    if (el) el.checked = Boolean(p[key]);
  });
}

function savePreference(key, value) {
  state.preferences = { ...defaultState().preferences, ...(state.preferences || {}), [key]: value };
  saveState();
  toast('Preference updated.', 'success');
}

function openEditProfile() {
  if (!isSignedIn()) return;
  clearErrors($('edit-profile-modal'));
  $('ep-name').value = state.user.name;
  $('ep-email').value = state.user.email;
  openModal('edit-profile-modal');
}

function saveProfile() {
  clearErrors($('edit-profile-modal'));
  const name = $('ep-name').value.trim();
  const email = $('ep-email').value.trim().toLowerCase();
  let ok = true;
  if (name.length < 2) { setError('ep-name', 'Enter your name.'); ok = false; }
  if (!validEmail(email)) { setError('ep-email', 'Enter a valid email address.'); ok = false; }
  if (!ok) return;
  const accounts = loadAccounts();
  const oldEmail = state.user.email;
  if (email !== oldEmail && accounts[email]) { setError('ep-email', 'That email is already in use.'); return; }
  if (accounts[oldEmail]) {
    const record = { ...accounts[oldEmail], name };
    delete accounts[oldEmail];
    accounts[email] = record;
    saveAccounts(accounts);
  }
  state.user = { name, email };
  saveState();
  renderUser();
  closeModal('edit-profile-modal');
  toast('Profile updated.', 'success');
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
  const list = romblonSpots.filter((s) => (activeCategory === 'All' || s.category === activeCategory) && matchesSearch(s));
  if (sortMode === 'rating') list.sort((a, b) => ratingFor(b) - ratingFor(a));
  else if (sortMode === 'price-asc') list.sort((a, b) => a.rawPrice - b.rawPrice);
  else if (sortMode === 'price-desc') list.sort((a, b) => b.rawPrice - a.rawPrice);
  return list;
}

function handleSearch(value, source) {
  searchQuery = value.trim().toLowerCase();
  if (source !== 'sw-location') $('sw-location').value = value;
  if (source !== 'map-search') $('map-search').value = value;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    renderDestinations();
    updateMarkers();
  }, 120);
}

function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll('#category-tags .tag-chip').forEach((c) => c.classList.toggle('active', c.dataset.category === category));
  renderDestinations();
  updateMarkers();
}

function cardHtml(s, withDesc) {
  const fav = state.favorites.includes(s.id);
  return `
    <div class="spot-card" role="button" tabindex="0" data-action="open-spot" data-id="${esc(s.id)}">
      <img src="${esc(safeUrl(s.image))}" alt="${esc(s.name)}" loading="lazy" data-fallback />
      <div class="spot-card-info">
        <h5>${esc(s.name)}</h5>
        <p class="spot-location">📍 ${esc(s.location)}</p>
        ${withDesc ? `<p class="spot-desc">${esc(s.description)}</p>` : ''}
        <div class="spot-meta"><span class="spot-rating">★ ${ratingFor(s)}</span><span class="spot-price">${esc(s.price)}</span></div>
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
  const saved = romblonSpots.filter((s) => state.favorites.includes(s.id) && (s.name + ' ' + s.location).toLowerCase().includes(filter));
  if (!saved.length) {
    container.innerHTML = `<div class="empty-state"><span class="emoji">💙</span>${state.favorites.length ? 'No saved places match your filter.' : 'Nothing saved yet. Tap the heart on any place to keep it here.'}<br><button class="btn btn-primary" data-tab="home">Browse places</button></div>`;
    return;
  }
  container.innerHTML = saved.map((s) => cardHtml(s, false)).join('');
}

function toggleFavorite(id) {
  const i = state.favorites.indexOf(id);
  if (i >= 0) state.favorites.splice(i, 1); else state.favorites.push(id);
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

function tripStatus(t) {
  if (t.status === 'Cancelled') return 'Cancelled';
  if (t.status === 'Refund requested') return 'Refund requested';
  return t.checkOut < today() ? 'Past' : 'Upcoming';
}

function renderTrips() {
  const container = $('trips-list');
  document.querySelectorAll('.trip-tab').forEach((t) => {
    const on = t.dataset.tripTab === tripTab;
    t.classList.toggle('active', on);
    t.style.borderBottomColor = on ? 'var(--primary-brand)' : 'transparent';
    t.setAttribute('aria-selected', String(on));
  });
  const trips = state.trips.filter((t) => (tripTab === 'upcoming' ? tripStatus(t) === 'Upcoming' : tripStatus(t) !== 'Upcoming'));
  if (!trips.length) {
    container.innerHTML = `<div class="empty-state"><span class="emoji">🧳</span>No ${tripTab === 'upcoming' ? 'upcoming' : 'past or cancelled'} trips.${tripTab === 'upcoming' ? '<br><button class="btn btn-primary" data-tab="home">Find a place to stay</button>' : ''}</div>`;
    return;
  }
  container.innerHTML = trips.map((t) => {
    const st = tripStatus(t);
    const cls = st === 'Upcoming' ? 'status-upcoming' : st === 'Cancelled' ? 'status-cancelled' : 'status-past';
    const dates = t.nights > 0 && t.isStay ? `${fmtShort(t.checkIn)} - ${fmtDate(t.checkOut)}` : fmtDate(t.checkIn);
    return `
      <div class="trip-card">
        <div class="trip-header">
          <span style="font-size:12px; font-weight:700;">Ref: #${esc(t.id)}</span>
          <span class="trip-status ${cls}">${st}</span>
        </div>
        <div class="trip-body">
          <h3>${esc(t.prop)}</h3>
          <p>📅 ${dates}</p>
          <p>👥 ${t.guests} guest${t.guests > 1 ? 's' : ''}</p>
          <p style="font-weight:700; color:var(--primary-brand); margin-top:4px;">Total: ${peso(t.total)}</p>
          <div class="trip-actions"><button class="btn btn-secondary" data-action="view-trip" data-id="${esc(t.id)}">Manage Booking</button></div>
        </div>
      </div>`;
  }).join('');
}

function viewTrip(id) {
  const t = state.trips.find((x) => x.id === id);
  if (!t) return;
  tripDetailId = id;
  const st = tripStatus(t);
  const rows = [
    ['Reference', '#' + t.id],
    ['Status', st],
    ['Place', t.prop],
    [t.isStay ? 'Check-in' : 'Visit date', fmtDate(t.checkIn)]
  ];
  if (t.isStay) rows.push(['Check-out', fmtDate(t.checkOut)], ['Rooms', t.rooms]);
  rows.push(['Guests', t.guests], ['Guest name', t.guestName], ['Payment', t.method], ['Total', peso(t.total)], ['Refund', t.refundStatus || (t.status === 'Cancelled' ? 'Not specified' : 'Not requested')]);
  if (t.cardLast4) rows.push(['Card', '•••• ' + t.cardLast4]);
  $('trip-detail-body').innerHTML = rows.map((r) => `<div class="detail-kv"><span>${esc(r[0])}</span><span>${esc(r[1])}</span></div>`).join('');
  $('trip-cancel-btn').style.display = st === 'Upcoming' ? '' : 'none';
  $('trip-cancel-btn').textContent = 'Request cancellation / refund';
  let extra = $('trip-receipt-btn');
  if (!extra) { extra = document.createElement('button'); extra.id = 'trip-receipt-btn'; extra.className = 'btn btn-secondary'; extra.textContent = 'Print receipt'; extra.dataset.action = 'print-trip-receipt'; $('trip-detail-modal').querySelector('.modal-actions').prepend(extra); }
  extra.dataset.id = t.id;
  openModal('trip-detail-modal');
}

function cancelTrip() {
  const t = state.trips.find((x) => x.id === tripDetailId);
  if (!t) return;
  const checkDate = t.checkIn ? fromISO(t.checkIn) : new Date();
  const hoursUntil = (checkDate - new Date()) / 3600000;
  const policy = hoursUntil >= 48 ? 'This booking is within the demo free-cancellation window (48+ hours before check-in). A refund request will be marked for review.' : 'This booking is inside the 48-hour window. Cancellation can be requested, but a refund is not guaranteed.';
  if (!confirm(policy + '\n\nContinue?')) return;
  t.status = 'Cancelled';
  t.refundStatus = hoursUntil >= 48 ? 'Refund requested · eligible for review' : 'Refund not guaranteed · review required';
  t.cancelledAt = new Date().toISOString();
  saveState();
  closeModal('trip-detail-modal');
  renderTrips();
  toast('Cancellation saved. Refund status is recorded for review.');
}

function isAvailable(spotId, checkIn, checkOut, isStay) {
  const overrides = state.availability || {};
  const dates = [];
  let d = checkIn;
  const end = isStay ? checkOut : addDays(checkIn, 1);
  while (d < end) { dates.push(d); d = addDays(d, 1); }
  const manuallyBlocked = dates.some((date) => overrides[spotId + ':' + date] === 'blocked');
  if (manuallyBlocked) return false;
  if (!isStay) return true;
  return !state.trips.some((booking) => {
    if (booking.spotId !== spotId || booking.status === 'Cancelled') return false;
    const bookingEnd = booking.isStay ? booking.checkOut : addDays(booking.checkIn, 1);
    return checkIn < bookingEnd && end > booking.checkIn;
  });
}

function renderTravelers() {
  const host = $('traveler-list');
  const list = state.travelers || [];
  host.innerHTML = list.length ? list.map((t) => `<div class="saved-method-card"><div class="saved-method-icon">👤</div><div class="saved-method-copy"><strong>${esc(t.name)}</strong><span>${esc(t.email || 'No email')} · ${esc(t.phone || 'No phone')}</span></div><button class="link-btn danger-link" data-action="remove-traveler" data-id="${esc(t.id)}">Remove</button></div>`).join('') : '<div class="empty-state">No saved travelers yet.</div>';
}

function addTraveler() {
  const name = $('traveler-name').value.trim();
  const email = $('traveler-email').value.trim();
  const phone = $('traveler-phone').value.trim();
  if (name.length < 2 || (email && !validEmail(email))) { toast('Enter a valid name and email.', 'error'); return; }
  state.travelers = [...(state.travelers || []), { id: 'trav_' + Date.now().toString(36), name, email, phone }];
  saveState(); $('traveler-name').value = ''; $('traveler-email').value = ''; $('traveler-phone').value = '';
  renderTravelers(); toast('Traveler profile saved.', 'success');
}

function removeTraveler(id) {
  state.travelers = (state.travelers || []).filter((t) => t.id !== id); saveState(); renderTravelers();
}

function openHostDashboard() {
  const stats = $('host-stats');
  const active = state.trips.filter((t) => t.status !== 'Cancelled');
  const revenue = active.reduce((sum, t) => sum + Number(t.total || 0), 0);
  stats.innerHTML = `<div class="host-stat"><strong>${state.trips.length}</strong><span>Total bookings</span></div><div class="host-stat"><strong>${active.length}</strong><span>Active bookings</span></div><div class="host-stat"><strong>${peso(revenue)}</strong><span>Booked value</span></div>`;
  $('host-spot').innerHTML = romblonSpots.map((spot) => `<option value="${esc(spot.id)}">${esc(spot.name)}</option>`).join('');
  $('host-date').min = today(); $('host-date').value = addDays(today(), 1);
  $('host-bookings').innerHTML = state.trips.length ? state.trips.slice(0, 10).map((t) => `<div class="saved-method-card"><div class="saved-method-icon">🧾</div><div class="saved-method-copy"><strong>${esc(t.prop)}</strong><span>#${esc(t.id)} · ${esc(t.status || 'Confirmed')} · ${peso(t.total)}</span></div></div>`).join('') : '<div class="empty-state">No bookings yet.</div>';
  navigateTo('screen-host-dashboard');
}

function saveAvailability() {
  const spot = $('host-spot').value, date = $('host-date').value, status = $('host-status').value;
  if (!spot || !date || date < today()) { toast('Choose a valid future date.', 'error'); return; }
  state.availability = state.availability || {};
  state.availability[spot + ':' + date] = status;
  saveState(); toast('Availability updated for this browser.', 'success');
}

function receiptHtml(t) {
  const rows = [['Booking reference', '#' + t.id], ['Property / experience', t.prop], ['Guest', t.guestName], ['Email', t.guestEmail], ['Visit / check-in', fmtDate(t.checkIn)], ...(t.isStay ? [['Check-out', fmtDate(t.checkOut)], ['Rooms', t.rooms]] : []), ['Guests', t.guests], ['Payment method', t.method], ['Status', t.status || 'Confirmed'], ['Total', peso(t.total)]];
  return `<!doctype html><html><head><meta charset="utf-8"><title>EcoTour receipt ${esc(t.id)}</title><style>body{font:14px Arial,sans-serif;max-width:680px;margin:40px auto;padding:24px;color:#172033}h1{color:#1e6b43}p{color:#64748b}.row{display:flex;justify-content:space-between;gap:24px;padding:12px 0;border-bottom:1px solid #e2e8f0}.row span:first-child{color:#64748b}.total{font-size:18px;font-weight:bold}@media print{button{display:none}}</style></head><body><h1>EcoTour</h1><h2>Booking receipt</h2><p>Thank you for choosing local experiences in Romblon.</p>${rows.map((r) => `<div class="row"><span>${esc(r[0])}</span><strong>${esc(r[1])}</strong></div>`).join('')}<p>Prototype receipt only. This is not a tax invoice or proof of a processed payment.</p><button onclick="window.print()">Print / Save as PDF</button></body></html>`;
}

function printReceipt(id) {
  const t = state.trips.find((x) => x.id === id) || state.trips[0];
  if (!t) { toast('No booking receipt found.', 'error'); return; }
  const win = window.open('', '_blank');
  if (!win) { toast('Allow pop-ups to print the receipt.', 'error'); return; }
  win.document.open(); win.document.write(receiptHtml(t)); win.document.close();
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

function tripSummaryText(spot) {
  const t = state.trip;
  if (isResort(spot)) {
    const n = Math.max(1, diffDays(t.checkIn, t.checkOut));
    return `${fmtShort(t.checkIn)} - ${fmtShort(t.checkOut)} · ${n} night${n > 1 ? 's' : ''} · ${t.guests} guest${t.guests > 1 ? 's' : ''} · ${t.rooms} room${t.rooms > 1 ? 's' : ''}`;
  }
  return `${fmtDate(t.checkIn)} · ${t.guests} guest${t.guests > 1 ? 's' : ''}`;
}

function renderSearchWidget() {
  const t = state.trip;
  $('sw-dates').textContent = `${fmtShort(t.checkIn)} - ${fmtShort(t.checkOut)}`;
  $('sw-guests').textContent = `${t.rooms} Room${t.rooms > 1 ? 's' : ''}, ${t.guests} Guest${t.guests > 1 ? 's' : ''}`;
}

function refreshDetailPricing() {
  if (!currentSpot) return;
  const q = quote(currentSpot);
  $('detail-trip-summary').textContent = tripSummaryText(currentSpot);
  if (q.unit === 'free') {
    $('bar-price-label').textContent = 'Entry';
    $('bar-price').textContent = 'Free';
  } else {
    $('bar-price-label').textContent = q.discount ? `Total (after ${Math.round(MEMBER_DISCOUNT * 100)}% member discount)` : 'Total';
    $('bar-price').textContent = peso(q.total);
  }
  $('reserve-btn').textContent = isResort(currentSpot) ? 'Reserve' : (q.unit === 'free' ? 'Plan Visit' : 'Book Visit');
}

function openSpot(id) {
  const s = romblonSpots.find((x) => x.id === id);
  if (!s) return;
  currentSpot = s;
  closeModalsAll();
  $('detail-main-img').src = safeUrl(s.image);
  $('detail-main-img').alt = s.name;
  $('detail-title').textContent = s.name;
  $('detail-location').textContent = s.location;
  $('detail-rating').textContent = ratingFor(s);
  $('detail-desc').textContent = s.description;
  renderDetailEcoScore(s);
  $('detail-tags').innerHTML = `<span class="tag">${esc(s.category)}</span>${ratingFor(s) >= 4.7 ? '<span class="tag">Top Rated</span>' : ''}`;
  $('gallery-thumbs').innerHTML = (s.gallery.length > 1 ? s.gallery : []).map((url, i) => `<img src="${esc(safeUrl(url))}" alt="Photo ${i + 1}" class="thumb-img ${i === 0 ? 'active' : ''}" data-action="set-image" data-url="${esc(safeUrl(url))}" data-fallback />`).join('');
  $('detail-highlights').innerHTML = (s.highlights || []).map((h) => `<span class="tag">✓ ${esc(h)}</span>`).join('') || '<span class="text-muted">No highlights listed.</span>';
  renderReviews();
  updateFavoriteButton();
  refreshDetailPricing();
  navigateTo('screen-details');
  $('screen-details').scrollTop = 0;
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

function openTripModal() {
  ensureTripDefaults();
  $('tm-checkin').min = today();
  $('tm-checkin').value = state.trip.checkIn;
  $('tm-checkout').min = addDays(state.trip.checkIn, 1);
  $('tm-checkout').value = state.trip.checkOut;
  $('tm-guests').textContent = state.trip.guests;
  $('tm-rooms').textContent = state.trip.rooms;
  $('tm-error').textContent = '';
  syncStepperButtons();
  openModal('trip-modal');
}

function syncStepperButtons() {
  const g = Number($('tm-guests').textContent);
  const r = Number($('tm-rooms').textContent);
  document.querySelector('[data-step="guests"][data-dir="-1"]').disabled = g <= 1;
  document.querySelector('[data-step="guests"][data-dir="1"]').disabled = g >= 12;
  document.querySelector('[data-step="rooms"][data-dir="-1"]').disabled = r <= 1;
  document.querySelector('[data-step="rooms"][data-dir="1"]').disabled = r >= Math.min(6, g);
}

function stepValue(kind, dir) {
  const el = $(kind === 'guests' ? 'tm-guests' : 'tm-rooms');
  let v = Number(el.textContent) + dir;
  const g = kind === 'guests' ? v : Number($('tm-guests').textContent);
  if (kind === 'guests') v = Math.min(12, Math.max(1, v));
  else v = Math.min(6, Math.max(1, v), g);
  el.textContent = v;
  if (kind === 'guests' && Number($('tm-rooms').textContent) > v) $('tm-rooms').textContent = v;
  syncStepperButtons();
}

function saveTripSettings() {
  const ci = $('tm-checkin').value;
  const co = $('tm-checkout').value;
  if (!ci || ci < today()) { $('tm-error').textContent = 'Choose a date that is today or later.'; return; }
  if (!co || co <= ci) { $('tm-error').textContent = 'Check-out must be after check-in.'; return; }
  if (diffDays(ci, co) > 30) { $('tm-error').textContent = 'Stays are limited to 30 nights.'; return; }
  state.trip = { checkIn: ci, checkOut: co, guests: Number($('tm-guests').textContent), rooms: Number($('tm-rooms').textContent) };
  saveState();
  closeModal('trip-modal');
  renderSearchWidget();
  refreshDetailPricing();
  if (currentScreen === 'screen-booking') renderBooking();
}

function proceedBooking() {
  if (currentSpot && !isAvailable(currentSpot.id, state.trip.checkIn, state.trip.checkOut, isResort(currentSpot))) { toast('Those dates are currently marked unavailable. Choose another date.', 'error'); return; }
  if (!isSignedIn()) {
    returnTo = { screen: 'screen-booking' };
    toast('Sign in to complete your booking.');
    navigateTo('screen-login');
    return;
  }
  prepareBooking();
}

function prepareBooking() {
  if (!state.guestDetails.name) state.guestDetails.name = state.user.name;
  if (!state.guestDetails.email) state.guestDetails.email = state.user.email;
  renderBooking();
  navigateTo('screen-booking');
}

function renderBooking() {
  const s = currentSpot;
  const q = quote(s);
  const t = state.trip;
  $('summary-title').textContent = s.name;
  $('summary-img').src = safeUrl(s.image);
  $('summary-sub').textContent = tripSummaryText(s);
  $('guest-name-val').textContent = state.guestDetails.name;
  $('guest-email-val').textContent = state.guestDetails.email;
  $('guest-phone-val').textContent = state.guestDetails.phone || 'No phone number added';
  const travelerPicker = $('saved-traveler-picker');
  if (travelerPicker) {
    travelerPicker.innerHTML = '<option value="">Current booking details</option>' + (state.travelers || []).map((person) => `<option value="${esc(person.id)}">${esc(person.name)}</option>`).join('');
    travelerPicker.value = '';
  }
  const rows = [`<div class="pricing-row"><span>${esc(q.line)}</span><span>${peso(q.subtotal)}</span></div>`];
  if (q.discount) rows.push(`<div class="pricing-row text-success"><span>Member discount (${Math.round(MEMBER_DISCOUNT * 100)}%)</span><span>- ${peso(q.discount)}</span></div>`);
  rows.push('<hr class="price-divider"/>', `<div class="pricing-total-row"><span>Total Price</span><strong class="total-price">${peso(q.total)}</strong></div>`);
  $('pricing-card').innerHTML = rows.join('');
  $('booking-next-btn').textContent = q.total === 0 ? 'Confirm Visit' : 'Next: Payment';
  $('pay-final-amount').textContent = peso(q.total);
  $('pm-property').style.display = isResort(s) ? '' : 'none';
}

function openGuestModal() {
  clearErrors($('guest-modal'));
  $('edit-guest-name').value = state.guestDetails.name;
  $('edit-guest-email').value = state.guestDetails.email;
  $('edit-guest-phone').value = state.guestDetails.phone;
  openModal('guest-modal');
}

function saveGuest() {
  clearErrors($('guest-modal'));
  const name = $('edit-guest-name').value.trim();
  const email = $('edit-guest-email').value.trim();
  const phone = $('edit-guest-phone').value.trim();
  let ok = true;
  if (name.length < 2) { setError('edit-guest-name', 'Enter the guest name.'); ok = false; }
  if (!validEmail(email)) { setError('edit-guest-email', 'Enter a valid email address.'); ok = false; }
  if (phone && !validPhone(phone)) { setError('edit-guest-phone', 'Enter a valid phone number.'); ok = false; }
  if (!ok) return;
  state.guestDetails = { name, email, phone };
  saveState();
  closeModal('guest-modal');
  renderBooking();
}

function bookingNext() {
  const q = quote(currentSpot);
  if (!validEmail(state.guestDetails.email) || state.guestDetails.name.length < 2) {
    toast('Complete the guest details first.', 'error');
    openGuestModal();
    return;
  }
  if (q.total === 0) { completeBooking('No payment required', ''); return; }
  clearErrors($('screen-payment'));
  $('pay-card-name').value = state.guestDetails.name;
  $('pay-card-number').value = '';
  $('pay-card-exp').value = '';
  $('pay-card-cvv').value = '';
  syncPaymentMethod();
  navigateTo('screen-payment');
}

function selectedMethod() {
  return document.querySelector('input[name="paymethod"]:checked').value;
}

function syncPaymentMethod() {
  const m = selectedMethod();
  ['card', 'gcash', 'property'].forEach((k) => $('pm-' + k).classList.toggle('active', k === m));
  $('pm-card-body').classList.toggle('hidden', m !== 'card');
}

function luhn(num) {
  let sum = 0;
  let alt = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let n = Number(num[i]);
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
}

function validateCard() {
  clearErrors($('pm-card'));
  let ok = true;
  const name = $('pay-card-name').value.trim();
  const num = $('pay-card-number').value.replace(/\s/g, '');
  const exp = $('pay-card-exp').value.trim();
  const cvv = $('pay-card-cvv').value.trim();
  if (name.length < 2) { setError('pay-card-name', 'Enter the name on the card.'); ok = false; }
  if (!/^\d{13,19}$/.test(num) || !luhn(num)) { setError('pay-card-number', 'Enter a valid card number.'); ok = false; }
  const em = /^(\d{2})\/(\d{2})$/.exec(exp);
  if (!em || Number(em[1]) < 1 || Number(em[1]) > 12) {
    setError('pay-card-exp', 'Use MM/YY.');
    ok = false;
  } else {
    const now = new Date();
    const expDate = new Date(2000 + Number(em[2]), Number(em[1]), 0, 23, 59, 59);
    if (expDate < now) { setError('pay-card-exp', 'This card has expired.'); ok = false; }
  }
  if (!/^\d{3,4}$/.test(cvv)) { setError('pay-card-cvv', 'Enter the 3 or 4 digit code.'); ok = false; }
  return ok ? num.slice(-4) : null;
}

function processPayment() {
  const method = selectedMethod();
  let label = 'Pay at property';
  let last4 = '';
  if (method === 'card') {
    last4 = validateCard();
    if (!last4) return;
    label = `Card ending ${last4}`;
  } else if (method === 'gcash') {
    label = 'GCash (simulated)';
  }
  const btn = $('pay-btn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Processing';
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'Pay Now';
    completeBooking(label, last4);
  }, 1200);
}

function newReference() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id;
  do {
    id = 'ET' + Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  } while (state.trips.some((t) => t.id === id));
  return id;
}

function completeBooking(methodLabel, last4) {
  const s = currentSpot;
  if (!s || !isAvailable(s.id, state.trip.checkIn, state.trip.checkOut, isResort(s))) {
    toast('Availability changed. Please choose another date.', 'error');
    if (s) navigateTo('screen-details');
    return;
  }
  const q = quote(s);
  const t = state.trip;
  const stay = isResort(s);
  const booking = {
    id: newReference(),
    spotId: s.id,
    prop: s.name,
    isStay: stay,
    checkIn: t.checkIn,
    checkOut: stay ? t.checkOut : t.checkIn,
    nights: q.nights,
    guests: t.guests,
    rooms: q.rooms,
    total: q.total,
    discount: q.discount,
    method: methodLabel,
    cardLast4: last4,
    guestName: state.guestDetails.name,
    guestEmail: state.guestDetails.email,
    guestPhone: state.guestDetails.phone,
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  };
  state.trips.unshift(booking);
  saveState();
  renderConfirmation(booking);
  navStack = [];
  navigateTo('screen-confirmation', { push: false });
}

function renderConfirmation(b) {
  $('conf-sub').textContent = `We've saved your booking. A confirmation would be sent to ${b.guestEmail} once email delivery is connected.`;
  const rows = [
    ['Guest', b.guestName],
    ['Place', b.prop],
    [b.isStay ? 'Check-in' : 'Visit date', fmtDate(b.checkIn)]
  ];
  if (b.isStay) rows.push(['Check-out', fmtDate(b.checkOut)]);
  rows.push(['Guests', b.guests], ['Total', peso(b.total)]);
  $('conf-card').innerHTML = `<h4 style="margin-bottom: 12px; border-bottom:1px solid var(--border-color); padding-bottom:8px;">Booking Reference: <span class="text-primary">#${esc(b.id)}</span></h4>` +
    rows.map((r) => `<div class="c-row"><span class="c-lbl">${esc(r[0])}</span><span class="c-val">${esc(r[1])}</span></div>`).join('');
}

function finishBooking() {
  tripTab = 'upcoming';
  switchTab('trips');
}

function openTripPlanner() {
  renderSavedItineraries();
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
  return romblonSpots.slice().sort((a, b) => ratingFor(b) - ratingFor(a)).slice(0, 4);
}

function renderCarousel() {
  const track = $('carousel-track');
  const spots = carouselSpots();
  if (slideIndex >= spots.length) slideIndex = 0;
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
  if (push && currentScreen && currentScreen !== screenId && !['screen-splash'].includes(currentScreen)) navStack.push(currentScreen);
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
  if (screenId === 'screen-trips') renderTrips();
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
  renderCarousel();
  renderDestinations();
  renderSaved();
  updateMarkers();
}

const actions = {
  'skip-auth': skipAuth,
  'forgot-password': forgotPassword,
  'toggle-theme': toggleTheme,
  'open-trip-modal': openTripModal,
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
  'open-payment-methods': () => openAccountPage('screen-payment-methods'),
  'open-notifications': () => openAccountPage('screen-notifications'),
  'open-help': () => openAccountPage('screen-help'),
  'open-travelers': () => { renderTravelers(); navigateTo('screen-travelers'); },
  'add-traveler': addTraveler,
  'remove-traveler': (el) => removeTraveler(el.dataset.id),
  'open-host-dashboard': openHostDashboard,
  'save-availability': saveAvailability,
  'print-current-receipt': () => printReceipt(state.trips[0] && state.trips[0].id),
  'print-trip-receipt': (el) => printReceipt(el.dataset.id),
  'open-add-card': openAddCardModal,
  'add-saved-card': addSavedCard,
  'remove-payment-method': (el) => removePaymentMethod(el.dataset.id),
  'back-to-profile': () => switchTab('profile'),
  'save-profile': saveProfile,
  'back': goBack,
  'toggle-favorite-current': () => toggleFavorite(currentSpot.id),
  'open-review-modal': openReviewModal,
  'submit-review': submitReview,
  'pick-star': (el) => { reviewRating = Number(el.dataset.value); renderStarPicker(); },
  'proceed-booking': proceedBooking,
  'open-guest-modal': openGuestModal,
  'save-guest': saveGuest,
  'booking-next': bookingNext,
  'process-payment': processPayment,
  'finish-booking': finishBooking,
  'save-trip-settings': saveTripSettings,
  'view-trip': (el) => viewTrip(el.dataset.id),
  'cancel-trip': cancelTrip,
  'open-spot': (el) => openSpot(el.dataset.id),
  'toggle-favorite': (el) => toggleFavorite(el.dataset.id),
  'set-image': (el) => {
    $('detail-main-img').src = el.dataset.url;
    document.querySelectorAll('.thumb-img').forEach((t) => t.classList.remove('active'));
    el.classList.add('active');
  }
};

function bindEvents() {
  document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('[data-close]');
    if (closeBtn) { closeModal(closeBtn.dataset.close); return; }
    if (e.target.classList && e.target.classList.contains('modal-overlay')) { closeModal(e.target.id); return; }
    const step = e.target.closest('[data-step]');
    if (step) { stepValue(step.dataset.step, Number(step.dataset.dir)); return; }
    const tripTabBtn = e.target.closest('[data-trip-tab]');
    if (tripTabBtn) { tripTab = tripTabBtn.dataset.tripTab; renderTrips(); return; }
    const cat = e.target.closest('[data-category]');
    if (cat) { setCategory(cat.dataset.category); return; }
    const expFilter = e.target.closest('[data-experience-filter]');
    if (expFilter) { activeExperienceFilter = expFilter.dataset.experienceFilter; renderExperiences(); return; }
    const nav = e.target.closest('[data-nav]');
    if (nav) { navigateTo(nav.dataset.nav); return; }
    const tab = e.target.closest('[data-tab]');
    if (tab) { switchTab(tab.dataset.tab); return; }
    if (e.target.closest('.map-directions-link')) return;
    const act = e.target.closest('[data-action]');
    if (act && actions[act.dataset.action]) {
      if (act.dataset.action === 'open-spot' && e.target.closest('[data-action="toggle-favorite"]')) return;
      actions[act.dataset.action](act);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTopModal();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[role="button"][data-action], [role="button"][data-nav]')) {
      e.preventDefault();
      e.target.click();
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
  document.querySelectorAll('input[name="paymethod"]').forEach((r) => r.addEventListener('change', syncPaymentMethod));
  $('tm-checkin').addEventListener('change', () => {
    const ci = $('tm-checkin').value;
    if (!ci) return;
    $('tm-checkout').min = addDays(ci, 1);
    if (!$('tm-checkout').value || $('tm-checkout').value <= ci) $('tm-checkout').value = addDays(ci, 1);
  });
  $('pay-card-number').addEventListener('input', (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 19);
    e.target.value = digits.replace(/(.{4})/g, '$1 ').trim();
  });
  const travelerPicker = $('saved-traveler-picker');
  if (travelerPicker) travelerPicker.addEventListener('change', () => {
    const person = (state.travelers || []).find((t) => t.id === travelerPicker.value);
    if (!person) return;
    state.guestDetails = { name: person.name, email: person.email || '', phone: person.phone || '' };
    saveState(); renderBooking();
  });
  $('saved-card-number').addEventListener('input', (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 19);
    e.target.value = digits.replace(/(.{4})/g, '$1 ').trim();
  });
  $('saved-card-expiry').addEventListener('input', (e) => {
    let d = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (d.length >= 3) d = d.slice(0, 2) + '/' + d.slice(2);
    e.target.value = d;
  });
  ['bookingUpdates', 'promotions', 'emailUpdates'].forEach((key) => {
    const el = $('pref-' + key);
    if (el) el.addEventListener('change', () => savePreference(key, el.checked));
  });
  $('pay-card-exp').addEventListener('input', (e) => {
    let d = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (d.length >= 3) d = d.slice(0, 2) + '/' + d.slice(2);
    e.target.value = d;
  });
}

function init() {
  ensureTripDefaults();
  applyTheme();
  renderUser();
  renderSearchWidget();
  bindEvents();
  refreshAll();
  if (window.__pendingFirebaseData) window.onFirebaseDataLoaded(window.__pendingFirebaseData);
  setTimeout(() => {
    if (isSignedIn() || state.guest) switchTab('home');
    else navigateTo('screen-welcome', { push: false });
  }, 1500);
}

document.addEventListener('DOMContentLoaded', init);
