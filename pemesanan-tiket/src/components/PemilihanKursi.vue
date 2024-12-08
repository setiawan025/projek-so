<script setup lang="ts">
import { Navbar, CheckOut } from '@/components'
import { ref } from 'vue'

const seats = ref<string[]>([])
for (let i = 1; i <= 20; i++) {
  seats.value.push(`K${i}`)
}

const seats2 = ref<string[]>([])
for (let i = 1; i <= 20; i++) {
  seats2.value.push(`J${i}`)
}

const showCheckout = ref(false)

const handleContinue = () => {
  showCheckout.value = true
}

</script>
<template>
  <CheckOut v-if="showCheckout" />
  
  <div v-else>
    <div class="flex justify-center items-center flex-col mt-10 gap-4">
      <div class="w-[428.208px] h-[30.472px] flex-shrink-0 bg-customBlue rounded-xl shadow-custom-drop flex justify-center items-center">
        <h1>Screen</h1>
      </div>
      <div>
        <div class="grid grid-cols-5 gap-4 mt-8">
          <div v-for="seat in seats" :key="seat" class="text-center">
            <h1 class="cursor-pointer hover:bg-blue-400 hover:text-white bg-[#DEDEDE] text-blue-400 px-2 py-1 rounded">{{ seat }}</h1>
          </div>
          <div v-for="seat in seats2" :key="seat">
            <h1 class="cursor-pointer hover:bg-blue-400 hover:text-white bg-[#DEDEDE] text-blue-400 px-2 py-1 rounded">{{ seat }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex w-[699px] h-[149px] flex-col justify-between items-center flex-shrink-0 mt-10 mx-auto">
        <div class="flex h-[33px] flex-col justify-center items-center gap-[10px] flex-shrink-0 self-stretch shadow-custom-shadow-2">
          <div class="flex  gap-6 w-[382px] items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-[20px] h-[20px] bg-[#DEDEDE] rounded-sm inline-block"></span>
              <h3>Available</h3>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-[20px] h-[20px] bg-[#2599D0] rounded-sm inline-block"></span>
              <h3>On Hold</h3>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-[20px] h-[20px] bg-[#FC7F7F] rounded-sm inline-block"></span>
              <h3>Taken</h3>
            </div>
          </div>
        </div>
        <div class="bg-custom-gradient-2 flex items-center gap-4 self-stretch">
          <div class="flex items-center gap-10 ">
            <div class="flex w-[204px] h-[116px] py-[10px] px-[14px] flex-col items-start gap-[10px]">
              <div class="flex flex-col items-center gap-[5px] self-stretch text-white">
                <h1 class="flex h-[28px] p-[10px] justify-center items-center gap-[10px] self-stretch border-b-2 border-white">Seat Picked</h1>
                <h2 class="bg-[#DEDEDE] px-2 py-1 rounded">K1</h2>
                <h3 class="flex h-[28px] p-[10px] justify-center items-center gap-[10px] self-stretch">1 Seat Picked</h3>
              </div>
            </div>
            <div class="flex w-[204px] h-[116px] p-[10px] px-[14px] flex-col items-start gap-[10px] text-white">
              <h1 class="flex h-[28px] p-[10px] justify-center items-center gap-[10px] self-stretch border-b-2 border-white">Total price</h1>
              <div class="flex flex-col items-end self-stretch">
                <h2 class=" text-center font-poppins text-[11px] font-medium leading-normal tracking-[0.011px] capitalize text-[#E5E2E2]">1x <span>Rp25.000</span></h2>
                <h3 class="text-white text-center font-poppins text-[13px] not-italic font-bold leading-normal tracking-[0.013px] capitalize ">Rp25.000</h3>
              </div>
            </div>
          </div>
          <div class="flex w-[205px] h-[48px] p-[8.811px] justify-center items-center gap-[8.811px] bg-[#FFBD27] text-white rounded-lg">
            <button @click="handleContinue">CONTINUE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>