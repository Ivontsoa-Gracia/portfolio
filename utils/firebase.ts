// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDLLHu_UDheYLT6_50KcwaxOE1kwfLf0Kw",
//   authDomain: "gracia-portfolio.firebaseapp.com",
//   projectId: "gracia-portfolio",
//   storageBucket: "gracia-portfolio.firebasestorage.app",
//   messagingSenderId: "164746460370",
//   appId: "1:164746460370:web:cc3138da373c0151b2810b",
//   measurementId: "G-WKXGGYM052"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp, getApps } from "firebase/app"
import { getMessaging } from "firebase/messaging"


export function getFirebaseMessaging() {

  const config = useRuntimeConfig()


  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId,
  }


  const app = getApps().length
    ? getApps()[0]
    : initializeApp(firebaseConfig)


  return getMessaging(app)

}