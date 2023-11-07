
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5hFL3mzi47Lp0HPXj98WXaz7VBTf8cOE",
  authDomain: "hotel-booking-jpck.firebaseapp.com",
  projectId: "hotel-booking-jpck",
  storageBucket: "hotel-booking-jpck.appspot.com",
  messagingSenderId: "84953429175",
  appId: "1:84953429175:web:4353e5dcb7c7c195c10932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;