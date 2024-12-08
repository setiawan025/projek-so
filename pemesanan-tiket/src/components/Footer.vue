<script setup lang="ts">
import { Icon, IconFacebook, IconInstagram, IconWhatsApp } from '@/components/icons'
</script>
<template>
  <div class="inline-flex h-[293px] justify-center items-center gap-[284px] bg-[#E6E6E6] shadow-custom-shadow-2">
    <div class="flex flex-col items-center justify-center">
        <Icon name="logo" class="h-[123px] w-[185px] " />
        <p class="flex w-[242px] h-[105px] flex-col justify-center text-justify">Aplikasi terbaik untuk pecinta film di Indonesia! Platform hiburan film yang menyediakan pilihan dari bioskop hingga berbagai acara spesial.</p>
    </div>
    <div class="flex h-[157px] justify-end items-start gap-[117px]">
        <div class="flex w-[146px] flex-col justify-between items-start self-stretch">
            <h1 v-for="item in ['TiXNOW', 'POPULAR', 'GENRE', 'VIDEO & TRAILER', 'SPORTLIGHT']" :key="item">
                {{ item }}
            </h1>
        </div>
        <div class="flex w-[128px] flex-col justify-between items-start self-stretch">
            <h1 v-for="item in ['PROFILE', 'ABOUT', 'CARRER', 'CONTACT AS', 'PRIVACY POLICY']" :key="item">
                {{ item }}
            </h1>
        </div>
        <div class="flex gap-4">
            <IconFacebook />
            <IconInstagram />
            <IconWhatsApp />
        </div>
    </div>
  </div>

</template>
