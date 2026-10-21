import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, AlertTriangle, Clock, ShieldCheck } from 'lucide-react';
import { Pengaduan } from '../types/village';
import { INITIAL_PENGADUAN } from '../data/villageData';

export const AspirasiPengaduan: React.FC = () => {
  const [laporanList, setLaporanList] = useState<Pengaduan[]>(INITIAL_PENGADUAN);
  const [nama, setNama] = useState('');
  const [dusun, setDusun] = useState('Dusun Cigaru');
  const [kategori, setKategori] = useState<Pengaduan['kategori']>('Infrastruktur Jalan');
  const [judul, setJudul] = useState('');
  const [isiLaporan, setIsiLaporan] = useState('');
  const [successTicket, setSuccessTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !judul.trim() || !isiLaporan.trim()) {
      alert('Mohon lengkapi nama, judul, dan isi laporan aspirasi Anda.');
      return;
    }

    const kodeTiket = `WADUL-${Math.floor(100 + Math.random() * 900)}`;
    const newAduan: Pengaduan = {
      id: `lapor-${Date.now()}`,
      kodeTiket,
      nama,
      dusun,
      kategori,
      judul,
      isiLaporan,
      tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      status: 'Diterima',
      tanggapan: 'Laporan telah dicatat oleh operator pengaduan Balai Desa dan diteruskan kepada Kepala Urusan terkait.'
    };

    setLaporanList([newAduan, ...laporanList]);
    setSuccessTicket(kodeTiket);
    setNama('');
    setJudul('');
    setIsiLaporan('');
  };

  return (
    <section id="aspirasi" className="py-16 bg-stone-100/50 border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>Kanal Partisipasi & Aspirasi Warga</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            Wadul Desa: Layanan Pengaduan & Aspirasi Warga Cibeunying
          </h2>
          <p className="mt-2 text-base text-stone-600">
            Sampaikan masukan, aduan jalan rusak, kendala air bersih, atau usulan pembangunan langsung kepada perangkat Balai Desa Cibeunying. Setiap laporan ditindaklanjuti secara terbuka.
          </p>
        </div>

        {/* 2-Column Split: Form + List of reports */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-1">
              Kirimkan Laporan / Aspirasi
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Identitas pelapor dijamin kerahasiaannya oleh Pemerintah Desa Cibeunying.
            </p>

            {successTicket && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-950">
                <div className="font-bold flex items-center gap-1.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>Aspirasi Berhasil Terkirim!</span>
                </div>
                <p className="mt-1">
                  Nomor Tiket Anda: <span className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-emerald-300">{successTicket}</span>. Terima kasih atas partisipasi Anda dalam membangun Desa Cibeunying.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                  Nama Warga Pelapor <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama lengkap atau inisial"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Wilayah Dusun
                  </label>
                  <select
                    value={dusun}
                    onChange={(e) => setDusun(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs"
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
                    Kategori Laporan
                  </label>
                  <select
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value as any)}
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs"
                  >
                    <option value="Infrastruktur Jalan">Infrastruktur Jalan & Jembatan</option>
                    <option value="Bansos">Bantuan Sosial & BLT</option>
                    <option value="Pelayanan Balai Desa">Pelayanan Balai Desa</option>
                    <option value="Kesehatan & Lingkungan">Kesehatan & Saluran Air</option>
                    <option value="Keamanan & Ketertiban">Keamanan Lingkungan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                  Judul Aspirasi / Aduan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Aspal jalan berlubang di dekat RT 02 Dusun Cigaru"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                  Isi Laporan Rinci <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan lokasi tepatnya, kronologi, serta harapan Anda kepada Pemerintah Desa..."
                  value={isiLaporan}
                  onChange={(e) => setIsiLaporan(e.target.value)}
                  className="w-full px-3.5 py-2 bg-stone-50 border border-stone-300 rounded-lg text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirimkan Aspirasi ke Balai Desa</span>
              </button>
            </form>
          </div>

          {/* List of Recent Reports */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200">
              <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                Status Aspirasi Warga Terkini ({laporanList.length})
              </span>
              <span className="text-xs text-stone-500">
                Diperbarui langsung oleh staf operator
              </span>
            </div>

            {laporanList.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.kodeTiket}
                    </span>
                    <span className="text-xs text-stone-500">
                      {item.nama} · {item.dusun}
                    </span>
                  </div>
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded ${
                    item.status === 'Selesai'
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : item.status === 'Ditindaklanjuti'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-stone-100 text-stone-700 border border-stone-200'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-stone-900">
                  {item.judul}
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.isiLaporan}
                </p>

                {item.tanggapan && (
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs">
                    <span className="font-bold text-stone-800">Tanggapan Balai Desa:</span>
                    <p className="text-stone-600 mt-0.5 italic">
                      "{item.tanggapan}"
                    </p>
                  </div>
                )}

                <div className="text-[11px] text-stone-400">
                  Laporan masuk pada {item.tanggal} · Kategori: {item.kategori}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
