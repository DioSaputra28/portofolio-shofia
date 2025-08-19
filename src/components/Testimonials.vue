<template>
  <section class="py-20 bg-primary-50/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-xs uppercase tracking-widest text-primary-700 font-medium mb-4">
          Testimonials
        </h2>
        <h3 class="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mb-6">
          Kata Mereka
        </h3>
        <p class="text-lg text-neutral-900/70 max-w-2xl mx-auto">
          Pengalaman klien yang telah berkolaborasi dalam berbagai proyek ilustrasi.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="card hover:shadow-lg transition-all duration-300"
        >
          <!-- Quote -->
          <div class="mb-6">
            <svg class="w-8 h-8 text-primary-300 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p class="text-neutral-900/80 leading-relaxed">
              "{{ testimonial.content }}"
            </p>
          </div>

          <!-- Author -->
          <div class="flex items-center">
            <img 
              :src="testimonial.avatar" 
              :alt="`Portrait ${testimonial.name}`"
              class="w-12 h-12 rounded-full object-cover mr-4"
              loading="lazy"
            />
            <div>
              <div class="font-semibold text-neutral-900">{{ testimonial.name }}</div>
              <div class="text-sm text-neutral-900/60">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="flex flex-wrap justify-center gap-12 mt-16 pt-16 border-t border-primary-100">
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-700 mb-2">100%</div>
          <div class="text-sm text-neutral-900/60 uppercase tracking-wider">Passion</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-700 mb-2">15+</div>
          <div class="text-sm text-neutral-900/60 uppercase tracking-wider">Digital Arts</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-700 mb-2">5+</div>
          <div class="text-sm text-neutral-900/60 uppercase tracking-wider">Commissions</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-700 mb-2">3+</div>
          <div class="text-sm text-neutral-900/60 uppercase tracking-wider">Years Learning</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import testimonialsData from '../data/testimonials.json'

const testimonials = ref(testimonialsData)

onMounted(() => {
  testimonials.value = testimonialsData
})
</script>