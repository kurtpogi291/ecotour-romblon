// ROMBLON DESTINATIONS & RESORTS DATA
let romblonSpots = [
  {
    id: 'bonbon', name: 'Bonbon Beach', location: 'Romblon Town', category: 'Beaches',
    description: 'Famous for its long, curving white sandbar connecting to Bang-og Island at low tide. Crystal clear waters ideal for swimming and sunset watching.',
    price: 'Free Entry', rawPrice: 0, rating: 4.9, 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'],
    highlights: ['White Sandbar', 'Sunset Point'], lat: 12.5833, lng: 122.2625, favorite: false,
    reviews: [{ user: 'Maria S.', stars: 5, comment: 'Breathtaking sandbar!' }]
  },
  {
    id: 'binucot', name: 'Binucot Beach Resort', location: 'Ferrol, Tablas', category: 'Resorts',
    description: 'A serene beachfront escape with cozy, air-conditioned rooms overlooking the sea or pool. Ideal for kayaking and scuba diving.',
    price: '₱845.50 / Night', rawPrice: 845.50, rating: 4.7, 
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Pool', 'Beachfront'], lat: 12.3833, lng: 121.9667, favorite: false,
    reviews: [{ user: 'Erika R.', stars: 4, comment: 'Great coastal drive and calm waters.' }]
  },
  {
    id: 'footprints', name: 'Footprints Beach Resort', location: 'San Andres', category: 'Resorts',
    description: 'Quiet beachfront spot with simple bungalows, poolside dining, and a relaxed atmosphere under coconut palms.',
    price: '₱1,120.00 / Night', rawPrice: 1120.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Bungalows', 'Bar'], lat: 12.5283, lng: 121.9861, favorite: true,
    reviews: [{ user: 'Leonard F.', stars: 5, comment: 'Awesome relaxing vibe!' }]
  },
  {
    id: 'g2', name: 'Mount Guiting-Guiting', location: 'Sibuyan Island', category: 'Mountains',
    description: 'Known as "G2", featuring knife-edge ridges and incredible untouched biodiversity. A must for serious hikers.',
    price: '₱500 Permit', rawPrice: 500.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Hiking', 'Wildlife'], lat: 12.4161, lng: 122.5694, favorite: false,
    reviews: [{ user: 'Alex H.', stars: 5, comment: 'Challenging but unforgettable.' }]
  },
  {
    id: 'looc', name: 'Looc Bay Fish Sanctuary', location: 'Looc, Tablas', category: 'Beaches',
    description: 'A protected marine sanctuary featuring a floating pontoon where you can swim and feed hundreds of colorful tropical fish.',
    price: '₱100 Entry', rawPrice: 100.00, rating: 4.6, 
    image: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Snorkeling', 'Marine Life'], lat: 12.2570, lng: 121.9961, favorite: false,
    reviews: [{ user: 'Samantha', stars: 5, comment: 'Lots of fish right off the dock!' }]
  },
  {
    id: 'carabao', name: 'Carabao Island (Hambil)', location: 'San Jose', category: 'Beaches',
    description: 'Often called Boracay’s quieter sister island. Famous for untouched white sand beaches and cliff diving spots.',
    price: '₱50 Envi Fee', rawPrice: 50.00, rating: 4.9, 
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Pristine Sand', 'Cliff Diving'], lat: 12.0667, lng: 121.9333, favorite: false,
    reviews: [{ user: 'Jake M.', stars: 5, comment: 'Just like Boracay before the crowds.' }]
  },
  {
    id: 'aglicay', name: 'Aglicay Beach Resort', location: 'Alcantara, Tablas', category: 'Resorts',
    description: 'A sprawling resort tucked into a cove with beautiful white sand and a scenic hillside viewpoint perfect for photography.',
    price: '₱1,500.00 / Night', rawPrice: 1500.00, rating: 4.5, 
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Scenic View', 'White Sand'], lat: 12.2858, lng: 122.0544, favorite: false,
    reviews: [{ user: 'Chris P.', stars: 4, comment: 'Great sunset view from the hill.' }]
  },
  {
    id: 'catingas', name: 'Catingas River', location: 'San Fernando, Sibuyan', category: 'Mountains',
    description: 'Awarded as one of the cleanest inland bodies of water in the Philippines. Features cool, crystal-clear water and diving platforms.',
    price: '₱30 Entry', rawPrice: 30.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Crystal Clear', 'Cliff Diving'], lat: 12.3551, lng: 122.5684, favorite: false,
    reviews: [{ user: 'Daniel', stars: 5, comment: 'The water is so cold and refreshing!' }]
  },
  {
    id: 'tiamban', name: 'Tiamban Beach', location: 'Romblon Town', category: 'Beaches',
    description: 'A popular local beach with fine white sand and gentle waves, located very close to the town center. Great for picnics and family outings.',
    price: '₱50 Entry', rawPrice: 50.00, rating: 4.4, 
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Family Friendly', 'Fine Sand'], lat: 12.5700, lng: 122.2541, favorite: false,
    reviews: [{ user: 'Anna L.', stars: 4, comment: 'Nice beach very near the town proper.' }]
  },
  {
    id: 'mablaran', name: 'Mablaran Falls', location: 'San Andres, Tablas', category: 'Mountains',
    description: 'A tranquil waterfall surrounded by lush tropical jungle. Offers cool, refreshing natural pools perfect for a quick dip.',
    price: '₱20 Entry', rawPrice: 20.00, rating: 4.5, 
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Waterfalls', 'Nature Trail'], lat: 12.5333, lng: 122.0167, favorite: false,
    reviews: [{ user: 'Leo', stars: 5, comment: 'Very peaceful and secluded.' }]
  },
  {
    id: 'tinagongdagat', name: 'Tinagong Dagat', location: 'Calatrava, Tablas', category: 'Beaches',
    description: 'A stunning "hidden sea" consisting of saltwater lakes surrounded by dramatic limestone karst cliffs, accessible by boat.',
    price: '₱500 Boat Tour', rawPrice: 500.00, rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1505993597083-3bd19fa85e54?auto=format&fit=crop&w=600&q=80',
    gallery: ['https://images.unsplash.com/photo-1505993597083-3bd19fa85e54?auto=format&fit=crop&w=600&q=80'],
    highlights: ['Hidden Lake', 'Limestone Cliffs'], lat: 12.6000, lng: 122.0667, favorite: false,
    reviews: [{ user: 'Sarah J.', stars: 5, comment: 'Reminds me of Palawan or El Nido!' }]
  }
];

