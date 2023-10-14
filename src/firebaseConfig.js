import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC0-4ja_PTgG7oU8smnLam9kmTvFUj26To",
  authDomain: "vue-3-2023-fbb03.firebaseapp.com",
  projectId: "vue-3-2023-fbb03",
  storageBucket: "vue-3-2023-fbb03.appspot.com",
  messagingSenderId: "96746445828",
  appId: "1:96746445828:web:9b9714180e38ebd7dd6951"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

export { auth };