// plugins/firebase.client.ts

import { enableNotifications } from "~~/services/firebase-notification"


export default defineNuxtPlugin(() => {

  console.log("Firebase notification init")

  enableNotifications()

})