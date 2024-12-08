<script setup lang="ts">
import { FotoFilm } from '@/assets/image';
import { Navbar, BoxBackground, CardPayment } from '@/components'
import { IconCheckOut, IconKalender, IconLocation, IconArowKanan2, IconVisa, IconPaypal, IconQris } from '@/components/icons'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showCardPayment = ref(false);

const handleCheckout = () => {
  showCardPayment.value = true;
}

</script>

<template>
   <div class="fixed top-0 left-1/2 transform -translate-x-1/2 w-[1155px] h-[775px] flex-shrink-0 mx-auto bg-white shadow-custom-shadow-2 z-[-1]"></div>
   
 <div v-if="!showCardPayment" class="w-[791px] h-[652.085px] flex-shrink-0 flex flex-col items-center  mx-auto mt-10  gap-[26px]">
    <div class="flex w-[791px] h-[53.115px] p-[8.171px] justify-center items-center gap-[8.171px] flex-shrink-0 bg-[#2599D0] rounded-xl">
        <h1 class="text-white text-2xl font-bold">Check Out</h1>
    </div>
    <div class="flex w-full justify-between">
        <div class="flex w-[276.196px] h-[517.255px] p-[16.343px] pt-[16.343px] pb-[16.343px] pr-[11.44px] pl-[11.44px] flex-col items-center gap-[26px] bg-white rounded-xl shadow-custom-shadow-2 border-2 border-[#2599D0]">
        <div>
            <img :src="FotoFilm" alt="Movie Poster" class="w-[200px] h-[300px] rounded-xl object-cover mx-auto"/>
        </div>
        <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold">IPAR ADALAH MAUT</h2>
            <div class="flex flex-col gap-2">
                <div class="flex gap-2">
                    <IconLocation class="w-6 h-6" />
                    <p class="text-gray-600">SUMEDANG</p>
                </div>
                <div class="flex gap-2">
                    <IconCheckOut class="w-6 h-6" />
                    <p class="text-gray-600">REGULAR, CINEMA04  </p>
                </div>
                <div class="flex gap-2">
                    <IconKalender class="w-6 h-6" />
                    <p class="text-gray-600">Sabtu, 02 Nov 2024, 12:45</p>
                </div>
           
           
              
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <div class="flex h-[208.373px] w-[480px]  flex-col justify-center items-start gap-[8.171px]  self-stretch bg-white rounded-xl shadow-custom-shadow-2 border-2 border-[#2599D0] p-4">
            <div class="flex p-[2px] px-4 justify-between items-center w-full">
              <p class="text-[#28A2DC] font-bold">Tiket <span class="font-bold">(2)</span></p>
              <span class="text-[#28A2DC] font-bold">k1, k2</span>
            </div>
            <div class="flex justify-between px-4 w-full">
              <p class="text-[#28A2DC] font-bold">Harga Tiiket</p>
              <span class="text-[#28A2DC] font-bold">Rp 25000 x 2</span>
            </div>
            <div class="flex justify-between px-4 w-full">
              <p class="text-[#28A2DC] font-bold">Sub Total</p>
              <span class="text-[#28A2DC] font-bold">Rp 50,000</span>
            </div>
            <div class="flex justify-between px-4 w-full">
              <p class="text-[#28A2DC] font-bold">Biaya Layanan</p>
              <span class="text-[#28A2DC] font-bold">Rp 6000</span>
            </div>
            <div class="flex justify-between px-4 w-full">
              <p class="text-[#28A2DC] font-bold">Total Pembayaran </p>
              <span class="text-[#28A2DC] font-bold">Rp 56,000</span>
            </div>
        </div>
        <div class="flex justify-between items-center bg-custom-gradient-3 rounded-xl shadow-custom-shadow-2  p-4"> 
            <div>
                <h1 class=" text-lg font-bold">Promo/Voucher</h1>
                <p class="text-[#096895] text-sm">Kamu belum memilih promo</p>
            </div>
            <button >
                <IconArowKanan2 class="w-8 h-8" />
            </button>
        </div>
        <div class="flex flex-col gap-2 bg-custom-gradient-3 rounded-xl shadow-custom-shadow-2 p-4">
            <div>
                <h1>Pilih Metode Pembayaran</h1>
                <span class="text-[#096895] font-bold">Rp 56,000</span>
            </div>
            <div class="flex h-[49.029px] px-[8.171px] justify-between items-center self-stretch bg-white-37 rounded-xl shadow-custom-shadow-2 border-2 border-white">
                <div class="flex gap-8 items-center">
                    <IconQris class="w-10 h-10" />
                    <p>QRIS</p>
                </div>
                <input type="radio" name="payment" class="w-5 h-5 accent-[#2599D0]">
            </div>
            <div class="flex h-[49.029px] px-[8.171px] justify-between items-center self-stretch bg-white-37 rounded-xl shadow-custom-shadow-2 border-2 border-white">
                <div class="flex gap-8 items-center">
                    <IconVisa class="w-10 h-10" />
                    <p>VISA</p>
                </div>
                <input type="radio" name="payment" class="w-5 h-5 accent-[#2599D0]">
            </div>
            <div class="flex h-[49.029px] px-[8.171px] justify-between items-center self-stretch bg-white-37 rounded-xl shadow-custom-shadow-2 border-2 border-white">
                <div class="flex gap-8 items-center">
                    <IconPaypal class="w-10 h-10" />
                    <p>Paypal</p>
                </div>
                <input type="radio" name="payment" class="w-5 h-5 accent-[#2599D0]">
            </div>
            
        </div>
        <button @click="handleCheckout" class="bg-[#08638E] font-bold text-lg text-white px-4 py-2 rounded-xl">CheckOut</button>
    </div>
    </div>
    
   
 </div>
 <CardPayment v-if="showCardPayment" />
</template>
