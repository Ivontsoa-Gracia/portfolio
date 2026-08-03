import { initializeApp, cert, getApps } from "firebase-admin/app"
import { getMessaging } from "firebase-admin/messaging"


export async function sendPushNotification(
  tokens: string[],
  payload: {
    title: string
    body: string
  }
) {

  if (!tokens || tokens.length === 0) {
    console.log("Aucun token FCM")
    return
  }


  const config = useRuntimeConfig()

  console.log({
    clientEmail: config.firebaseClientEmail,
    privateKey: !!config.firebasePrivateKey
  })


  if (getApps().length === 0) {

    initializeApp({
      credential: cert({
        projectId: config.firebaseProjectId,

        clientEmail: config.firebaseClientEmail,

        privateKey: config.firebasePrivateKey.replace(/\\n/g, "\n"),
      }),
    })

  }


  const response = await getMessaging()
    .sendEachForMulticast({
      tokens,

      notification: {
        title: payload.title,
        body: payload.body,
      },
    })


  console.log(
    "Notifications envoyées :",
    response.successCount
  )


  return response
}