import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Mengizinkan semua robot mesin pencari (Google, Bing, Yahoo)
      allow: '/',     // Mengizinkan mereka membaca semua halaman website
    },
    sitemap: 'https://mrisrar.vercel.app/sitemap.xml', // Memberi tahu lokasi persis sitemap Anda
  }
}