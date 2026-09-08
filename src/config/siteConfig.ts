export const siteConfig = {
  brandName: "Aksara Plus",
  tagline: "Belajar Lebih Mudah, Prestasi Lebih Terarah.",
  whatsappNumber: "6285787157787",
  displayWhatsappNumber: "+62 857-8715-7787",
  email: "aksaraplus29@gmail.com",
  instagram: "@les_aksaraplus",
  instagramUrl: "https://www.instagram.com/les_aksaraplus",
  defaultWhatsAppMessage: "Halo, saya ingin mendapatkan informasi mengenai bimbingan belajar BTQ, PAUD & TK, SD, dan SMP.",
  address: "Jl. Pendidikan No. 18, Jakarta Selatan",
  operationalHours: "Senin - Sabtu: 13.00 - 20.00 WIB",
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
    id: "btq",
    level: "BTQ",
    title: "Baca Tulis Al-Qur'an (BTQ)",
    description: "Pendampingan khusus belajar membaca dan menulis Al-Qur'an secara fasih, terarah, dan sabar.",
    image: siteConfig.assets.learning,
    features: [
      "Mengenal huruf Hijaiyah & Tajwid dasar",
      "Melatih kelancaran membaca Al-Qur'an",
      "Latihan menulis huruf Arab dengan rapi",
      "Metode bimbingan personal & menyenangkan"
    ],
    whatsappMessage: "Halo, saya ingin bertanya mengenai program BTQ (Baca Tulis Al-Qur'an)."
  },
  {
    id: "paud-tk",
    level: "PAUD & TK",
    title: "Bimbingan Belajar PAUD & TK",
    description: "Pendampingan dasar calistung dan motorik halus untuk persiapan mantap menuju Sekolah Dasar.",
    image: siteConfig.assets.tk,
    features: [
      "Mengenal huruf, angka, dan warna",
      "Calistung dasar tanpa tekanan",
      "Aktivitas edukatif & interaktif",
      "Kesiapan mental dan akademis masuk SD"
    ],
    whatsappMessage: "Halo, saya ingin bertanya mengenai program bimbingan belajar untuk PAUD & TK."
  },
  {
    id: "sd",
    level: "SD",
    title: "Bimbingan Belajar SD",
    description: "Membangun pemahaman konsep Matematika, IPA, dan Bahasa dengan latihan soal terstruktur.",
    image: siteConfig.assets.sd,
    features: [
      "Fokus Matematika, IPA, B. Indo & Inggris",
      "Pendampingan PR dan tugas sekolah",
      "Latihan pemahaman konsep & soal ujian",
      "Laporan evaluasi perkembangan bulanan"
    ],
    whatsappMessage: "Halo, saya ingin bertanya mengenai program bimbingan belajar untuk SD."
  },
  {
    id: "smp",
    level: "SMP",
    title: "Bimbingan Belajar SMP",
    description: "Pendampingan akademis mendalam untuk mata pelajaran MIPA dan persiapan ujian kelulusan.",
    image: siteConfig.assets.smp,
    features: [
      "Pendalaman Matematika, Fisika, Biologi",
      "Strategi pemecahan soal HOTS",
      "Pendampingan tugas harian & proyek",
      "Persiapan asesmen & ujian sekolah"
    ],
    whatsappMessage: "Halo, saya ingin bertanya mengenai program bimbingan belajar untuk SMP."
  }
];

