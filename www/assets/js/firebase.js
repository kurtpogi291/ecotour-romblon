import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import {
  getAuth, onAuthStateChanged, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB7eY5nqafzmfHAgtIBethkUgoiXdeRmD0",
  authDomain: "ecotour-romblon.firebaseapp.com",
  databaseURL: "https://ecotour-romblon-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecotour-romblon",
  storageBucket: "ecotour-romblon.firebasestorage.app",
  messagingSenderId: "666750765150",
  appId: "1:666750765150:web:1dd541a90c349b84934ccf"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
window.firebaseDb = db;
window.firebaseRef = ref;
window.firebasePush = push;
window.firebaseSet = set;
window.firebaseAuth = auth;
window.firebaseAuthApi = {
  createAccount: async (name, email, password) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName: name });
    await set(ref(db, `users/${credential.user.uid}/profile`), {
      name, email, updatedAt: new Date().toISOString()
    });
    return credential.user;
  },
  signIn: async (email, password) => (await signInWithEmailAndPassword(auth, email, password)).user,
  signOut: () => signOut(auth),
  resetPassword: (email) => sendPasswordResetEmail(auth, email),
  saveUserState: (uid, data) => set(ref(db, `users/${uid}/appState`), data),
  loadUserState: async (uid) => {
    const { get } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js");
    const snapshot = await get(ref(db, `users/${uid}/appState`));
    return snapshot.exists() ? snapshot.val() : null;
  }
};
onAuthStateChanged(auth, (user) => {
  window.currentFirebaseUser = user || null;
  if (typeof window.onFirebaseAuthChanged === "function") window.onFirebaseAuthChanged(user || null);
});
onValue(ref(db, "destinations"), (snapshot) => {
  const data = snapshot.val();
  if (typeof window.onFirebaseDataLoaded === "function") window.onFirebaseDataLoaded(data);
  else window.__pendingFirebaseData = data;
}, () => {
  if (typeof window.onFirebaseError === "function") window.onFirebaseError();
});
