import React, { useState } from 'react';
import { BarChart3, TrendingUp, DollarSign, PieChart, ShieldCheck } from 'lucide-react';
import { DATA_APBDES_2026 } from '../data/villageData';

export const TransparansiAPBDes: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'Semua' | 'Pendapatan' | 'Belanja' | 'Pembiayaan'>('Semua');

  // Compute totals
  const totalPendapatan = DATA_APBDES_2026
    .filter(i => i.kategori === 'Pendapatan')
    .reduce((acc, curr) => acc + curr.anggaran, 0);

  const realisasiPendapatan = DATA_APBDES_2026
    .filter(i => i.kategori === 'Pendapatan')
    .reduce((acc, curr) => acc + curr.realisasi, 0);

  const totalBelanja = DATA_APBDES_2026
    .filter(i => i.kategori === 'Belanja')
    .reduce((acc, curr) => acc + curr.anggaran, 0);

  const realisasiBelanja = DATA_APBDES_2026
    .filter(i => i.kategori === 'Belanja')
    .reduce((acc, curr) => acc + curr.realisasi, 0);

  const filteredItems = filterCategory === 'Semua' 
    ? DATA_APBDES_2026 
    : DATA_APBDES_2026.filter(item => item.kategori === filterCategory);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="apbdes" className="py-16 bg-white border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
            <BarChart3 className="w-4 h-4 text-emerald-700" />
            <span>Keterbukaan Informasi Publik (KIP)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            Transparansi APBDes Tahun Anggaran 2026
          </h2>
          <p className="mt-2 text-base text-stone-600">
            Publikasi resmi Anggaran Pendapatan dan Belanja Desa (APBDes) Cibeunying sebagai bentuk akuntabilitas pengelolaan Dana Desa, ADD, dan Pendapatan Asli Desa kepada seluruh warga.
          </p>
        </div>

        {/* 3 Executive Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Total Pendapatan Desa
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1">
              {formatRupiah(totalPendapatan)}
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-stone-600">
              <span>Realisasi: {formatRupiah(realisasiPendapatan)}</span>
              <span className="font-bold text-emerald-700">
                {((realisasiPendapatan / totalPendapatan) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mt-2">
              <div 
                className="bg-emerald-700 h-full rounded-full transition-all duration-500" 
                style={{ width: `${(realisasiPendapatan / totalPendapatan) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Total Belanja Pembangunan
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1">
              {formatRupiah(totalBelanja)}
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-stone-600">
              <span>Realisasi: {formatRupiah(realisasiBelanja)}</span>
              <span className="font-bold text-emerald-700">
                {((realisasiBelanja / totalBelanja) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mt-2">
              <div 
                className="bg-emerald-700 h-full rounded-full transition-all duration-500" 
                style={{ width: `${(realisasiBelanja / totalBelanja) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Penyertaan Modal BUMDes
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1">
              Rp 100.000.000
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-stone-600">
              <span>BUMDes Berkah Bersama Cibeunying</span>
              <span className="font-bold text-emerald-700">70.0%</span>
            </div>
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mt-2">
              <div className="bg-emerald-700 h-full rounded-full w-[70%]" />
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 mb-6">
          {(['Semua', 'Pendapatan', 'Belanja', 'Pembiayaan'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                filterCategory === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Financial Table */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-stone-700">
              <thead className="bg-stone-100 text-stone-800 uppercase font-semibold border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4">Kategori Pos</th>
                  <th className="py-3 px-4">Uraian Program / Kegiatan</th>
                  <th className="py-3 px-4 text-right">Pagu Anggaran</th>
                  <th className="py-3 px-4 text-right">Realisasi Berjalan</th>
                  <th className="py-3 px-4 text-right">Persentase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {filteredItems.map((item, index) => (
                  <tr key={index} className="hover:bg-stone-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-emerald-900 whitespace-nowrap">
                      {item.kategori}
                    </td>
                    <td className="py-3 px-4 text-stone-900 font-medium max-w-md">
                      {item.uraian}
                    </td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums text-stone-800">
                      {formatRupiah(item.anggaran)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums font-semibold text-emerald-950">
                      {formatRupiah(item.realisasi)}
                    </td>
                    <td className="py-3 px-4 text-right font-mono tabular-nums font-bold text-emerald-800">
                      {item.persentase.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Accountability statement */}
        <div className="mt-8 p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center gap-3 text-xs text-emerald-900">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>
            Laporan Realisasi APBDes diperbarui secara berkala melalui koordinasi Kaur Keuangan dan Badan Permusyawaratan Desa (BPD) Cibeunying sesuai Peraturan Menteri Dalam Negeri No. 20 Tahun 2018.
          </span>
        </div>

      </div>
    </section>
  );
};
