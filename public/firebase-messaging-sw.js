importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
)

importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
)


firebase.initializeApp({
  apiKey: "AIzaSyDLLHu_UDheYLT6_50KcwaxOE1kwfLf0Kw",
  authDomain: "gracia-portfolio.firebaseapp.com",
  projectId: "gracia-portfolio",
  storageBucket: "gracia-portfolio.firebasestorage.app",
  messagingSenderId: "164746460370",
  appId: "1:164746460370:web:cc3138da373c0151b2810b"
})


const messaging = firebase.messaging()


messaging.onBackgroundMessage((payload) => {

  console.log("MESSAGE BACKGROUND", payload)

  const title = payload.notification?.title || "Nouvelle notification"

  self.registration.showNotification(
    title,
    {
      body: payload.notification?.body || "",
      icon: "/icon-192.png"
    }
  )

})


self.addEventListener("notificationclick", (event) => {

  event.notification.close()

  event.waitUntil(
    clients.openWindow("/")
  )

})