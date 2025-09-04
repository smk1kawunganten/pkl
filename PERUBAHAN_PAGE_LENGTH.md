# Perubahan Default Page Length DataTables

## Ringkasan Perubahan

Mengubah nilai default "Show entries" dari **10** menjadi **25** di semua tabel DataTables yang ada dalam sistem ePKL.

## File yang Diperbaiki

### 1. **pkl/data_siswa.html**
- **Lokasi:** Line 256-265
- **Perubahan:** Menambahkan `"pageLength": 25` pada konfigurasi DataTable

### 2. **pkl/data_presensi.html**
- **Lokasi:** Line 318-324
- **Perubahan:** Menambahkan `pageLength: 25` pada konfigurasi DataTable

### 3. **pkl/pembimbing/presensi_siswa.html**
- **Lokasi:** Line 304-312
- **Perubahan:** Menambahkan `pageLength: 25` pada konfigurasi DataTable

### 4. **pkl/guru_pembimbing.html**
- **Lokasi:** Line 256-265
- **Perubahan:** Menambahkan `"pageLength": 25` pada konfigurasi DataTable

### 5. **pkl/perusahaan.html**
- **Lokasi:** Line 257-265
- **Perubahan:** Menambahkan `"pageLength": 25` pada konfigurasi DataTable

### 6. **pkl/pembimbing/data_siswa.html**
- **Lokasi:** Line 193-198
- **Perubahan:** Menambahkan `pageLength: 25` pada konfigurasi DataTable

### 7. **pkl/pembimbing/jurnal_siswa.html**
- **Lokasi:** Line 286-294
- **Perubahan:** Menambahkan `pageLength: 25` pada konfigurasi DataTable

### 8. **pkl/perusahaan3.html**
- **Lokasi:** Line 285-291 dan Line 388-396
- **Perubahan:** Menambahkan `pageLength: 25` pada kedua konfigurasi DataTable

## Detail Perubahan

### Sebelum Perubahan
```javascript
$('#tableName').DataTable({
  responsive: true,
  autoWidth: false,
  // ... konfigurasi lainnya
});
```

### Setelah Perubahan
```javascript
$('#tableName').DataTable({
  responsive: true,
  autoWidth: false,
  pageLength: 25,
  // ... konfigurasi lainnya
});
```

## Manfaat Perubahan

1. **Pengalaman Pengguna Lebih Baik:** User dapat melihat lebih banyak data dalam satu halaman
2. **Mengurangi Navigasi:** Kurang perlu untuk berpindah halaman
3. **Konsistensi:** Semua tabel memiliki default yang sama
4. **Efisiensi:** Lebih cepat untuk melihat data dalam jumlah yang lebih besar

## Testing

Untuk memverifikasi perubahan:
1. Buka setiap halaman yang memiliki tabel
2. Pastikan dropdown "Show entries" menampilkan "25" sebagai default
3. Pastikan tabel menampilkan 25 baris data per halaman (jika data tersedia)

## Catatan

- Perubahan ini hanya mempengaruhi nilai default
- User masih dapat mengubah jumlah entri yang ditampilkan melalui dropdown "Show entries"
- Semua fitur DataTables lainnya tetap berfungsi normal 