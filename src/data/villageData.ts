import { AparaturDesa, PosAnggaran, BeritaDesa, DusunInfo, PermohonanSurat, Pengaduan } from '../types/village';

export const PROFIL_DESA = {
  nama: 'Desa Cibeunying',
  kecamatan: 'Majenang',
  kabupaten: 'Cilacap',
  provinsi: 'Jawa Tengah',
  kodePos: '53257',
  alamatKantor: 'Jl. Raya Cibeunying No. 14, Kec. Majenang, Kab. Cilacap, Jawa Tengah 53257',
  email: 'pemdes.cibeunying@cilacapkab.go.id',
  telepon: '(0280) 621-394',
  whatsappLayanan: '+62 813-2890-4100',
  kepalaDesa: 'Lili Warli',
  sekretarisDesa: 'Dede Gunawan, S.',
  luasWilayah: '10,97 km² (1.097 Ha)',
  ketinggian: '120 - 350 mdpl',
  batasWilayah: {
    utara: 'Desa Jenang & Perbukitan Perhutani',
    selatan: 'Desa Padangsari',
    timur: 'Desa Boja & Cilopadang',
    barat: 'Desa Pahonjean',
  },
  jamPelayanan: 'Senin - Kamis: 08:00 - 15:30 WIB | Jumat: 08:00 - 14:00 WIB',
  visi: 'Mewujudkan Desa Cibeunying yang Tangguh, Berdaya Saing Agribisnis, Aman Bencana dan Transparan Melalui Pelayanan Publik Digital Terpadu.',
  misi: [
    'Meningkatkan transparansi tata kelola birokrasi dan akuntabilitas keuangan desa berbasis teknologi informasi.',
    'Menyelenggarakan pelayanan administrasi kependudukan yang cepat, inklusif, dan 100% bebas pungutan liar.',
    'Memperkuat kesiapsiagaan mitigasi bencana alam, penataan drainase, dan penguatan tebing kawasan pemukiman.',
    'Mendorong produktivitas sektor pertanian terpadu serta kemandirian ekonomi pelaku UMKM lokal Majenang.',
    'Meningkatkan pemerataan konektivitas infrastruktur jalan antardusun dan penerangan lingkungan permukiman.'
  ],
  statistik: {
    totalPenduduk: 10273,
    lakiLaki: 5210,
    perempuan: 5063,
    kepalaKeluarga: 3180,
    wajibKTP: 7420,
    luasPertanian: '685 Ha',
    jumlahDusun: 8,
    jumlahRW: 16,
    jumlahRT: 64
  }
};

// 8 Dusun Resmi Desa Cibeunying, Kecamatan Majenang
export const DATA_DUSUN: DusunInfo[] = [
  { nama: 'Dusun Cigaru', kadus: 'Kusnadi', jumlahRT: 8, jumlahRW: 2, jumlahPenduduk: 1380, jumlahKK: 425, komoditasUtama: 'Padi Sawah, Perkebunan Palawija & Anyaman Bambu' },
  { nama: 'Dusun Tarukahan', kadus: 'Endang Sujana', jumlahRT: 8, jumlahRW: 2, jumlahPenduduk: 1315, jumlahKK: 405, komoditasUtama: 'Sentra Padi, Hortikultura Sayur & Peternakan' },
  { nama: 'Dusun Babakan', kadus: 'Ahmad Mulyadi', jumlahRT: 8, jumlahRW: 2, jumlahPenduduk: 1290, jumlahKK: 395, komoditasUtama: 'Pertanian Terpadu, Perkebunan Pisang & Kelapa' },
  { nama: 'Dusun Cibuyut', kadus: 'Sutarjo', jumlahRT: 8, jumlahRW: 2, jumlahPenduduk: 1270, jumlahKK: 390, komoditasUtama: 'Padi Sawah Irigasi & Perikanan Air Tawar' },
  { nama: 'Dusun Jaringao', kadus: 'Bambang Irawan', jumlahRT: 8, jumlahRW: 2, jumlahPenduduk: 1265, jumlahKK: 395, komoditasUtama: 'Olahan Keripik, Singkong & Tanaman Pangan' },
  { nama: 'Dusun Nagari', kadus: 'Dedi Kurniawan', jumlahRT: 8, jumlahRW: 2, jumlahPenduduk: 1245, jumlahKK: 385, komoditasUtama: 'Perdagangan, Pertanian Sawah & Jasa' },
  { nama: 'Dusun Cijeungjing', kadus: 'Taryono', jumlahRT: 8, jumlahRW: 2, jumlahPenduduk: 1258, jumlahKK: 395, komoditasUtama: 'Perkebunan Kayu Albasia & Tanaman Buah' },
  { nama: 'Dusun Cikadu', kadus: 'Muhlasin', jumlahRT: 8, jumlahRW: 2, jumlahPenduduk: 1250, jumlahKK: 390, komoditasUtama: 'Pertanian Padi Lereng & Peternakan Kambing' },
];

