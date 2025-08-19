<template>
  <div class="pt-16 min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mb-6">
          Semua Karya
        </h1>
        <p class="text-lg text-neutral-900/70 max-w-2xl mx-auto">
          Eksplorasi lengkap dari berbagai proyek ilustrasi yang telah saya kerjakan untuk klien dari berbagai industri.
        </p>
      </div>

      <!-- Filter Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          @click="selectedCategory = 'All'"
          class="px-6 py-2 rounded-full font-medium transition-all duration-300 focus-ring"
          :class="selectedCategory === 'All' 
            ? 'bg-neutral-800 text-white shadow-md' 
            : 'bg-primary-50 text-primary-700 hover:bg-primary-100'"
        >
          Semua
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-6 py-2 rounded-full font-medium transition-all duration-300 focus-ring"
          :class="selectedCategory === category 
            ? 'bg-neutral-800 text-white shadow-md' 
            : 'bg-primary-50 text-primary-700 hover:bg-primary-100'"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">🎨</div>
        <h3 class="text-xl font-medium text-neutral-900 mb-2">Belum ada karya di kategori ini</h3>
        <p class="text-neutral-900/60">Silakan pilih kategori lain untuk melihat karya saya.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import projectsData from '../data/projects.json'

const projects = ref(projectsData)
const selectedCategory = ref('All')

const categories = computed(() => {
  const cats = [...new Set(projects.value.map(p => p.category))]
  return cats.sort()
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(p => p.category === selectedCategory.value)
})

onMounted(() => {
  // Update page title
  document.title = 'Karya - Portofolio Ilustrasi'
})
</script>