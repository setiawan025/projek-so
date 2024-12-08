<template>
  <div class="container mx-auto p-4">
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-center mb-4">Pencarian Handphone</h1>
      <div class="flex justify-center">
        <input 
          type="text"
          v-model="searchQuery"
          placeholder="Cari handphone..."
          class="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          @input="searchPhones"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="phone in filteredPhones" :key="phone.id" class="bg-white rounded-lg shadow-md p-4">
        <img :src="phone.image" :alt="phone.name" class="w-full h-48 object-cover rounded-lg mb-4">
        <h2 class="text-xl font-semibold mb-2">{{ phone.name }}</h2>
        <p class="text-gray-600 mb-2">{{ phone.brand }}</p>
        <p class="text-green-600 font-bold">Rp {{ phone.price.toLocaleString() }}</p>
        <button class="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Lihat Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Phone {
  id: number
  name: string
  brand: string
  price: number
  image: string
}

const searchQuery = ref('')
const phones = ref<Phone[]>([
  {
    id: 1,
    name: 'iPhone 13 Pro',
    brand: 'Apple',
    price: 15999000,
    image: 'https://example.com/iphone13.jpg'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    brand: 'Samsung',
    price: 12999000,
    image: 'https://example.com/s21.jpg'
  },
  {
    id: 3,
    name: 'Xiaomi Mi 11',
    brand: 'Xiaomi',
    price: 8999000,
    image: 'https://example.com/mi11.jpg'
  }
])

const filteredPhones = ref<Phone[]>([])

const searchPhones = () => {
  filteredPhones.value = phones.value.filter(phone => 
    phone.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    phone.brand.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
}

onMounted(() => {
  filteredPhones.value = phones.value
})
</script>