// Data Aparatur Resmi Desa Cibeunying - Kepala Desa: Lili Warli, Sekdes: Dede Gunawan, S.
export const DATA_APARATUR: AparaturDesa[] = [
  {
    id: '1',
    nama: 'Lili Warli',
    jabatan: 'Kepala Desa (Kades)',
    pendidikan: 'Sarjana / S1',
    tupoksi: 'Memimpin penyelenggaraan pemerintahan desa, pembinaan ketentraman warga, kepemimpinan tanggap darurat bencana, dan pemberdayaan masyarakat Desa Cibeunying.',
    status: 'Kepala Desa Aktif (2020 - 2027)'
  },
  {
    id: '2',
    nama: 'Dede Gunawan, S.',
    jabatan: 'Sekretaris Desa (Sekdes)',
    pendidikan: 'Sarjana / S1',
    tupoksi: 'Mengkoordinasikan administrasi umum ketatausahaan, penyusunan Perdes & APBDes, serta pengelolaan operasional aparatur balai desa.',
    status: 'Sekretaris Desa Aktif'
  },
  {
    id: '3',
    nama: 'Nani Kusuma Dewi, A.Md.',
    jabatan: 'Kaur Keuangan (Bendahara Desa)',
    pendidikan: 'D3 Akuntansi',
    tupoksi: 'Pengelolaan kas desa, penatausahaan penerimaan Dana Desa & ADD pada sistem Siskeudes, dan pelaporan pertanggungjawaban APBDes.',
    status: 'Perangkat Desa'
  },
  {
    id: '4',
    nama: 'Wahyu Nugroho, S.Kom.',
    jabatan: 'Kaur Tata Usaha & Umum (Operator SID)',
    pendidikan: 'S1 Sistem Informasi',
    tupoksi: 'Pengelolaan kearsipan surat kedinasan, inventarisasi aset desa, dan pemeliharaan portal Sistem Informasi Desa (SID) Cibeunying.',
    status: 'Perangkat Desa'
  },
  {
    id: '5',
    nama: 'Danang Iswahyudi',
    jabatan: 'Kaur Perencanaan',
    pendidikan: 'D3 Teknik Sipil',
    tupoksi: 'Menyusun dokumen RKPDes, pemetaan prioritas infrastruktur rabat beton jalan, talud penahan tanah, serta saluran irigasi.',
    status: 'Perangkat Desa'
  },
  {
    id: '6',
    nama: 'Rina Setyaningsih, S.Sos.',
    jabatan: 'Kasi Pelayanan (Loket Pelayanan Terpadu)',
    pendidikan: 'S1 Ilmu Sosial',
    tupoksi: 'Pelayanan verifikasi surat pengantar warga (SKU, SKTM, SKCK, Domisili), administrasi kependudukan, dan legalisasi berkas.',
    status: 'Perangkat Desa'
  },
  {
    id: '7',
    nama: 'Agus Triono',
    jabatan: 'Kasi Pemerintahan',
    pendidikan: 'SMA / Kejuruan',
    tupoksi: 'Administrasi kependudukan, pembinaan keamanan & ketertiban lingkungan linmas, serta pengelolaan buku tanah dan letter C.',
    status: 'Perangkat Desa'
  },
  {
    id: '8',
    nama: 'Endang Purwanti, S.KM.',
    jabatan: 'Kasi Kesejahteraan',
    pendidikan: 'S1 Kesehatan Masyarakat',
    tupoksi: 'Penyaluran program jaminan sosial (BLT-DD/PKH), posyandu balita & lansia 8 dusun, pencegahan stunting, serta tanggap darurat.',
    status: 'Perangkat Desa'
  }
];

