import { getToken } from "firebase/messaging"
import { getFirebaseMessaging } from "~~/utils/firebase"


export async function enableNotifications() {

  const permission = await Notification.requestPermission()

  if (permission !== "granted") {
    console.log("Notification refusée")
    return
  }


  const config = useRuntimeConfig()
  const messaging = getFirebaseMessaging()


  const token = await getToken(messaging, {
    vapidKey: config.public.firebaseVapidKey
  })


  console.log("🔥 FCM TOKEN :", token)

  await $fetch("/api/device-token", {
    method: "POST",
    body: {
      token,
      platform: navigator.userAgent,
    },
  })

  return token
}