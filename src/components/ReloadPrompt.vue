<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()
</script>

<template>
  <div v-if="offlineReady || needRefresh" class="pwa-prompt">
    <div v-if="offlineReady">App is ready to work offline 🎉</div>
    <div v-if="needRefresh">
      New content available
      <button @click="updateServiceWorker(true)">Reload</button>
    </div>
  </div>
</template>
