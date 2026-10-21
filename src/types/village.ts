export type SuratType = 
  | 'SKU' // Surat Keterangan Usaha
  | 'SKTM' // Surat Keterangan Tidak Mampu
  | 'SKCK' // Pengantar SKCK
  | 'DOMISILI' // Keterangan Domisili
  | 'KELAHIRAN' // Keterangan Kelahiran
  | 'BELUM_MENIKAH'; // Keterangan Belum Menikah

export interface PermohonanSurat {
  id: string;
  trackingCode: string;
  tipeSurat: SuratType;
  namaLengkap: string;
  nik: string;
  nomorKK: string;
  tempatTanggalLahir: string;
  jenisKelamin: 'Laki-laki' | 'Perempuan';
  pekerjaan: string;
  agama: string;
  alamat: string;
  rt: string;
  rw: string;
  dusun: string;
  keperluan: string;
  nomorTelepon: string;
  tanggalPengajuan: string;
  status: 'Menunggu Verifikasi' | 'Diproses Operator' | 'Ditandatangani Kades' | 'Selesai / Siap Ambil';
  catatanPetugas?: string;
}

export interface AparaturDesa {
  id: string;
  nama: string;
  jabatan: string;
  nip?: string;
  pendidikan: string;
  tupoksi: string;
  status: string;
}

export interface PosAnggaran {
  kategori: 'Pendapatan' | 'Belanja' | 'Pembiayaan';
  uraian: string;
  anggaran: number;
  realisasi: number;
  persentase: number;
}

export interface Pengaduan {
  id: string;
  kodeTiket: string;
  nama: string;
  dusun: string;
  kategori: 'Infrastruktur Jalan' | 'Bansos' | 'Pelayanan Balai Desa' | 'Keamanan & Ketertiban' | 'Kesehatan & Lingkungan';
  judul: string;
  isiLaporan: string;
  tanggal: string;
  status: 'Diterima' | 'Sedang Ditinjau' | 'Ditindaklanjuti' | 'Selesai';
  tanggapan?: string;
}

export interface BeritaDesa {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  penulis: string;
  ringkasan: string;
  kontenLengkap: string;
}

export interface DusunInfo {
  nama: string;
  kadus: string;
  jumlahRT: number;
  jumlahRW: number;
  jumlahPenduduk: number;
  jumlahKK: number;
  komoditasUtama: string;
}
