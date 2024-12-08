<script setup lang="ts">
import { IconCeklis } from '@/components/icons'
import { DetailTiket } from '@/components'
import { ref } from 'vue'

const showDetail = ref(false)
</script>

<template>
  <div v-if="!showDetail" class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-col items-center justify-center">
      <IconCeklis />
      <h1 class="text-2xl font-bold">Pembayaran Berhasil</h1>
    </div>
    <div class="flex items-center justify-center gap-4 mt-4">
      <button 
        @click="showDetail = true"
        class="px-4 py-2 text-white bg-blue-400 border-2 border-blue-400 rounded-xl hover:bg-blue-600"
      >
        Lihat Pesanan
      </button>
      <button class="px-4 py-2 text-white bg-blue-400 border-2 border-blue-400 rounded-xl hover:bg-blue-600">
        Pesan lainnya
      </button>
    </div>
  </div>

  <DetailTiket v-if="showDetail" class="bg-white" />
</template>
