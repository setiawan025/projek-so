<script setup lang="ts">
import { ref } from 'vue';
import { IconLocation } from '@/components/icons';

const locations = ref([
  {
    name: 'SUMEDANG XXI',
    distance: '0.6KM',
    address: 'Plaza Asia sumedang Jl Mayor Abdurahman No.255 Kota Kaler, Sumedang Utara Kab. Sumedang Jawa Barat'
  },
  {
    name: 'CIREBON XXI', 
    distance: '2.1KM',
    address: 'Jl. Cipto Mangunkusumo No.26, Pekiringan, Kec. Kesambi, Kota Cirebon'
  },
  {
    name: 'BANDUNG XXI',
    distance: '5.3KM', 
    address: 'Jl. Merdeka No.56, Citarum, Kec. Bandung Wetan, Kota Bandung'
  }
]);

const isOpen = ref(false);
const selectedLocation = ref(locations.value[0]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLocation = (location: any) => {
  selectedLocation.value = location;
  isOpen.value = false;
};
</script>

<template>
  <div class="relative">
    <button 
      @click="toggleDropdown"
      class="flex items-center gap-2 px-4 py-2 border-2  rounded-xl hover:bg-blue-400 hover:text-white shadow-custom-shadow-2"
    >
      <IconLocation />
      <span>{{ selectedLocation.name }}</span>
      <span class="text-sm text-blue-400">({{ selectedLocation.distance }})</span>
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
      class="absolute z-10 w-full mt-2 bg-white border-2 border-blue-400 rounded-xl shadow-lg"
    >
      <div 
        v-for="location in locations" 
        :key="location.name"
        @click="selectLocation(location)"
        class="p-4 hover:bg-blue-50 cursor-pointer"
      >
        <div class="flex items-center justify-between">
          <span class="font-semibold">{{ location.name }}</span>
          <span class="text-sm text-blue-400">({{ location.distance }})</span>
        </div>
        <p class="text-sm text-gray-600 mt-1">{{ location.address }}</p>
      </div>
    </div>
  </div>
</template>
