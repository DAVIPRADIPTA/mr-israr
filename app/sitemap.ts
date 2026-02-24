import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mrisrar.vercel.app', // URL utama website Anda
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // Angka 1 berarti halaman ini paling penting
    },
    // Jika nanti Anda membuat halaman baru, misalnya halaman admin atau profil, 
    // Anda bisa menambahkannya di bawah ini.
  ]
}