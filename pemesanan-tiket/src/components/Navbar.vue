<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon, IconProfil, IconNotif, IconLove, IconSearch } from '@/components/icons'
import { ref } from 'vue'
import home from '@/views/home/home.vue'

const searchQuery = ref('')
const isMenuOpen = ref(false)

const searchMovies = () => {
  // Implement search logic here
  console.log('Searching:', searchQuery.value)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
  <nav class="bg-white shadow-lg fixed top-0 w-full z-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-6">
          <div class="flex items-center">
            <Icon name="logo" class="h-16 w-16 md:h-20 md:w-20" />
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-4">
            <RouterLink 
              to="/home" 
              class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/movie"
              class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
            >
              Movie
            </RouterLink>
            <RouterLink
              to="/upcoming"
              class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
            >
              Up Coming
            </RouterLink>
            <RouterLink
              to="/genre"
              class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
            >
              Genre
            </RouterLink>
          </div>
        </div>

        <!-- Desktop Search and Icons -->
        <div class="hidden md:flex items-center gap-4">
          <div class="flex items-center max-w-md px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full gap-3">
            <IconSearch />
            <input 
              type="text"
              v-model="searchQuery"
              placeholder="Cari Film..."
              class="w-full focus:outline-none"
              @input="searchMovies"
            />
          </div>
          <IconLove class="cursor-pointer" />
          <IconNotif class="cursor-pointer" />
          <IconProfil class="cursor-pointer" />
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2"
          @click="toggleMenu"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMenuOpen"
        class="md:hidden py-2"
      >
        <div class="flex flex-col space-y-2">
          <RouterLink 
            to="/" 
            class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
            @click="isMenuOpen = false"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/movie"
            class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
            @click="isMenuOpen = false"
          >
            Movie
          </RouterLink>
          <RouterLink
            to="/upcoming"
            class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
            @click="isMenuOpen = false"
          >
            Up Coming
          </RouterLink>
          <RouterLink
            to="/genre"
            class="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md"
            @click="isMenuOpen = false"
          >
            Genre
          </RouterLink>
          
          <!-- Mobile Search -->
          <div class="flex items-center px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full gap-3">
            <IconSearch />
            <input 
              type="text"
              v-model="searchQuery"
              placeholder="Cari Film..."
              class="w-full focus:outline-none"
              @input="searchMovies"
            />
          </div>

          <!-- Mobile Icons -->
          <div class="flex items-center justify-around py-2">
            <IconLove class="cursor-pointer" />
            <IconNotif class="cursor-pointer" />
            <IconProfil class="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
