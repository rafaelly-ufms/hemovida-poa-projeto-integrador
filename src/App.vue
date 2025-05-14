<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
    <header class="bg-white shadow-md p-4 flex justify-between items-center relative z-50">
      <router-link to="/" class="flex items-center space-x-2">
        <img src="./assets/logo-hp.png" alt="Logo HEMOVIDA POA" class="h-10 w-auto" />
      </router-link>

      <button @click="toggleMenu" class="md:hidden text-gray-800 focus:outline-none z-50">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav
        :class="[
          'transition-all duration-300',
          isMenuOpen
            ? 'fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-center z-40'
            : 'hidden md:flex md:flex-row md:space-x-6'
        ]"
      >
        <router-link @click="closeMenu" to="/cadastro" class="text-xl text-gray-800 hover:text-red-500">Cadastro</router-link>
        <router-link @click="closeMenu" to="/agendar" class="text-xl text-gray-800 hover:text-red-500">Agendar</router-link>
        <router-link @click="closeMenu" to="/estoque" class="text-xl text-gray-800 hover:text-red-500">Relatórios</router-link>
        <router-link @click="closeMenu" to="/notificacoes" class="text-xl text-gray-800 hover:text-red-500">Notificações</router-link>
        <router-link @click="closeMenu" to="/historico" class="text-xl text-gray-800 hover:text-red-500">Histórico</router-link>
      </nav>
    </header>

<Carousel />

<main class="p-6">
  <router-view></router-view>
</main>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Carousel from './components/Carousel.vue'


const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style>
body.menu-open {
  overflow: hidden;
}
</style>
