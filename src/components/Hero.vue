<template>
  <section class="min-h-screen pt-16 bg-gradient-to-br from-white via-primary-50/20 to-primary-50/40 flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 leading-tight tracking-tight">
              <span class="text-primary-700 font-bold">Asset Game Design</span> 
              and Digital Ilustrator
            </h1>
            
            <p class="text-xl text-neutral-900/70 leading-relaxed max-w-2xl">
              Saya menciptakan karakter, aset game, dan ilustrasi digital yang menarik untuk berbagai proyek kreatif.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/work" class="btn-primary inline-block text-center">
              Lihat Karya
            </router-link>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-8 pt-8">
            <div>
              <div class="text-2xl font-bold text-primary-700">15+</div>
              <div class="text-sm text-neutral-900/60 uppercase tracking-wider">Karya Digital</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-primary-700">3+</div>
              <div class="text-sm text-neutral-900/60 uppercase tracking-wider">Tahun Belajar</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-primary-700">100%</div>
              <div class="text-sm text-neutral-900/60 uppercase tracking-wider">Passion</div>
            </div>
          </div>
        </div>

        <!-- Featured Work -->
        <div class="relative">
          <div class="card hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="aspect-[4/5] rounded-xl overflow-hidden mb-4">
              <img 
                :src="getImageUrl(featuredWork.thumbnail)" 
                :alt="`Ilustrasi ${featuredWork.title} - ${featuredWork.category}`"
                class="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="chip">{{ featuredWork.category }}</span>
                <span class="text-sm text-neutral-900/60">{{ featuredWork.year }}</span>
              </div>
              
              <h3 class="text-xl font-heading font-semibold text-neutral-900">
                {{ featuredWork.title }}
              </h3>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full opacity-20 -z-10"></div>
          <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-300/30 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import projectsData from '../data/projects.json'
import { useAssets } from '../composables/useAssets'

const featuredWork = ref(projectsData[0])
const { getImageUrl } = useAssets()

onMounted(() => {
  // Could randomize or pick specific featured work
  featuredWork.value = projectsData[0]
})
</script>