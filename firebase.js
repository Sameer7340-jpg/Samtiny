import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBgmKxKLsyOqq7ZTdvvsD8aT2_wcgDpmHs",
    authDomain: "samtiny-auth.firebaseapp.com",
    projectId: "samtiny-auth",
    storageBucket: "samtiny-auth.firebasestorage.app",
    messagingSenderId: "791323731204",
    appId: "1:791323731204:web:c72916fb6fb2340d5c1c51"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
