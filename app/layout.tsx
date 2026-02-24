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

export const metadata = {
  title: "Mr. Israr's Math & English Course - Lembaga Kursus Terpercaya",
  description: "Kursus Matematika dan Bahasa Inggris di Lampung. Daftar sekarang untuk meningkatkan kualitas akademik anak Anda.",
  keywords: ["Kursus Bahasa Inggris", "Kursus Matematika", "Mr Israr", "Bimbel Lampung"],
};

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
