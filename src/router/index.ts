import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import CaseStudy from '../views/CaseStudy.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import { siteMeta } from '../config/siteMeta'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: siteMeta.defaultTitle,
        description:
          'Portofolio ilustrasi digital Shofia Jasmine Madina Aspara yang menampilkan character design, fan art, dan commission artwork dengan gaya ekspresif.',
        ogImage: siteMeta.defaultOgImage
      }
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      meta: {
        title: 'Karya Shofia Jasmine - Koleksi Ilustrasi Digital',
        description:
          'Lihat kumpulan karya ilustrasi digital Shofia Jasmine Madina Aspara, termasuk character sheet, fan art, dan commission project untuk brand maupun personal.',
        ogImage: siteMeta.defaultOgImage
      }
    },
    {
      path: '/work/:slug',
      name: 'CaseStudy',
      component: CaseStudy,
      meta: {
        title: 'Case Study Ilustrasi - Proses Kreatif Shofia Jasmine',
        description:
          'Pelajari proses kreatif dan solusi visual yang diterapkan Shofia Jasmine Madina Aspara pada setiap proyek ilustrasi digital.',
        ogImage: siteMeta.defaultOgImage
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'Tentang Shofia Jasmine Madina Aspara - Ilustrator Digital',
        description:
          'Kenali Shofia Jasmine Madina Aspara, ilustrator digital di balik akun Shocomms yang fokus pada character design, fan art, dan commission artwork dengan storytelling kuat.',
        ogImage: siteMeta.defaultOgImage
      }
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      meta: {
        title: 'Layanan Ilustrasi Shofia Jasmine',
        description:
          'Pilih layanan ilustrasi digital Shofia Jasmine Madina Aspara untuk kebutuhan character design, fan art spesial, hingga commission artwork profesional.',
        ogImage: siteMeta.defaultOgImage
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Kontak Shofia Jasmine - Buka Komisi Ilustrasi',
        description:
          'Hubungi Shofia Jasmine Madina Aspara untuk diskusi project ilustrasi digital. Komisi dibuka dan respon dalam 1-2 hari melalui WhatsApp atau media sosial.',
        ogImage: siteMeta.defaultOgImage
      }
    }
  ],
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
