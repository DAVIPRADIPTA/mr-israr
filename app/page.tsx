"use client";

import React, { useState, useEffect } from 'react';
import { BookOpen, Calculator, MapPin, Phone, Youtube, CheckCircle, Users, Calendar, AlertCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';



// Tambahkan ': Variants' setelah nama variabel
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Tambahkan ': Variants' setelah nama variabel
const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Fungsi pengubah link Google Drive otomatis
// Fungsi pengubah link Google Drive otomatis (Versi Update)
const getDirectImageLink = (url: string) => {
  if (!url) return "";

  // Mengecek apakah URL berasal dari Google Drive
  if (url.includes("drive.google.com")) {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      // Menggunakan endpoint /uc?export=view yang lebih stabil untuk tag <img>
      return `https://drive.google.com/uc?id=${match[1]}&export=view`;
    }
  }

  return url;
};

export default function Home() {
  const [jadwal, setJadwal] = useState<any[]>([]);
  const [pengaturan, setPengaturan] = useState<any>({}); // <-- Tambahkan ini
  const [isLoading, setIsLoading] = useState(true);
  const [galeri, setGaleri] = useState<any[]>([]); // <--- Tambahkan ini

  useEffect(() => {
    // Fetch Jadwal
    fetch('/api/jadwal')
      .then((res) => res.json())
      .then((data) => {
        setJadwal(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data jadwal:", err);
        setIsLoading(false);
      });

    // Fetch Pengaturan <-- Tambahkan blok ini
    fetch('/api/pengaturan')
      .then((res) => res.json())
      .then((data) => setPengaturan(data))
      .catch((err) => console.error("Gagal mengambil pengaturan:", err));
    // Fetch Galeri
    fetch('/api/galeri')
      .then((res) => res.json())
      .then((data) => setGaleri(data))
      .catch((err) => console.error("Gagal mengambil galeri:", err));
  }, []);
  const bahasaInggris = jadwal.filter(item =>
    item.kategori && item.kategori.trim().toLowerCase() === 'bahasa inggris'
  );

  const matematika = jadwal.filter(item =>
    item.kategori && item.kategori.trim().toLowerCase() === 'matematika'
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              {/* Menggunakan warna Teal */}
              <Image
                src="/logo.png"
                alt="Logo Mr. Israr Course"
                width={70}
                height={70}
                className="object-contain" // Memastikan proporsi logo tidak peyang
              />
              <span className="font-bold text-xl tracking-tight text-gray-900">Mr. ISRAR'S COURSE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#program" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Program & Jadwal</a>
              <a href="#biaya" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Biaya</a>
              <a href="#lokasi" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Lokasi</a>
            </div>
            <div>
              {/* Tombol warna Teal */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6281271345823"
                target="_blank"
                rel="noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Daftar WA
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      {/* Menggunakan gradient Indigo ke Teal */}
      <section className="relative bg-gradient-to-br from-indigo-900 to-teal-800 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern Overlay (Optional) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4 px-4 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-200 text-sm font-semibold tracking-wide">
            Pendaftaran Kelas Baru: Juli & Februari
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Tingkatkan Prestasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-300">Matematika & Bahasa Inggris</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-10">
            Pembelajaran berkualitas dan bermanfaat dalam suasana kekeluargaan. Mencetak generasi muda mumpuni bersama Mr. ISRAR.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Tombol WA tetap hijau agar familiar */}
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/6281271345823" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Hubungi Mr. Israr (WA)
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#program" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm border border-white/30">
              Lihat Jadwal Kelas
            </motion.a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm md:text-base text-indigo-200">
            <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-lg backdrop-blur-sm border border-white/10">
              <Users className="text-teal-300 w-5 h-5" />
              <span>Maksimal 10 Siswa/Kelas (Fokus)</span>
            </div>
            <div className="flex items-center gap-2 bg-red-500/20 py-2 px-4 rounded-lg backdrop-blur-sm border border-red-400/30 text-red-200">
              <AlertCircle className="w-5 h-5" />
              <span>Batas Daftar: 14 Maret 2026</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* VISI & MISI / KEUNGGULAN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900">Mengapa Memilih Kami?</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerStagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Kartu 1 - Teal */}
            <motion.div variants={fadeInUp} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="text-teal-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Visi Jelas</h3>
              <p className="text-gray-600 leading-relaxed">
                Meningkatkan kualitas dan keahlian peserta didik secara pasif maupun aktif di bidang Matematika dan Bahasa Inggris.
              </p>
            </motion.div>

            {/* Kartu 2 - Indigo */}
            <motion.div variants={fadeInUp} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Suasana Kekeluargaan</h3>
              <p className="text-gray-600 leading-relaxed">
                Menciptakan pembelajaran yang berkualitas dan bermanfaat untuk siswa dengan pendekatan personal dan akrab.
              </p>
            </motion.div>

            {/* Kartu 3 - Rose/Pink (untuk aksen) */}
            <motion.div variants={fadeInUp} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator className="text-rose-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Fasilitas Lengkap</h3>
              <p className="text-gray-600 leading-relaxed">
                Biaya kursus sudah *All-In*. Termasuk biaya buku cetak, biaya ujian, dan lainnya. Tidak ada biaya tersembunyi!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION GALERI (Muncul jika ada data) */}
      {galeri && galeri.length > 0 && (
        <section className="py-16 bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white">Suasana Belajar Kami</h2>
              <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
              <p className="mt-4 text-slate-300">Intip keseruan dan fokusnya anak-anak saat belajar bersama Mr. Israr.</p>
            </motion.div>

           <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerStagger}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {/* FOTO 1 */}
              <motion.div
                variants={fadeInUp}
                className="relative group rounded-2xl overflow-hidden shadow-lg aspect-video bg-slate-800"
              >
                <Image
                  src="/galeri1.jpeg"
                  alt="Fokus Belajar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Fokus Mengerjakan Latihan
                  </p>
                </div>
              </motion.div>

              {/* FOTO 2 */}
              <motion.div
                variants={fadeInUp}
                className="relative group rounded-2xl overflow-hidden shadow-lg aspect-video bg-slate-800"
              >
                <Image
                  src="/galeri2.png"
                  alt="Kelas Interaktif"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Metode Belajar Interaktif
                  </p>
                </div>
              </motion.div>

              {/* FOTO 3 */}
              <motion.div
                variants={fadeInUp}
                className="relative group rounded-2xl overflow-hidden shadow-lg aspect-video bg-slate-800"
              >
                <Image
                  src="/galeri3.jpeg"
                  alt="Bimbingan Personal"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Bimbingan Personal
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* PRICING SECTION */}
      <section id="biaya" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-200 relative"
          >
            {/* Header menggunakan Teal */}
            <div className="bg-teal-600 p-10 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
              <h2 className="text-3xl font-bold mb-2 relative z-10">Biaya Kursus Transparan</h2>
              <p className="text-teal-100 relative z-10">Per Semester (± 5 Bulan)</p>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex justify-center mb-10">
                <div className="text-center">
                  <span className="text-5xl font-extrabold text-gray-900">Rp 1.100.000</span>
                  <span className="text-gray-500 font-medium ml-2">/ Semester</span>
                </div>
              </div>

              <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 mb-10">
                <h4 className="font-semibold text-indigo-900 mb-6 text-center text-lg">Tersedia Sistem Angsuran:</h4>
                <div className="grid sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-indigo-200">
                  <div className="py-4 sm:py-0">
                    <p className="text-sm text-indigo-600 mb-1">Pendaftaran</p>
                    <p className="font-bold text-xl text-gray-900">Rp 100.000</p>
                  </div>
                  <div className="py-4 sm:py-0">
                    <p className="text-sm text-indigo-600 mb-1">Angsuran 1</p>
                    <p className="font-bold text-xl text-gray-900">Rp 500.000</p>
                  </div>
                  <div className="py-4 sm:py-0">
                    <p className="text-sm text-indigo-600 mb-1">Angsuran 2</p>
                    <p className="font-bold text-xl text-gray-900">Rp 500.000</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-5 mb-8">
                {/* Checkmark menggunakan Teal */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Termasuk Biaya Buku Cetak</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Termasuk Biaya Ujian</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Dibatasi maksimal **10 siswa per kelas** untuk efektivitas belajar</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JADWAL SECTION */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Pilihan Kelas & Jadwal</h2>
            <p className="mt-4 text-gray-600">Mulai belajar pada Februari 2026. Pilih kelas yang sesuai dengan jenjang Anda.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                {/* Header Tabel Indigo Gelap */}
                <tr className="bg-indigo-900 text-white">
                  <th className="p-5 font-semibold whitespace-nowrap">Level & Kelas</th>
                  <th className="p-5 font-semibold whitespace-nowrap">Hari Materi</th>
                  <th className="p-5 font-semibold whitespace-nowrap">Hari Hafalan</th>
                  <th className="p-5 font-semibold whitespace-nowrap">Jam Belajar</th>
                  <th className="p-5 font-semibold whitespace-nowrap">Mulai Belajar</th>
                  <th className="p-5 font-semibold text-center whitespace-nowrap">Gedung</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm md:text-base bg-white">
                {isLoading ? (
                  // Tampilan saat data sedang dimuat
                  <tr>
                    <td colSpan={6} className="p-10 text-center text-gray-500 font-medium">
                      Memuat jadwal terbaru dari server...
                    </td>
                  </tr>
                ) : (
                  <>
                    {/* --- MATA PELAJARAN BAHASA INGGRIS --- */}
                    {bahasaInggris.length > 0 && (
                      <tr className="bg-teal-50">
                        <td colSpan={6} className="p-4 font-bold text-teal-800 text-lg">Mata Pelajaran Bahasa Inggris</td>
                      </tr>
                    )}

                    {bahasaInggris.map((item, index) => (
                      <tr key={`inggris-${index}`} className="hover:bg-teal-50/30 transition-colors">
                        <td className="p-4">
                          <span className="font-bold text-gray-900 block">{item.level}</span>
                          <span className="text-gray-500 text-sm">{item.target_siswa}</span>
                        </td>
                        <td className="p-4">{item.hari_materi}</td>
                        <td className="p-4">{item.hari_hafalan}</td>
                        <td className="p-4 font-medium text-teal-700">{item.jam_belajar}</td>
                        <td className="p-4">{item.mulai_belajar}</td>
                        <td className="p-4 text-center font-bold">{item.gedung}</td>
                      </tr>
                    ))}

                    {/* --- MATA PELAJARAN MATEMATIKA --- */}
                    {matematika.length > 0 && (
                      <tr className="bg-indigo-50">
                        <td colSpan={6} className="p-4 font-bold text-indigo-800 text-lg">Mata Pelajaran Matematika</td>
                      </tr>
                    )}

                    {matematika.map((item, index) => (
                      <tr key={`math-${index}`} className="hover:bg-indigo-50/30 transition-colors">
                        <td className="p-4">
                          <span className="font-bold text-gray-900 block">{item.level}</span>
                          <span className="text-gray-500 text-sm">{item.target_siswa}</span>
                        </td>
                        <td className="p-4">{item.hari_materi}</td>
                        <td className="p-4">{item.hari_hafalan}</td>
                        <td className="p-4 font-medium text-indigo-700">{item.jam_belajar}</td>
                        <td className="p-4">{item.mulai_belajar}</td>
                        <td className="p-4 text-center font-bold">{item.gedung}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </motion.div>

          
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl flex items-start gap-4 shadow-sm"
            >
              <AlertCircle className="text-red-600 w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                {/* Menampilkan Judul Dinamis */}
                <h4 className="font-bold text-red-800 text-lg mb-2">
                  {pengaturan.alert_judul || 'info penting !!'}
                </h4>

                {/* Menampilkan Teks Dinamis dengan kemampuan membaca tag <b> / HTML */}
                <div
                  className="text-red-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: pengaturan.alert_teks || 'kelas terbatas' }}
                />
              </div>
            </motion.div>

        </div>
      </section>

      {/* FOOTER & LOKASI */}
      {/* Footer menggunakan Indigo Gelap */}
      <footer id="lokasi" className="bg-indigo-950 text-indigo-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-8 w-8 text-teal-400" />
              <span className="font-bold text-2xl tracking-tight text-white">Mr. ISRAR'S COURSE</span>
            </div>
            <p className="text-indigo-300 mb-8 max-w-sm leading-relaxed">
              Lembaga Kursus Matematika & Bahasa Inggris terpercaya untuk mencetak generasi muda yang mumpuni dan berkarakter.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="text-teal-400 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Gedung Satu (Sekretariat)</h4>
                  <p className="text-sm mt-1 text-indigo-300">Jln. Cengkeh Kelapa Tujuh (Belakang Tambal Ban Depan Makam Pahlawan Polres)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-teal-400 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Gedung Dua</h4>
                  <p className="text-sm mt-1 text-indigo-300">Jln. Cengkeh 1 Gg. Iperda Kelapa Tujuh (Depan Pintu Keluar Kantor Polres)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="md:ml-auto"
          >
            <h3 className="text-white text-lg font-semibold mb-6">Hubungi Kami & Media Sosial</h3>
            {/* Tombol WA Hijau */}
            <motion.a whileHover={{ scale: 1.05 }} href="https://wa.me/6281271345823" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl transition-colors w-full md:w-fit mb-4 shadow-lg shadow-green-900/20">
              <Phone className="w-6 h-6" />
              <div>
                <p className="text-xs text-green-100 uppercase font-semibold tracking-wider">Admin WhatsApp (Only)</p>
                <p className="font-bold text-lg">0812 7134 5823</p>
              </div>
            </motion.a>

            {/* Tombol Youtube Merah */}
            <motion.a whileHover={{ scale: 1.05 }} href="https://youtube.com/@mrisrar1857" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-2xl transition-colors w-full md:w-fit shadow-lg shadow-red-900/20">
              <Youtube className="w-6 h-6" />
              <div>
                <p className="text-xs text-red-100 uppercase font-semibold tracking-wider">YouTube Channel</p>
                <p className="font-bold text-lg">@mrisrar1857</p>
              </div>
            </motion.a>
            <p className="text-sm text-indigo-400 mt-6 italic">Please, like & subscribe for more information in the future!</p>
          </motion.div>
        </div>

        <div className="border-t border-indigo-900/50 mt-16 pt-8 text-center text-sm text-indigo-400">
          <p>© {new Date().getFullYear()} Mr. ISRAR'S MATH & ENGLISH COURSE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}