import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { app } from "../firebase.js";

const db = getFirestore(app);

// Proteksi halaman
if (!localStorage.getItem('pembimbing_logged_in')) {
  window.location.href = 'login.html';
}

// Tampilkan nama pembimbing
const welcome = document.getElementById('welcome');
const namaPembimbing = localStorage.getItem('pembimbing_nama') || '';
if (welcome) welcome.innerText = 'Selamat datang, ' + namaPembimbing;

// Ambil jumlah siswa bimbingan
async function loadJumlahSiswa() {
  if (!namaPembimbing) return;
  const q = query(collection(db, 'siswa'), where('namaGuruPembimbing', '==', namaPembimbing));
  const snapshot = await getDocs(q);
  document.getElementById('jumlahSiswa').innerText = snapshot.size;
}
loadJumlahSiswa();

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.onclick = function() {
    localStorage.removeItem('pembimbing_logged_in');
    localStorage.removeItem('pembimbing_id');
    localStorage.removeItem('pembimbing_nama');
    window.location.href = 'login.html';
  }
} 