import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7eY5nqafzmfHAgtIBethkUgoiXdeRmD0",
  authDomain: "ecotour-romblon.firebaseapp.com",
  databaseURL: "https://ecotour-romblon-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecotour-romblon",
  storageBucket: "ecotour-romblon.firebasestorage.app",
  messagingSenderId: "666750765150",
  appId: "1:666750765150:web:1dd541a90c349b84934ccf"
};

function deliver(data) {
  if (typeof window.onFirebaseDataLoaded === "function") window.onFirebaseDataLoaded(data);
  else window.__pendingFirebaseData = data;
}

try {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  window.firebaseDb = db;
  window.firebaseRef = ref;
  window.firebasePush = push;
  window.firebaseSet = set;
  onValue(ref(db, "destinations"), (snapshot) => deliver(snapshot.val()), () => {
    if (typeof window.onFirebaseError === "function") window.onFirebaseError();
  });
} catch (e) {
  if (typeof window.onFirebaseError === "function") window.onFirebaseError();
}