export const DATA_APBDES_2026: PosAnggaran[] = [
  // Pendapatan
  { kategori: 'Pendapatan', uraian: 'Dana Desa (APBN Kementerian Keuangan)', anggaran: 1180000000, realisasi: 767000000, persentase: 65.0 },
  { kategori: 'Pendapatan', uraian: 'Alokasi Dana Desa / ADD (APBD Kab. Cilacap)', anggaran: 685000000, realisasi: 445250000, persentase: 65.0 },
  { kategori: 'Pendapatan', uraian: 'Bagi Hasil Pajak & Retribusi Daerah Cilacap', anggaran: 84500000, realisasi: 59150000, persentase: 70.0 },
  { kategori: 'Pendapatan', uraian: 'Pendapatan Asli Desa (Tanah Kas Desa & Pemanfaatan Aset)', anggaran: 105000000, realisasi: 78750000, persentase: 75.0 },
  // Belanja
  { kategori: 'Belanja', uraian: 'Penyelenggaraan Pemerintahan Desa & Siltap Perangkat', anggaran: 615000000, realisasi: 399750000, persentase: 65.0 },
  { kategori: 'Belanja', uraian: 'Pembangunan Rabat Beton Jalan Poros Dusun Cigaru - Tarukahan', anggaran: 420000000, realisasi: 336000000, persentase: 80.0 },
  { kategori: 'Belanja', uraian: 'Pembangunan Talud Penahan Tanah (TPT) & Mitigasi Tebing Dusun Babakan', anggaran: 285000000, realisasi: 228000000, persentase: 80.0 },
  { kategori: 'Belanja', uraian: 'Normalisasi & Pembangunan Saluran Irigasi Tersier Sawah 8 Dusun', anggaran: 260000000, realisasi: 182000000, persentase: 70.0 },
  { kategori: 'Belanja', uraian: 'Pemberdayaan Masyarakat: Pelatihan UMKM, Pertanian Organik & Bantuan Benih', anggaran: 185000000, realisasi: 120250000, persentase: 65.0 },
  { kategori: 'Belanja', uraian: 'Penanganan Stunting, Operasional Posyandu 8 Dusun & Kesehatan Lansia', anggaran: 165000000, realisasi: 115500000, persentase: 70.0 },
  { kategori: 'Belanja', uraian: 'Posko Kesiapsiagaan Bencana, Linmas & Mitigasi Jalur Evakuasi', anggaran: 95000000, realisasi: 71250000, persentase: 75.0 },
  // Pembiayaan
  { kategori: 'Pembiayaan', uraian: 'Penyertaan Modal BUMDes Berkah Mandiri Cibeunying', anggaran: 120000000, realisasi: 84000000, persentase: 70.0 },
];

