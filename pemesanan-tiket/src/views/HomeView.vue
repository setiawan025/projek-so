<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Home } from '@/views/home';
import TheWelcome from '../components/TheWelcome.vue'
import { Navbar, BuyTiket, PembayaranBerhasil, Footer } from '@/components'


</script>

<template >
  <div class="flex flex-col gap-10">
    <Navbar />
    
    <main  class="flex flex-col flex-1 flex-grow mt-[80px] mb-[100px]">
    <RouterView />
    </main>
   <Footer />
  </div>
</template>
