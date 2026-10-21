import React, { useState } from 'react';
import { 
  Layers, 
  Workflow, 
  Database, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck2, 
  Cpu, 
  Play, 
  RefreshCw, 
  ShieldAlert,
  Search,
  Check,
  Building2,
  Lock,
  Sparkles
} from 'lucide-react';
import { DOKUMENTASI_PERANCANGAN } from '../data/villageData';

export const AlurPerancanganSID: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sdlc' | 'flowchart' | 'arsitektur' | 'simulasi'>('sdlc');
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  // State for interactive simulation
  const [simStep, setSimStep] = useState<number>(0);
  const [simRunning, setSimRunning] = useState<boolean>(false);
  const [simLog, setSimLog] = useState<string[]>([]);

  const startSimulation = () => {
    setSimRunning(true);
    setSimStep(1);
    setSimLog(['[Fase 1] Warga menginput NIK: 3301140904870001 dan memilih jenis Surat Keterangan Usaha (SKU)...']);

    setTimeout(() => {
      setSimStep(2);
      setSimLog(prev => [...prev, '[Fase 2] Algoritma validasi memeriksa format 16-digit NIK & mencocokkan data pada Basis Data Warga Cibeunying. Kode Unik terbit: CB-SIM-2026.']);
    }, 1200);

    setTimeout(() => {
      setSimStep(3);
      setSimLog(prev => [...prev, '[Fase 3] Operator Loket Balai Desa (Kasi Pelayanan) menerima notifikasi permohonan. Verifikasi syarat pengantar RT/RW valid.']);
    }, 2400);

    setTimeout(() => {
      setSimStep(4);
      setSimLog(prev => [...prev, '[Fase 4] Penomoran surat resmi diterbitkan: 503/182/X/2026. Kepala Desa (Lili Warli) membubuhkan tanda tangan & stempel QR Code.']);
    }, 3600);

    setTimeout(() => {
      setSimStep(5);
      setSimRunning(false);
      setSimLog(prev => [...prev, '[Fase 5 Selesai] Surat digital terbit, SMS/WA notifikasi dikirim ke pemohon. Berkas siap diunduh atau diambil di loket 1 Balai Desa.']);
    }, 4800);
  };

  const resetSimulation = () => {
    setSimStep(0);
    setSimRunning(false);
    setSimLog([]);
  };

  const currentPhaseData = DOKUMENTASI_PERANCANGAN.tahapan[selectedPhase];

  return (
    <section id="alur-perancangan" className="py-16 bg-white border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Workflow className="w-4 h-4 text-emerald-700" />
            <span>Dokumentasi Rekayasa Perangkat Lunak</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            Alur Perancangan Sistem Informasi Desa (SID) Cibeunying
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Panduan komprehensif alur perancangan, pemodelan data (DFD & ERD), standar arsitektur teknologi, serta siklus hidup pengembangan sistem informasi untuk transformasi pelayanan publik di Kantor Balai Desa Cibeunying, Kecamatan Majenang.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3 mb-8">
          <button
            onClick={() => setActiveTab('sdlc')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'sdlc'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>1. Siklus SDLC (6 Tahapan)</span>
          </button>

          <button
            onClick={() => setActiveTab('flowchart')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'flowchart'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Workflow className="w-4 h-4" />
            <span>2. Flowchart Alur Layanan Surat</span>
          </button>

          <button
            onClick={() => setActiveTab('arsitektur')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'arsitektur'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>3. DFD, ERD & Basis Data</span>
          </button>

          <button
            onClick={() => setActiveTab('simulasi')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-2 ${
              activeTab === 'simulasi'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>4. Simulasi UAT Alur Interaktif</span>
          </button>
        </div>

        {/* TAB 1: SIKLUS SDLC (6 TAHAPAN) */}
        {activeTab === 'sdlc' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav: Phase list */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-3">
                Pilih Tahapan Perancangan:
              </span>
              {DOKUMENTASI_PERANCANGAN.tahapan.map((item, idx) => (
                <div
                  key={item.no}
                  onClick={() => setSelectedPhase(idx)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all ${
                    selectedPhase === idx
                      ? 'bg-emerald-50/80 border-emerald-600 shadow-xs'
                      : 'bg-white border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="font-mono font-bold text-emerald-800">Tahap {item.no}</span>
                    <span className="text-stone-400">{item.durasi}</span>
                  </div>
                  <h4 className={`text-sm font-bold leading-snug ${
                    selectedPhase === idx ? 'text-emerald-950' : 'text-stone-800'
                  }`}>
                    {item.fase}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                    Fokus: {item.fokus}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Panel: Detailed Phase Analysis */}
            <div className="lg:col-span-8 bg-stone-50/80 p-6 sm:p-8 rounded-2xl border border-stone-200">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-semibold text-emerald-800 tracking-wider">
                    FASE REKAYASA SISTEM {currentPhaseData.no}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                    {currentPhaseData.fase}
                  </h3>
                </div>
                <div className="bg-emerald-100 text-emerald-900 text-xs font-medium px-3 py-1.5 rounded-md border border-emerald-300">
                  Estimasi: {currentPhaseData.durasi}
                </div>
              </div>

              {/* Sub-Focus */}
              <div className="mt-6">
                <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Fokus Utama Kegiatan:
                </h5>
                <p className="text-base font-semibold text-stone-800 mt-1">
                  {currentPhaseData.fokus}
                </p>
              </div>

              {/* Actionable points */}
              <div className="mt-6">
                <h5 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                  Aktivitas & Rincian Implementasi:
                </h5>
                <div className="space-y-3">
                  {currentPhaseData.poinKunci.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 bg-white p-3.5 rounded-lg border border-stone-200/80">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <p className="text-sm text-stone-700 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Output */}
              <div className="mt-8 pt-5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-stone-500 font-medium">Artefak / Output Resmi:</span>
                  <div className="text-sm font-bold text-emerald-900 mt-0.5">
                    {currentPhaseData.output}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    disabled={selectedPhase === 0}
                    onClick={() => setSelectedPhase(p => Math.max(0, p - 1))}
                    className="px-3 py-1.5 text-xs font-medium bg-white border border-stone-300 rounded-md disabled:opacity-40"
                  >
                    Sebelumnya
                  </button>
                  <button
                    disabled={selectedPhase === DOKUMENTASI_PERANCANGAN.tahapan.length - 1}
                    onClick={() => setSelectedPhase(p => Math.min(DOKUMENTASI_PERANCANGAN.tahapan.length - 1, p + 1))}
                    className="px-3 py-1.5 text-xs font-medium bg-emerald-800 text-white rounded-md disabled:opacity-40"
                  >
                    Tahap Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FLOWCHART ALUR PELAYANAN SURAT */}
        {activeTab === 'flowchart' && (
          <div className="space-y-8">
            <div className="bg-emerald-950 text-white p-6 sm:p-8 rounded-2xl">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  Alur Proses Bisnis Pelayanan Mandiri
                </span>
                <h3 className="text-2xl font-bold mt-1">
                  Diagram Alir Permohonan & Penerbitan Surat di Balai Desa
                </h3>
                <p className="text-sm text-emerald-200/90 mt-2 leading-relaxed">
                  Menghilangkan kerumitan birokrasi konvensional. Warga Desa Cibeunying tidak perlu lagi antre berjam-jam membawa fotokopi bertumpuk. Seluruh proses divalidasi secara sistematis dengan audit trail transparan.
                </p>
              </div>
            </div>

            {/* Step-by-Step Flowchart Visual Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Step 1 */}
              <div className="bg-white p-5 rounded-xl border border-stone-300 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs mb-3">
                    01
                  </div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Input Formulir Mandiri
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Warga mengakses portal SID via ponsel/komputer. Memilih jenis surat, menginput NIK 16 digit, KK, alamat dusun, dan keperluan.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-emerald-800">
                  Aktor: Warga Pemohon
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-5 rounded-xl border border-stone-300 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs mb-3">
                    02
                  </div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Generate Kode Lacak
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Sistem memvalidasi format data dan secara otomatis menerbitkan Kode Pelacakan Unik (e.g. <span className="font-mono font-bold text-stone-800">CB-2026-XXXX</span>).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-emerald-800">
                  Aktor: Mesin SID Cibeunying
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-5 rounded-xl border border-stone-300 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs mb-3">
                    03
                  </div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Verifikasi Operator
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Kasi Pelayanan memeriksa keabsahan data domisili warga di buku induk kependudukan dan status pengantar RT/RW.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-emerald-800">
                  Aktor: Kasi Pelayanan Balai Desa
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white p-5 rounded-xl border border-stone-300 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs mb-3">
                    04
                  </div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Penomoran & TTD Kades
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Sekretaris Desa meregister nomor surat kedinasan. Kepala Desa membubuhkan tanda tangan resmi dan QR Code autentikasi.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-emerald-800">
                  Aktor: Kepala Desa & Sekdes
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white p-5 rounded-xl border border-emerald-400 bg-emerald-50/40 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-emerald-800 text-amber-300 font-bold flex items-center justify-center text-xs mb-3">
                    05
                  </div>
                  <h4 className="text-sm font-bold text-emerald-950">
                    Surat Siap Diambil / Cetak
                  </h4>
                  <p className="text-xs text-stone-700 mt-2 leading-relaxed">
                    Status berubah menjadi "Selesai". Warga dapat langsung mencetak mandiri atau mengambil berkas fisik bermeterai di loket 1 Balai Desa.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] font-semibold text-emerald-800">
                  Output: Berkas Resmi Sah
                </div>
              </div>
            </div>

            {/* Standard Operating Procedure (SOP) Table */}
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 mb-3">
                Standar Waktu Penyelesaian Surat (SOP Pelayanan Balai Desa Cibeunying)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-stone-700">
                  <thead className="bg-stone-200/70 text-stone-800 uppercase font-semibold">
                    <tr>
                      <th className="py-2.5 px-3">Jenis Pelayanan</th>
                      <th className="py-2.5 px-3">Persyaratan Dasar</th>
                      <th className="py-2.5 px-3">Target Waktu</th>
                      <th className="py-2.5 px-3">Biaya Retribusi</th>
                      <th className="py-2.5 px-3">Penanggung Jawab</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-900">Surat Keterangan Usaha (SKU)</td>
                      <td className="py-2.5 px-3">KTP, KK, Pengantar RT/RW, Foto Tempat Usaha</td>
                      <td className="py-2.5 px-3 font-medium text-emerald-800">15 - 30 Menit</td>
                      <td className="py-2.5 px-3 font-semibold text-stone-900">Rp 0,- (Gratis)</td>
                      <td className="py-2.5 px-3">Kasi Pelayanan & Kades</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-900">Surat Keterangan Tidak Mampu (SKTM)</td>
                      <td className="py-2.5 px-3">KTP, KK, Surat Pengantar RT/RW, Verifikasi DTKS</td>
                      <td className="py-2.5 px-3 font-medium text-emerald-800">30 - 45 Menit</td>
                      <td className="py-2.5 px-3 font-semibold text-stone-900">Rp 0,- (Gratis)</td>
                      <td className="py-2.5 px-3">Kasi Kesejahteraan & Kades</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-900">Pengantar SKCK Polsek Majenang</td>
                      <td className="py-2.5 px-3">KTP, KK, Akta Kelahiran, Pas Foto 4x6</td>
                      <td className="py-2.5 px-3 font-medium text-emerald-800">15 Menit</td>
                      <td className="py-2.5 px-3 font-semibold text-stone-900">Rp 0,- (Gratis)</td>
                      <td className="py-2.5 px-3">Kasi Pemerintahan</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-stone-900">Surat Keterangan Domisili</td>
                      <td className="py-2.5 px-3">KTP, KK, Keterangan RT/RW setempat</td>
                      <td className="py-2.5 px-3 font-medium text-emerald-800">10 Menit</td>
                      <td className="py-2.5 px-3 font-semibold text-stone-900">Rp 0,- (Gratis)</td>
                      <td className="py-2.5 px-3">Kasi Pelayanan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DFD, ERD & ARSITEKTUR BASIS DATA */}
        {activeTab === 'arsitektur' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* DFD Level 0 Context Diagram */}
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-stone-900">
                    Data Flow Diagram (DFD) Level 0
                  </h4>
                  <span className="text-[11px] font-mono bg-stone-200 text-stone-700 px-2 py-0.5 rounded">
                    Context Diagram
                  </span>
                </div>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  Memodelkan interaksi entitas eksternal terhadap Sistem Informasi Balai Desa Cibeunying sebagai satu kesatuan proses pusat.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="text-emerald-800 font-bold">[Entitas Warga Desa]</span>
                    <p className="text-stone-600 font-sans text-xs mt-1">
                      ➔ Input: NIK, No. KK, Berkas Permohonan, Laporan Aspirasi
                      <br />
                      ⬅ Output: Kode Tracking, Notifikasi Status, Dokumen Surat Sah
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="text-emerald-800 font-bold">[Entitas Operator Loket / Kasi]</span>
                    <p className="text-stone-600 font-sans text-xs mt-1">
                      ➔ Input: Status Verifikasi Berkas, Catatan Revisi, Validasi Data
                      <br />
                      ⬅ Output: Daftar Antrean Permohonan Masuk, Rekapitulasi Berkas
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="text-emerald-800 font-bold">[Entitas Kepala Desa & Sekdes]</span>
                    <p className="text-stone-600 font-sans text-xs mt-1">
                      ➔ Input: Otorisasi Nomor Surat Resmi, Tanda Tangan & QR Approval
                      <br />
                      ⬅ Output: Laporan Statistik Pelayanan Bulanan, Rekap APBDes
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="text-emerald-800 font-bold">[Entitas BPD & Masyarakat]</span>
                    <p className="text-stone-600 font-sans text-xs mt-1">
                      ⬅ Output: Data Transparansi Realisasi APBDes & Indeks Kepuasan
                    </p>
                  </div>
                </div>
              </div>

              {/* Entity Relationship Diagram (ERD) Structure */}
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-bold text-stone-900">
                    Entity Relationship Diagram (ERD)
                  </h4>
                  <span className="text-[11px] font-mono bg-stone-200 text-stone-700 px-2 py-0.5 rounded">
                    Relational Schema
                  </span>
                </div>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  Struktur entitas basis data terelasi untuk memastikan integritas data pemohon, pelacakan dokumen, dan transparansi anggaran desa.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* Table Warga */}
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <div className="font-bold text-stone-900 border-b border-stone-200 pb-1 mb-1.5 flex items-center justify-between">
                      <span>Tabel: tb_warga</span>
                      <span className="text-[10px] text-stone-500 font-mono">1</span>
                    </div>
                    <ul className="space-y-1 font-mono text-[11px] text-stone-600">
                      <li><span className="text-amber-700 font-semibold">PK</span> nik (VARCHAR 16)</li>
                      <li>no_kk (VARCHAR 16)</li>
                      <li>nama_lengkap (VARCHAR 100)</li>
                      <li>tgl_lahir (DATE)</li>
                      <li>dusun_id (FK INT)</li>
                      <li>rt_rw (VARCHAR 10)</li>
                    </ul>
                  </div>

                  {/* Table Surat */}
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <div className="font-bold text-stone-900 border-b border-stone-200 pb-1 mb-1.5 flex items-center justify-between">
                      <span>Tabel: tb_permohonan</span>
                      <span className="text-[10px] text-stone-500 font-mono">N</span>
                    </div>
                    <ul className="space-y-1 font-mono text-[11px] text-stone-600">
                      <li><span className="text-amber-700 font-semibold">PK</span> tracking_code (VARCHAR 20)</li>
                      <li><span className="text-emerald-700 font-semibold">FK</span> nik (VARCHAR 16)</li>
                      <li>tipe_surat (VARCHAR 20)</li>
                      <li>keperluan (TEXT)</li>
                      <li>status (ENUM)</li>
                      <li>tgl_pengajuan (DATETIME)</li>
                      <li>nomor_surat_resmi (VARCHAR 50)</li>
                    </ul>
                  </div>

                  {/* Table Aparatur */}
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <div className="font-bold text-stone-900 border-b border-stone-200 pb-1 mb-1.5 flex items-center justify-between">
                      <span>Tabel: tb_aparatur</span>
                      <span className="text-[10px] text-stone-500 font-mono">1</span>
                    </div>
                    <ul className="space-y-1 font-mono text-[11px] text-stone-600">
                      <li><span className="text-amber-700 font-semibold">PK</span> id_petugas (INT)</li>
                      <li>nip (VARCHAR 25)</li>
                      <li>nama_petugas (VARCHAR 100)</li>
                      <li>jabatan (VARCHAR 50)</li>
                      <li>role_akses (ENUM)</li>
                    </ul>
                  </div>

                  {/* Table Pengaduan */}
                  <div className="bg-white p-3 rounded-lg border border-stone-200">
                    <div className="font-bold text-stone-900 border-b border-stone-200 pb-1 mb-1.5 flex items-center justify-between">
                      <span>Tabel: tb_aspirasi</span>
                      <span className="text-[10px] text-stone-500 font-mono">N</span>
                    </div>
                    <ul className="space-y-1 font-mono text-[11px] text-stone-600">
                      <li><span className="text-amber-700 font-semibold">PK</span> id_tiket (VARCHAR 15)</li>
                      <li>kategori (VARCHAR 30)</li>
                      <li>judul_laporan (VARCHAR 150)</li>
                      <li>isi_aduan (TEXT)</li>
                      <li>status_tindaklanjut (ENUM)</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Architecture Stack & Security Specification */}
            <div className="bg-stone-900 text-stone-200 p-6 sm:p-8 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-amber-300" />
                <span>Spesifikasi Arsitektur & Keamanan SID Cibeunying</span>
              </h4>
              <p className="text-xs text-stone-400 mb-6 max-w-2xl">
                Dirancang dengan standar industri teknologi modern agar tangguh menghadapi beban akses serentak saat musim pengajuan bantuan sosial atau pendaftaran sekolah.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-stone-800 p-4 rounded-xl border border-stone-700">
                  <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    <span>Lapisan Antarmuka (Presentation Tier)</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed mt-2">
                    Menggunakan React 19 + TypeScript dengan arsitektur SPA teroptimasi, Tailwind CSS untuk rendering kilat pada gawai seluler warga, dan validasi formulir sisi klien tanpa lag.
                  </p>
                </div>

                <div className="bg-stone-800 p-4 rounded-xl border border-stone-700">
                  <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Database className="w-4 h-4" />
                    <span>Lapisan Logika & Data (Application & Storage)</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed mt-2">
                    RESTful API dan penyimpanan persisten dengan audit logging. Mampu beroperasi secara offline-tolerant dengan local state synchronization untuk kondisi sinyal tidak stabil di dusun pinggiran.
                  </p>
                </div>

                <div className="bg-stone-800 p-4 rounded-xl border border-stone-700">
                  <div className="font-bold text-sky-400 mb-1 flex items-center gap-1.5">
                    <Lock className="w-4 h-4" />
                    <span>Proteksi Privasi & Keamanan Dokumen</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed mt-2">
                    Sensitivitas data NIK dilindungi dengan masking tampilan umum. Surat yang terbit dilengkapi SHA-256 Hash yang tertanam di QR Code agar verifikator instansi luar dapat memvalidasi keaslian berkas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SIMULASI UAT INTERAKTIF */}
        {activeTab === 'simulasi' && (
          <div className="space-y-6">
            <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
              <div className="max-w-2xl mb-6">
                <span className="text-xs uppercase tracking-wider text-emerald-800 font-semibold">
                  Interactive UAT Sandbox
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mt-1">
                  Uji Coba Langsung Alur Otomatisasi SID Cibeunying
                </h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Klik tombol simulasi di bawah untuk menjalankan pengujian otomasi alur kerja (User Acceptance Testing) dari warga mengisi form hingga surat resmi bertanda tangan digital siap di loket Balai Desa.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 mb-8">
                <button
                  disabled={simRunning}
                  onClick={startSimulation}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 shadow-sm"
                >
                  <Play className="w-4 h-4" />
                  <span>{simRunning ? 'Simulasi Sedang Berjalan...' : 'Jalankan Simulasi Alur Penerbitan'}</span>
                </button>

                <button
                  onClick={resetSimulation}
                  className="px-4 py-2.5 text-sm font-medium text-stone-700 hover:text-stone-900 bg-white border border-stone-300 rounded-lg transition-colors flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reset Uji Coba</span>
                </button>
              </div>

              {/* Simulation Stepper Visual */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-8">
                {[
                  { step: 1, title: 'Input Warga', desc: 'Isi data & berkas' },
                  { step: 2, title: 'Validasi SID', desc: 'Cek NIK & kode unik' },
                  { step: 3, title: 'Verifikasi Loket', desc: 'Staf cek berkas' },
                  { step: 4, title: 'TTD Kades', desc: 'Stempel & QR Code' },
                  { step: 5, title: 'Surat Sah', desc: 'Siap cetak / ambil' },
                ].map((s) => {
                  const isActive = simStep >= s.step;
                  const isCurrent = simStep === s.step;
                  return (
                    <div
                      key={s.step}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        isCurrent
                          ? 'bg-amber-50 border-amber-500 shadow-sm ring-2 ring-amber-400/40'
                          : isActive
                          ? 'bg-emerald-50 border-emerald-500'
                          : 'bg-white border-stone-200 opacity-60'
                      }`}
                    >
                      <div className={`w-7 h-7 mx-auto rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                        isCurrent
                          ? 'bg-amber-600 text-white'
                          : isActive
                          ? 'bg-emerald-700 text-white'
                          : 'bg-stone-200 text-stone-600'
                      }`}>
                        {isActive ? <Check className="w-4 h-4" /> : s.step}
                      </div>
                      <div className="text-xs font-bold text-stone-900">{s.title}</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">{s.desc}</div>
                    </div>
                  );
                })}
              </div>

              {/* Execution Console Terminal Log */}
              <div className="bg-stone-900 rounded-xl p-4 font-mono text-xs text-stone-300">
                <div className="flex items-center justify-between text-stone-400 pb-2 mb-3 border-b border-stone-800">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    Terminal Log Eksekusi UAT SID Cibeunying
                  </span>
                  <span>{simRunning ? 'Status: RUNNING' : simStep === 5 ? 'Status: COMPLETED' : 'Status: READY'}</span>
                </div>
                <div className="space-y-1.5 min-h-[120px]">
                  {simLog.length === 0 ? (
                    <span className="text-stone-500">
                      Tekan tombol "Jalankan Simulasi Alur Penerbitan" untuk melihat proses log eksekusi sistem secara langsung...
                    </span>
                  ) : (
                    simLog.map((log, index) => (
                      <div key={index} className="text-emerald-300 animate-fadeIn">
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
