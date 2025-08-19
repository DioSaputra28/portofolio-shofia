<template>
  <div class="pt-16 min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mb-6">
          Tentang Saya
        </h1>
        <p class="text-lg text-neutral-900/70 max-w-2xl mx-auto">
          Kenali lebih dalam tentang journey kreatif dan filosofi dalam berkarya.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-16 items-start mb-20">
        <!-- Photo -->
        <div class="relative max-w-sm mx-auto lg:mx-0">
          <div class="aspect-square rounded-2xl overflow-hidden ring-1 ring-primary-50">
            <img 
              :src="getImageUrl('about/about.jpg')" 
              alt="Portrait ilustrator - foto profesional"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Decorative -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full opacity-20 -z-10"></div>
        </div>

        <!-- Bio Content -->
        <div class="space-y-8">
          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-neutral-900/80 leading-relaxed">
              Saya <strong>Shofia</strong>, fresh graduate yang passionate dalam dunia ilustrasi digital dengan fokus pada character design, fanart, dan commission artwork. Melalui karya-karya saya, saya berusaha mengekspresikan kreativitas dan storytelling visual yang dapat menyentuh emosi audience.
            </p>
            
            <p class="text-lg text-neutral-900/80 leading-relaxed">
              Sebagai fresh graduate, saya terus belajar dan mengembangkan skill dalam berbagai teknik ilustrasi digital. Passion saya terletak pada penciptaan karakter original dan interpretasi visual dari berbagai media populer. Setiap karya yang saya buat adalah hasil dari dedikasi dan kecintaan terhadap seni visual.
            </p>

            <p class="text-lg text-neutral-900/80 leading-relaxed">
              Saat tidak menggambar, saya aktif mengikuti komunitas artist online, mempelajari teknik baru, dan terinspirasi dari karya-karya artist lain untuk terus berkembang dalam journey kreatif saya.
            </p>
          </div>

          <!-- Skills & Expertise -->
          <div>
            <h3 class="text-xl font-heading font-semibold text-neutral-900 mb-4">Keahlian</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <span class="block font-medium text-neutral-900">Character Design</span>
                <span class="block font-medium text-neutral-900">Digital Illustration</span>
                <span class="block font-medium text-neutral-900">Fan Art</span>
              </div>
              <div class="space-y-2">
                <span class="block font-medium text-neutral-900">Commission Artwork</span>
                <span class="block font-medium text-neutral-900">Original Character</span>
                <span class="block font-medium text-neutral-900">Concept Art</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education -->
      <section class="mb-20">
        <h2 class="text-3xl font-heading font-bold text-neutral-900 text-center mb-12">
          Latar Belakang Pendidikan
        </h2>
        <div class="max-w-2xl mx-auto text-center">
          <div class="bg-primary-50 rounded-2xl p-8">
            <h3 class="text-xl font-semibold text-neutral-900 mb-2">Pengembangan Perangkat Lunak dan Gim</h3>
            <p class="text-primary-700 font-medium mb-4">SMKN 1 BAWANG</p>
            <p class="text-neutral-900/70">2023 - 2026</p>
            <p class="text-sm text-neutral-900/60 mt-4">Fokus pada Asset Game Design dan Ilustrasi Digital</p>
          </div>
        </div>
      </section>

      <!-- Tools & Software -->
      <section class="mb-20">
        <h2 class="text-3xl font-heading font-bold text-neutral-900 text-center mb-12">
          Tools & Software
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 class="font-semibold text-neutral-900 mb-2">Adobe Illustrator</h3>
            <p class="text-neutral-900/60">Vector Design & Asset Creation</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="font-semibold text-neutral-900 mb-2">Ibis Paint</h3>
            <p class="text-neutral-900/60">Digital Illustration</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center">
        <h3 class="text-2xl font-heading font-bold text-neutral-900 mb-4">
          Mari Berkolaborasi
        </h3>
        <p class="text-lg text-neutral-900/70 mb-8 max-w-2xl mx-auto">
          Saya selalu terbuka untuk proyek baru yang menantang dan meaningful. Mari diskusikan bagaimana kita bisa bekerja sama.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="btn-primary">
            Mulai Proyek
          </router-link>
          <router-link to="/work" class="btn-secondary">
            Lihat Portfolio
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useAssets } from '../composables/useAssets'

const { getImageUrl } = useAssets()

onMounted(() => {
  useHead({
    title: 'Tentang - Ilustrator Fresh Graduate',
    meta: [
      { name: 'description', content: 'Kenali lebih dalam tentang background, passion, dan journey kreatif sebagai ilustrator fresh graduate yang siap berkarya.' }
    ]
  })
})
</script>