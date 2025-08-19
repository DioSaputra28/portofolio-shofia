<template>
  <article class="card group cursor-pointer" @click="navigateToProject">
    <!-- Image -->
    <div class="aspect-[4/3] rounded-xl overflow-hidden mb-4">
      <img 
        :src="getImageUrl(project.thumbnail)" 
        :alt="`Ilustrasi ${project.title} - ${project.category}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <span class="chip">{{ project.category }}</span>
        <span class="text-sm text-neutral-900/60">{{ project.year }}</span>
      </div>
      
      <h3 class="text-xl font-heading font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
        {{ project.title }}
      </h3>
      
      <div class="pt-2">
        <span class="text-xs text-neutral-900/60 uppercase tracking-wider">
          {{ project.client }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAssets } from '../composables/useAssets'

interface Project {
  id: string
  title: string
  category: string
  year: string
  client: string
  summary: string
  thumbnail: string
}

const props = defineProps<{
  project: Project
}>()

const router = useRouter()
const { getImageUrl } = useAssets()

const navigateToProject = () => {
  router.push(`/work/${props.project.id}`)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>