export const BERITA_TERKINI: BeritaDesa[] = [
  {
    id: 'berita-1',
    judul: 'Kades Lili Warli Pimpin Kerja Bakti Penguatan Tebing dan Drainase di Dusun Tarukahan & Cigaru',
    kategori: 'Mitigasi Bencana',
    tanggal: '11 Oktober 2026',
    penulis: 'Sekretariat Balai Desa Cibeunying',
    ringkasan: 'Kepala Desa Cibeunying Lili Warli bersama perangkat desa dan relawan warga meninjau langsung langkah pencegahan gerakan tanah dan normalisasi saluran air.',
    kontenLengkap: 'Menindaklanjuti curah hujan tinggi di wilayah perbukitan Majenang, Kepala Desa Cibeunying Lili Warli turun langsung mendampingi warga Dusun Tarukahan dan Cigaru dalam aksi pembersihan gorong-gorong serta pemasangan bronjong penahan tebing jalan. Kades Lili Warli menegaskan keselamatan dan ketenangan warga menjadi prioritas mutlak, dengan posko siaga bencana balai desa aktif 24 jam.'
  },
  {
    id: 'berita-2',
    judul: 'Penyaluran Bantuan Langsung Tunai (BLT) Dana Desa Triwulan Berjalan Tertib di Pendopo Desa Cibeunying',
    kategori: 'Bansos',
    tanggal: '5 Oktober 2026',
    penulis: 'Kasi Kesejahteraan',
    ringkasan: 'Kepala Desa Lili Warli bersama Sekdes Dede Gunawan S. menyalurkan bantuan kepada keluarga penerima manfaat secara terbuka dan tanpa potongan.',
    kontenLengkap: 'Bertempat di Pendopo Kantor Balai Desa Cibeunying, Kades Lili Warli didampingi jajaran Babinsa dan Bhabinkamtibmas menyerahkan BLT Dana Desa kepada 84 Keluarga Penerima Manfaat (KPM) dari 8 dusun. Seluruh proses penyaluran diverifikasi langsung melalui sistem digital untuk memastikan penerima tepat sasaran.'
  },
  {
    id: 'berita-3',
    judul: 'Musrenbangdes Cibeunying Menetapkan Fokus 2027: Konektivitas Jalan 8 Dusun dan Ketahanan Pangan',
    kategori: 'Pemerintahan',
    tanggal: '28 September 2026',
    penulis: 'Kaur Perencanaan',
    ringkasan: 'Musyawarah dipimpin langsung Kepala Desa Lili Warli, BPD, dan seluruh Kepala Dusun menyepakati kelanjutan rabat beton jalan dan irigasi persawahan.',
    kontenLengkap: 'Pemerintah Desa Cibeunying merumuskan rencana pembangunan jangka menengah dengan fokus menuntaskan akses jalan poros Dusun Babakan - Cikadu, perbaikan jaringan irigasi tersier gabungan kelompok tani (Gapoktan), serta penguatan permodalan BUMDes.'
  }
];

