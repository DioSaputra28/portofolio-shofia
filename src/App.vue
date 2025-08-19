<template>
  <div id="app">
    <AppNavbar />
    
    <main>
      <router-view />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()

// Update meta tags based on route
watch(route, (to) => {
  const meta = to.meta
  
  useHead({
    title: meta.title || 'Portofolio Ilustrator - Ilustrasi Editorial & Brand yang Puitis',
    meta: [
      { name: 'description', content: meta.description || 'Ilustrator profesional yang mengkhususkan diri pada ilustrasi editorial, branding, dan buku anak dengan gaya visual yang puitis dan berkarakter.' },
      { property: 'og:title', content: meta.title || 'Portofolio Ilustrator - Ilustrasi Editorial & Brand yang Puitis' },
      { property: 'og:description', content: meta.description || 'Ilustrator profesional yang mengkhususkan diri pada ilustrasi editorial, branding, dan buku anak dengan gaya visual yang puitis dan berkarakter.' },
      { property: 'og:image', content: meta.ogImage || 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Arya Ilustrasi' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: meta.title || 'Portofolio Ilustrator - Ilustrasi Editorial & Brand yang Puitis' },
      { name: 'twitter:description', content: meta.description || 'Ilustrator profesional yang mengkhususkan diri pada ilustrasi editorial, branding, dan buku anak dengan gaya visual yang puitis dan berkarakter.' },
      { name: 'twitter:image', content: meta.ogImage || 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200' }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Arya Ilustrasi",
          "jobTitle": "Professional Illustrator",
          "description": "Ilustrator profesional yang mengkhususkan diri pada ilustrasi editorial, branding, dan buku anak dengan gaya visual yang puitis dan berkarakter.",
          "url": window.location.origin,
          "image": "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800",
          "sameAs": [
            "https://instagram.com/aryailustrator",
            "https://behance.net/aryailustrator", 
            "https://dribbble.com/aryailustrator"
          ],
          "knowsAbout": ["Editorial Illustration", "Brand Design", "Children's Books", "Digital Art"],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Illustrator",
            "occupationLocation": {
              "@type": "Country",
              "name": "Indonesia"
            }
          }
        })
      }
    ]
  })
}, { immediate: true })
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus visible styles */
.focus-ring:focus-visible {
  outline: 2px solid #8f99d6;
  outline-offset: 2px;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #8f6ad1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6465bb;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>