'use client';

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  School,
  BookOpen,
  Award,
  Users,
  Building2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowRight,
  ChevronUp,
  Search,
  ExternalLink,
  Code2,
  Copy,
  Check,
  X,
  FileText,
  ShieldCheck,
  Sparkles,
  Info,
  AlertTriangle,
  HeartHandshake
} from 'lucide-react';

// Data Berita Sekolah
const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Pelaksanaan Asesmen Nasional Berbasis Komputer (ANBK)',
    category: 'Akademik',
    date: '18 Oktober 2026',
    author: 'Tim Humas Sekolah',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=900&auto=format&fit=crop',
    excerpt: 'Siswa kelas V mengikuti simulasi dan gladi bersih ANBK dengan tertib guna mengukur kesiapan literasi serta numerasi sekolah...',
    content: `UPTD SD Inpres 2 Bira melaksanakan simulasi dan geladi bersih Asesmen Nasional Berbasis Komputer (ANBK) untuk peserta didik kelas 5. Kegiatan ini bertujuan mempersiapkan kesiapan sarana, teknis jaringan, dan pemahaman siswa terhadap bentuk soal literasi serta numerasi.

Kepala sekolah menyampaikan apresiasi atas kedisiplinan dan antusiasme para siswa serta dukungan dewan guru yang telah mendampingi proses pelatihan mandiri sejak awal semester. Diharapkan seluruh tahapan berjalan dengan lancar dan mencerminkan mutu pendidikan yang terus bertumbuh.`
  },
  {
    id: 2,
    title: 'Peringatan Hari Pahlawan & Upacara Bendera Khidmat',
    category: 'Upacara & Karakter',
    date: '10 November 2026',
    author: 'Kesiswaan & Pembina Upacara',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=900&auto=format&fit=crop',
    excerpt: 'Upacara memperingati jasa para pahlawan bangsa dengan balutan semangat kebangsaan, kedisiplinan, dan keteladanan budi pekerti...',
    content: `Seluruh warga UPTD SD Inpres 2 Bira mengikuti upacara bendera memperingati Hari Pahlawan dengan khidmat di lapangan sekolah. Para siswa dan dewan guru mengenakan pakaian bernuansa perjuangan dan seragam rapi.

Melalui upacara ini, sekolah menanamkan nilai-nilai patriotisme, cinta tanah air, kejujuran, dan kegigihan belajar kepada generasi penerus bangsa sebagai cerminan Profil Pelajar Pancasila.`
  },
  {
    id: 3,
    title: 'Gerakan Sekolah Sehat & Gotong Royong Lingkungan Bersih',
    category: 'Kebersihan',
    date: '24 Oktober 2026',
    author: 'Koordinator UKS & Adiwiyata',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=900&auto=format&fit=crop',
    excerpt: 'Aksi Jumat Bersih bersama dewan guru dan siswa merawat tanaman hias serta menjaga selasar kelas tetap rapi dan asri...',
    content: `Dalam rangka mewujudkan lingkungan belajar yang nyaman dan asri, seluruh siswa, guru, serta tenaga kependidikan melaksanakan aksi Jumat Bersih dan Gerakan Sekolah Sehat.

Kegiatan meliputi penataan pojok tanaman hias, pembersihan selasar kelas, serta edukasi cuci tangan pakai sabun (CTPS) yang benar sebelum dan sesudah jam istirahat untuk menanamkan kebiasaan hidup higienis.`
  }
];

// Data Galeri Kegiatan
const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Belajar Interaktif di Ruang Kelas',
    category: 'pembelajaran',
    categoryLabel: 'Pembelajaran',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    desc: 'Peserta didik aktif berdiskusi dan mengerjakan lembar kerja dipandu dewan guru.'
  },
  {
    id: 2,
    title: 'Keceriaan Membaca Buku di Pojok Baca',
    category: 'siswa',
    categoryLabel: 'Kegiatan Siswa',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    desc: 'Membiasakan budaya literasi sejak dini pada jam istirahat sekolah.'
  },
  {
    id: 3,
    title: 'Senam Pagi Kebugaran Jasmani',
    category: 'olahraga',
    categoryLabel: 'Olahraga & Seni',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=800&auto=format&fit=crop',
    desc: 'Membangun tubuh bugar dan semangat ceria sebelum memulai jam pembelajaran.'
  },
  {
    id: 4,
    title: 'Upacara Bendera Khidmat Hari Senin',
    category: 'upacara',
    categoryLabel: 'Upacara & Karakter',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
    desc: 'Melatih kedisiplinan dan rasa hormat kepada bendera merah putih serta para pejuang bangsa.'
  },
  {
    id: 5,
    title: 'Eksplorasi Praktik Sains Sederhana',
    category: 'pembelajaran',
    categoryLabel: 'Pembelajaran',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop',
    desc: 'Pengenalan konsep alam dan sains ramah anak melalui eksperimen menyenangkan.'
  },
  {
    id: 6,
    title: 'Aksi Lingkungan Menanam Tanaman Sekolah',
    category: 'upacara',
    categoryLabel: 'Upacara & Karakter',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    desc: 'Menanamkan kepedulian terhadap kelestarian lingkungan dan keindahan sekolah.'
  }
];

