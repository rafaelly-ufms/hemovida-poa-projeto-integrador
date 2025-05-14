<template>
  <div class="p-4 space-y-4">
    <h2 class="text-xl font-semibold flex items-center gap-2">
      <Icon icon="mdi:bell-alert" class="text-yellow-500" />
      Notificações
    </h2>

    <ul class="bg-white rounded-lg shadow divide-y divide-gray-200">
      <li
        v-for="note in notifications"
        :key="note.id"
        class="p-4 hover:bg-yellow-50 transition flex justify-between items-start"
      >
        <div>
          <p class="text-gray-800">{{ note.message }}</p>
          <span class="text-sm text-gray-400">{{ note.date }}</span>
        </div>
        <Icon icon="mdi:chevron-right" class="text-gray-300 w-5 h-5" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchNotifications } from '../services/notifications'
import { Icon } from '@iconify/vue'

const notifications = ref<Array<{ id: number; message: string; date: string }>>([])

onMounted(async () => {
  notifications.value = await fetchNotifications()
})
</script>
