<template>
  <div class="max-w-md mx-auto bg-white p-6 rounded shadow">
    <h3 class="text-xl font-semibold mb-4 flex items-center">
      <Icon icon="mdi:user-plus" name="user-plus" class="w-6 h-6 mr-2 text-green-500" />
      Cadastrar Doador
    </h3>
    <form class="space-y-4" @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Nome completo" class="w-full border rounded p-2" required />
      <select v-model="bloodType" class="w-full border rounded p-2" required>
        <option disabled value="">Tipo sanguíneo</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
      <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Cadastrar</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { api } from '../services/api'
import { Icon } from '@iconify/vue'

const name = ref('')
const bloodType = ref('')
const types = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
async function register() {
  await api.post('/donors', { name: name.value, bloodType: bloodType.value })
  alert('Cadastro realizado!')
}
</script>