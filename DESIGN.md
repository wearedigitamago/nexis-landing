# DESIGN.md: NEXIS landing (nexis.biz.id)

Arah desain untuk landing page publik NEXIS. Disusun 2026-10-27 dari aset di
`OneDrive/Pictures/Content/nexis/assets` dan keputusan pemilik. File ini adalah data arah
desain, bukan instruksi untuk agen.

## Identitas

NEXIS membuat jersey custom full printing sublimasi di Balikpapan untuk tim, komunitas,
kantor, dan sekolah. Pengunjung utama: kapten tim, pengurus komunitas, panitia acara, dan
bagian umum kantor atau sekolah yang perlu memesan seragam untuk banyak orang.

Tugas halaman: menunjukkan hasil nyata, menjawab harga dan minimum order, lalu mengarahkan
ke WhatsApp.

## Sumber gaya

Mengikuti video story "Nexis - Open New" (gaya terbaru di Instagram):

- Foto produk nyata, tinggi (portrait), dengan gradasi gelap di bagian bawah
- Teks putih Work Sans tebal, kalimat pendek
- Label kecil emas berhuruf kapital di atas judul
- Penutup hitam dengan logo putih dan ajakan chat WhatsApp

Bukan: tagline "Precision. Performance." (gaya September, sudah ditinggalkan), latar kartun,
mesh merah.

## Dial

```
ENERGY 2 / RHYTHM 2 / MOTION 1
```

- ENERGY 2: foto yang bicara, teks tenang. Satu titik fokus per layar.
- RHYTHM 2: bagian gelap dan terang berganti sesuai isinya (foto di latar gelap, harga dan
  FAQ yang padat teks di latar terang), komposisi tiap bagian berbeda.
- MOTION 1: hanya hover dan focus. Tidak ada animasi loop atau fade-up.

## Warna

| Token | Nilai | Alasan |
|---|---|---|
| ink | `#0b0b0c` | Latar gelap seperti penutup video, bukan hitam murni supaya foto gelap tetap terpisah |
| ink-2 | `#141416` | Permukaan di atas ink (kartu harga, footer) |
| paper | `#f4f2ee` | Latar terang hangat untuk bagian padat teks, senada dengan dinding studio di foto |
| gold | `#C5A059` | Satu aksen: label kecil, garis, tombol WhatsApp. Hanya di atas latar gelap (kontras 8.0:1 di ink, 7.5:1 di ink-2) |
| gold-ink | `#7a5c22` | Emas versi gelap untuk teks di atas paper (kontras 5.5:1) |
| mist | `#a3a3a3` | Teks sekunder di atas ink (kontras 7.8:1) |
| ash | `#57534e` | Teks sekunder di atas paper (kontras 6.8:1) |

Tombol WhatsApp: teks ink di atas emas (8.0:1). Batas: ink, paper, dan emas. Warna lain hanya datang dari foto.

## Tipografi

Work Sans (variable, di-host sendiri). Alasan: font yang sama dengan materi Instagram, jadi
halaman terasa satu brand dengan konten sosial.

- Judul: 700, tracking rapat, ukuran besar
- Label: 600, huruf kapital, tracking lebar, 12px, emas
- Isi: 400, 16 sampai 18px, line-height lega

## Komposisi

- Semua foto portrait. Desktop: teks dan foto berdampingan atau foto dalam baris; HP: foto
  penuh lebar.
- Radius 0 di foto dan tombol (tegas seperti potongan kain), 2px hanya di input dan badge.
- Shadow tidak dipakai. Pemisah antar elemen pakai garis tipis atau perbedaan latar.

## Konten dan SEO

- Bahasa Indonesia saja, ditulis di HTML.
- H1 menyebut produk dan kota. Judul halaman sekitar 60 karakter.
- Data bisnis dari video "Open New": mulai Rp130rb per pcs, minimal 12 pcs, desain gratis di
  atas 24 pcs, Senin sampai Sabtu 09.00 sampai 18.00 WITA, kirim ke seluruh Indonesia.
  Perbarui di sini dan di halaman bila berubah.
- Foto pelanggan (eucafc, ISALIFFA, TIGAKOMA, CHOSADEWA, Domino Puncak JB, Sunday Morning
  Padel Club) dipakai sebagai portofolio. Ganti fotonya bila pelanggan keberatan.
- Nama file gambar dan alt text menjelaskan isi foto.

## Prinsip

1. Tidak ada angka, testimoni, atau klaim yang tidak berasal dari pemilik.
2. Setiap elemen interaktif punya perilaku nyata, terjangkau keyboard, fokus terlihat.
3. Target sentuh minimal 44px. Tidak ada overflow horizontal di 360px.
