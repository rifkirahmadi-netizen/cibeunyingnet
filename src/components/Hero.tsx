import React from 'react';
import { Clock, MapPin, Phone, ShieldCheck, ArrowRight, FileCheck, Layers, Sparkles } from 'lucide-react';
import { PROFIL_DESA } from '../data/villageData';
import heroImage from '../assets/images/hero_balaidesa_cibeunying_1791949217224.jpg';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenLetterForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenLetterForm }) => {
  return (
    <section id="beranda" className="relative bg-stone-100/60 border-b border-stone-200 overflow-hidden">
      {/* Operational Utility Ribbon */}
      <div className="bg-emerald-900 text-stone-100 text-xs py-2 px-4 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span className="font-medium text-emerald-100">Jam Layanan:</span>
            <span>{PROFIL_DESA.jamPelayanan}</span>
          </div>
          <div className="flex items-center gap-4 text-emerald-200">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>Kec. Majenang, Kab. Cilacap, Jawa Tengah</span>
            </span>
            <span className="hidden md:inline text-emerald-400">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-200">
              <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>{PROFIL_DESA.telepon}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Institutional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-emerald-800 uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Pemerintah Desa Cibeunying · Kepala Desa: Lili Warli</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Sistem Informasi & Pelayanan Administrasi Terpadu Balai Desa Cibeunying
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              Selamat datang di portal resmi pelayanan digital Kantor Balai Desa Cibeunying, Kecamatan Majenang, Kabupaten Cilacap di bawah kepemimpinan <strong>Kepala Desa Lili Warli</strong>. Melayani 10.273 jiwa warga di 8 dusun dengan keterbukaan informasi publik, layanan permohonan surat mandiri cepat, transparansi APBDes, serta alur perancangan sistem informasi desa.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenLetterForm}
                className="px-5 py-3 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-sm flex items-center gap-2"
              >
                <FileCheck className="w-4 h-4" />
                <span>Pengajuan Surat Mandiri</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={() => onNavigate('alur-perancangan')}
                className="px-5 py-3 text-sm font-semibold text-emerald-900 bg-emerald-100/90 hover:bg-emerald-200/80 rounded-lg transition-colors flex items-center gap-2 border border-emerald-300/80"
              >
                <Layers className="w-4 h-4 text-emerald-800" />
                <span>Alur Perancangan Sistem (SDLC)</span>
              </button>

              <button
                onClick={() => onNavigate('alur-perancangan')}
                className="px-4 py-3 text-sm font-semibold text-stone-900 bg-stone-200/80 hover:bg-stone-300/80 rounded-lg transition-colors flex items-center gap-2 border border-stone-300"
              >
                <span className="text-xs font-bold font-mono">▲ Vercel Ready</span>
              </button>
            </div>

            {/* Micro Civic Notice */}
            <div className="pt-2 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-stone-500">
              <span className="font-semibold text-stone-700">Pelayanan Bebas Pungli:</span>
              <span>Seluruh penerbitan surat pengantar & keterangan di Balai Desa Cibeunying tidak dipungut biaya (Gratis).</span>
              <span className="hidden sm:inline text-stone-300">·</span>
              <span className="text-emerald-700 font-medium">Vercel SPA Configured</span>
            </div>
          </div>

          {/* Right Column: High Fidelity Balai Desa Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md bg-stone-900 group">
              <img
                src={heroImage}
                alt="Kantor Balai Desa Cibeunying Majenang"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/30 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                  Kantor Balai Desa Cibeunying
                </span>
                <h3 className="text-lg font-bold mt-1 text-white">
                  Pendopo & Sentra Pelayanan Warga
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  Jl. Raya Cibeunying No. 14, Majenang, Cilacap 53257 · Buka setiap hari kerja.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Demographic & Civic Strip (Tabular Figures) */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Jumlah Penduduk</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1">
              {PROFIL_DESA.statistik.totalPenduduk.toLocaleString('id-ID')}
              <span className="text-xs font-medium text-stone-500 ml-1">Jiwa</span>
            </div>
            <div className="text-[11px] text-stone-500 mt-1">
              {PROFIL_DESA.statistik.lakiLaki.toLocaleString('id-ID')} Laki-laki · {PROFIL_DESA.statistik.perempuan.toLocaleString('id-ID')} Perempuan
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Kepala Keluarga</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1">
              {PROFIL_DESA.statistik.kepalaKeluarga.toLocaleString('id-ID')}
              <span className="text-xs font-medium text-stone-500 ml-1">KK</span>
            </div>
            <div className="text-[11px] text-stone-500 mt-1">
              Tersebar di 16 RW dan 64 RT
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Wilayah Dusun</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1">
              {PROFIL_DESA.statistik.jumlahDusun}
              <span className="text-xs font-medium text-stone-500 ml-1">Dusun</span>
            </div>
            <div className="text-[11px] text-stone-500 mt-1">
              Cigaru, Tarukahan, Babakan, Cibuyut, dll
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Lahan Pertanian</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tabular-nums mt-1">
              {PROFIL_DESA.statistik.luasPertanian}
            </div>
            <div className="text-[11px] text-stone-500 mt-1">
              Lumbung padi & palawija Majenang
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
