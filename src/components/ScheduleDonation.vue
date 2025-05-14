<template>
  <div class="max-w-md mx-auto bg-white p-6 rounded shadow">
    <h3 class="text-xl font-semibold mb-4 flex items-center">
      <Icon icon="mdi:calendar" name="calendar" class="w-6 h-6 mr-2 text-red-500" />
      Agendar Doação
    </h3>
    <form class="space-y-4" @submit.prevent="schedule">
      <input type="date" v-model="date" class="w-full border rounded p-2" required />
      <input type="time" v-model="time" class="w-full border rounded p-2" required />
      <button type="submit" class="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Agendar</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { api } from '../services/api'
import { Icon } from '@iconify/vue'

const date = ref('')
const time = ref('')
async function schedule() {
  await api.post('/appointments', { date: date.value, time: time.value })
  alert('Agendamento realizado!')
}
</script>