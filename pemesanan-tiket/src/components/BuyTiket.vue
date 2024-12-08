<script setup lang="ts">
import {  FotoFilm, background } from '@/assets/image'
import { ref } from 'vue'
import {  PemilihanKursi } from '@/components'
import { useRouter } from 'vue-router'

const router = useRouter()

const days = ref([
  'Monday',
  'Tuesday', 
  'Wednesday',
  'Thursday',
  'Friday'
])

const selectedDay = ref('')

const selectDay = (day: string) => {
  selectedDay.value = day
}

const times = ref([
  '10:00',
  '13:00',
  '16:00', 
  '19:00',
  '22:00'
])

const selectedTime = ref('')

const selectTime = (time: string) => {
  selectedTime.value = time
}

const showPemilihanKursi = ref(false)

</script>
<template>
    <div v-if="!showPemilihanKursi" class="flex flex-col gap-10">
    <div class="w-full mt-10">
        <img :src="background" alt="background" class="w-full h-full object-cover opacity-70" />
        <div class=" absolute inset-0 flex items-center justify-center gap-10 mt-28">
            <img :src="FotoFilm" alt="FotoFilm" class=" object-cover flex-shrink w-[296px] h-[470px] rounded-2xl" />
            <div class=" inset-0 flex flex-col gap-4 w-1/2">
                <h1 class="text-6xl font-bold">IPAR ADALAH MAUT</h1>
                <div class="flex gap-6 ">
                    <h3 class="bg-blue-400 text-white px-4 py-2 rounded-md">Drama</h3>
                    
                    <h3 class="border-l-2 border-l-blue-400 pl-2 px-4 py-2 text-blue-400">2h 40min</h3>
                    <h3 class="border-l-2 border-l-blue-400 pl-2 px-4 py-2 text-blue-400">SUB IDN</h3>
                </div>
                <p class="text-white text-justify font-poppins text-[16px] font-semibold leading-normal tracking-[0.016px]">Cinta datang tak pernah bisa ditebak, NISA (Michelle Ziudith) dipinang oleh dosen muda dari kampusnya, ARIS (Deva Mahenra), laki-laki cerdas yang punya pesona luar biasa. Pernikahan mereka bagai pernikahan negeri dongeng, sempurna, apalagi dengan kelahiran putri mereka, RAYA (Alesha Fadillah Kurniawan). Sayangnya, seperti juga cinta masalah datang tanpa diduga. Ibu Nisa tiba-tiba menitipkan putri keduanya, Rani (Davina Karamoy), untuk tinggal bersama Aris dan Nisa. Rani tadinya menjaga jarak dengan Aris, tapi perlahan, celah hubungan terlarang terbuka. Di belakang Nisa, Aris mengkhianati pernikahan dengan adik kandung istrinya sendiri.</p>
                <div class="flex gap-2">
                    <a href="" class="border-2 text-blue-400 border-blue-400 px-4 py-2 rounded-xl hover:bg-blue-400 hover:text-white">WatchTrailer</a>
                    <a href="" class="border-2 text-blue-400 border-blue-400 px-4 py-2 rounded-xl hover:bg-blue-400 hover:text-white">Description</a>
                </div>
            </div>
        </div>
        </div>
        <div class="flex flex-col items-center justify-center w-[80%] mx-auto gap-8 mt-10">
            <h1 class="text-4xl font-bold bg-blue-400 text-white px-4 py-2  w-full text-center">Schedule</h1>
            <div class="flex gap-2">
                <button 
                    v-for="day in days" 
                    :key="day"
                    @click="selectDay(day)"
                    :class="{'bg-blue-400 text-white': selectedDay === day}"
                    class="px-4 py-2 border-2 border-blue-400 rounded-xl hover:bg-blue-400 hover:text-white mx-2"
                >
                    {{ day }}
                </button>
            </div>
           
             <div class="flex flex-col  border-2 border-blue-400 rounded-xl">
                <div class="p-4 flex flex-col w-full gap-2 pl-4 border-blue-400 rounded-xl">
                    <div class="flex rounded-lg">
                        <p class="px-4 py-1 text-white bg-blue-400 rounded-lg">XXI</p>
                    </div>
                  
                    <h1 class="text-2xl font-bold">
                        SUMEDANG XXI 
                        <span class="text-lg text-blue-400">(0.6KM)</span>
                    </h1>
                    <p class="mt-2 ml-4 text-gray-600 leading-relaxed">
                        Plaza Asia sumedang Jl Mayor Abdurahman No.255 Kota Kaler, Sumedang Utara Kab. Sumedang Jawa Barat
                    </p>
                    <h2 class="mt-4 ml-4 text-xl font-semibold text-blue-500">Reguler 2D</h2>
                </div>

                <div class="p-4 flex flex-col gap-2">
                    <p class="font-semibold text-blue-400">Select Hours</p>
                    <div class="flex items-center gap-10 mt-2">
                        <div class="flex gap-2">
                            <button 
                                v-for="time in times" 
                                :key="time"
                                @click="selectTime(time)"
                                :class="{'bg-blue-400 text-white': selectedTime === time}"
                                class="px-4 py-2 mx-2 border-2 border-blue-400 rounded-md hover:bg-blue-400 hover:text-white"
                            >
                                {{ time }}
                            </button>
                        </div>
                        <button
                            @click="showPemilihanKursi = true"
                            class="px-4 py-2 text-white bg-blue-400 border-2 border-blue-400 rounded-xl hover:bg-blue-600"
                        >
                            BUY TICKET
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
    </div>

    <PemilihanKursi v-else />
</template>
