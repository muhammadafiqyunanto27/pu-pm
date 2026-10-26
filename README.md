# Pasar Uang & Pasar Modal — Modul Belajar

Situs belajar statis yang merangkum enam deck presentasi **Pasar Uang dan Pasar Modal** menjadi satu modul yang bisa dibaca berurutan atau dipakai sebagai referensi cepat.

Live: <https://pu-pm.vercel.app>

## Isi

- **27 topik** dalam 5 bab: pasar keuangan, pasar uang, pasar uang vs pasar modal, instrumen pasar uang, dan valuta asing.
- **Katalog 17 instrumen** dengan filter pasar, kategori, status syariah, dan pencarian.
- **6 kelompok perbandingan** pasar uang vs pasar modal, total 22 baris pembeda.
- **70 istilah** dalam glosarium A–Z dengan filter kategori.
- **35 soal pilihan ganda** dengan pembahasan, skor, dan tautan balik ke topik.
- Pencarian penuh lewat `Ctrl + K`, mode terang/gelap, layout responsif, dan versi cetak.

## Stack

- Astro 7 (static output)
- React 19 untuk island kuis
- CSS vanilla dengan design token dan dark mode
- Fraunces, Inter, dan IBM Plex Mono

## Menjalankan

Butuh **Node.js >= 22.23.4** (persyaratan Astro 7).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil di dist/
npm run preview   # cek hasil build
```

## Struktur

```text
src/
  components/     Layout parts, topic renderer, rail, pager, quiz
  data/           Konten terstruktur: materi, instrumen, glosarium, kuis
  layouts/        Layout global, navigasi, drawer, footer
  lib/            Helper format dan anchor
  pages/          Rute statis + endpoint search-index.json
  styles/         Design system
```

Konten topik memakai tipe `Block` di `src/data/types.ts`, sehingga satu renderer (`TopicBody.astro`) dapat menampilkan paragraf, daftar, tabel, kartu, langkah, callout, dan formula.

## Sumber dan koreksi

Disusun dari enam deck kelompok:

1. Pasar keuangan
2. Pengertian pasar uang
3. Promes, BA, sertifikat deposito
4. Commercial paper, repo, T-Bill, pasar uang syariah
5. Pasar uang vs pasar modal, institusi dan produk
6. Valuta asing

Dua kekeliruan teknis ditemukan di slide sumber dan tidak direproduksi:

- Uraian fungsi **likuiditas** dan **efisiensi** yang tertukar pada deck pasar keuangan.
- Contoh perhitungan laba valas yang tidak konsisten antarbaris.

Materi tetap disajikan untuk belajar. Bukan pengganti buku teks atau penjelasan dosen.

## Deploy

`astro.config.mjs` memakai `base: '/pu-pm'` saat build berjalan di GitHub Actions, dan `/` saat lokal. Workflow GitHub Pages ada di `.github/workflows/deploy.yml`.