export const INITIAL_PERMOHONAN: PermohonanSurat[] = [
  {
    id: 'surat-1',
    trackingCode: 'CB-2026-1042',
    tipeSurat: 'SKU',
    namaLengkap: 'Ahmad Supardi',
    nik: '3301141208850003',
    nomorKK: '3301142504100012',
    tempatTanggalLahir: 'Cilacap, 12 Agustus 1985',
    jenisKelamin: 'Laki-laki',
    pekerjaan: 'Wiraswasta / Pedagang',
    agama: 'Islam',
    alamat: 'Dusun Cigaru RT 03 / RW 01',
    rt: '03',
    rw: '01',
    dusun: 'Dusun Cigaru',
    keperluan: 'Persyaratan Pengajuan Pembiayaan KUR BRI Unit Majenang',
    nomorTelepon: '081234567890',
    tanggalPengajuan: '11 Oktober 2026',
    status: 'Selesai / Siap Ambil',
    catatanPetugas: 'Surat telah diverifikasi Kasi Pelayanan dan disahkan Kepala Desa Lili Warli.'
  },
  {
    id: 'surat-2',
    trackingCode: 'CB-2026-1045',
    tipeSurat: 'SKTM',
    namaLengkap: 'Siti Maryamah',
    nik: '3301145507920005',
    nomorKK: '3301141103110025',
    tempatTanggalLahir: 'Cilacap, 15 Juli 1992',
    jenisKelamin: 'Perempuan',
    pekerjaan: 'Ibu Rumah Tangga',
    agama: 'Islam',
    alamat: 'Dusun Tarukahan RT 02 / RW 02',
    rt: '02',
    rw: '02',
    dusun: 'Dusun Tarukahan',
    keperluan: 'Permohonan Keringanan Biaya Pendidikan / Beasiswa Kuliah Mahasiswa di Purwokerto',
    nomorTelepon: '085712349988',
    tanggalPengajuan: '12 Oktober 2026',
    status: 'Ditandatangani Kades',
    catatanPetugas: 'Telah disetujui Kepala Desa Lili Warli, proses penomoran arsip oleh Sekdes Dede Gunawan, S.'
  },
  {
    id: 'surat-3',
    trackingCode: 'CB-2026-1049',
    tipeSurat: 'SKCK',
    namaLengkap: 'Fajar Kurnia Ramadhan',
    nik: '3301140103020008',
    nomorKK: '3301141908050014',
    tempatTanggalLahir: 'Majenang, 1 Maret 2002',
    jenisKelamin: 'Laki-laki',
    pekerjaan: 'Belum / Tidak Bekerja',
    agama: 'Islam',
    alamat: 'Dusun Babakan RT 04 / RW 02',
    rt: '04',
    rw: '02',
    dusun: 'Dusun Babakan',
    keperluan: 'Pengantar SKCK Polsek Majenang untuk Melamar Pekerjaan Kawasan Industri Cilacap',
    nomorTelepon: '089678123456',
    tanggalPengajuan: '13 Oktober 2026',
    status: 'Diproses Operator',
    catatanPetugas: 'Operator loket sedang mencocokkan data NIK & KK pada database kependudukan Cibeunying.'
  }
];

export const INITIAL_PENGADUAN: Pengaduan[] = [
  {
    id: 'lapor-1',
    kodeTiket: 'WADUL-081',
    nama: 'Budi Santoso',
    dusun: 'Dusun Cigaru',
    kategori: 'Infrastruktur Jalan',
    judul: 'Lampu Penerangan Jalan Umum (PJU) Dekat Perempatan Dusun Padam',
    isiLaporan: 'Mohon bantuannya perangkat desa, lampu penerangan jalan di perempatan dekat RT 02 Dusun Cigaru sudah mati selama 4 hari. Jalanan cukup gelap saat malam hari.',
    tanggal: '09 Oktober 2026',
    status: 'Selesai',
    tanggapan: 'Tim sarpras desa telah melakukan perbaikan kabel dan pergantian bohlam LED. Penerangan jalan Dusun Cigaru sudah kembali normal.'
  },
  {
    id: 'lapor-2',
    kodeTiket: 'WADUL-084',
    nama: 'Kuswanto',
    dusun: 'Dusun Tarukahan',
    kategori: 'Infrastruktur Jalan',
    judul: 'Pembersihan Gorong-gorong Saluran Pembuangan Air Sebelum Musim Hujan',
    isiLaporan: 'Saluran air di depan musala banyak endapan tanah dan rumput liar, dikhawatirkan meluap ke badan jalan saat hujan lebat.',
    tanggal: '12 Oktober 2026',
    status: 'Ditindaklanjuti',
    tanggapan: 'Kepala Desa Lili Warli telah menginstruksikan jadwal kerja bakti serentak warga bersama satgas kebersihan dusun pada hari Minggu pukul 07.00 WIB.'
  }
];

