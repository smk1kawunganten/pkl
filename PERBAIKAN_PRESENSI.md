# Perbaikan Sistem Presensi ePKL

## Masalah yang Diperbaiki

### 1. Logika PLA (Pulang Lebih Awal) yang Tidak Akurat

**Masalah:**
- Siswa dengan kehadiran 13:01 sampai 17:56 dikategorikan sebagai PLA (Pulang Lebih Awal)
- Logika sebelumnya menggunakan batas >= 5 jam untuk dianggap hadir penuh
- Untuk kasus 13:01 - 17:56 = 4 jam 55 menit = 4.92 jam < 5 jam, sehingga dikategorikan PLA

**Solusi:**
- Mengubah batas minimum jam kerja dari >= 5 jam menjadi >= 4 jam
- Sekarang siswa dengan jam kerja >= 4 jam dianggap hadir penuh (H)
- Contoh: 13:01 - 17:56 = 4.92 jam (sekarang dianggap HADIR)

**File yang Diperbaiki:**
- `pembimbing/presensi_siswa.html`
- `data_presensi.html`

### 2. Modal Edit Presensi Tidak Menampilkan Jam Masuk dan Pulang

**Masalah:**
- Ketika mengklik sel presensi untuk edit, modal tidak menampilkan jam masuk dan pulang
- Tidak ada keterangan jam kerja yang jelas

**Solusi:**
- Menambahkan field jam masuk dan jam pulang di modal edit
- Menambahkan keterangan jam yang menampilkan jam masuk dan pulang saat ini
- Field jam dapat diedit untuk mengubah data presensi
- Menambahkan event handler untuk menampilkan/menyembunyikan field berdasarkan status

**Fitur Baru:**
- Field input jam masuk dan jam pulang di modal edit
- Keterangan jam yang menampilkan data saat ini
- Validasi dan penyimpanan jam yang diinput user
- Konsistensi antara kedua file (pembimbing dan admin)

## Detail Perubahan

### Perubahan Logika PLA
```javascript
// Sebelumnya
if (diff >= 5) {
  cell = 'H'; // Hadir
} else {
  cell = 'PLA'; // Pulang Lebih Awal
}

// Setelah perbaikan
if (diff >= 4) {
  cell = 'H'; // Hadir
} else {
  cell = 'PLA'; // Pulang Lebih Awal
}
```

### Penambahan Modal Edit
- Field jam masuk dan jam pulang
- Keterangan jam saat ini
- Event handler untuk menampilkan/menyembunyikan field
- Penyimpanan data jam yang diinput user

### Konsistensi Antar File
- Kedua file (`presensi_siswa.html` dan `data_presensi.html`) sekarang memiliki fitur yang sama
- Modal edit yang konsisten
- Logika PLA yang sama

## Hasil Perbaikan

1. **Logika PLA Lebih Akurat:** Siswa dengan jam kerja >= 4 jam dianggap hadir penuh
2. **Modal Edit Informatif:** Menampilkan jam masuk dan pulang saat ini
3. **Fleksibilitas Edit:** User dapat mengubah jam masuk dan pulang
4. **Konsistensi:** Kedua file memiliki fitur yang sama

## Testing

Untuk memverifikasi perbaikan:
1. Cek siswa dengan jam kerja 13:01 - 17:56 (seharusnya sekarang H, bukan PLA)
2. Klik sel presensi untuk edit (seharusnya muncul modal dengan jam masuk/pulang)
3. Edit jam masuk/pulang dan simpan (seharusnya data tersimpan dengan benar) 