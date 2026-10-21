import React, { useState } from 'react';
import { Compass, Users, MapPin, TreePine, Award, ChevronRight } from 'lucide-react';
import { PROFIL_DESA, DATA_DUSUN } from '../data/villageData';

export const ProfilDemografi: React.FC = () => {
  const [selectedDusun, setSelectedDusun] = useState<string>(DATA_DUSUN[0].nama);

  const activeDusunData = DATA_DUSUN.find(d => d.nama === selectedDusun) || DATA_DUSUN[0];

  return (
    <section id="profil-demografi" className="py-16 bg-white border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
            <Compass className="w-4 h-4 text-emerald-700" />
            <span>Karakteristik & Potensi Wilayah</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            Profil Wilayah & Data Demografi Desa Cibeunying
          </h2>
          <p className="mt-2 text-base text-stone-600">
            Desa Cibeunying merupakan salah satu sentra pertanian subur dan pusat perniagaan masyarakat di bagian barat Kabupaten Cilacap, terbentang luas di kaki perbukitan Majenang.
          </p>
        </div>

        {/* 2-Column Split: Landscape Image + Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-sm group">
              <img
                src="/src/assets/images/cibeunying_pertanian_majenang_1791949216415.jpg"
                alt="Persawahan dan Alam Majenang Cibeunying"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  Potensi Agribisnis & Alam
                </span>
                <h4 className="text-base font-bold mt-0.5">
                  Hamparan Sawah Irigasi & Saluran Tersier Cibeunying
                </h4>
                <p className="text-xs text-stone-300 mt-1">
                  Mendukung ketahanan pangan daerah dengan produksi padi unggul dan sayuran dataran menengah Majenang.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1">
                Visi Pembangunan Desa
              </span>
              <blockquote className="text-base sm:text-lg font-serif italic text-stone-800 bg-stone-50 p-4 rounded-xl border border-stone-200">
                "{PROFIL_DESA.visi}"
              </blockquote>
            </div>

            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-2">
                Panca Misi Pemerintah Desa
              </span>
              <div className="space-y-2">
                {PROFIL_DESA.misi.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Geography Fact Strip */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 block text-[11px]">Luas Wilayah</span>
                <span className="font-bold text-stone-900">{PROFIL_DESA.luasWilayah}</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 block text-[11px]">Elevasi</span>
                <span className="font-bold text-stone-900">{PROFIL_DESA.ketinggian}</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 block text-[11px]">Kode Pos</span>
                <span className="font-bold font-mono text-stone-900">{PROFIL_DESA.kodePos}</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 block text-[11px]">Rukun Tetangga</span>
                <span className="font-bold text-stone-900">64 RT / 16 RW</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Dusun Breakdown Interactive Module */}
        <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Pembagian Wilayah Administratif
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-0.5">
                Rincian 8 Dusun di Lingkungan Balai Desa Cibeunying
              </h3>
            </div>
            <span className="text-xs text-stone-500">
              Pilih dusun untuk melihat data kependudukan & potensi komoditas
            </span>
          </div>

          {/* Dusun Selector Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {DATA_DUSUN.map((d) => (
              <button
                key={d.nama}
                onClick={() => setSelectedDusun(d.nama)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedDusun === d.nama
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {d.nama}
              </button>
            ))}
          </div>

          {/* Active Dusun Highlight Card */}
          <div className="bg-white p-6 rounded-xl border border-stone-200 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <span className="text-xs text-stone-400 block">Nama Wilayah Dusun</span>
              <div className="text-lg font-bold text-stone-900 mt-1">{activeDusunData.nama}</div>
              <div className="text-xs text-stone-600 mt-1">Kepala Dusun: <span className="font-semibold text-stone-900">{activeDusunData.kadus}</span></div>
            </div>

            <div>
              <span className="text-xs text-stone-400 block">Struktur RT / RW</span>
              <div className="text-lg font-bold text-stone-900 tabular-nums mt-1">
                {activeDusunData.jumlahRT} RT · {activeDusunData.jumlahRW} RW
              </div>
              <div className="text-xs text-stone-500 mt-1">Lingkup pengawasan kadus</div>
            </div>

            <div>
              <span className="text-xs text-stone-400 block">Populasi Warga</span>
              <div className="text-lg font-bold text-stone-900 tabular-nums mt-1">
                {activeDusunData.jumlahPenduduk.toLocaleString('id-ID')} <span className="text-xs font-normal text-stone-500">Jiwa</span>
              </div>
              <div className="text-xs text-stone-500 mt-1">({activeDusunData.jumlahKK} Kepala Keluarga)</div>
            </div>

            <div>
              <span className="text-xs text-stone-400 block">Potensi & Komoditas Unggulan</span>
              <div className="text-sm font-semibold text-emerald-900 mt-1">
                {activeDusunData.komoditasUtama}
              </div>
              <div className="text-xs text-stone-500 mt-1">Mata pencaharian warga</div>
            </div>
          </div>

          {/* Batas Desa Table */}
          <div className="mt-8 pt-6 border-t border-stone-200">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-3">
              Batas Wilayah Geografis Desa Cibeunying:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-400 block font-medium">Utara</span>
                <span className="font-semibold text-stone-800">{PROFIL_DESA.batasWilayah.utara}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-400 block font-medium">Selatan</span>
                <span className="font-semibold text-stone-800">{PROFIL_DESA.batasWilayah.selatan}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-400 block font-medium">Timur</span>
                <span className="font-semibold text-stone-800">{PROFIL_DESA.batasWilayah.timur}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-400 block font-medium">Barat</span>
                <span className="font-semibold text-stone-800">{PROFIL_DESA.batasWilayah.barat}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
