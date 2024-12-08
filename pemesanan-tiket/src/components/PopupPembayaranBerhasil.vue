<script setup lang="ts">
import { ref } from 'vue';
import { PembayaranBerhasil } from '@/components'
import { useRouter } from 'vue-router';

const router = useRouter();

const showPopup = ref(true); // Assuming the popup is initially visible
const showPembayaranBerhasil = ref(false);

const confirmPurchase = () => {
  showPopup.value = false; // Close the popup after confirmation
  showPembayaranBerhasil.value = true;
  router.push({ name: 'pembayaranberhasil' });
}

const cancelPurchase = () => {
  showPopup.value = false; // Close the popup on cancellation
}
</script>
<template>
  <div v-if="showPopup" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white p-5 rounded-lg shadow-lg text-center">
    <h2 class="text-2xl">Anda yakin ingin membeli tiket ini?</h2>
    <div class="flex gap-2 justify-center">
      <button @click="confirmPurchase" class="px-4 py-2 mt-4 bg-blue-500 text-white rounded">Ya</button>
      <button @click="cancelPurchase" class="px-4 py-2 mt-4 bg-red-500 text-white rounded">Tidak</button>
    </div>
  </div>
  <div v-if="showPembayaranBerhasil" class="flex bg-white justify-center">
    <PembayaranBerhasil/>
  </div>

</template>

