<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-xs uppercase tracking-widest text-primary-700 font-medium mb-4">
          Featured Work
        </h2>
        <h3 class="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mb-6">
          Karya Pilihan
        </h3>
        <p class="text-lg text-neutral-900/70 max-w-2xl mx-auto">
          Koleksi proyek terpilih yang menunjukkan pendekatan kreatif dalam berbagai medium dan industri.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- View All Work -->
      <div class="text-center mt-12">
        <router-link to="/work" class="btn-secondary">
          Lihat Semua Karya
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import projectsData from '../data/projects.json'

const projects = ref(projectsData.slice(0, 6))

onMounted(() => {
  // Show first 6 projects
  projects.value = projectsData.slice(0, 6)
})
</script>