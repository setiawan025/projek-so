<script setup lang="ts">
import { IconArowkiri, IconArowkanan } from '@/components/icons';
import { FotoFilm } from '@/assets/image';
import { ref } from 'vue';

const scrollContainer = ref<HTMLElement | null>(null);
const scrollAmount = 200;

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft += scrollAmount;
  }
};

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft -= scrollAmount;
  }
};

const recommendedMovies = [
  {
    id: 1,
    title: "IPAR ADALAH MAUT",
    image: FotoFilm,
    format: "2D",
    ageRating: "13+"
  },
  {
    id: 2, 
    title: "IPAR ADALAH MAUT",
    image: FotoFilm,
    format: "2D",
    ageRating: "13+"
  },
  {
    id: 3,
    title: "IPAR ADALAH MAUT",
    image: FotoFilm, 
    format: "2D",
    ageRating: "13+"
  },
  {
    id: 4,
    title: "IPAR ADALAH MAUT",
    image: FotoFilm,
    format: "2D", 
    ageRating: "13+"
  },
  {
    id: 5,
    title: "IPAR ADALAH MAUT",
    image: FotoFilm,
    format: "2D", 
    ageRating: "13+"
  },
  {
    id: 6,
    title: "IPAR ADALAH MAUT",
    image: FotoFilm,
    format: "2D", 
    ageRating: "13+"
  },
  {
    id: 7,
    title: "IPAR ADALAH MAUT", 
    image: FotoFilm,
    format: "2D",
    ageRating: "13+"
  },
  {
    id: 8,
    title: "IPAR ADALAH MAUT",
    image: FotoFilm,
    format: "2D",
    ageRating: "13+"
  }
];
</script>
<template >
    <div class="flex items-center justify-center gap-3">
        <button class="p-2" @click="scrollLeft">
            <IconArowkiri />
        </button>
        
        <div ref="scrollContainer" class="flex gap-3 overflow-x-hidden scroll-smooth px-4 py-1" style="max-width: 900px">
            <div v-for="movie in recommendedMovies" :key="movie.id" class="flex p-4 flex-col justify-center items-center gap-2 shadow-custom-shadow-2 rounded-xl flex-shrink-0">
                <img :src="movie.image" alt="Movie Poster" class="w-[165px] h-[241px]">
                <h3 class="text-black font-inter text-sm font-semibold leading-normal">{{ movie.title }}</h3>
                <div class="flex justify-center items-start gap-3">
                    <span class="flex w-[49px] p-[10px] justify-center items-center gap-[10px] shadow-custom-shadow-2 rounded-md">{{ movie.format }}</span>
                    <span class="flex p-[10px] justify-center items-center gap-[10px] shadow-custom-shadow-2 rounded-md">{{ movie.ageRating }}</span>
                </div>
            </div>
        </div>

        <button class="p-2" @click="scrollRight">
            <IconArowkanan />
        </button>
    </div>
</template>