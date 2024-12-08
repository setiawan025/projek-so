<script setup lang="ts">
import { ref } from 'vue';

// Generate array of years from current year to 10 years ahead
const currentYear = new Date().getFullYear();
const years = Array.from({length: 10}, (_, i) => (currentYear + i).toString());

const selectedYear = ref('');
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectYear = (year: string) => {
  selectedYear.value = year;
  isOpen.value = false;
};
</script>

<template>
  <div class="relative w-[200px]">
    <button 
      @click="toggleDropdown"
      class="w-full h-[47px] px-3 flex items-center justify-between border-2 border-[#4F4C4C] rounded-lg"
    >
      {{ selectedYear || 'Select Year' }}
      <svg 
        class="w-4 h-4"
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div 
      v-if="isOpen" 
      class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
    >
      <ul>
        <li 
          v-for="year in years" 
          :key="year"
          @click="selectYear(year)"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ year }}
        </li>
      </ul>
    </div>
  </div>
</template>
