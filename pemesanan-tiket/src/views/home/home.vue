<script setup lang="ts">
import { filmbatman, FotoFilm } from '@/assets/image';
import { DropdownLocation, Rekomendasi, BuyTiket } from '@/components';
import { ref } from 'vue';

const showBuyTicket = ref(false);
const selectedMovie = ref(null);

const categories = ref([
  'Action',
  'Comedy', 
  'Horror',
  'Drama',
  'Fantasy',
  'Romance'
]);

const selectedCategory = ref('');

const selectCategory = (category: string) => {
  selectedCategory.value = category;
}

const movies = ref([
  {
    id: 1,
    title: 'IPAR ADALAH MAUT',
    image: FotoFilm,
    category: 'Horror'
  },
  {
    id: 2,
    title: 'IPAR ADDALAH MAUT',
    image: FotoFilm,
    category: 'Action'
  },
  {
    id: 3,
    title: 'IPAR ADDALAH MAUT',
    image: FotoFilm, 
    category: 'Fantasy'
  },
  {
    id: 4,
    title: 'IPAR ADDALAH MAUT',
    image: FotoFilm, 
    category: 'Horror'
  },
]);

const selectMovie = (movie: any) => {
  selectedMovie.value = movie;
  showBuyTicket.value = true;
}

</script>
<template>
  <Transition name="fade">
    <BuyTiket v-if="showBuyTicket" @close="showBuyTicket = false" />
  </Transition>

  <div v-show="!showBuyTicket" class="flex justify-center items-center transition-opacity duration-300">
    <div class="flex flex-col  max-w-[1160px] min-h-[360px] justify-center items-center mt-10 gap-6 px-4">
    <img :src="filmbatman" alt="filmbatman" class="rounded-xl w-full object-cover" />
    <div class="flex justify-end w-full">
      <DropdownLocation />
    </div>
    <div class="flex flex-col gap-6 shadow-custom-shadow p-4 rounded-lg w-full">
      <div class="flex ">
        <h1 class="text-center font-inter text-2xl md:text-[28px] font-extrabold leading-normal text-tr">Category</h1>
      </div>
     
      <div class="flex items-center gap-4">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectCategory(category)"
          :class="{'bg-blue-400 text-white': selectedCategory === category}"
          class="font-inter text-lg md:text-[24px] font-extrabold leading-normal flex w-[120px] md:w-[146px] p-2 md:p-2.5 justify-center items-center gap-2.5 rounded-[34px] border-2 border-tr text-tr"
        >
          {{ category }}
        </button>
        <button class="text-white font-inter text-lg md:text-[24px] font-extrabold leading-normal flex w-[120px] md:w-[146px] p-2 md:p-2.5 justify-center items-center gap-2.5 bg-custom-gradient rounded-[34px]">More</button>
      </div>
    </div>
    <div class="flex flex-col gap-4 w-full">
      <div class="inline-flex p-2.5 justify-center items-center shadow-custom-shadow rounded-t-[18px] bg-[#2599D0]">
        <h1 class="text-white font-inter text-[44px] font-extrabold leading-normal">POPULAR</h1>
      </div>
      <div class="inline-flex h-[431px] justify-center items-center gap-[32px] bg-custom-gradient rounded-b-[18px] shadow-custom-shadow">
        <div class="flex items-center gap-8">
          <div 
            v-for="movie in movies" 
            :key="movie.id" 
            @click="selectMovie(movie)"
            class="flex w-[254px] h-[389px] p-5 flex-col justify-center items-center gap-1.5 bg-white rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <img :src="movie.image" :alt="movie.title" class="rounded-xl w-full h-[300px] object-cover" />
            <h1 class="text-black font-inter text-[18px] font-semibold leading-normal">{{ movie.title }}</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-[1160px] h-[475px] p-[10px] flex-col justify-center items-center gap-[26px] flex-shrink-0 shadow-custom-shadow-2 rounded-lg ">
      <div class="flex w-[1102px] justify-center items-center gap-[35px] bg-[#2599D0] rounded-lg">
        <h1 class="flex w-[224px] h-[42px] flex-col justify-center text-white text-center font-inter text-[28px] font-extrabold leading-normal">Rekomendasi</h1>
      </div>
      <div class="flex justify-center items-center">
        <Rekomendasi/>
      </div>
    </div>
   
  </div>
  </div>
  
</template>
