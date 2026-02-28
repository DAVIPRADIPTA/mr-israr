import { NextResponse } from 'next/server';
import Papa from 'papaparse';

export const revalidate = 60; 

export async function GET() {
  const sheetId = '1MwIVmIkPZltpwUac5XcUpfEL9qJclmXEioe18dvEMeo'; // ID Sheet Utama
  const gid = '1069341488'; // <--- GANTI BAGIAN INI DENGAN GID TAB PENGATURAN!
  
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

  try {
    const response = await fetch(url);
    const csvText = await response.text();

    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    // Mengubah baris excel menjadi format objek yang mudah dipakai { alert_judul: "...", alert_teks: "..." }
    const settingsObj: any = {};
    parsed.data.forEach((row: any) => {
      if (row.kunci && row.nilai) {
        settingsObj[row.kunci.trim()] = row.nilai.trim();
      }
    });

    return NextResponse.json(settingsObj);
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil data pengaturan' }, { status: 500 });
  }
}