export interface MonthlyRate {
  meetings: string;
  price: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  registrationFee: string;
  monthlyRates: MonthlyRate[];
  featured?: boolean;
  featuredLabel?: string;
  whatsappMessage: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "btq",
    name: "BTQ (Baca Tulis Al-Qur'an)",
    registrationFee: "Rp 50.000",
    monthlyRates: [
      { meetings: "8x Pertemuan", price: "Rp 450.000" },
      { meetings: "12x Pertemuan", price: "Rp 550.000" },
      { meetings: "16x Pertemuan", price: "Rp 650.000" },
      { meetings: "20x Pertemuan", price: "Rp 700.000" }
    ],
    whatsappMessage: "Halo, saya ingin mendaftar program BTQ (Baca Tulis Al-Qur'an)."
  },
  {
    id: "paud-tk",
    name: "PAUD & TK",
    registrationFee: "Rp 50.000",
    monthlyRates: [
      { meetings: "8x Pertemuan", price: "Rp 500.000" },
      { meetings: "12x Pertemuan", price: "Rp 600.000" },
      { meetings: "16x Pertemuan", price: "Rp 700.000" },
      { meetings: "20x Pertemuan", price: "Rp 800.000" }
    ],
    whatsappMessage: "Halo, saya ingin mendaftar program bimbingan belajar PAUD & TK."
  },
  {
    id: "sd",
    name: "SD",
    featured: true,
    featuredLabel: "Rekomendasi Utama",
    registrationFee: "Rp 65.000",
    monthlyRates: [
      { meetings: "8x Pertemuan", price: "Rp 550.000" },
      { meetings: "12x Pertemuan", price: "Rp 650.000" },
      { meetings: "16x Pertemuan", price: "Rp 750.000" },
      { meetings: "20x Pertemuan", price: "Rp 850.000" }
    ],
    whatsappMessage: "Halo, saya ingin mendaftar program bimbingan belajar SD."
  },
  {
    id: "smp",
    name: "SMP",
    registrationFee: "Rp 75.000",
    monthlyRates: [
      { meetings: "8x Pertemuan", price: "Rp 600.000" },
      { meetings: "12x Pertemuan", price: "Rp 750.000" },
      { meetings: "16x Pertemuan", price: "Rp 850.000" },
      { meetings: "20x Pertemuan", price: "Rp 900.000" }
    ],
    whatsappMessage: "Halo, saya ingin mendaftar program bimbingan belajar SMP."
  }
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Bunda Rina",
    role: "Orang Tua Siswa PAUD & BTQ",
    text: "Alhamdulillah sejak les di Aksara Plus, si kecil jadi lebih antusias belajar mengaji BTQ dan calistung. Tutornya sangat sabar dan telaten membimbing.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Pak Rahmad",
    role: "Orang Tua Siswa Kelas 5 SD",
    text: "Nilai Matematika dan IPA anak saya mengalami peningkatan signifikan. Yang paling saya suka adalah laporan perkembangan belajar bulanan yang sangat detail.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Ibu Desi",
    role: "Orang Tua Siswa Kelas 8 SMP",
    text: "Anak saya dulu sering kesulitan memahami Matematika dan Fisika. Setelah ikut les 12x pertemuan per bulan, dia jadi makin paham konsep dan percaya diri di sekolah.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

export const faqs = [
  {
    question: "Untuk jenjang apa saja program bimbingan belajar ini tersedia?",
    answer: "Kami menyediakan program bimbingan belajar khusus untuk siswa jenjang BTQ (Baca Tulis Al-Qur'an), PAUD & TK, SD, dan SMP dengan kurikulum yang disesuaikan dengan kebutuhan masing-masing tingkatan."
  },
  {
    question: "Materi apa saja yang dipelajari?",
    answer: "Untuk BTQ fokus pada tajwid dan kelancaran membaca Al-Qur'an. PAUD & TK fokus pada calistung dan motorik. Untuk SD & SMP berfokus pada mata pelajaran utama seperti Matematika, IPA, Bahasa Indonesia, dan Bahasa Inggris, serta pendampingan tugas sekolah."
  },
  {
    question: "Bagaimana cara mendaftar?",
    answer: "Pendaftaran dapat dilakukan dengan mudah dengan menghubungi admin kami melalui tombol WhatsApp yang tersedia. Tim kami akan memandu proses pendaftaran selanjutnya."
  },
  {
    question: "Berapa biaya bimbingan belajar?",
    answer: "Biaya pendaftaran mulai dari Rp 50.000. Biaya bulanan bervariasi sesuai pilihan paket pertemuan (8x, 12x, 16x, atau 20x pertemuan). Silakan lihat rincian biaya lengkap pada bagian Pilihan Program & Biaya di atas."
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
