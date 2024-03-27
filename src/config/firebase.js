import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDmro41O3sFcfByJRAMG710a2MuEv9jARE",
    authDomain: "swapsrus-4e99b.firebaseapp.com",
    projectId: "swapsrus-4e99b",
    storageBucket: "swapsrus-4e99b.appspot.com",
    messagingSenderId: "930827380100",
    appId: "1:930827380100:web:900ad1cab5819411b3e9d1",
    measurementId: "G-ZRME33XPL6"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;