// Dashboard functionality for company
document.addEventListener('DOMContentLoaded', function() {
  // Check if user is logged in
  if (!localStorage.getItem('perusahaan_logged_in')) {
    window.location.href = 'login.html';
    return;
  }

  // Logout functionality
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('perusahaan_logged_in');
      localStorage.removeItem('perusahaan_program_keahlian');
      localStorage.removeItem('perusahaan_nama');
      window.location.href = 'login.html';
    });
  }
}); 