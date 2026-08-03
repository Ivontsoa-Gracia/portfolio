<script setup lang="ts">

import { onMounted } from "vue"
import { enableNotifications } from "~~/services/firebase-notification"


onMounted(async () => {

  const token = await enableNotifications()

  console.log(
    "Mon appareil est enregistré :",
    token
  )

})

</script>


<template>

  <div class="p-10">
    Activation des notifications...
  </div>

</template>