/**
 * SCRIPT JS - WEBSITE PROFIL UPTD SD INPRES 2 BIRA
 * Mengelola interaktivitas: Navbar, Smooth Scroll, Filter Galeri, Lightbox Modal,
 * Modal Berita, Validasi Form Kontak, Tombol Back-to-Top, dan Tahun Hak Cipta.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Inisialisasi Tahun Otomatis di Footer
  initCopyrightYear();

  // 2. Tombol Back to Top & Navbar Scroll Effect
  initScrollFeatures();

  // 3. Filter Galeri Kegiatan
  initGalleryFilter();

  // 4. Modal Lightbox Galeri
  initGalleryLightbox();

  // 5. Modal Berita Lengkap
  initNewsModal();

  // 6. Validasi Form Kontak
  initContactForm();

  // 7. Penutup Menu Navbar Otomatis pada Mobile saat Link Diklik
  initMobileNavClose();
});

/**
 * Mengisi tahun hak cipta secara otomatis
 */
function initCopyrightYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Mengatur Navbar saat di-scroll & Tombol Kembali ke Atas (Back to Top)
 */
function initScrollFeatures() {
  const backToTopBtn = document.getElementById('backToTop');
  const navbar = document.querySelector('.custom-navbar');

  window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;

    // Tampilkan tombol back-to-top setelah scroll 300px
    if (backToTopBtn) {
      if (scrollPos > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Berikan bayangan lebih tebal pada navbar saat di-scroll
    if (navbar) {
      if (scrollPos > 50) {
        navbar.classList.add('shadow-sm');
      } else {
        navbar.classList.remove('shadow-sm');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * Filter Kategori Galeri Kegiatan
 */
function initGalleryFilter() {
  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid-col');

  if (!filterButtons.length || !galleryItems.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Hilangkan status aktif dari tombol sebelumnya
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.classList.add('animate__fadeIn');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Modal Lightbox untuk Menampilkan Foto Galeri Ukuran Penuh
 */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModalEl = document.getElementById('galleryModal');
  const lightboxImg = document.getElementById('galleryModalImg');
  const lightboxTitle = document.getElementById('galleryModalTitle');
  const lightboxBadge = document.getElementById('galleryModalBadge');

  if (!lightboxModalEl || !galleryItems.length) return;

  const bsModal = new bootstrap.Modal(lightboxModalEl);

  galleryItems.forEach(item => {
    item.addEventListener('click', function () {
      const img = this.querySelector('img');
      const title = this.querySelector('.gallery-caption-title')?.textContent || 'Dokumentasi Sekolah';
      const cat = this.querySelector('.gallery-caption-cat')?.textContent || 'Kegiatan';

      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || title;
      }
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxBadge) lightboxBadge.textContent = cat;

      bsModal.show();
    });
  });
}

/**
 * Data Berita Lengkap & Modal Detail Berita
 */
const schoolNewsData = {
  1: {
    title: 'Pelaksanaan Asesmen Nasional Berbasis Komputer (ANBK)',
    category: 'Akademik',
    date: '18 Oktober 2026',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop',
    author: 'Tim Humas Sekolah (Data Contoh)',
    content: `
      <p>UPTD SD Inpres 2 Bira melaksanakan simulasi dan geladi bersih Asesmen Nasional Berbasis Komputer (ANBK) untuk peserta didik kelas 5. Kegiatan ini bertujuan mempersiapkan kesiapan sarana, teknis jaringan, dan pemahaman siswa terhadap bentuk soal literasi serta numerasi.</p>
      <p>Kepala sekolah menyampaikan apresiasi atas kedisiplinan dan antusiasme para siswa serta dukungan dewan guru yang telah mendampingi proses pelatihan mandiri sejak awal semester.</p>
      <div class="alert alert-warning py-2 small mb-3">
        <i class="bi bi-info-circle me-1"></i> <strong>Catatan:</strong> Informasi ini merupakan teks contoh dummy yang dapat diedit sesuai dengan agenda aktual sekolah.
      </div>
    `
  },
  2: {
    title: 'Peringatan Hari Pahlawan & Upacara Bendera Khidmat',
    category: 'Upacara & Karakter',
    date: '10 November 2026',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop',
    author: 'Kesiswaan & Pembina Upacara',
    content: `
      <p>Seluruh warga UPTD SD Inpres 2 Bira mengikuti upacara bendera memperingati Hari Pahlawan dengan khidmat di lapangan sekolah. Para siswa dan dewan guru mengenakan pakaian bernuansa perjuangan dan seragam rapi.</p>
      <p>Melalui upacara ini, sekolah menanamkan nilai-nilai patriotisme, cinta tanah air, kejujuran, dan kegigihan belajar kepada generasi penerus bangsa.</p>
      <div class="alert alert-warning py-2 small mb-3">
        <i class="bi bi-info-circle me-1"></i> <strong>Catatan:</strong> Informasi ini merupakan berita dummy percontohan.
      </div>
    `
  },
  3: {
    title: 'Gerakan Sekolah Sehat & Gotong Royong Lingkungan Bersih',
    category: 'Kebersihan',
    date: '24 Oktober 2026',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop',
    author: 'Koordinator UKS & Adiwiyata',
    content: `
      <p>Dalam rangka mewujudkan lingkungan belajar yang nyaman dan asri, seluruh siswa, guru, serta tenaga kependidikan melaksanakan aksi Jumat Bersih dan Gerakan Sekolah Sehat.</p>
      <p>Kegiatan meliputi penataan pojok tanaman hias, pembersihan selasar kelas, serta edukasi cuci tangan pakai sabun (CTPS) yang benar sebelum dan sesudah makan.</p>
      <div class="alert alert-warning py-2 small mb-3">
        <i class="bi bi-info-circle me-1"></i> <strong>Catatan:</strong> Informasi ini merupakan berita dummy percontohan.
      </div>
    `
  }
};

function initNewsModal() {
  const newsModalEl = document.getElementById('newsModal');
  const readMoreButtons = document.querySelectorAll('.btn-read-more');

  if (!newsModalEl || !readMoreButtons.length) return;

  const bsModal = new bootstrap.Modal(newsModalEl);
  const modalTitle = document.getElementById('newsModalTitle');
  const modalMeta = document.getElementById('newsModalMeta');
  const modalImg = document.getElementById('newsModalImg');
  const modalContent = document.getElementById('newsModalBodyContent');

  readMoreButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const newsId = this.getAttribute('data-news-id');
      const news = schoolNewsData[newsId];

      if (news) {
        if (modalTitle) modalTitle.textContent = news.title;
        if (modalMeta) {
          modalMeta.innerHTML = `
            <span class="badge bg-primary me-2">${news.category}</span>
            <span><i class="bi bi-calendar3 me-1"></i> ${news.date}</span>
            <span class="ms-3"><i class="bi bi-person me-1"></i> ${news.author}</span>
          `;
        }
        if (modalImg) {
          modalImg.src = news.image;
          modalImg.alt = news.title;
        }
        if (modalContent) {
          modalContent.innerHTML = news.content;
        }
        bsModal.show();
      }
    });
  });
}

