<template>
  <div class="pt-16 min-h-screen bg-white" v-if="project">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Project Header -->
      <div class="text-center mb-12">
        <span class="chip mb-4">{{ project.category }}</span>
        <h1 class="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mb-4">
          {{ project.title }}
        </h1>
        <p class="text-xl text-neutral-900/70">{{ project.client }} • {{ project.year }}</p>
      </div>

      <!-- Main Image Card -->
      <div class="mb-16 flex justify-center">
        <div class="card max-w-2xl w-full">
          <img 
            :src="getImageUrl(project.thumbnail)" 
            :alt="`Artwork ${project.title}`"
            class="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
      <!-- Project Info Grid -->
      <div class="grid md:grid-cols-4 gap-8 mb-16">
        <div class="space-y-6">
          <div>
            <h3 class="text-sm uppercase tracking-wider text-primary-700 font-medium mb-2">Klien</h3>
            <p class="text-lg font-medium text-neutral-900">{{ project.client }}</p>
          </div>
          <div>
            <h3 class="text-sm uppercase tracking-wider text-primary-700 font-medium mb-2">Tahun</h3>
            <p class="text-lg font-medium text-neutral-900">{{ project.year }}</p>
          </div>
        </div>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-sm uppercase tracking-wider text-primary-700 font-medium mb-2">Peran</h3>
            <p class="text-lg font-medium text-neutral-900">{{ project.role }}</p>
          </div>
          <div>
            <h3 class="text-sm uppercase tracking-wider text-primary-700 font-medium mb-2">Tools</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tool in project.tools" 
                :key="tool"
                class="chip"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </div>

        <div class="md:col-span-2">
          <h3 class="text-sm uppercase tracking-wider text-primary-700 font-medium mb-2">Deskripsi</h3>
          <p class="text-lg text-neutral-900/80 leading-relaxed">{{ project.description }}</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="space-y-16">
        <!-- Objective -->
        <section>
          <h2 class="text-3xl font-heading font-bold text-neutral-900 mb-6">Tujuan</h2>
          <p class="text-lg text-neutral-900/80 leading-relaxed max-w-4xl">
            {{ project.objective }}
          </p>
        </section>

        <!-- Process -->
        <section>
          <h2 class="text-3xl font-heading font-bold text-neutral-900 mb-6">Proses</h2>
          <div class="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p class="text-lg text-neutral-900/80 leading-relaxed mb-8">
                {{ project.process }}
              </p>
              
              <!-- Impact Highlight -->
              <div class="card bg-gradient-to-r from-primary-50 to-primary-100/50 border-primary-200">
                <h3 class="text-lg font-semibold text-primary-900 mb-2">Dampak Utama</h3>
                <p class="text-2xl font-bold text-primary-700">{{ project.impact }}</p>
              </div>
            </div>
            
            <!-- Process Images -->
            <div class="grid gap-6">
              <div 
                v-for="(image, index) in project.images.slice(1)" 
                :key="index"
                class="rounded-xl overflow-hidden shadow-md max-w-md mx-auto"
              >
                <img 
                  :src="getImageUrl(image)" 
                  :alt="`Proses kerja ${project.title} - tahap ${index + 1}`"
                  class="w-full h-48 object-contain bg-gray-50"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Results -->
        <section>
          <h2 class="text-3xl font-heading font-bold text-neutral-900 mb-6">Hasil</h2>
          <p class="text-lg text-neutral-900/80 leading-relaxed max-w-4xl">
            {{ project.results }}
          </p>
        </section>
      </div>

      <!-- CTA -->
      <div class="text-center py-16 mt-16 border-t border-primary-50">
        <h3 class="text-2xl font-heading font-bold text-neutral-900 mb-4">
          Ingin gaya ini untuk proyekmu?
        </h3>
        <p class="text-lg text-neutral-900/70 mb-8 max-w-2xl mx-auto">
          Mari diskusikan bagaimana saya bisa membantu mewujudkan visi kreatif Anda dengan pendekatan yang serupa.
        </p>
        <router-link to="/contact" class="btn-primary">
          Hubungi Saya
        </router-link>
      </div>
    </div>
  </div>

  <!-- Loading/Error State -->
  <div v-else class="pt-16 min-h-screen bg-white flex items-center justify-center">
    <div class="text-center">
      <div class="text-6xl mb-4">🎨</div>
      <h2 class="text-2xl font-bold text-neutral-900 mb-2">Proyek tidak ditemukan</h2>
      <p class="text-neutral-900/60 mb-6">Maaf, proyek yang Anda cari tidak tersedia.</p>
      <router-link to="/work" class="btn-primary">
        Kembali ke Karya
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import projectsData from '../data/projects.json'
import { useHead } from '@vueuse/head'
import { useAssets } from '../composables/useAssets'
import { siteMeta } from '../config/siteMeta'

interface Project {
  id: string
  title: string
  category: string
  year: string
  client: string
  role: string
  tools: string[]
  description: string
  summary: string
  thumbnail: string
  images: string[]
  objective: string
  process: string
  results: string
  impact: string
}

const route = useRoute()
const project = ref<Project | null>(null)
const { getImageUrl } = useAssets()

const resolveOrigin = () => {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return siteMeta.siteUrl
}

const toAbsoluteUrl = (origin: string, assetPath: string | undefined) => {
  if (!assetPath) return siteMeta.defaultOgImage
  if (/^https?:\/\//i.test(assetPath)) return assetPath
  const normalizedOrigin = origin.endsWith('/') ? origin.slice(0, -1) : origin
  const sanitizedPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`
  return `${normalizedOrigin}${sanitizedPath}`
}

const findProject = () => {
  const slug = route.params.slug as string
  project.value = projectsData.find((p) => p.id === slug) || null
}

const updatePageHead = () => {
  if (!project.value) return

  const origin = resolveOrigin()
  const primaryImage = project.value.images?.[0] || project.value.thumbnail
  const resolvedImage = primaryImage ? getImageUrl(primaryImage) : undefined
  const ogImage = toAbsoluteUrl(origin, resolvedImage)
  const title = `${project.value.title} | Case Study Shofia Jasmine`
  const summary = project.value.summary || project.value.description || siteMeta.defaultDescription

  useHead({
    title,
    meta: [
      { key: 'description', name: 'description', content: summary },
      { key: 'og:title', property: 'og:title', content: title },
      { key: 'og:description', property: 'og:description', content: summary },
      { key: 'og:image', property: 'og:image', content: ogImage },
      { key: 'og:type', property: 'og:type', content: 'article' }
    ]
  })
}

watch(
  () => route.params.slug,
  () => {
    findProject()
    updatePageHead()
  },
  { immediate: true }
)
</script>
