export const siteConfig = {
  brandName: "Aksara",
  tagline: "Belajar Lebih Mudah, Prestasi Lebih Terarah.",
  whatsappNumber: "62XXXXXXXXXXX", // GANTI dengan nomor WhatsApp sebenarnya sebelum production
  defaultWhatsAppMessage: "Halo, saya ingin mendapatkan informasi mengenai bimbingan belajar TK, SD, dan SMP.",
  address: "[ALAMAT BIMBEL / LOKASI]",
  email: "[EMAIL BIMBEL]",
  operationalHours: "[JAM OPERASIONAL, ex: Senin - Sabtu: 13.00 - 20.00 WIB]",
  assets: {
    logo: "", // Text logo will be used if empty
    hero: "/assets/bagian-awal-landing-page.png",
    tk: "/assets/bimbingan-belajar-tk.png",
    sd: "/assets/bimbingan-belajar-sd.png",
    smp: "/assets/bimbingan-belajar-smp.png",
    learning: "/assets/bantu-anak-memahami.png"
  }
};

export function openWhatsApp(message = siteConfig.defaultWhatsAppMessage) {
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export const programs = [
  {
    id: "tk",
    level: "TK",
    title: "Bimbingan Belajar TK",
    description: "Pendampingan dasar belajar dan persiapan anak menuju jenjang sekolah berikutnya.",
    image: siteConfig.assets.tk,
    features: [
      "Mengenal huruf dan angka",
      "Calistung dasar",
      "Aktivitas belajar menyenangkan",
      "Persiapan masuk SD"
    ],
    whatsappMessage: "Halo, saya ingin bertanya mengenai program bimbingan belajar untuk TK."
  },
  {
    id: "sd",
    level: "SD",
    title: "Bimbingan Belajar SD",
    description: "Membantu siswa memahami materi dasar dengan kuat untuk prestasi yang lebih baik.",
    image: siteConfig.assets.sd,
    features: [
      "Matematika & IPA",
      "Bahasa Indonesia & Inggris",
      "Pendampingan tugas sekolah",
      "Persiapan ujian akhir"
    ],
    whatsappMessage: "Halo, saya ingin bertanya mengenai program bimbingan belajar untuk SD."
  },
  {
    id: "smp",
    level: "SMP",
    title: "Bimbingan Belajar SMP",
    description: "Pendampingan intensif untuk konsep lanjutan dan persiapan ujian sekolah.",
    image: siteConfig.assets.smp,
    features: [
      "Matematika, Fisika, Biologi",
      "Bahasa Indonesia & Inggris",
      "Pendampingan tugas harian",
      "Persiapan ujian kelulusan"
    ],
    whatsappMessage: "Halo, saya ingin bertanya mengenai program bimbingan belajar untuk SMP."
  }
];

export const pricingPlans = [
  {
    name: "Program TK",
    price: "Rp 200.000/bulan",
    features: [
      "2x Pertemuan / Minggu",
      "Tutor Berpengalaman",
      "Laporan Perkembangan Bulanan",
      "Modul Belajar Interaktif"
    ],
    whatsappMessage: "Halo, saya ingin mendaftar program bimbingan belajar TK."
  },
  {
    name: "Program SD",
    price: "Rp 250.000/bulan",
    featured: true,
    featuredLabel: "Rekomendasi Kami",
    features: [
      "3x Pertemuan / Minggu",
      "Pendampingan PR & Tugas",
      "Latihan Soal Berkala",
      "Laporan Perkembangan Bulanan"
    ],
    whatsappMessage: "Halo, saya ingin mendaftar program bimbingan belajar SD."
  },
  {
    name: "Program SMP",
    price: "Rp 300.000/bulan",
    features: [
      "3x Pertemuan / Minggu",
      "Fokus Konsep & Pemecahan Masalah",
      "Persiapan Ujian Sekolah",
      "Laporan Perkembangan Bulanan"
    ],
    whatsappMessage: "Halo, saya ingin mendaftar program bimbingan belajar SMP."
  }
];

export const testimonials = [];

export const faqs = [
  {
    question: "Untuk jenjang apa saja program bimbingan belajar ini tersedia?",
    answer: "Kami menyediakan program bimbingan belajar khusus untuk siswa jenjang TK, SD, dan SMP dengan kurikulum yang disesuaikan dengan kebutuhan masing-masing tingkatan."
  },
  {
    question: "Materi apa saja yang dipelajari?",
    answer: "Untuk TK fokus pada calistung dan motorik. Untuk SD & SMP berfokus pada mata pelajaran utama seperti Matematika, IPA, Bahasa Indonesia, dan Bahasa Inggris, serta pendampingan tugas sekolah."
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer: "Pendaftaran dapat dilakukan dengan mudah dengan menghubungi admin kami melalui tombol WhatsApp yang tersedia. Tim kami akan memandu proses pendaftaran selanjutnya."
  },
  {
    question: "Berapa biaya bimbingan belajar?",
    answer: "Biaya tercantum pada bagian Pilihan Program & Biaya di halaman ini (mulai dari Rp 200.000/bulan untuk TK). Silakan pilih program yang sesuai dan daftar langsung via WhatsApp."
  },
  {
    question: "Apakah bisa konsultasi terlebih dahulu sebelum mendaftar?",
    answer: "Tentu. Kami sangat menyarankan orang tua untuk berkonsultasi terlebih dahulu agar kami dapat merekomendasikan program yang paling tepat untuk anak Anda."
  },
  {
    question: "Bagaimana jadwal belajarnya?",
    answer: "Jadwal belajar sangat fleksibel dan dapat didiskusikan dengan admin. Kami menyediakan pilihan jadwal sore hingga malam hari, Senin hingga Sabtu."
  }
];