let myTrips = [
  { id: 'SJGYD093', prop: 'Footprints Beach Resort', date: 'Dec 1 - 2, 2026', status: 'Upcoming', total: '₱1,120.00' },
  { id: 'ROM4492A', prop: 'Binucot Beach Resort', date: 'Oct 10 - 12, 2026', status: 'Past', total: '₱845.50' }
];

let currentUser = { name: 'Traveler', email: '', uid: null, authUser: null };
let activeCategory = 'All';
let currentDetailSpot = romblonSpots[0];
let searchQuery = '';
let isDarkMode = false;

// VARIABLES
let leafletMap = null;
let mapMarkersGroup = null;
let currentSlideIndex = 0;
let carouselInterval = null;
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('ecotour-theme');
  if(savedTheme === 'dark') toggleTheme(true);

  setTimeout(() => navigateTo('screen-welcome'), 1500);
  initCarousel();
  renderTrips();
});

// FIREBASE SYNC CALLBACK
window.onFirebaseDataLoaded = function(data) {
  if (data) {
    const firebaseSpots = Object.keys(data).map(key => {
      const s = data[key];
      return {
        ...s,
        reviews: s.reviews ? Object.values(s.reviews) : [],
        gallery: s.gallery || [s.image],
        highlights: s.highlights || ['Scenic', 'Top Rated'],
        favorite: s.favorite || false,
        rawPrice: s.rawPrice || 845.50
      };
    });
    firebaseSpots.forEach(fs => {
      if(!romblonSpots.find(rs => rs.id === fs.id)) romblonSpots.push(fs);
    });

    const badge = document.getElementById('db-status-badge');
    if(badge) { badge.innerText = 'Live Deals'; badge.classList.add('online'); }
    
    initCarousel();
    renderDestinations();
    if(leafletMap) updateLeafletMarkers();
  }
};

// PROFILE / ACCOUNT SETTINGS
async function saveUserProfile() {
  const newName = document.getElementById('ep-name').value.trim();
  if (newName.length < 2) return alert('Please enter a valid display name.');
  if (!currentUser.authUser || !window.firebaseSaveProfile) {
    alert('Sign in to update your account profile.');
    return;
  }
  try {
    await window.firebaseSaveProfile(currentUser.authUser, newName);
    updateSignedInProfile(currentUser.authUser);
    document.getElementById('edit-profile-modal').classList.add('hidden');
  } catch (error) {
    console.error('Profile update failed:', error);
    alert(error.message || 'Could not update your profile.');
  }
}

