<template>
  <div class="space-y-4">
    <h3 class="text-xl font-semibold flex items-center">
      <Icon icon="mdi:chart-bar" name="chart-bar" class="w-6 h-6 mr-2 text-blue-500" />
      Relatórios de Estoque
    </h3>
    <table class="min-w-full bg-white rounded shadow">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2">Tipo</th>
          <th class="p-2">Disponível</th>
          <th class="p-2">Necessidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in stock" :key="item.type" class="border-t">
          <td class="p-2">{{ item.type }}</td>
          <td class="p-2">{{ item.available }}</td>
          <td class="p-2">{{ item.required }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from '../services/api'
import { Icon } from '@iconify/vue'

const stock = ref<Array<{ type: string; available: number; required: number }>>([])
onMounted(async () => {
  const res = await api.get('/stock')
  stock.value = res.data
})
</script>