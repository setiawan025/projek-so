<script setup lang="ts">
import {DropdownExpirymonth,DropdownExpiryyears,PopupPembayaranBerhasil,PembayaranBerhasil } from '@/components'
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const showPopup = ref(false);

const handleSubmit = () => {
  showPopup.value = true;
}
</script>
<template>
   <section  class="flex w-[793px] h-[607.967px] p-[8.811px_12.336px] flex-col justify-center items-center gap-6 shrink-0 mx-auto bg-white rounded-xl shadow-custom-shadow-2 mt-10">
    <div class="flex mx-auto w-[659.071px] h-[57.272px] p-[0px_12.336px] flex-col justify-center items-center gap-[7.049px] shrink-0 border-b-4 border-b-[#4F4C4C]">
        <h1 class="text-[31px] font-bold text-[#4F4C4C]">Credit Card Payment</h1>
        </div>
        <div class="flex w-[659.071px] h-[478.443px] flex-col items-start gap-[14.979px] shrink-0 mx-auto">
        <p class="h-[32.601px] flex-col  shrink-0 text-[16px] font-bold">Please enter your card details</p>
        <div class="flex flex-col gap-2">
            <p>Card Holder Name</p>
            <input type="text" class="w-[659.071px] h-[47.272px] p-[0px_12.336px] flex-col justify-center items-start gap-[7.049px] shrink-0 border-2 border-[#4F4C4C] rounded-lg" placeholder="Enter your name">
        </div>
        <div class="flex flex-col gap-2">
            <p>Card Number</p>
            <input type="text" class="w-[659.071px] h-[47.272px] p-[0px_12.336px] flex-col justify-center items-start gap-[7.049px] shrink-0 border-2 border-[#4F4C4C] rounded-lg" placeholder="Enter your card number">
        </div>
        <div class="flex gap-10">
            <div class="w-[200px] flex flex-col gap-2">
                <p>Expiry month</p>
                <DropdownExpirymonth />
            </div>
            <div class="w-[200px] flex flex-col gap-2">
                <p>Expiry years</p>
                <DropdownExpiryyears />
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <p>Card CVV</p>
            <input type="text" class="w-[659.071px] h-[47.272px] p-[0px_12.336px] flex-col justify-center items-start gap-[7.049px] shrink-0 border-2 border-[#4F4C4C] rounded-lg" placeholder="Enter your card CVV">
        </div>
        <div class="flex justify-center items-center gap-[8.811px] shrink-0 self-stretch">
            <button @click="handleSubmit" class="bg-[#08638E] font-bold text-lg text-white px-4 py-2 rounded-xl w-full">Submit</button>
        </div>
    </div>
   </section>
   <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50">
     <PopupPembayaranBerhasil />
   </div>
</template>