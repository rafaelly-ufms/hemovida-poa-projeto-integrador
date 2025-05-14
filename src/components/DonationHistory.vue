<template>
  <div class="space-y-4">
    <h3 class="text-xl font-semibold flex items-center">
      <Icon icon="mdi:history" class="w-6 h-6 mr-2 text-purple-500" />
      Histórico de Doações
    </h3>
    <table class="min-w-full bg-white rounded shadow">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2">Data</th>
          <th class="p-2">Local</th>
          <th class="p-2">Tipo Sanguíneo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in history" :key="item.id" class="border-t">
          <td class="p-2">{{ item.date }}</td>
          <td class="p-2">{{ item.location }}</td>
          <td class="p-2">{{ item.bloodType }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from '../services/api'
import { Icon } from '@iconify/vue'

const history = ref<Array<{ id: number; date: string; location: string; bloodType: string }>>([])
onMounted(async () => {
  const res = await api.get('/donation-history')
  history.value = res.data
})
</script>