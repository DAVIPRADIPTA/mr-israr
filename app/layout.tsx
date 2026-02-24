import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Mr. Israr's Course | Kursus Matematika & Bahasa Inggris",
  description: "Lembaga kursus Matematika dan Bahasa Inggris berkualitas dengan maksimal 10 siswa per kelas. Tersedia untuk SD dan SMP. Daftar sekarang!",
  keywords: ["kursus bahasa inggris", "kursus matematika", "les bahasa inggris", "les matematika", "Mr Israr Course"],
  openGraph: {
    title: "Mr. Israr's Course | Kursus Matematika & Bahasa Inggris",
    description: "Lembaga kursus berkualitas dengan maksimal 10 siswa per kelas. Biaya terjangkau dan suasana kekeluargaan.",
    type: "website",
    locale: "id_ID",
  },
  verification: {
    google: 'E1XYyRnSITfuYcSusqK7N_h8iny_GvMDDphozc46aZQ', // Ganti dengan kode acak milik Anda
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll`}
      >
        {children}
      </body>
    </html>
  );
}