// Data Fasilitas
const FACILITIES = [
  {
    id: 1,
    title: 'Ruang Kelas Nyaman',
    tag: 'Akademik',
    desc: 'Ruang belajar dengan ventilasi udara alami dan pencahayaan optimal yang mendukung konsentrasi belajar murid.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Pojok Baca & Literasi',
    tag: 'Literasi',
    desc: 'Koleksi buku cerita bergambar, ensiklopedia anak, dan modul pembelajaran untuk merangsang minat baca mandiri.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Ruang Guru & Tata Usaha',
    tag: 'Administrasi',
    desc: 'Tempat perencanaan program pembelajaran dewan guru dan ruang pelayanan administrasi bagi orang tua murid.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Lapangan Upacara & Olahraga',
    tag: 'Olahraga',
    desc: 'Halaman serbaguna untuk upacara bendera, senam kesegaran jasmani, dan aktivitas olahraga outdoor.',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Sanitasi & Wastafel Sehat',
    tag: 'Kesehatan',
    desc: 'Fasilitas cuci tangan pakai sabun dan sarana toilet yang bersih guna menanamkan perilaku hidup bersih dan sehat.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Area Bermain Ramah Anak',
    tag: 'Sosial',
    desc: 'Area teduh dan aman bagi siswa untuk bersosialisasi, bermain, dan memupuk rasa persahabatan saat jam istirahat.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop'
  }
];

// Data Guru
const TEACHERS = [
  {
    id: 1,
    name: '[Nama Guru Kelas I]',
    role: 'Wali Kelas I',
    specialty: 'Transisi PAUD ke SD & Literasi Awal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: '[Nama Guru Kelas V]',
    role: 'Wali Kelas V',
    specialty: 'Literasi Lanjut, Numerasi & ANBK',
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: '[Nama Guru PJOK]',
    role: 'Guru PJOK / Olahraga',
    specialty: 'Kebugaran Jasmani & Sportivitas',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    name: '[Nama Guru Agama]',
    role: 'Guru Pendidikan Agama',
    specialty: 'Budi Pekerti, Ibadah & Karakter',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop'
  }
];