// THEME TOGGLE
function toggleTheme(forceDark = false) {
  isDarkMode = forceDark || !document.body.classList.contains('dark-mode');
  
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    if (document.getElementById('theme-btn')) document.getElementById('theme-btn').innerText = '☀️';
    if (document.getElementById('settings-theme-icon')) document.getElementById('settings-theme-icon').innerText = '☀️';
    if (document.getElementById('theme-status-text')) document.getElementById('theme-status-text').innerText = 'On';
    localStorage.setItem('ecotour-theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    if (document.getElementById('theme-btn')) document.getElementById('theme-btn').innerText = '🌙';
    if (document.getElementById('settings-theme-icon')) document.getElementById('settings-theme-icon').innerText = '🌙';
    if (document.getElementById('theme-status-text')) document.getElementById('theme-status-text').innerText = 'Off';
    localStorage.setItem('ecotour-theme', 'light');
  }
}

// AUTH FLOW
function skipAuth() {
  currentUser = { name: 'Traveler', email: '', uid: null, authUser: null };
  updateSignedInProfile(null);
  switchTab('home');
}

function updateSignedInProfile(user) {
  currentUser.uid = user ? user.uid : null;
  currentUser.authUser = user || null;
  currentUser.email = user ? (user.email || '') : '';
  currentUser.name = user ? (user.displayName || user.email?.split('@')[0] || 'Traveler') : 'Traveler';
  const firstName = currentUser.name.split(' ')[0];
  const profileName = document.getElementById('profile-name');
  const profileEmail = document.getElementById('profile-email');
  const homeName = document.getElementById('home-user-name');
  const editName = document.getElementById('ep-name');
  const editEmail = document.getElementById('ep-email');
  if (profileName) profileName.innerText = currentUser.name;
  if (profileEmail) profileEmail.innerText = currentUser.email || 'Not signed in';
  if (homeName) homeName.innerText = firstName;
  if (editName) editName.value = currentUser.name;
  if (editEmail) editEmail.value = currentUser.email;
}
window.onFirebaseAuthChanged = updateSignedInProfile;

window.onFirebaseBookingsLoaded = function(bookings) {
  myTrips = bookings.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  renderTrips();
};

async function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-pass').value;
  if (!window.firebaseSignIn) return alert('Firebase is not ready. Check your connection and try again.');
  try {
    await window.firebaseSignIn(email, password);
    switchTab('home');
  } catch (error) {
    console.error('Login failed:', error);
    const messages = {
      'auth/invalid-credential': 'Email or password is incorrect.',
      'auth/user-not-found': 'No account exists for this email.',
      'auth/too-many-requests': 'Too many attempts. Please try again later.',
      'auth/network-request-failed': 'Network error. Check your internet connection.'
    };
    alert(messages[error.code] || error.message || 'Unable to sign in.');
  }
}

async function handleSignupSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-pass').value;
  if (name.length < 2) return alert('Please enter your full name.');
  if (password.length < 6) return alert('Password must be at least 6 characters.');
  if (!window.firebaseSignUp) return alert('Firebase is not ready. Check your connection and try again.');
  try {
    await window.firebaseSignUp(email, password, name);
    document.getElementById('reg-pass').value = '';
    switchTab('home');
  } catch (error) {
    console.error('Signup failed:', error);
    const messages = {
      'auth/email-already-in-use': 'An account already exists for this email.',
      'auth/weak-password': 'Choose a stronger password (at least 6 characters).',
      'auth/invalid-email': 'Please enter a valid email address.',
      'auth/network-request-failed': 'Network error. Check your internet connection.'
    };
    alert(messages[error.code] || error.message || 'Unable to create account.');
  }
}

async function handlePasswordReset() {
  const email = document.getElementById('login-email').value.trim();
  if (!email) return alert('Enter your email address in the Email field first.');
  if (!window.firebasePasswordReset) return alert('Firebase is not ready. Try again in a moment.');
  try {
    await window.firebasePasswordReset(email);
    alert('Password reset email sent. Check your inbox.');
  } catch (error) {
    console.error('Password reset failed:', error);
    alert(error.message || 'Could not send password reset email.');
  }
}

function signOut() {
  if (!confirm('Are you sure you want to sign out?')) return;
  if (window.firebaseSignOut) {
    window.firebaseSignOut().then(() => {
      myTrips = [];
      renderTrips();
      navigateTo('screen-welcome');
    }).catch(error => alert(error.message || 'Unable to sign out.'));
  } else {
    navigateTo('screen-welcome');
  }
}

