import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  CheckCircle, 
  Clock, 
  Printer, 
  QrCode, 
  Send, 
  AlertCircle,
  Copy,
  Check,
  Eye,
  FileCheck,
  Sparkles
} from 'lucide-react';
import { PermohonanSurat, SuratType } from '../types/village';
import { PROFIL_DESA } from '../data/villageData';

interface LayananSuratProps {
  suratList: PermohonanSurat[];
  onAddSurat: (surat: PermohonanSurat) => void;
  initialTrackingCode?: string;
}

export const LayananSurat: React.FC<LayananSuratProps> = ({ suratList, onAddSurat, initialTrackingCode }) => {
  const [activeTab, setActiveTab] = useState<'form' | 'tracking' | 'pratinjau'>('form');
  
  // Tracking query state
  const [searchQuery, setSearchQuery] = useState(initialTrackingCode || '');
  const [selectedSurat, setSelectedSurat] = useState<PermohonanSurat | null>(suratList[0] || null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  // Form inputs state
  const [formData, setFormData] = useState({
    tipeSurat: 'SKU' as SuratType,
    namaLengkap: '',
    nik: '',
    nomorKK: '',
    tempatTanggalLahir: '',
    jenisKelamin: 'Laki-laki' as 'Laki-laki' | 'Perempuan',
    pekerjaan: '',
    agama: 'Islam',
    alamat: '',
    rt: '01',
    rw: '01',
    dusun: 'Dusun Cigaru',
    keperluan: '',
    nomorTelepon: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.namaLengkap.trim()) errors.namaLengkap = 'Nama lengkap wajib diisi sesuai KTP.';
    if (!formData.nik.trim()) {
      errors.nik = 'NIK wajib diisi.';
    } else if (!/^\d{16}$/.test(formData.nik.trim())) {
      errors.nik = 'NIK harus tepat 16 digit angka.';
    }
    if (!formData.nomorKK.trim()) {
      errors.nomorKK = 'Nomor Kartu Keluarga wajib diisi.';
    } else if (!/^\d{16}$/.test(formData.nomorKK.trim())) {
      errors.nomorKK = 'Nomor KK harus tepat 16 digit angka.';
    }
    if (!formData.tempatTanggalLahir.trim()) errors.tempatTanggalLahir = 'Tempat & tanggal lahir wajib diisi (Contoh: Cilacap, 15 Juli 1990).';
    if (!formData.alamat.trim()) errors.alamat = 'Alamat / nama jalan / gang wajib diisi.';
    if (!formData.keperluan.trim()) errors.keperluan = 'Keperluan permohonan surat wajib dijelaskan.';
    if (!formData.nomorTelepon.trim()) errors.nomorTelepon = 'Nomor WhatsApp / HP diperlukan untuk notifikasi.';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `CB-2026-${randomSuffix}`;

    const newSurat: PermohonanSurat = {
      id: `surat-${Date.now()}`,
      trackingCode,
      tipeSurat: formData.tipeSurat,
      namaLengkap: formData.namaLengkap,
      nik: formData.nik,
      nomorKK: formData.nomorKK,
      tempatTanggalLahir: formData.tempatTanggalLahir,
      jenisKelamin: formData.jenisKelamin,
      pekerjaan: formData.pekerjaan || 'Wiraswasta',
      agama: formData.agama,
      alamat: formData.alamat,
      rt: formData.rt,
      rw: formData.rw,
      dusun: formData.dusun,
      keperluan: formData.keperluan,
      nomorTelepon: formData.nomorTelepon,
      tanggalPengajuan: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      status: 'Menunggu Verifikasi',
      catatanPetugas: 'Berkas permohonan baru masuk antrean verifikasi staf loket Balai Desa.'
    };

    onAddSurat(newSurat);
    setSelectedSurat(newSurat);
    setSubmittedCode(trackingCode);
    setSearchQuery(trackingCode);

    // Reset form fields
    setFormData({
      tipeSurat: 'SKU',
      namaLengkap: '',
      nik: '',
      nomorKK: '',
      tempatTanggalLahir: '',
      jenisKelamin: 'Laki-laki',
      pekerjaan: '',
      agama: 'Islam',
      alamat: '',
      rt: '01',
      rw: '01',
      dusun: 'Dusun Cigaru',
      keperluan: '',
      nomorTelepon: '',
    });
  };

  const handleSearchTracking = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toUpperCase();
    if (!query) return;

    const found = suratList.find(s => 
      s.trackingCode.toUpperCase() === query || 
      s.nik === query || 
      s.namaLengkap.toLowerCase().includes(query.toLowerCase())
    );

    if (found) {
      setSelectedSurat(found);
    } else {
      alert(`Berkas dengan kode atau NIK "${query}" tidak ditemukan pada pangkalan data Balai Desa Cibeunying.`);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getTipeSuratLabel = (type: SuratType) => {
    switch (type) {
      case 'SKU': return 'Surat Keterangan Usaha (SKU)';
      case 'SKTM': return 'Surat Keterangan Tidak Mampu (SKTM)';
      case 'SKCK': return 'Surat Pengantar SKCK Polsek';
      case 'DOMISILI': return 'Surat Keterangan Domisili Warga';
      case 'KELAHIRAN': return 'Surat Pengantar Keterangan Kelahiran';
      case 'BELUM_MENIKAH': return 'Surat Keterangan Belum Menikah';
    }
  };

  return (
    <section id="layanan-surat" className="py-16 bg-stone-100/50 border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 block mb-1">
            Pelayanan Publik Terpadu Balai Desa
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            Layanan Permohonan Surat Mandiri & Lacak Berkas
          </h2>
          <p className="mt-2 text-base text-stone-600">
            Warga Desa Cibeunying dapat mengajukan surat keterangan dan surat pengantar secara mandiri, memantau posisi antrean verifikasi, dan mencetak dokumen resmi bertanda tangan digital.
          </p>
        </div>

        {/* Action Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3 mb-8">
          <button
            onClick={() => setActiveTab('form')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'form'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>1. Formulir Buat Surat</span>
          </button>

          <button
            onClick={() => setActiveTab('tracking')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'tracking'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>2. Lacak Posisi Berkas ({suratList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('pratinjau')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'pratinjau'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>3. Pratinjau & Cetak Surat Kedinasan</span>
          </button>
        </div>

        {/* SUBMITTED SUCCESS BANNER */}
        {submittedCode && (
          <div className="mb-8 p-5 bg-emerald-50 border border-emerald-300 rounded-xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-emerald-950">
                  Permohonan Surat Berhasil Dikirim ke Operator Balai Desa Cibeunying!
                </h4>
                <p className="text-xs text-emerald-800 mt-1">
                  Simpan Kode Lacak Anda: <span className="font-mono font-bold text-base bg-white px-2 py-0.5 rounded border border-emerald-300 text-emerald-950">{submittedCode}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopyCode(submittedCode)}
                className="px-3 py-1.5 text-xs font-semibold bg-white text-emerald-800 border border-emerald-300 rounded-md hover:bg-emerald-100 flex items-center gap-1.5"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Tersalin' : 'Salin Kode'}</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('tracking');
                  setSubmittedCode(null);
                }}
                className="px-3 py-1.5 text-xs font-semibold bg-emerald-800 text-white rounded-md hover:bg-emerald-900 flex items-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Lacak Sekarang</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 1: FORMULIR PENGAJUAN */}
        {activeTab === 'form' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Column */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Jenis Surat */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">
                    Pilih Jenis Surat yang Diperlukan <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="tipeSurat"
                    value={formData.tipeSurat}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-900 font-medium focus:ring-2 focus:ring-emerald-700 focus:outline-hidden"
                  >
                    <option value="SKU">Surat Keterangan Usaha (SKU) - Untuk Bank / KUR / Modal</option>
                    <option value="SKTM">Surat Keterangan Tidak Mampu (SKTM) - Beasiswa / Keringanan RS</option>
                    <option value="SKCK">Surat Pengantar SKCK Polsek Majenang</option>
                    <option value="DOMISILI">Surat Keterangan Domisili Tempat Tinggal</option>
                    <option value="KELAHIRAN">Surat Pengantar Keterangan Kelahiran</option>
                    <option value="BELUM_MENIKAH">Surat Keterangan Belum Pernah Menikah</option>
                  </select>
                </div>

                {/* Identity Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Nomor Induk Kependudukan (NIK) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nik"
                      maxLength={16}
                      placeholder="16 digit sesuai e-KTP"
                      value={formData.nik}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 bg-stone-50 border rounded-lg text-sm font-mono focus:ring-2 focus:ring-emerald-700 focus:outline-hidden ${
                        formErrors.nik ? 'border-red-500 bg-red-50/40' : 'border-stone-300'
                      }`}
                    />
                    {formErrors.nik && <p className="text-xs text-red-600 mt-1">{formErrors.nik}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Nomor Kartu Keluarga (KK) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nomorKK"
                      maxLength={16}
                      placeholder="16 digit sesuai KK"
                      value={formData.nomorKK}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 bg-stone-50 border rounded-lg text-sm font-mono focus:ring-2 focus:ring-emerald-700 focus:outline-hidden ${
                        formErrors.nomorKK ? 'border-red-500 bg-red-50/40' : 'border-stone-300'
                      }`}
                    />
                    {formErrors.nomorKK && <p className="text-xs text-red-600 mt-1">{formErrors.nomorKK}</p>}
                  </div>
                </div>

                {/* Name & TTL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Nama Lengkap (Sesuai KTP) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="namaLengkap"
                      placeholder="Contoh: Ahmad Supardi"
                      value={formData.namaLengkap}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 bg-stone-50 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-hidden ${
                        formErrors.namaLengkap ? 'border-red-500 bg-red-50/40' : 'border-stone-300'
                      }`}
                    />
                    {formErrors.namaLengkap && <p className="text-xs text-red-600 mt-1">{formErrors.namaLengkap}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Tempat & Tanggal Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="tempatTanggalLahir"
                      placeholder="Contoh: Cilacap, 12 Agustus 1985"
                      value={formData.tempatTanggalLahir}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 bg-stone-50 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-hidden ${
                        formErrors.tempatTanggalLahir ? 'border-red-500 bg-red-50/40' : 'border-stone-300'
                      }`}
                    />
                    {formErrors.tempatTanggalLahir && <p className="text-xs text-red-600 mt-1">{formErrors.tempatTanggalLahir}</p>}
                  </div>
                </div>

                {/* Gender, Religion, Job */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Jenis Kelamin
                    </label>
                    <select
                      name="jenisKelamin"
                      value={formData.jenisKelamin}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm"
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Agama
                    </label>
                    <select
                      name="agama"
                      value={formData.agama}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm"
                    >
                      <option value="Islam">Islam</option>
                      <option value="Kristen">Kristen</option>
                      <option value="Katolik">Katolik</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Buddha">Buddha</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Pekerjaan
                    </label>
                    <input
                      type="text"
                      name="pekerjaan"
                      placeholder="Contoh: Wiraswasta / Petani"
                      value={formData.pekerjaan}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm"
                    >
                    </input>
                  </div>
                </div>

                {/* Dusun, RT, RW, Address */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Wilayah Dusun <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="dusun"
                      value={formData.dusun}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm font-medium"
                    >
                      <option value="Dusun Cigaru">Dusun Cigaru</option>
                      <option value="Dusun Tarukahan">Dusun Tarukahan</option>
                      <option value="Dusun Babakan">Dusun Babakan</option>
                      <option value="Dusun Cibuyut">Dusun Cibuyut</option>
                      <option value="Dusun Jaringao">Dusun Jaringao</option>
                      <option value="Dusun Nagari">Dusun Nagari</option>
                      <option value="Dusun Cijeungjing">Dusun Cijeungjing</option>
                      <option value="Dusun Cikadu">Dusun Cikadu</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      RT
                    </label>
                    <input
                      type="text"
                      name="rt"
                      placeholder="01"
                      value={formData.rt}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      RW
                    </label>
                    <input
                      type="text"
                      name="rw"
                      placeholder="01"
                      value={formData.rw}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Alamat Lengkap / Jalan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="alamat"
                    placeholder="Contoh: Jl. Melati No. 12 RT 03 / RW 01"
                    value={formData.alamat}
                    onChange={handleInputChange}
                    className={`w-full px-3.5 py-2 bg-stone-50 border rounded-lg text-sm ${
                      formErrors.alamat ? 'border-red-500 bg-red-50/40' : 'border-stone-300'
                    }`}
                  />
                  {formErrors.alamat && <p className="text-xs text-red-600 mt-1">{formErrors.alamat}</p>}
                </div>

                {/* Purpose / Keperluan */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Maksud / Keperluan Permohonan Surat <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={2}
                    name="keperluan"
                    placeholder="Jelaskan secara singkat tujuan pengajuan surat ini (Contoh: Pengajuan KUR Mikro BRI Unit Majenang untuk usaha warung kelontong)"
                    value={formData.keperluan}
                    onChange={handleInputChange}
                    className={`w-full px-3.5 py-2 bg-stone-50 border rounded-lg text-sm ${
                      formErrors.keperluan ? 'border-red-500 bg-red-50/40' : 'border-stone-300'
                    }`}
                  />
                  {formErrors.keperluan && <p className="text-xs text-red-600 mt-1">{formErrors.keperluan}</p>}
                </div>

                {/* Phone / WA */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Nomor WhatsApp / HP Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nomorTelepon"
                    placeholder="08xxxxxxxxxx"
                    value={formData.nomorTelepon}
                    onChange={handleInputChange}
                    className={`w-full px-3.5 py-2 bg-stone-50 border rounded-lg text-sm ${
                      formErrors.nomorTelepon ? 'border-red-500 bg-red-50/40' : 'border-stone-300'
                    }`}
                  />
                  {formErrors.nomorTelepon && <p className="text-xs text-red-600 mt-1">{formErrors.nomorTelepon}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permohonan Surat Mandiri</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Guidance Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200">
                <h4 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-800" />
                  <span>Petunjuk Persyaratan Berkas</span>
                </h4>
                <ul className="text-xs text-stone-600 space-y-2.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0"></span>
                    <span>Pastikan NIK dan No. KK sesuai data e-KTP fisik yang terdaftar di Disdukcapil Kabupaten Cilacap.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0"></span>
                    <span>Untuk SKTM, sistem akan melakukan pengecekan silang terhadap basis data DTKS Kementerian Sosial.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0"></span>
                    <span>Saat mengambil surat fisik di Balai Desa, pemohon cukup menunjukkan Kode Tracking atau KTP asli kepada staf loket.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0"></span>
                    <span>Semua penerbitan surat di Balai Desa Cibeunying <strong>100% Bebas Biaya (Gratis)</strong>.</span>
                  </li>
                </ul>
              </div>

              {/* Sample Quick Tracking Codes */}
              <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-2">
                  Uji Coba Kode Lacak Terdaftar:
                </span>
                <p className="text-xs text-stone-500 mb-3">
                  Klik kode di bawah untuk melihat simulasi status berkas yang sedang berjalan di Balai Desa Cibeunying:
                </p>
                <div className="space-y-2">
                  {suratList.slice(0, 3).map((s) => (
                    <button
                      key={s.trackingCode}
                      onClick={() => {
                        setSelectedSurat(s);
                        setSearchQuery(s.trackingCode);
                        setActiveTab('tracking');
                      }}
                      className="w-full p-2.5 bg-white hover:bg-emerald-50 rounded-lg border border-stone-200 text-left transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-mono font-bold text-emerald-900">{s.trackingCode}</div>
                        <div className="text-[11px] text-stone-600">{s.namaLengkap} · {s.tipeSurat}</div>
                      </div>
                      <span className="text-[10px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                        {s.status}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PELACAKAN BERKAS (TRACKING) */}
        {activeTab === 'tracking' && (
          <div className="space-y-8">
            {/* Search Input Box */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs max-w-3xl">
              <form onSubmit={handleSearchTracking} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Masukkan Kode Tracking (Contoh: CB-2026-1042) atau NIK..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm font-medium focus:ring-2 focus:ring-emerald-700 focus:outline-hidden"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Cari Berkas</span>
                </button>
              </form>
            </div>

            {/* Tracking Result Card */}
            {selectedSurat ? (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
                
                {/* Header detail */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded">
                        {selectedSurat.trackingCode}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">
                        Diajukan pada {selectedSurat.tanggalPengajuan}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                      {getTipeSuratLabel(selectedSurat.tipeSurat)}
                    </h3>
                    <p className="text-sm text-stone-600 mt-0.5">
                      Pemohon: <span className="font-semibold text-stone-900">{selectedSurat.namaLengkap}</span> (NIK: {selectedSurat.nik}) · {selectedSurat.dusun}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setActiveTab('pratinjau');
                      }}
                      className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 border border-stone-300"
                    >
                      <Eye className="w-4 h-4 text-stone-600" />
                      <span>Buka Surat Resmi</span>
                    </button>
                  </div>
                </div>

                {/* Timeline Stepper */}
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">
                    Status Progres di Kantor Balai Desa:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    {[
                      { step: 1, label: 'Menunggu Verifikasi', desc: 'Permohonan masuk ke sistem loket' },
                      { step: 2, label: 'Diproses Operator', desc: 'Pengecekan register kependudukan' },
                      { step: 3, label: 'Ditandatangani Kades', desc: 'Otorisasi & stempel dinas resmi' },
                      { step: 4, label: 'Selesai / Siap Ambil', desc: 'Dokumen sah & siap diterbitkan' },
                    ].map((stepItem) => {
                      const statusMap: Record<string, number> = {
                        'Menunggu Verifikasi': 1,
                        'Diproses Operator': 2,
                        'Ditandatangani Kades': 3,
                        'Selesai / Siap Ambil': 4,
                      };
                      const currentRank = statusMap[selectedSurat.status] || 1;
                      const isComplete = currentRank >= stepItem.step;
                      const isCurrent = currentRank === stepItem.step;

                      return (
                        <div
                          key={stepItem.step}
                          className={`p-4 rounded-xl border transition-all ${
                            isCurrent
                              ? 'bg-emerald-50 border-emerald-500 shadow-xs'
                              : isComplete
                              ? 'bg-stone-50 border-stone-300'
                              : 'bg-white border-stone-200 opacity-50'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              isComplete ? 'bg-emerald-800 text-white' : 'bg-stone-200 text-stone-600'
                            }`}>
                              {isComplete ? <Check className="w-3.5 h-3.5" /> : stepItem.step}
                            </div>
                            <span className="text-xs font-bold text-stone-900">{stepItem.label}</span>
                          </div>
                          <p className="text-[11px] text-stone-500">{stepItem.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Operator Note Box */}
                {selectedSurat.catatanPetugas && (
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl text-xs">
                    <span className="font-bold text-stone-700">Catatan Staf Pelayanan Balai Desa:</span>
                    <p className="text-stone-600 mt-1 italic">
                      "{selectedSurat.catatanPetugas}"
                    </p>
                  </div>
                )}

                {/* Info Metadata Grid */}
                <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700">
                  <div>
                    <span className="text-stone-400 block">Tujuan / Keperluan:</span>
                    <span className="font-medium text-stone-800 mt-0.5 block">{selectedSurat.keperluan}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Alamat Tinggal:</span>
                    <span className="font-medium text-stone-800 mt-0.5 block">{selectedSurat.alamat}, RT {selectedSurat.rt} / RW {selectedSurat.rw}, {selectedSurat.dusun}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Lokasi Pengambilan Fisik:</span>
                    <span className="font-medium text-emerald-900 mt-0.5 block">Loket 1 Pelayanan Terpadu Balai Desa Cibeunying</span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="p-8 text-center text-stone-500 bg-white rounded-2xl border border-stone-200">
                Belum ada berkas yang dipilih. Silakan masukkan kode lacak di atas.
              </div>
            )}
          </div>
        )}

        {/* TAB 3: PRATINJAU & CETAK SURAT RESMI */}
        {activeTab === 'pratinjau' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-stone-200">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-emerald-800" />
                <span className="text-xs font-semibold text-stone-700">
                  Pratinjau Format Standar Tata Naskah Dinas Balai Desa Cibeunying
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Cetak Dokumen (Print)</span>
                </button>
              </div>
            </div>

            {/* Official Letter Paper Template (A4 Simulation) */}
            {selectedSurat && (
              <div className="bg-white p-8 sm:p-14 max-w-3xl mx-auto rounded-xl border border-stone-300 shadow-md font-serif text-stone-900 leading-relaxed print:m-0 print:border-none print:shadow-none">
                
                {/* Official Letterhead (KOP SURAT) */}
                <div className="text-center border-b-4 border-double border-stone-900 pb-4 mb-6">
                  <div className="text-xs sm:text-sm font-sans uppercase font-bold tracking-wider text-stone-700">
                    Pemerintah Kabupaten Cilacap
                  </div>
                  <div className="text-xs sm:text-sm font-sans uppercase font-bold tracking-wider text-stone-700">
                    Kecamatan Majenang
                  </div>
                  <div className="text-xl sm:text-2xl font-sans uppercase font-extrabold tracking-wide text-stone-950 mt-1">
                    Pemerintah Desa Cibeunying
                  </div>
                  <div className="text-[11px] font-sans text-stone-600 mt-1">
                    {PROFIL_DESA.alamatKantor} · Pos: {PROFIL_DESA.kodePos} · Telp: {PROFIL_DESA.telepon}
                  </div>
                </div>

                {/* Letter Title & Number */}
                <div className="text-center mb-6">
                  <div className="text-base sm:text-lg font-sans font-bold underline uppercase tracking-wide">
                    {getTipeSuratLabel(selectedSurat.tipeSurat)}
                  </div>
                  <div className="text-xs font-sans text-stone-600 mt-1">
                    Nomor: 503 / 148 / X / 2026 / CIB
                  </div>
                </div>

                {/* Letter Body Opening */}
                <p className="text-sm text-justify mb-4">
                  Yang bertanda tangan di bawah ini Kepala Desa Cibeunying, Kecamatan Majenang, Kabupaten Cilacap, Provinsi Jawa Tengah, menerangkan dengan sebenarnya bahwa:
                </p>

                {/* Identity Table */}
                <div className="space-y-2 text-sm pl-4 mb-5 font-sans">
                  <div className="grid grid-cols-12 gap-2">
                    <span className="col-span-4 font-semibold text-stone-700">1. Nama Lengkap</span>
                    <span className="col-span-1">:</span>
                    <span className="col-span-7 font-bold text-stone-950">{selectedSurat.namaLengkap}</span>
                  </div>
                  <div className="grid grid-cols-12 gap-2">
                    <span className="col-span-4 font-semibold text-stone-700">2. NIK</span>
                    <span className="col-span-1">:</span>
                    <span className="col-span-7 font-mono font-bold text-stone-950">{selectedSurat.nik}</span>
                  </div>
                  <div className="grid grid-cols-12 gap-2">
                    <span className="col-span-4 font-semibold text-stone-700">3. Tempat / Tgl. Lahir</span>
                    <span className="col-span-1">:</span>
                    <span className="col-span-7">{selectedSurat.tempatTanggalLahir}</span>
                  </div>
                  <div className="grid grid-cols-12 gap-2">
                    <span className="col-span-4 font-semibold text-stone-700">4. Jenis Kelamin</span>
                    <span className="col-span-1">:</span>
                    <span className="col-span-7">{selectedSurat.jenisKelamin}</span>
                  </div>
                  <div className="grid grid-cols-12 gap-2">
                    <span className="col-span-4 font-semibold text-stone-700">5. Pekerjaan</span>
                    <span className="col-span-1">:</span>
                    <span className="col-span-7">{selectedSurat.pekerjaan}</span>
                  </div>
                  <div className="grid grid-cols-12 gap-2">
                    <span className="col-span-4 font-semibold text-stone-700">6. Tempat Tinggal</span>
                    <span className="col-span-1">:</span>
                    <span className="col-span-7">{selectedSurat.alamat}, RT {selectedSurat.rt} / RW {selectedSurat.rw}, {selectedSurat.dusun}, Desa Cibeunying, Kec. Majenang, Kab. Cilacap</span>
                  </div>
                </div>

                {/* Letter Body Explanation */}
                <p className="text-sm text-justify mb-4">
                  Berdasarkan surat pengantar dari Ketua RT/RW setempat serta catatan register kependudukan Desa Cibeunying, nama tersebut di atas adalah benar-benar warga penduduk Desa Cibeunying dan surat keterangan ini dibuat untuk keperluan:
                </p>

                <div className="p-3 bg-stone-100 rounded-lg text-sm font-sans font-medium text-stone-900 mb-5 border border-stone-200">
                  "{selectedSurat.keperluan}"
                </div>

                <p className="text-sm text-justify mb-8">
                  Demikian surat keterangan ini kami buat dengan sebenarnya dan agar dapat dipergunakan sebagaimana mestinya oleh yang berkepentingan.
                </p>

                {/* Signature Block */}
                <div className="grid grid-cols-2 gap-8 text-xs font-sans mt-8 pt-4">
                  {/* Left: QR Code Verification */}
                  <div className="flex flex-col items-center justify-center p-3 bg-stone-50 rounded-lg border border-stone-200 text-center">
                    <QrCode className="w-16 h-16 text-stone-800 mb-1" />
                    <span className="text-[10px] font-mono text-stone-600">Verifikasi Sah Digital</span>
                    <span className="text-[9px] font-mono text-emerald-800 font-bold">{selectedSurat.trackingCode}</span>
                    <span className="text-[8px] text-stone-400 mt-0.5">SID Balai Desa Cibeunying</span>
                  </div>

                  {/* Right: Signature of Kades */}
                  <div className="text-center">
                    <div>Cibeunying, {selectedSurat.tanggalPengajuan}</div>
                    <div className="font-bold text-stone-900 mt-1">Kepala Desa Cibeunying</div>
                    
                    {/* Official Stamp badge */}
                    <div className="my-3 py-4 text-emerald-800 font-bold tracking-wider text-[11px] uppercase border border-dashed border-emerald-700/60 rounded px-2 bg-emerald-50/50">
                      [Tersertifikasi Digital SID Pemdes]
                    </div>

                    <div className="font-bold text-sm underline text-stone-950">
                      LILI WARLI
                    </div>
                    <div className="text-[11px] text-stone-500">
                      Kepala Desa Periode 2020 - 2027
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
