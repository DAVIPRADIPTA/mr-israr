import { NextResponse } from 'next/server';
import Papa from 'papaparse';

// INI ADALAH SIHIRNYA: Website akan mengecek ulang ke Excel setiap 60 detik!
export const revalidate = 60; 

export async function GET() {
  // ID dari link Google Sheets Anda
  const sheetId = '1MwIVmIkPZltpwUac5XcUpfEL9qJclmXEioe18dvEMeo';
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

  try {
    const response = await fetch(url);
    const csvText = await response.text();

    // Membaca CSV dan mengubahnya menjadi Array JSON
    const parsed = Papa.parse(csvText, {
      header: true, // Menjadikan baris pertama (kategori, level, dll) sebagai penanda
      skipEmptyLines: true,
    });

    return NextResponse.json(parsed.data);
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil data dari Google Sheets' }, { status: 500 });
  }
}