// SEARCH & FILTER
function handleGlobalSearch(val) {
  searchQuery = val.toLowerCase();
  document.getElementById('home-search').value = val;
  if(document.getElementById('map-search')) document.getElementById('map-search').value = val;
  renderDestinations();
  if(leafletMap) updateLeafletMarkers();
}
function filterCategory(category, elem) {
  activeCategory = category;
  document.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
  elem.classList.add('active');
  renderDestinations();
  if(leafletMap) updateLeafletMarkers();
}
function scrollToDestinations() {
  document.getElementById('destinations-anchor').scrollIntoView({ behavior: 'smooth' });
}

// FEED RENDERERS
function renderDestinations() {
  const container = document.getElementById('destinations-list');
  if(!container) return;

  const filtered = romblonSpots.filter(s => {
    const mCat = activeCategory === 'All' || s.category === activeCategory;
    const mSearch = s.name.toLowerCase().includes(searchQuery) || s.location.toLowerCase().includes(searchQuery);
    return mCat && mSearch;
  });

  if(filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:20px;">No results found.</p>`;
    return;
  }

  container.innerHTML = filtered.map(s => `
    <div class="spot-card" onclick="openSpotDetail('${s.id}')">
      <img src="${s.image}" alt="${s.name}" />
      <div class="spot-card-info">
        <h5>${s.name}</h5>
        <p class="spot-location">📍 ${s.location}</p>
        <p class="spot-desc">${s.description}</p>
      </div>
      <button class="fav-btn ${s.favorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${s.id}')">
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>
  `).join('');
}

function toggleFavorite(id) {
  const s = romblonSpots.find(x => x.id === id);
  if(s) {
    s.favorite = !s.favorite;
    renderDestinations();
    renderSavedItems();
    if(leafletMap) updateLeafletMarkers();
    if(currentDetailSpot && currentDetailSpot.id === id) updateDetailFavoriteBtn();
  }
}

function renderSavedItems(filterText = '') {
  const container = document.getElementById('saved-items-list');
  if(!container) return;
  const saved = romblonSpots.filter(s => s.favorite && s.name.toLowerCase().includes(filterText.toLowerCase()));

  if(saved.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:20px;">No saved properties.</p>`;
    return;
  }

  container.innerHTML = saved.map(s => `
    <div class="spot-card" onclick="openSpotDetail('${s.id}')">
      <img src="${s.image}" alt="${s.name}" />
      <div class="spot-card-info">
        <h5>${s.name}</h5>
        <p class="spot-location">📍 ${s.location}</p>
      </div>
      <button class="fav-btn active" onclick="event.stopPropagation(); toggleFavorite('${s.id}')">
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>
  `).join('');
}

// TRIPS TAB
function switchTripTab(elem, type) {
  document.querySelectorAll('.trip-tab').forEach(t => t.classList.remove('active'));
  elem.classList.add('active');
  renderTrips(type);
}

function renderTrips(type = 'upcoming') {
  const container = document.getElementById('trips-list');
  if(!container) return;
  const filtered = myTrips.filter(t => type === 'upcoming' ? t.status === 'Upcoming' : t.status === 'Past');
  
  if(filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:20px;">No ${type} trips.</p>`;
    return;
  }
  container.innerHTML = filtered.map(t => `
    <div class="trip-card">
      <div class="trip-header">
        <span style="font-size:12px; font-weight:700;">Ref: #${t.id}</span>
        <span class="trip-status ${t.status === 'Upcoming' ? 'status-upcoming' : 'status-past'}">${t.status}</span>
      </div>
      <div class="trip-body">
        <h3>${t.prop}</h3>
        <p>📅 ${t.date}</p>
        <p style="font-weight:700; color:var(--primary-brand); margin-top:4px;">Total: ${t.total}</p>
        <button class="btn btn-secondary" style="margin-top:10px;" onclick="alert('Viewing booking details...')">Manage Booking</button>
      </div>
    </div>
  `).join('');
}

// MAP FIX: Added explicit referrerPolicy to prevent 403 Access Blocked errors from OSM
function ensureMapRendered() {
  const container = document.getElementById('map-container');
  if (!container) return;
  
  if (!leafletMap) {
    leafletMap = L.map('map-container', { zoomControl: false }).setView([12.45, 122.25], 9.5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors',
      referrerPolicy: 'origin-when-cross-origin'
    }).addTo(leafletMap);
    L.control.zoom({ position: 'bottomright' }).addTo(leafletMap);
    mapMarkersGroup = L.layerGroup().addTo(leafletMap);
    updateLeafletMarkers();
  }
  setTimeout(() => leafletMap.invalidateSize(), 100);
}

