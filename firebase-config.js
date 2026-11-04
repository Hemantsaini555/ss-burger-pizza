// Paste your Firebase Web API key below before publishing.
// The other project values are already filled in from your Firebase project.
const firebaseConfig = {
  apiKey: "PASTE_YOUR_FIREBASE_WEB_API_KEY_HERE",
  authDomain: "ss-burger-pizza-5d4fb.firebaseapp.com",
  projectId: "ss-burger-pizza-5d4fb",
  storageBucket: "ss-burger-pizza-5d4fb.firebasestorage.app",
  messagingSenderId: "842505677312",
  appId: "1:842505677312:web:45083d8d32ae1cf79486e5"
};
window.firebaseConfigReady = !!firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("PASTE_");