// Dokumentasi Alur Perancangan Sistem Informasi Desa (SID) Cibeunying
export const DOKUMENTASI_PERANCANGAN = {
  judul: 'Alur & Metodologi Perancangan Sistem Informasi Desa (SID) Cibeunying',
  deskripsi: 'Kerangka kerja rekayasa perangkat lunak (Software Engineering Lifecycle) dalam mendesain, memodelkan, dan mengimplementasikan sistem informasi pelayanan publik terpadu di Kantor Balai Desa Cibeunying, Kecamatan Majenang di bawah kepemimpinan Kepala Desa Lili Warli.',
  metodologi: 'Waterfall Terpadu dengan Pendekatan Human-Centered Design untuk Pelayanan Publik Pedesaan',
  tahapan: [
    {
      no: '01',
      fase: 'Analisis Kebutuhan (Requirements Analysis)',
      durasi: 'Minggu 1 - 2',
      fokus: 'Riset Lapangan & Identifikasi Masalah Birokrasi',
      poinKunci: [
        'Wawancara mendalam bersama Kepala Desa Lili Warli, Sekretaris Desa Dede Gunawan, S., dan staf loket pelayanan Balai Desa Cibeunying.',
        'Identifikasi permasalahan: Antrean fisik warga dari 8 dusun terpencil (Tarukahan, Babakan, Cigaru, dll), risiko kerusakan arsip register manual kertas, kesulitan warga perantau mengurus surat keterangan.',
        'Pemetaan Pengguna (Actor Persona): Warga Desa Cibeunying (10.273 jiwa), Operator Loket (verifikator berkas), Kepala Desa Lili Warli (otoritas penandatangan), Administrator SID (pengelola data & server).',
        'Penyusunan Kebutuhan Fungsional (SRS): Form pengajuan surat mandiri, sistem generate kode pelacakan unik, dashboard verifikasi operator, visualisasi APBDes real-time, dan kanal pengaduan Wadul Desa.'
      ],
      output: 'Dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL / SRS)'
    },
    {
      no: '02',
      fase: 'Perancangan Sistem & Basis Data (System Architecture & Modeling)',
      durasi: 'Minggu 3 - 4',
      fokus: 'DFD, ERD, dan Arsitektur Multi-Tier',
      poinKunci: [
        'Data Flow Diagram (DFD) Level 0 (Context Diagram): Memetakan arus data masukan dari 10.273 Warga Desa ke SID dan luaran informasi berupa status surat, surat resmi bertanda tangan Kades Lili Warli, serta data statistik ke publik.',
        'Data Flow Diagram (DFD) Level 1: Penguraian proses bisnis menjadi 4 sub-proses utama (1.0 Registrasi & Permohonan Surat, 2.0 Validasi Data Kependudukan 8 Dusun, 3.0 Penomoran Kedinasan & Penandatanganan, 4.0 Pengelolaan APBDes & Aspirasi).',
        'Entity Relationship Diagram (ERD): Memodelkan tabel Warga (NIK, KK, nama, dusun), Surat (kode_unik, jenis_surat, tanggal, status), Petugas (id_petugas, nama, peran), dan Anggaran (tahun, kategori, nominal).',
        'Rancangan Keamanan: Validasi NIK 16 digit, enkripsi token tanda tangan QR Code verifikasi autentik, dan audit log pelacakan berkas.'
      ],
      output: 'Diagram DFD Level 0 & 1, Diagram Relasi Entitas (ERD), Kamus Data'
    },
    {
      no: '03',
      fase: 'Perancangan Antarmuka & Interaksi (UI/UX Design)',
      durasi: 'Minggu 5',
      fokus: 'Wireframing, Tipografi, dan Aksesibilitas Warga 8 Dusun',
      poinKunci: [
        'Penyusunan Wireframe Lo-Fi & Hi-Fi untuk versi desktop (kantor desa) dan mobile responsive (ponsel warga desa).',
        'Prinsip Zero-Pill & Tipografi Jelas: Menghindari desain rumit yang membingungkan warga; menggunakan ukuran teks yang mudah dibaca, kontras warna tajam, dan navigasi 1 klik.',
        'Kalkulasi Padding & Tata Letak: Form pengajuan surat dirancang bertahap (stepped layout) dengan validasi real-time agar warga tidak salah memasukkan nomor KK atau NIK.',
        'Desain Kop Surat Resmi: Sesuai pedoman tata naskah dinas Pemerintah Kabupaten Cilacap lengkap dengan lambang resmi, penomoran Sekdes, tanda tangan Kades Lili Warli, dan QR Code verifikasi.'
      ],
      output: 'Mockup Hi-Fi, Prototipe Interaktif, Design System Guidelines'
    },
    {
      no: '04',
      fase: 'Implementasi & Pengodean (Full-Stack Engineering)',
      durasi: 'Minggu 6 - 8',
      fokus: 'Pengembangan Frontend & RESTful Logic',
      poinKunci: [
        'Frontend: React 19 dengan TypeScript untuk ketahanan tipe data, Tailwind CSS untuk styling responsif bebas bloatware.',
        'State Management: Reaktif dan persisten dengan LocalStorage / REST Client sehingga warga dapat mengecek status surat kapan saja tanpa kehilangan riwayat pengajuan.',
        'Modul Cetak Surat Cepat: Fitur pratinjau surat resmi siap cetak (A4) dengan format standarisasi kedinasan Balai Desa Cibeunying.',
        'Dashboard Transparansi Real-Time: Visualisasi APBDes otomatis dengan grafik persentase realisasi anggaran pembangunan 8 dusun.'
      ],
      output: 'Source Code Aplikasi Teruji, Bundle Produksi Teroptimasi'
    },
    {
      no: '05',
      fase: 'Pengujian Sistem & QA (Testing & UAT)',
      durasi: 'Minggu 9',
      fokus: 'Blackbox Testing, Cross-Device, dan UAT Warga',
      poinKunci: [
        'Blackbox Testing: Menguji seluruh kemungkinan input formulir (misal NIK kurang dari 16 digit, input kosong, format tanggal lahir salah).',
        'User Acceptance Testing (UAT): Uji coba langsung di Balai Desa Cibeunying dipimpin Kades Lili Warli, Sekdes Dede Gunawan, S., Kasi Pelayanan, serta 20 perwakilan warga dari Dusun Cigaru, Tarukahan, dan Babakan.',
        'Pengujian Kecepatan & Responsivitas Jaringan: Memastikan aplikasi tetap ringan diakses pada koneksi seluler 3G/4G di pelosok wilayah perbukitan desa.',
        'Perbaikan Feedback UAT: Menambahkan tombol cetak instan dan fitur copy kode lacak dengan 1 ketukan.'
      ],
      output: 'Berita Acara UAT, Matriks Pengujian Kasus Uji (Test Cases Matrix)'
    },
    {
      no: '06',
      fase: 'Penerapan, SOP & Pemeliharaan (Deployment & Operations)',
      durasi: 'Minggu 10 - Berkelanjutan',
      fokus: 'Go-Live, Bimtek Perangkat Desa, dan Backup Data',
      poinKunci: [
        'Pelatihan / Bimbingan Teknis (Bimtek) operasional bagi seluruh pamong dan staf operator Balai Desa Cibeunying di bawah pengawasan Kades Lili Warli.',
        'Penyusunan SOP Pelayanan Digital: Alur waktu maksimal pengerjaan surat (maksimal 15-30 menit untuk surat pengantar standar).',
        'Sosialisasi ke Warga: Penyebaran pamflet informasi di 8 Dusun, papan pengumuman balai desa, dan pertemuan RT/RW.',
        'Mekanisme Pemeliharaan: Pencadangan data (backup rutin), pembaruan data kependudukan per semester, dan kanal masukan fitur.'
      ],
      output: 'Dokumen SOP Operasional SID, Manual Book / Panduan Warga & Admin'
    }
  ],
  spesifikasiTeknis: {
    frontend: 'React 19, TypeScript, Tailwind CSS, Lucide Icons',
    arsitektur: 'Single Page Application (SPA) dengan Clean Architecture & Modular Component Tree',
    standarData: 'Format NIK 16 digit Kemendagri, Standar Penomoran Tata Naskah Dinas Permendagri No. 47/2016',
    keamanan: 'Client-side sanitization, Tracking Code Hashing, Privacy Guard untuk NIK',
    kecepatan: 'First Contentful Paint < 0.8 detik, Ukuran Bundle terkompresi < 150 KB'
  }
};