function updateLeafletMarkers() {
  if (!leafletMap || !mapMarkersGroup) return;
  mapMarkersGroup.clearLayers();
  
  const filtered = romblonSpots.filter(s => (activeCategory === 'All' || s.category === activeCategory) && (s.name.toLowerCase().includes(searchQuery) || s.location.toLowerCase().includes(searchQuery)));

  filtered.forEach(s => {
    if (s.lat && s.lng) {
      const marker = L.marker([s.lat, s.lng]);
      marker.bindPopup(`
        <div class="map-popup-card" onclick="openSpotDetail('${s.id}')">
          <img src="${s.image}" class="map-popup-img" />
          <div class="map-popup-info">
            <strong>${s.name}</strong>
            <p class="map-popup-loc">📍 ${s.location}</p>
            <button class="map-popup-btn">View Details</button>
          </div>
        </div>
      `);
      mapMarkersGroup.addLayer(marker);
    }
  });
}

// DETAILS
function openSpotDetail(id) {
  const s = romblonSpots.find(x => x.id === id);
  if(!s) return;
  currentDetailSpot = s;

  document.getElementById('detail-main-img').src = s.image;
  document.getElementById('detail-title').innerText = s.name;
  document.getElementById('detail-location').innerText = s.location;
  document.getElementById('detail-rating').innerText = s.rating;
  document.getElementById('detail-desc').innerText = s.description;
  document.getElementById('detail-price').innerText = s.price;
  document.getElementById('bar-price').innerText = s.price;

  const thumbs = document.getElementById('gallery-thumbs');
  thumbs.innerHTML = s.gallery.map((url, i) => `<img src="${url}" class="thumb-img ${i===0?'active':''}" onclick="setMainDetailImage('${url}', this)" />`).join('');

  const highlights = document.getElementById('detail-highlights');
  highlights.innerHTML = s.highlights.map(h => `<span class="tag">✓ ${h}</span>`).join('');
  
  const roomArea = document.getElementById('room-selection-area');
  roomArea.style.display = s.category === 'Resorts' ? 'block' : 'none';

  renderReviews();
  updateDetailFavoriteBtn();
  navigateTo('screen-details');
}

function setMainDetailImage(url, el) {
  document.getElementById('detail-main-img').src = url;
  document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}
function updateDetailFavoriteBtn() {
  const b = document.getElementById('detail-favorite-btn');
  if(b) b.classList.toggle('active', currentDetailSpot.favorite);
}
function toggleFavoriteCurrent() { toggleFavorite(currentDetailSpot.id); }

// REVIEWS
function renderReviews() {
  const c = document.getElementById('reviews-container');
  const r = currentDetailSpot.reviews || [];
  document.getElementById('review-count').innerText = `${r.length} verified reviews`;
  c.innerHTML = r.map(x => `
    <div class="review-card">
      <div class="review-header">
        <span class="review-user">${x.user}</span>
        <span class="review-stars">${'★'.repeat(x.stars)}</span>
      </div>
      <p class="review-text">"${x.comment}"</p>
    </div>
  `).join('');
}
function submitNewReview() {
  const user = currentUser.name || 'Anonymous';
  const stars = parseInt(document.getElementById('new-review-rating').value);
  const comment = document.getElementById('new-review-comment').value.trim();
  if(!comment) return alert('Please write a comment.');

  const n = { user, stars, comment };
  currentDetailSpot.reviews.push(n);
  renderReviews();

  if (window.firebaseDb && window.firebasePush && window.firebaseRef) {
    const ref = window.firebaseRef(window.firebaseDb, `destinations/${currentDetailSpot.id}/reviews`);
    window.firebaseSet(window.firebasePush(ref), n);
  }

  document.getElementById('review-modal').classList.add('hidden');
  document.getElementById('new-review-comment').value = '';
}

// DYNAMIC BOOKING FLOW FIX
function proceedToBookingSummary() {
  document.getElementById('summary-title').innerText = currentDetailSpot.name;
  document.getElementById('summary-img').src = currentDetailSpot.image;

  // Dynamically calculate price based on selected spot
  const displayPrice = currentDetailSpot.price;
  document.getElementById('summary-total-price').innerText = displayPrice;
  document.getElementById('pay-final-amount').innerText = displayPrice;

  navigateTo('screen-booking');
}

