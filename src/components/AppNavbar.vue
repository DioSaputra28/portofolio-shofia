<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary-50" role="navigation" aria-label="Main navigation">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link 
          to="/" 
          class="text-2xl font-heading font-bold text-primary-900 hover:text-primary-700 transition-colors duration-300 focus-ring rounded-lg"
          aria-label="Kembali ke beranda"
        >
          Shofia Jasmine
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="text-neutral-900 hover:text-primary-700 font-medium transition-colors duration-300 focus-ring rounded-lg px-2 py-1"
            :class="{ 'text-primary-700': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
          
          <router-link 
            to="/contact"
            class="btn-primary focus-ring"
          >
            Hire Me
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg text-neutral-900 hover:bg-primary-50 focus-ring"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-show="mobileMenuOpen"
      id="mobile-menu" 
      class="md:hidden bg-white border-b border-primary-50"
    >
      <div class="px-4 pt-2 pb-3 space-y-1">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 text-neutral-900 hover:text-primary-700 hover:bg-primary-50 font-medium transition-colors duration-300 rounded-lg focus-ring"
          :class="{ 'text-primary-700 bg-primary-50': $route.path === item.path }"
        >
          {{ item.name }}
        </router-link>
        
        <router-link 
          to="/contact"
          @click="mobileMenuOpen = false"
          class="block w-full text-center btn-primary mt-4"
        >
          Hire Me
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  // { name: 'Services', path: '/services' }, // Disabled for now
  { name: 'Contact', path: '/contact' },
]
</script>