export default function SchoolProfilePage() {
  // State Interaktif
  const [activeGalleryCat, setActiveGalleryCat] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const [selectedNews, setSelectedNews] = useState<typeof NEWS_ITEMS[0] | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formFeedback, setFormFeedback] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

  // VS Code Source Code Drawer State
  const [showCodeViewer, setShowCodeViewer] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'js' | 'guide'>('html');
  const [copied, setCopied] = useState(false);

  // Scroll listener untuk tombol Back to Top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter galeri
  const filteredGallery = activeGalleryCat === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeGalleryCat);

  // Handle Form Submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormFeedback({ type: 'error', message: 'Mohon masukkan nama lengkap Anda.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setFormFeedback({ type: 'error', message: 'Mohon masukkan alamat email yang valid.' });
      return;
    }
    if (!formData.subject) {
      setFormFeedback({ type: 'error', message: 'Mohon pilih subjek pertanyaan Anda.' });
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setFormFeedback({ type: 'error', message: 'Pesan minimal berisi 10 karakter.' });
      return;
    }

    setFormFeedback({
      type: 'success',
      message: `Terima kasih Bapak/Ibu ${formData.name}! Validasi simulasi formulir berhasil. Karena ini merupakan prototipe frontend tanpa backend, silakan hubungi saluran resmi sekolah untuk keperluan mendesak.`
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-amber-100 selection:text-blue-900 relative">
      
      {/* ====================================================================
          BAR INFORMASI ATAS / STATUS DRAFT
          ==================================================================== */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-blue-950 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">
              Status Website
            </span>
            <span>Profil Resmi UPTD SD Inpres 2 Bira — Mode Siap Terbit (Data Resmi Dapat Dilengkapi)</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCodeViewer(true)}
              className="inline-flex items-center gap-1.5 bg-blue-800 hover:bg-blue-700 text-white font-medium px-2.5 py-1 rounded transition text-xs border border-blue-600"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-300" />
              <span>Kode Bersih VS Code</span>
            </button>
            <a
              href="/website-sd-inpres-2-bira/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-blue-200 hover:text-white underline text-xs"
            >
              <span>Buka File Standalone HTML</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* ====================================================================
          A. NAVBAR
          ==================================================================== */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <a href="#beranda" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center p-2 shadow-md shadow-blue-700/20 group-hover:scale-105 transition-transform">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" fill="#1565C0" stroke="#FFB703" strokeWidth="4"/>
                  <path d="M50 20L62 36H38L50 20Z" fill="#FFB703"/>
                  <path d="M26 44C32 40 42 42 50 48C58 42 68 40 74 44C78 58 68 76 50 82C32 76 22 58 26 44Z" fill="#FFFFFF"/>
                  <path d="M50 48V78M38 58C42 63 46 66 50 68M62 58C58 63 54 66 50 68" stroke="#1565C0" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="50" cy="38" r="5" fill="#D97706"/>
                </svg>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-extrabold text-blue-900 tracking-tight leading-none mb-1">
                  UPTD SD Inpres 2 Bira
                </h1>
                <p className="text-xs text-slate-500 font-medium">Sekolah Dasar Negeri Ramah Anak &amp; Berkarakter</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <a href="#beranda" className="px-3 py-2 text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg">Beranda</a>
              <a href="#sambutan" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition">Sambutan</a>
              <a href="#profil" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition">Profil</a>
              <a href="#guru" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition">Guru</a>
              <a href="#fasilitas" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition">Fasilitas</a>
              <a href="#berita" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition">Berita</a>
              <a href="#galeri" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 rounded-lg transition">Galeri</a>
              <a href="#ppdb" className="px-3 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50 rounded-lg transition">PPDB</a>
              
              <div className="pl-3">
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-blue-700/20 transition transform hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Kontak</span>
                </a>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-blue-700 hover:bg-slate-100 rounded-lg focus:outline-none"
                aria-label="Buka menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`h-0.5 w-full bg-current rounded transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`h-0.5 w-full bg-current rounded transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`h-0.5 w-full bg-current rounded transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-1 shadow-xl">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-blue-700 bg-blue-50"
            >
              Beranda
            </a>
            <a
              href="#sambutan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              Sambutan Kepala Sekolah
            </a>
            <a
              href="#profil"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              Profil &amp; Identitas Sekolah
            </a>
            <a
              href="#guru"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              Guru &amp; Tenaga Kependidikan
            </a>
            <a
              href="#fasilitas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              Fasilitas Sekolah
            </a>
            <a
              href="#berita"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              Berita &amp; Pengumuman
            </a>
            <a
              href="#galeri"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              Galeri Kegiatan
            </a>
            <a
              href="#ppdb"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-amber-700 hover:bg-amber-50"
            >
              PPDB Siswa Baru
            </a>
            <div className="pt-2">
              <a
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow"
              >
                <Mail className="w-4 h-4" /> Hubungi Sekolah
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ====================================================================
          B. HERO SECTION
          ==================================================================== */}
      <header id="beranda" className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-amber-50/60 pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-100">
        {/* Soft background glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Kolom Teks Hero (7 Kolom Desktop) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-800 text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-200">
                <GraduationCap className="w-4 h-4 text-blue-700" />
                <span>Pendidikan Karakter &amp; Budi Pekerti</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Selamat Datang di <br />
                <span className="text-blue-700">UPTD SD Inpres 2 Bira</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Membentuk generasi pembelajar yang berakhlak mulia, cerdas, kreatif, dan mandiri dalam lingkungan sekolah dasar yang aman, ramah anak, dan penuh kasih sayang.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#profil"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-blue-700/25 transition transform hover:-translate-y-0.5"
                >
                  <Info className="w-4 h-4" />
                  <span>Mengenal Sekolah</span>
                </a>
                <a
                  href="#galeri"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-700 font-semibold px-6 py-3.5 rounded-full border-2 border-blue-600 transition transform hover:-translate-y-0.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Lihat Kegiatan Siswa</span>
                </a>
              </div>

              {/* Fakta Cepat di Bawah CTA */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-900 leading-tight">Sekolah Ramah Anak</h2>
                    <p className="text-[11px] text-slate-500">Bebas kekerasan &amp; perundungan</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-900 leading-tight">Kemitraan Orang Tua</h2>
                    <p className="text-[11px] text-slate-500">Sinergi membimbing anak</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Foto Hero (5 Kolom Desktop) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop"
                  alt="Gedung dan kegiatan belajar murid sekolah dasar"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <span className="font-bold flex items-center gap-1.5 text-amber-300">
                    <Sparkles className="w-3.5 h-3.5" /> Suasana Belajar Menyenangkan
                  </span>
                  <span className="text-[11px] text-slate-200">Mendorong rasa ingin tahu dan eksplorasi bakat anak.</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[260px] animate-bounce-subtle">
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-xs text-slate-900">Kurikulum Merdeka</div>
                  <div className="text-[11px] text-slate-500">Profil Pelajar Pancasila</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ====================================================================
          C. SAMBUTAN KEPALA SEKOLAH
          ==================================================================== */}
      <section id="sambutan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              Kepemimpinan Sekolah
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Sambutan Kepala Sekolah
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Pesan dedikasi untuk membangun semangat belajar, budi pekerti, dan integritas seluruh warga sekolah.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Foto Kepala Sekolah */}
              <div className="md:col-span-4 text-center">
                <div className="relative mx-auto w-48 sm:w-56 aspect-[4/5] rounded-2xl overflow-hidden shadow-md border-4 border-white bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop"
                    alt="Foto Kepala UPTD SD Inpres 2 Bira"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="inline-block bg-amber-500/95 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      Foto Contoh Sementara
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-extrabold text-base text-slate-900">[Nama Kepala Sekolah]</h3>
                  <p className="text-xs text-blue-700 font-semibold">Kepala UPTD SD Inpres 2 Bira</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded mt-1 font-medium">
                    <AlertTriangle className="w-3 h-3" /> Data sementara
                  </span>
                </div>
              </div>

              {/* Kutipan dan Sambutan */}
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Salam Edukatif &amp; Berkarakter</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Mendidik dengan Hati, Membentuk Adab, Menumbuhkan Potensi Anak
                </h3>

                <blockquote className="border-l-4 border-amber-500 pl-4 py-1 italic text-slate-700 text-sm sm:text-base bg-amber-50/50 rounded-r-lg">
                  &ldquo;Pendidikan dasar adalah fondasi peradaban. Bukan sekadar mengejar angka dan nilai akademik, melainkan menanamkan benih kejujuran, empati, dan keberanian berpikir kritis sejak usia belia.&rdquo;
                </blockquote>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Selamat datang di portal informasi resmi UPTD SD Inpres 2 Bira. Kami berkomitmen menyediakan lingkungan belajar yang aman, bersih, dan inklusif di mana setiap anak merasa dihargai dan didorong untuk menemukan keunikan bakatnya.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Keberhasilan pendidikan anak merupakan buah dari kolaborasi erat antara bapak/ibu guru di sekolah dan orang tua di rumah. Kami mengundang seluruh elemen masyarakat untuk bersama-sama mengawal tunas-tunas muda bangsa menuju masa depan gemilang.
                </p>

                <div className="pt-2 text-xs text-slate-500">
                  <span className="font-bold text-slate-700">Manajemen UPTD SD Inpres 2 Bira</span> &bull; Masa Bakti Berjalan
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          D. PROFIL & IDENTITAS SEKOLAH
          ==================================================================== */}
      <section id="profil" className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              Identitas Resmi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Profil &amp; Data Pokok Sekolah
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Informasi administratif dan historis UPTD SD Inpres 2 Bira.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Tabel Data Pokok */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Data Pokok Pendidikan (Dapodik)</h3>
                  <p className="text-xs text-slate-500">Status dan data administratif sekolah</p>
                </div>
              </div>

              <div className="divide-y divide-slate-100 text-sm">
                <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-500 font-medium">Nama Resmi Sekolah</span>
                  <span className="font-bold text-slate-900">UPTD SD Inpres 2 Bira</span>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 items-start sm:items-center">
                  <span className="text-slate-500 font-medium">Nomor Pokok Sekolah Nasional (NPSN)</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
                    Data belum tersedia (Menunggu sinkronisasi)
                  </span>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-500 font-medium">Bentuk &amp; Status Pendidikan</span>
                  <span className="font-bold text-slate-900">SD Negeri (Sekolah Dasar Inpres)</span>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-500 font-medium">Status Kepemilikan</span>
                  <span className="font-bold text-slate-900">Pemerintah Daerah Kota Makassar</span>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-500 font-medium">Wilayah Administratif</span>
                  <span className="font-semibold text-slate-900 text-right">
                    Kel. Bira, Kec. Tamalanrea, Kota Makassar, Prov. Sulawesi Selatan
                  </span>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1 items-start sm:items-center">
                  <span className="text-slate-500 font-medium">Tahun Berdiri &amp; SK Operasional</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded">
                    Data belum tersedia
                  </span>
                </div>
                <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-slate-500 font-medium">Waktu Pembelajaran</span>
                  <span className="font-semibold text-slate-900">Pagi (Senin – Sabtu)</span>
                </div>
              </div>
            </div>

            {/* Sejarah Singkat */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900">Sejarah Singkat</h3>
                    <p className="text-xs text-slate-500">Latar belakang berdirinya sekolah</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    UPTD SD Inpres 2 Bira hadir untuk memenuhi amanat konstitusi dalam menjamin hak belajar setiap anak di kawasan Bira dan sekitarnya. Pembangunan sekolah inpres ini ditujukan guna memperluas aksesibilitas sarana pendidikan dasar negeri yang terjangkau dan dekat dengan pemukiman warga.
                  </p>
                  <p>
                    Dari tahun ke tahun, sekolah ini terus meningkatkan kualitas lingkungan belajar melalui pembenahan sarana kelas, penguatan kurikulum berbasis literasi dan karakter, serta menjalin kemitraan yang erat dengan masyarakat.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
                <span>
                  <strong>Catatan Verifikasi:</strong> Narasi sejarah resmi, tahun SK pendirian, dan dokumen arsip sekolah dapat disunting langsung pada bagian ini setelah dokumen fisik divalidasi.
                </span>
              </div>
            </div>

          </div>

          {/* ==================================================================
              E. VISI DAN MISI
              ================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Visi */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 rounded-3xl shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-white/20">
                  Arah &amp; Cita-Cita
                </span>
                <h3 className="text-xl sm:text-2xl font-black mb-4">Visi Sekolah</h3>
                <blockquote className="text-blue-100 text-base sm:text-lg italic leading-relaxed mb-6 font-medium">
                  &ldquo;Terwujudnya Peserta Didik yang Beriman, Berakhlak Mulia, Cerdas, Terampil, dan Peduli Lingkungan Menuju Profil Pelajar Pancasila.&rdquo;
                </blockquote>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/20">
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Silakan isi dengan visi resmi sekolah jika telah ditetapkan
                </span>
              </div>

              {/* Watermark Logo Icon */}
              <School className="absolute -bottom-8 -right-8 w-44 h-44 text-white/5 pointer-events-none" />
            </div>

            {/* Misi */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Langkah Nyata
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Misi Sekolah</h3>
              <p className="text-xs text-slate-500 mb-6">Langkah strategis dalam mewujudkan cita-cita pendidikan:</p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Penguatan Budi Pekerti &amp; Nilai Keagamaan</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Membiasakan doa bersama, santun dalam bertutur kata, serta menghargai perbedaan antarwarga sekolah.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Pembelajaran Kreatif, Berpusat pada Siswa</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Mengembangkan metode belajar interaktif yang mengasah daya nalar, literasi, dan numerasi dasar anak.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Wadah Penyaluran Bakat, Olahraga, &amp; Seni</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Menyediakan kesempatan bagi setiap siswa untuk mengeksplorasi potensi non-akademik sesuai minat.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Budaya Lingkungan Hijau &amp; Sekolah Sehat</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Membiasakan pilah sampah, cuci tangan teratur, dan menjaga keteduhan pekarangan sekolah.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 italic">
                * Draf misi acuan: dapat disesuaikan dengan kurikulum operasional sekolah (KOSP) terkini.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          F. STATISTIK SEKOLAH
          ==================================================================== */}
      <section className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Transparansi Informasi
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">Statistik &amp; Kapasitas Sekolah</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Data kuantitatif sekolah yang diverifikasi secara periodik.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Card 1: Siswa */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center hover:border-blue-500 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-lg sm:text-xl font-black text-slate-800">Belum tersedia</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Jumlah Siswa</div>
              <span className="inline-block text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded mt-2 font-medium">
                Data sementara
              </span>
            </div>

            {/* Card 2: Guru */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center hover:border-blue-500 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-lg sm:text-xl font-black text-slate-800">Belum tersedia</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Guru &amp; Tendik</div>
              <span className="inline-block text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded mt-2 font-medium">
                Data sementara
              </span>
            </div>

            {/* Card 3: Rombel */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center hover:border-blue-500 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-lg sm:text-xl font-black text-slate-800">Belum tersedia</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Ruang Kelas</div>
              <span className="inline-block text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded mt-2 font-medium">
                Data sementara
              </span>
            </div>

            {/* Card 4: Prestasi */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center hover:border-blue-500 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-lg sm:text-xl font-black text-slate-800">Belum tersedia</div>
              <div className="text-xs font-bold text-slate-600 mt-1">Kegiatan &amp; Prestasi</div>
              <span className="inline-block text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded mt-2 font-medium">
                Data sementara
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          G. GURU DAN TENAGA KEPENDIDIKAN
          ==================================================================== */}
      <section id="guru" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              Pendidik Profesional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Guru &amp; Tenaga Kependidikan
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Membimbing siswa dengan kehangatan, ketulusan, dan kompetensi pedagogik yang terpercaya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEACHERS.map((teacher) => (
              <div key={teacher.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="h-56 bg-slate-100 overflow-hidden relative">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-blue-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                        {teacher.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base text-slate-900">{teacher.name}</h3>
                    <p className="text-xs text-blue-700 font-semibold mb-2">{teacher.role}</p>
                    <p className="text-xs text-slate-500">{teacher.specialty}</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-medium">
                      Data Contoh Sementara
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              <Info className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
              Nama guru, foto profil, dan bidang tugas dapat diperbarui dengan data resmi dari pihak sekolah.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          H. FASILITAS SEKOLAH
          ==================================================================== */}
      <section id="fasilitas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              Sarana Belajar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Fasilitas Penunjang Pembelajaran
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Disediakan untuk mendukung proses belajar yang sehat, aman, dan memicu kreativitas siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((facility) => (
              <div key={facility.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                      {facility.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-base text-slate-900 mb-2">{facility.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{facility.desc}</p>
                  <span className="inline-block text-[10px] text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                    Kondisi disesuaikan realitas sekolah
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          I. BERITA DAN PENGUMUMAN
          ==================================================================== */}
      <section id="berita" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              Warta Sekolah
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Berita &amp; Pengumuman Terbaru
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Informasi kegiatan siswa, agenda akademik, serta dinamika persekolahan terkini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-bold text-base text-slate-900 line-clamp-2 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => setSelectedNews(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 transition"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          J. GALERI KEGIATAN (Dengan Filter & Lightbox)
          ==================================================================== */}
      <section id="galeri" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              Dokumentasi Foto
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Galeri Kegiatan Sekolah
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Koleksi foto kegiatan belajar mengajar, upacara, dan aktivitas kreatif murid.
            </p>
          </div>

          {/* Filter Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'Semua Momen' },
              { id: 'pembelajaran', label: 'Pembelajaran' },
              { id: 'siswa', label: 'Kegiatan Siswa' },
              { id: 'olahraga', label: 'Olahraga & Seni' },
              { id: 'upacara', label: 'Upacara & Karakter' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveGalleryCat(tab.id)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-colors ${
                  activeGalleryCat === tab.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Galeri */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">{item.categoryLabel}</span>
                  <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-1">{item.title}</h4>
                  <span className="text-[10px] text-slate-300 mt-0.5">Klik untuk memperbesar</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="inline-block text-[11px] text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full font-medium">
              <Sparkles className="w-3 h-3 inline mr-1 text-amber-600" />
              Foto di atas merupakan representasi kegiatan edukasi yang dapat diganti dengan arsip resmi sekolah.
            </span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          K. INFORMASI PPDB
          ==================================================================== */}
      <section id="ppdb" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block bg-amber-400 text-blue-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Pendaftaran Siswa Baru
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  Penerimaan Peserta Didik Baru (PPDB)
                </h2>

                <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                  Mari bergabung bersama keluarga besar UPTD SD Inpres 2 Bira! Kami siap mendidik dan membimbing putra-putri tercinta menjadi generasi pembelajar yang santun, cerdas, dan tangguh.
                </p>

                {/* Persyaratan Umum Box */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-xs sm:text-sm space-y-2 text-blue-50">
                  <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                    <FileText className="w-4 h-4 text-amber-300" />
                    <span>Persyaratan Umum Berkas Pendaftaran:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-blue-100">
                    <li>Usia minimal 6 tahun pada 1 Juli (diutamakan usia 7 tahun).</li>
                    <li>Fotokopi Akta Kelahiran calon peserta didik.</li>
                    <li>Fotokopi Kartu Keluarga (KK) yang memuat nama calon siswa.</li>
                    <li>Fotokopi KTP kedua orang tua / wali murid.</li>
                    <li>Pas foto warna terbaru ukuran 3x4 (2 lembar).</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold px-6 py-3 rounded-full shadow-lg transition transform hover:-translate-y-0.5 text-xs sm:text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Hubungi Panitia PPDB</span>
                  </a>
                  <a
                    href="#profil"
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-6 py-3 rounded-full transition text-xs sm:text-sm"
                  >
                    <span>Informasi Zonasi Sekolah</span>
                  </a>
                </div>
              </div>

              {/* Status Jadwal Card */}
              <div className="lg:col-span-5">
                <div className="bg-white text-slate-800 p-6 sm:p-7 rounded-2xl shadow-lg border border-slate-100 space-y-4">
                  <div className="flex items-center gap-2 text-blue-800 font-extrabold text-sm sm:text-base">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span>Status Jadwal &amp; Kuota</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Jadwal resmi, kuota jalur zonasi, jalur afirmasi, serta mekanisme pendaftaran mengikuti kalender resmi Dinas Pendidikan Kota Makassar.
                  </p>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
                    <span>
                      <strong>Pemberitahuan:</strong> Jadwal pembukaan pendaftaran resmi akan segera diperbarui oleh pihak sekolah menjelang tahun ajaran baru.
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => alert('Pemberitahuan Resmi PPDB: Jadwal dan kuota resmi PPDB UPTD SD Inpres 2 Bira akan diumumkan melalui papan pengumuman sekolah dan laman ini saat pembukaan tahun ajaran baru.')}
                      className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold rounded-xl border border-blue-200 transition"
                    >
                      Cek Pengumuman Resmi PPDB
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          L. LOKASI DAN KONTAK
          ==================================================================== */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              Layanan Informasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Lokasi &amp; Kontak Sekolah
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Kunjungi sekolah kami atau kirimkan pertanyaan Anda melalui form komunikasi di bawah ini.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Kolom Info Alamat & Peta (5 Kolom) */}
            <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 mb-6">Pusat Informasi &amp; Alamat</h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Alamat */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Alamat Sekolah:</strong>
                      <span className="text-slate-600 leading-relaxed block">
                        Kelurahan Bira, Kecamatan Tamalanrea, Kota Makassar, Sulawesi Selatan.
                      </span>
                      <span className="inline-block text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded mt-1 font-medium">
                        Menunggu verifikasi detail RT/RW
                      </span>
                    </div>
                  </div>

                  {/* Telepon */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Nomor Telepon / WA:</strong>
                      <span className="text-slate-600">Data belum tersedia (Menunggu nomor resmi)</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Email Sekolah:</strong>
                      <span className="text-slate-600">sdinpres2bira@contoh-sekolah.sch.id</span>
                      <span className="block text-[10px] text-slate-400 mt-0.5">(Email penampung sementara)</span>
                    </div>
                  </div>

                  {/* Jam Operasional */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-bold">Jam Layanan Kantor:</strong>
                      <span className="text-slate-600 block">Senin – Kamis: 07.30 – 13.00 WITA</span>
                      <span className="text-slate-600 block">Jumat: 07.30 – 11.00 WITA</span>
                      <span className="text-slate-600 block">Sabtu: 07.30 – 12.30 WITA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl border border-slate-200 bg-slate-200/60 p-4 text-center h-44 flex flex-col items-center justify-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-1" />
                <span className="text-xs font-bold text-slate-800">Peta Lokasi: Kawasan Bira, Tamalanrea</span>
                <span className="text-[11px] text-slate-500 max-w-xs mt-1">
                  Google Maps interaktif dapat diaktifkan segera setelah koordinat lintang/bujur resmi sekolah terkonfirmasi.
                </span>
              </div>
            </div>

            {/* Formulir Kontak Pengunjung (7 Kolom) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-extrabold text-base text-slate-900 mb-1">Kirimkan Pesan atau Pertanyaan</h3>
              <p className="text-xs text-slate-500 mb-6">Silakan lengkapi formulir di bawah ini untuk menyampaikan pertanyaan kepada pihak sekolah.</p>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@email.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kategori Subjek Pesan <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition bg-white"
                  >
                    <option value="">Pilih kategori subjek...</option>
                    <option value="Informasi PPDB">Informasi Pendaftaran Siswa Baru (PPDB)</option>
                    <option value="Administrasi Murid">Administrasi Murid &amp; Surat Keterangan</option>
                    <option value="Saran & Masukan">Saran &amp; Masukan Perkembangan Sekolah</option>
                    <option value="Lainnya">Pertanyaan Umum Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Isi Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan Anda secara jelas minimal 10 karakter..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  ></textarea>
                </div>

                {formFeedback && (
                  <div
                    className={`p-3.5 rounded-xl text-xs flex items-start gap-2 ${
                      formFeedback.type === 'error'
                        ? 'bg-red-50 border border-red-200 text-red-700'
                        : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    }`}
                  >
                    {formFeedback.type === 'error' ? (
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
                    ) : (
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
                    )}
                    <span>{formFeedback.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl shadow-md transition text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          M. FOOTER
          ==================================================================== */}
      <footer className="bg-slate-900 text-slate-400 text-xs pt-16 pb-12 border-t-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Logo & Profil */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center p-1.5 shadow">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="46" fill="#1565C0" stroke="#FFB703" strokeWidth="4"/>
                    <path d="M50 20L62 36H38L50 20Z" fill="#FFB703"/>
                    <path d="M26 44C32 40 42 42 50 48C58 42 68 40 74 44C78 58 68 76 50 82C32 76 22 58 26 44Z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <h3 className="text-white font-extrabold text-base">UPTD SD Inpres 2 Bira</h3>
              </div>

              <p className="text-slate-400 leading-relaxed max-w-sm">
                Lembaga pendidikan dasar negeri yang berdedikasi mencetak generasi penerus bangsa yang beriman, bertakwa, berkarakter luhur, dan cerdas bernalar.
              </p>

              <div className="pt-2 text-[11px] text-slate-500">
                Kecamatan Tamalanrea, Kota Makassar, Sulawesi Selatan.
              </div>
            </div>

            {/* Navigasi Utama */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-white font-bold text-sm">Navigasi Halaman</h4>
              <ul className="space-y-2">
                <li><a href="#beranda" className="hover:text-white transition">Beranda Utama</a></li>
                <li><a href="#sambutan" className="hover:text-white transition">Sambutan Kepala Sekolah</a></li>
                <li><a href="#profil" className="hover:text-white transition">Profil &amp; Identitas Sekolah</a></li>
                <li><a href="#guru" className="hover:text-white transition">Dewan Guru &amp; Tendik</a></li>
                <li><a href="#fasilitas" className="hover:text-white transition">Fasilitas Belajar</a></li>
                <li><a href="#berita" className="hover:text-white transition">Warta &amp; Berita</a></li>
                <li><a href="#galeri" className="hover:text-white transition">Galeri Kegiatan</a></li>
              </ul>
            </div>

            {/* Layanan & Unduhan */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-white font-bold text-sm">Informasi &amp; Kode Sumber</h4>
              <ul className="space-y-2">
                <li><a href="#ppdb" className="hover:text-white transition">PPDB Siswa Baru</a></li>
                <li><a href="#kontak" className="hover:text-white transition">Layanan Pertanyaan &amp; Saran</a></li>
                <li>
                  <button
                    onClick={() => setShowCodeViewer(true)}
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 transition"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Lihat &amp; Salin Kode Standalone (VS Code)</span>
                  </button>
                </li>
                <li>
                  <a
                    href="/website-sd-inpres-2-bira/index.html"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition"
                  >
                    <span>Buka Standalone HTML Langsung</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} <strong>UPTD SD Inpres 2 Bira</strong>. Hak Cipta Dilindungi Undang-Undang.
            </div>
            <div>
              Dikembangkan dengan Struktur Bersih &amp; Ramah Pemula
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          MODAL LIGHTBOX DETAIL FOTO GALERI
          ==================================================================== */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                {selectedPhoto.categoryLabel}
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-[60vh] bg-slate-900 overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>
            <div className="p-6">
              <h3 className="font-extrabold text-base text-slate-900 mb-1">{selectedPhoto.title}</h3>
              <p className="text-xs text-slate-600">{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL DETAIL BACA BERITA LENGKAP
          ==================================================================== */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                {selectedNews.category}
              </span>
              <button
                onClick={() => setSelectedNews(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="h-60 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <span><Calendar className="w-3.5 h-3.5 inline mr-1" /> {selectedNews.date}</span>
                <span>&bull;</span>
                <span>Oleh: {selectedNews.author}</span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                {selectedNews.title}
              </h3>

              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line space-y-3">
                {selectedNews.content}
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-700" />
                <span>
                  <strong>Informasi Dummy:</strong> Teks berita di atas merupakan simulasi percontohan dan siap diganti dengan artikel kegiatan aktual dari sekolah.
                </span>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-full transition"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          MODAL DRAWER: LIHAT & SALIN KODE VS CODE
          ==================================================================== */}
      {showCodeViewer && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <div className="bg-slate-900 text-slate-100 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-700 overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-sm">
                  &lt;/&gt;
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">Kode Standalone UPTD SD Inpres 2 Bira</h3>
                  <p className="text-xs text-slate-400">Tersedia di folder <code className="text-amber-400 font-mono">website-sd-inpres-2-bira/</code> untuk Live Server VS Code</p>
                </div>
              </div>
              <button
                onClick={() => setShowCodeViewer(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-1 px-4 pt-3 bg-slate-950/60 border-b border-slate-800 overflow-x-auto">
              <button
                onClick={() => setActiveCodeTab('html')}
                className={`px-4 py-2 text-xs font-mono font-semibold rounded-t-lg transition ${
                  activeCodeTab === 'html'
                    ? 'bg-slate-900 text-amber-400 border-t-2 border-amber-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                index.html
              </button>
              <button
                onClick={() => setActiveCodeTab('css')}
                className={`px-4 py-2 text-xs font-mono font-semibold rounded-t-lg transition ${
                  activeCodeTab === 'css'
                    ? 'bg-slate-900 text-amber-400 border-t-2 border-amber-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                css/style.css
              </button>
              <button
                onClick={() => setActiveCodeTab('js')}
                className={`px-4 py-2 text-xs font-mono font-semibold rounded-t-lg transition ${
                  activeCodeTab === 'js'
                    ? 'bg-slate-900 text-amber-400 border-t-2 border-amber-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                js/script.js
              </button>
              <button
                onClick={() => setActiveCodeTab('guide')}
                className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition ${
                  activeCodeTab === 'guide'
                    ? 'bg-slate-900 text-blue-400 border-t-2 border-blue-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📖 Panduan VS Code Live Server
              </button>
            </div>

            {/* Tab Content & Code Box */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 font-mono text-xs">
              {activeCodeTab === 'guide' ? (
                <div className="font-sans space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="p-4 bg-blue-950/70 border border-blue-700/60 rounded-2xl">
                    <h4 className="font-bold text-white text-base mb-2">🚀 Langkah Menjalankan di Visual Studio Code:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-slate-300">
                      <li>Buka folder proyek <strong>website-sd-inpres-2-bira</strong> di Visual Studio Code.</li>
                      <li>Pasang ekstensi <strong>Live Server</strong> (oleh Ritwick Dey) melalui menu Extensions (Ctrl+Shift+X).</li>
                      <li>Klik kanan pada file <code>index.html</code> lalu pilih <strong>&quot;Open with Live Server&quot;</strong>.</li>
                      <li>Browser akan terbuka otomatis di <code>http://127.0.0.1:5500/index.html</code>.</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-amber-950/40 border border-amber-700/60 rounded-2xl">
                    <h4 className="font-bold text-amber-300 text-sm mb-2">📌 Catatan Keaslian Data Resmi:</h4>
                    <p className="text-xs text-slate-300">
                      Sesuai instruksi, seluruh data resmi seperti nama Kepala Sekolah, NPSN, nomor telepon, dan visi/misi resmi telah ditandai dengan badge <code>[Data Sementara]</code>. Anda dapat menyuntingnya dengan cepat langsung pada <code>index.html</code> tanpa merusak struktur responsif.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800">
                    <span className="text-slate-400 text-xs">
                      Lokasi: <span className="text-amber-400">website-sd-inpres-2-bira/{activeCodeTab === 'html' ? 'index.html' : activeCodeTab === 'css' ? 'css/style.css' : 'js/script.js'}</span>
                    </span>
                    <button
                      onClick={() => {
                        const targetUrl = activeCodeTab === 'html'
                          ? '/website-sd-inpres-2-bira/index.html'
                          : activeCodeTab === 'css'
                          ? '/website-sd-inpres-2-bira/css/style.css'
                          : '/website-sd-inpres-2-bira/js/script.js';
                        fetch(targetUrl)
                          .then(res => res.text())
                          .then(txt => copyToClipboard(txt))
                          .catch(() => alert('File tersedia di folder website-sd-inpres-2-bira/'));
                      }}
                      className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-600 text-white font-sans font-bold px-3 py-1.5 rounded-lg text-xs transition"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Tersalin!' : 'Salin Kode File Ini'}</span>
                    </button>
                  </div>

                  <p className="text-slate-400 text-xs font-sans mb-3">
                    File ini telah dibuat dan disimpan lengkap di repositori Anda pada folder <code>website-sd-inpres-2-bira/</code> dan juga dicantumkan secara utuh pada respons chat di bawah.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href="/website-sd-inpres-2-bira/index.html"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
              >
                <span>Buka Versi Standalone HTML di Tab Baru</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setShowCodeViewer(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          TOMBOL KEMBALI KE ATAS (BACK TO TOP)
          ==================================================================== */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg hover:bg-amber-500 transition-all z-40 transform hover:-translate-y-1 focus:outline-none"
          title="Kembali ke atas"
          aria-label="Kembali ke atas"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

    </div>
  );
}
