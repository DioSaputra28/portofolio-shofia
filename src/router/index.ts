import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import CaseStudy from '../views/CaseStudy.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Portofolio Ilustrator - Ilustrasi Editorial & Brand yang Puitis',
        description: 'Ilustrator profesional yang mengkhususkan diri pada ilustrasi editorial, branding, dan buku anak dengan gaya visual yang puitis dan berkarakter.',
        ogImage: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200'
      }
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      meta: {
        title: 'Karya - Portofolio Ilustrasi',
        description: 'Koleksi karya ilustrasi editorial, branding, packaging, dan environmental art dengan berbagai klien terpercaya.',
        ogImage: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200'
      }
    },
    {
      path: '/work/:slug',
      name: 'CaseStudy',
      component: CaseStudy,
      meta: {
        title: 'Case Study - Detail Proyek',
        description: 'Detail lengkap proses kreatif, tantangan, dan hasil dari proyek ilustrasi.',
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'Tentang - Ilustrator Profesional',
        description: 'Kenali lebih dalam tentang background, pengalaman, dan philosophy dalam berkarya sebagai ilustrator profesional.',
        ogImage: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1200'
      }
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
      meta: {
        title: 'Layanan - Paket Ilustrasi Profesional',
        description: 'Pilihan paket layanan ilustrasi untuk editorial, branding, dan publishing dengan timeline dan deliverables yang jelas.',
        ogImage: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Kontak - Mari Berkolaborasi',
        description: 'Hubungi untuk konsultasi proyek ilustrasi. Response dalam 1-2 hari kerja untuk semua inquiry.',
        ogImage: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router