import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';


const app = initializeApp(
    {
        apiKey: "AIzaSyA9lW5Pu1MCQrMASm3gcQGvMUyyf8fpgbk",
        authDomain: "netflix-18900.firebaseapp.com",
        projectId: "netflix-18900",
        storageBucket: "netflix-18900.appspot.com",
        messagingSenderId: "670701837913",
        appId: "1:670701837913:web:dc5c7d4619eded20addb48"
    }
);

// seedDatabase(getFirestore(app));
const db = getFirestore(app);

export {app, db};
