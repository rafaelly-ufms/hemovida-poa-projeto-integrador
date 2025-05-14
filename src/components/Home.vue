<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
    <main class="p-6 space-y-6 max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold text-center">Bem-vindo ao HEMOVIDA POA</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 bg-white rounded-xl shadow flex items-center space-x-4 hover:bg-red-50 transition">
          <Icon icon="mdi:calendar" class="h-8 w-8 text-red-600" />
          <RouterLink to="/agendar" class="font-medium text-lg">Agendar Doação</RouterLink>
        </div>

        <div class="p-4 bg-white rounded-xl shadow flex items-center space-x-4 hover:bg-green-50 transition">
          <Icon icon="mdi:account-plus" class="h-8 w-8 text-green-600" />
          <RouterLink to="/cadastro" class="font-medium text-lg">Cadastrar Novo Doador</RouterLink>
        </div>

        <div class="p-4 bg-white rounded-xl shadow flex items-center space-x-4 hover:bg-blue-50 transition">
          <Icon icon="mdi:chart-bar" class="h-8 w-8 text-blue-600" />
          <RouterLink to="/estoque" class="font-medium text-lg">Relatórios de Estoque</RouterLink>
        </div>

        <div class="p-4 bg-white rounded-xl shadow flex items-center space-x-4 hover:bg-yellow-50 transition">
          <Icon icon="mdi:bell" class="h-8 w-8 text-yellow-600" />
          <RouterLink to="/notificacoes" class="font-medium text-lg">Notificações</RouterLink>
        </div>
      </div>

      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>
