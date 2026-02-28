import { NextResponse } from 'next/server';
import Papa from 'papaparse';

export const revalidate = 60; 

export async function GET() {
  const sheetId = '1MwIVmIkPZltpwUac5XcUpfEL9qJclmXEioe18dvEMeo'; 
  const gid = '453232865'; // <--- GANTI BAGIAN INI DENGAN GID TAB GALERI!
  
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

  try {
    const response = await fetch(url);
    const csvText = await response.text();

    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    });

    return NextResponse.json(parsed.data);
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil data galeri' }, { status: 500 });
  }
}