/**
 * Validasi Formulir Kontak (Frontend Saja - Tanpa Backend)
 */
function initContactForm() {
  const contactForm = document.getElementById('schoolContactForm');
  const formFeedback = document.getElementById('formFeedbackAlert');

  if (!contactForm) return;

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('senderSubject');
    const messageInput = document.getElementById('senderMessage');

    let isValid = true;
    let errorMessage = '';

    // Validasi Sederhana
    if (!nameInput.value.trim()) {
      isValid = false;
      errorMessage = 'Mohon masukkan nama lengkap Anda.';
      nameInput.focus();
    } else if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
      isValid = false;
      errorMessage = 'Mohon masukkan alamat email yang valid.';
      emailInput.focus();
    } else if (!subjectInput.value.trim()) {
      isValid = false;
      errorMessage = 'Mohon pilih atau masukkan subjek pesan.';
      subjectInput.focus();
    } else if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      isValid = false;
      errorMessage = 'Pesan minimal berisi 10 karakter.';
      messageInput.focus();
    }

    if (formFeedback) {
      if (!isValid) {
        formFeedback.className = 'alert alert-danger mt-3';
        formFeedback.innerHTML = `<i class="bi bi-exclamation-triangle-fill me-2"></i> ${errorMessage}`;
        formFeedback.classList.remove('d-none');
      } else {
        // Tampilkan pesan sukses frontend yang jujur bahwa ini prototipe
        formFeedback.className = 'alert alert-success mt-3';
        formFeedback.innerHTML = `
          <strong><i class="bi bi-check-circle-fill me-2"></i> Terima kasih, ${escapeHtml(nameInput.value.trim())}!</strong><br>
          <span class="small">Simulasi formulir berhasil divalidasi. Karena website ini adalah prototipe frontend tanpa backend database, pesan Anda belum tersimpan di server. Silakan hubungi pihak sekolah secara langsung melalui nomor telepon atau alamat resmi yang tertera.</span>
        `;
        formFeedback.classList.remove('d-none');
        contactForm.reset();
      }
    }
  });
}

/**
 * Helper validasi email regex
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Helper sanitasi teks
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}

/**
 * Menutup Menu Hamburger Mobile Saat Menu Navigasi Diklik
 */
function initMobileNavClose() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarSchoolContent');

  if (!navbarCollapse || !navLinks.length) return;

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
}
