import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { app } from "../firebase.js";

const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (form) {
    form.onsubmit = async function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const q = query(collection(db, 'guru_pembimbing'), where('username', '==', username), where('password', '==', password));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        const user = doc.data();
        localStorage.setItem('pembimbing_logged_in', 'true');
        localStorage.setItem('pembimbing_id', doc.id);
        localStorage.setItem('pembimbing_nama', user.namaLengkap);
        window.location.href = 'index.html';
      } else {
        document.getElementById('error').innerText = 'Username atau password salah!';
      }
    }
  }
}); 