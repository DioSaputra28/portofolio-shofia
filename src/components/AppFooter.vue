<template>
  <footer class="bg-neutral-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="text-2xl font-heading font-bold mb-4">Shofia</div>
          <p class="text-white/70 leading-relaxed max-w-md mb-6">
            Siswa SMK passionate dalam ilustrasi digital dengan fokus pada character design, fan art, dan commission artwork. Terus belajar dan berkembang dalam dunia seni digital.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://www.instagram.com/shofia_shoo?igsh=Mm15d3hyYXUyODA2"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors focus-ring"
              aria-label="Follow on Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a
              href="https://www.tiktok.com/@shofiahatsuna2110?_t=ZS-8z0qmokgx3Q&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors focus-ring"
              aria-label="Follow on TikTok"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/work" class="text-white/70 hover:text-white transition-colors focus-ring rounded">
                Portfolio
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-white/70 hover:text-white transition-colors focus-ring rounded">
                About
              </router-link>
            </li>

            <li>
              <router-link to="/contact" class="text-white/70 hover:text-white transition-colors focus-ring rounded">
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Keahlian -->
        <div>
          <h4 class="font-semibold text-white mb-4">Keahlian</h4>
          <ul class="space-y-3 text-white/70 text-sm">
            <li>Character Design</li>
            <li>Fan Art</li>
            <li>Commission Artwork</li>
            <li>Original Character</li>
            <li>Digital Illustration</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-white/70 text-sm mb-4 md:mb-0">
          © 2025 Shofia. Semua hak dilindungi.
        </p>
        
        <div class="flex items-center space-x-6">
          <a href="https://api.whatsapp.com/send?phone=6288239810794" class="text-white/70 hover:text-white text-sm transition-colors focus-ring rounded">
            +62 882-3981-0794
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component - no reactive data needed
</script>

<style>
/* High Contrast Mode */
.high-contrast {
  --tw-bg-white: #000000;
  --tw-text-neutral-900: #ffffff;
  --tw-bg-primary-50: #ffffff;
  --tw-text-primary-700: #ffffff;
  --tw-border-primary-50: #ffffff;
}

.high-contrast * {
  border-color: #ffffff !important;
  background-color: #000000 !important;
  color: #ffffff !important;
}

.high-contrast .gradient-brand,
.high-contrast .bg-gradient-brand {
  background: #ffffff !important;
  color: #000000 !important;
}
</style>