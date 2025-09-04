# Perubahan Kolom Presensi Pembimbing

## Ringkasan Perubahan

Mengubah kolom "Pembimbing" menjadi "Tempat PKL" di halaman presensi pembimbing dan menambahkan pengurutan data berdasarkan tempat PKL terlebih dahulu, kemudian berdasarkan abjad nama.

## File yang Diperbaiki

### **pkl/pembimbing/presensi_siswa.html**

## Detail Perubahan

### 1. Perubahan Header Tabel
```html
<!-- Sebelum -->
<th>Pembimbing</th>

<!-- Sesudah -->
<th>Tempat PKL</th>
```

### 2. Perubahan Data yang Ditampilkan
```javascript
// Sebelum
<td>${siswa.namaGuruPembimbing || '-'}</td>

// Sesudah
<td>${siswa.namaPerusahaan || '-'}</td>
```

### 3. Penambahan Pengurutan Data
```javascript
// Urutkan siswa berdasarkan tempat PKL terlebih dahulu, kemudian berdasarkan nama
siswaList.sort((a, b) => {
  const tempatA = (a.namaPerusahaan || '').toLowerCase();
  const tempatB = (b.namaPerusahaan || '').toLowerCase();
  const namaA = (a.namaLengkap || a.nis || '').toLowerCase();
  const namaB = (b.namaLengkap || b.nis || '').toLowerCase();
  
  // Urutkan berdasarkan tempat PKL terlebih dahulu
  if (tempatA !== tempatB) {
    return tempatA.localeCompare(tempatB);
  }
  // Jika tempat PKL sama, urutkan berdasarkan nama
  return namaA.localeCompare(namaB);
});
```

### 4. Konfigurasi DataTable Default Order
```javascript
$('#presensiTable').DataTable({
  responsive: true,
  autoWidth: false,
  pageLength: 25,
  order: [[3, 'asc'], [1, 'asc']], // Urutkan berdasarkan kolom Tempat PKL (3) terlebih dahulu, kemudian Nama (1)
  columnDefs: [
    { targets: [0,1,2,3], orderable: true },
    { targets: '_all', orderable: false }
  ]
});
```

## Struktur Kolom Tabel

| No | Kolom | Deskripsi | Orderable |
|----|-------|-----------|-----------|
| 0 | NIS | Nomor Induk Siswa | Ya |
| 1 | Nama Siswa | Nama lengkap siswa | Ya |
| 2 | Kelas | Kelas siswa | Ya |
| 3 | **Tempat PKL** | **Nama perusahaan tempat PKL** | **Ya** |
| 4+ | Tanggal | Presensi per tanggal | Tidak |

## Logika Pengurutan

### 1. Pengurutan Utama: Tempat PKL
- Data diurutkan berdasarkan nama perusahaan tempat PKL secara alfabetis
- Menggunakan `localeCompare()` untuk pengurutan yang benar dengan karakter khusus

### 2. Pengurutan Sekunder: Nama Siswa
- Jika tempat PKL sama, data diurutkan berdasarkan nama siswa
- Menggunakan `localeCompare()` untuk pengurutan yang benar dengan karakter khusus

### 3. Case Insensitive
- Pengurutan tidak membedakan huruf besar/kecil
- Menggunakan `.toLowerCase()` untuk konsistensi

## Manfaat Perubahan

1. **Informasi yang Lebih Relevan:** Menampilkan tempat PKL lebih penting daripada nama pembimbing
2. **Pengelompokan Visual:** Siswa dari tempat PKL yang sama akan dikelompokkan bersama
3. **Kemudahan Navigasi:** Lebih mudah menemukan siswa berdasarkan tempat PKL
4. **Konsistensi Data:** Data diurutkan secara konsisten setiap kali halaman dimuat

## Contoh Hasil Pengurutan

```
NIS    | Nama Siswa    | Kelas | Tempat PKL
-------|---------------|-------|------------
12345  | Ahmad         | XII   | PT ABC
12346  | Budi          | XII   | PT ABC
12347  | Citra         | XII   | PT ABC
12348  | Deni          | XII   | PT XYZ
12349  | Eka           | XII   | PT XYZ
12350  | Fitri         | XII   | PT XYZ
```

## Testing

Untuk memverifikasi perubahan:
1. Buka halaman presensi pembimbing
2. Pastikan kolom header menampilkan "Tempat PKL"
3. Pastikan data menampilkan nama perusahaan, bukan nama pembimbing
4. Pastikan data terurut berdasarkan tempat PKL terlebih dahulu
5. Pastikan siswa dengan tempat PKL yang sama terurut berdasarkan nama 