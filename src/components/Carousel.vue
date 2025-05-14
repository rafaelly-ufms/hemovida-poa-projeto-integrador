<template>
  <div class="relative w-full h-64 overflow-hidden rounded-lg shadow-lg bg-white mt-4">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute w-full h-full transition-opacity duration-700 ease-in-out"
      :class="{
        'opacity-100 z-10': index === currentSlide,
        'opacity-0 z-0': index !== currentSlide
      }"
    >
      <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
      <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
        <h3 class="text-lg font-semibold">{{ slide.title }}</h3>
        <p class="text-sm">{{ slide.description }}</p>
      </div>
    </div>
    <!-- Botões -->
    <button @click="prevSlide" class="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100">
      ‹
    </button>
    <button @click="nextSlide" class="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100">
      ›
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const slides = ref([
  {
image: 'https://estado.rs.gov.br/upload/recortes/202311/16183728_2106118_GDO.jpeg',
    title: 'Ação Solidária no Parque da Redenção',
    description: 'Doe sangue neste domingo e ajude a salvar vidas no Hemocentro Móvel!'
  },
  {
    image: 'https://www.estado.rs.gov.br/upload/recortes/202007/14183609_1862854_GD.png',
    title: 'Urgente: Tipos O- e A+ em baixa',
    description: 'Procura-se doadores com urgência nos postos de coleta da zona sul.'
  },
  {
    image: 'https://www.camarapoa.rs.gov.br/banco_de_imagens/imagens/68740/grande/IMG_6826.JPG?1658006929',
    title: 'Semana do Doador de Sangue',
    description: 'Participe da programação especial com brindes, palestras e certificados.'
  }
])

const currentSlide = ref(0)

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

let interval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>
