<template>
  <div class="pt-16 min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mb-6">
          Mari Berkolaborasi
        </h1>
        <p class="text-lg text-neutral-900/70 max-w-2xl mx-auto">
          Punya proyek menarik? Mari diskusikan bagaimana saya bisa membantu mewujudkan visi kreatif Anda.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-neutral-900 mb-2">
                Nama <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all duration-300"
                :class="{ 'border-red-300': errors.name }"
                placeholder="Nama lengkap Anda"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>



            <div>
              <label for="project" class="block text-sm font-medium text-neutral-900 mb-2">
                Jenis Proyek
              </label>
              <select
                id="project"
                v-model="form.projectType"
                class="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all duration-300"
              >
                <option value="">Pilih jenis proyek</option>
                <option value="character-design">Character Design</option>
                <option value="fanart">Fan Art</option>
                <option value="commission">Commission Artwork</option>
                <option value="original-character">Original Character</option>
                <option value="digital-illustration">Digital Illustration</option>
                <option value="other">Lainnya</option>
              </select>
            </div>



            <div>
              <label for="message" class="block text-sm font-medium text-neutral-900 mb-2">
                Pesan <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all duration-300 resize-vertical"
                :class="{ 'border-red-300': errors.message }"
                placeholder="Ceritakan tentang proyek Anda, timeline yang diinginkan, dan hal lain yang perlu saya ketahui..."
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
            </button>

            <!-- Success Message -->
            <div v-if="showSuccess" class="p-4 bg-green-50 border border-green-200 rounded-xl">
              <div class="flex">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div class="ml-3">
                   <p class="text-sm text-green-700">
                     Pesan berhasil dikirim ke WhatsApp! Saya akan merespons segera.
                   </p>
                </div>
              </div>
            </div>

            <p class="text-sm text-neutral-900/60 text-center">
              <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Balas dalam 1–2 hari kerja
            </p>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- WhatsApp -->
          <div class="card">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-2">WhatsApp</h3>
                <a
                  href="https://api.whatsapp.com/send?phone=6288239810794"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary-700 hover:text-primary-500 transition-colors focus-ring rounded"
                >
                  +62 882-3981-0794
                </a>
              </div>
            </div>
          </div>

          <!-- Social -->
          <div class="card">
            <h3 class="font-semibold text-neutral-900 mb-4">Media Sosial</h3>
            <div class="space-y-3">
              <a
                href="https://www.instagram.com/shocomms"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-neutral-900 hover:text-primary-700 transition-colors focus-ring rounded"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              
              <a
                href="https://www.tiktok.com/@shofiahatsuna2110?_t=ZS-8z0qmokgx3Q&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center text-neutral-900 hover:text-primary-700 transition-colors focus-ring rounded"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="card">
            <div class="flex items-start">
              <div class="w-3 h-3 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-2">Status</h3>
                <p class="text-neutral-900/80">Terbuka untuk commission</p>
                <p class="text-sm text-neutral-900/60 mt-1">Response: 1-2 hari</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useHead } from '@vueuse/head'

interface FormData {
  name: string
  projectType: string
  message: string
}

interface FormErrors {
  name: string
  message: string
}

const form = reactive<FormData>({
  name: '',
  projectType: '',
  message: ''
})

const errors = reactive<FormErrors>({
  name: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key as keyof FormErrors] = ''
  })

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Nama harus diisi'
    isValid = false
  }



  if (!form.message.trim()) {
    errors.message = 'Pesan harus diisi'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Pesan minimal 10 karakter'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Format message for WhatsApp
    const projectTypeText = form.projectType ? `\nJenis Proyek: ${form.projectType}` : ''
    const whatsappMessage = `Halo! Saya ${form.name}.${projectTypeText}\n\nPesan: ${form.message}`
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Open WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6288239810794&text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    Object.keys(form).forEach((key) => {
      form[key as keyof FormData] = ''
    })
    
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Remove copyEmail function as it's no longer needed

useHead({
  title: 'Kontak Shofia Jasmine Madina Aspara | Buka Komisi Ilustrasi Digital',
  meta: [
    {
      key: 'description',
      name: 'description',
      content:
        'Hubungi Shofia Jasmine Madina Aspara melalui WhatsApp atau media sosial untuk konsultasi komisi ilustrasi digital. Respon 1-2 hari dan siap kolaborasi project kreatif.'
    }
  ]
})
</script>