function saveGuestDetails() {
  document.getElementById('guest-name-val').innerText = document.getElementById('edit-guest-name').value;
  document.getElementById('guest-phone-val').innerText = document.getElementById('edit-guest-phone').value;
  document.getElementById('guest-modal').classList.add('hidden');
}

function processPayment() { navigateTo('screen-confirmation'); }

async function finishBooking() {
  const booking = {
    id: 'RMBL' + Math.floor(Math.random() * 9000 + 1000),
    destinationId: currentDetailSpot.id,
    prop: currentDetailSpot.name,
    date: 'Dec 1 - 2, 2026',
    status: 'Upcoming',
    total: currentDetailSpot.price,
    createdAt: Date.now()
  };
  if (!currentUser.uid || !window.firebaseSaveBooking) {
    alert('Please sign in to save and sync a booking to your account.');
    navigateTo('screen-login');
    return;
  }
  try {
    await window.firebaseSaveBooking(currentUser.uid, booking);
    myTrips.unshift(booking);
    renderTrips();
    switchTab('trips');
  } catch (error) {
    console.error('Booking save failed:', error);
    alert('Your booking could not be saved. Please try again.');
  }
}

// CAROUSEL LOGIC
function initCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsContainer = document.getElementById('carousel-dots');
  const wrap = document.getElementById('carousel-wrapper');
  if(!track) return;

  track.innerHTML = romblonSpots.slice(0,3).map(s => `
    <div class="carousel-slide" style="background-image: url('${s.image}');" onclick="openSpotDetail('${s.id}')">
      <div class="banner-content"><h2>${s.name}</h2><p>📍 ${s.location}</p></div>
    </div>
  `).join('');
  dotsContainer.innerHTML = romblonSpots.slice(0,3).map((_, i) => `<div class="dot ${i===0?'active':''}"></div>`).join('');
  
  startCarouselAutoPlay();
  wrap.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; stopCarouselAutoPlay(); }, { passive: true });
  wrap.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 40) nextHeroSlide();
    if (touchEndX > touchStartX + 40) prevHeroSlide();
    startCarouselAutoPlay();
  }, { passive: true });
}
function updateCarouselUI() {
  const track = document.getElementById('carousel-track');
  if(track) track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  document.querySelectorAll('.carousel-dots .dot').forEach((d, i) => d.classList.toggle('active', i === currentSlideIndex));
}
function nextHeroSlide() { currentSlideIndex = (currentSlideIndex + 1) % 3; updateCarouselUI(); }
function prevHeroSlide() { currentSlideIndex = (currentSlideIndex - 1 + 3) % 3; updateCarouselUI(); }
function startCarouselAutoPlay() { stopCarouselAutoPlay(); carouselInterval = setInterval(nextHeroSlide, 4000); }
function stopCarouselAutoPlay() { clearInterval(carouselInterval); }

// NAVIGATION CONTROLLER
function navigateTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');

  const bNav = document.getElementById('bottom-nav');
  if (['screen-splash', 'screen-welcome', 'screen-login', 'screen-signup'].includes(screenId)) {
    bNav.classList.add('hidden');
  } else {
    bNav.classList.remove('hidden');
  }
  if (screenId === 'screen-map') ensureMapRendered();
}
function switchTab(tabName) {
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`nav-${tabName}`);
  if(btn) btn.classList.add('active');

  if(tabName === 'home') navigateTo('screen-home');
  else if(tabName === 'saved') { renderSavedItems(); navigateTo('screen-saved'); }
  else if(tabName === 'trips') { renderTrips(); navigateTo('screen-trips'); }
  else if(tabName === 'map') navigateTo('screen-map');
  else if(tabName === 'profile') navigateTo('screen-profile');
}

function ensureMapRendered() {
  const container = document.getElementById('map-container');
  if (!container) return;
  
  if (!leafletMap) {
    // Initialize map centered around Romblon
    leafletMap = L.map('map-container', { zoomControl: false }).setView([12.45, 122.25], 9.5);
    
    // Using CARTO Raster Tiles (No API key, highly reliable, lightning-fast CDN)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      noWrap: true
    }).addTo(leafletMap);

    L.control.zoom({ position: 'bottomright' }).addTo(leafletMap);
    mapMarkersGroup = L.layerGroup().addTo(leafletMap);
    updateLeafletMarkers();
  }
  
  // Force size recalculation when tab opens
  setTimeout(() => {
    leafletMap.invalidateSize();
  }, 100);
}