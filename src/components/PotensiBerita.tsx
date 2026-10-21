import React, { useState } from 'react';
import { Newspaper, ChevronRight, Tag, Calendar, User, X } from 'lucide-react';
import { BERITA_TERKINI } from '../data/villageData';
import { BeritaDesa } from '../types/village';

export const PotensiBerita: React.FC = () => {
  const [selectedBerita, setSelectedBerita] = useState<BeritaDesa | null>(null);

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
            <Newspaper className="w-4 h-4 text-emerald-700" />
            <span>Kabar Desa & Pembangunan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            Berita & Pengumuman Balai Desa Cibeunying
          </h2>
          <p className="mt-2 text-base text-stone-600">
            Ikuti informasi terkini mengenai kegiatan musyawarah desa, penyaluran bantuan sosial, pertanian, dan agenda kemasyarakatan di wilayah Desa Cibeunying, Kecamatan Majenang.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BERITA_TERKINI.map((berita) => (
            <div
              key={berita.id}
              className="bg-stone-50/70 p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between hover:border-emerald-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-emerald-800">{berita.kategori}</span>
                  <span>·</span>
                  <span>{berita.tanggal}</span>
                </div>

                <h3 className="text-base font-bold text-stone-900 leading-snug line-clamp-2">
                  {berita.judul}
                </h3>

                <p className="text-xs text-stone-600 mt-3 leading-relaxed line-clamp-3">
                  {berita.ringkasan}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-[11px] text-stone-500">
                  Oleh: {berita.penulis}
                </span>
                <button
                  onClick={() => setSelectedBerita(berita)}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
                >
                  <span>Baca Rinci</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Berita */}
        {selectedBerita && (
          <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-stone-200 shadow-xl max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {selectedBerita.kategori} · Balai Desa Cibeunying
                </span>
                <button
                  onClick={() => setSelectedBerita(null)}
                  className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-4 leading-tight">
                {selectedBerita.judul}
              </h2>

              <div className="flex items-center gap-3 text-xs text-stone-500 mt-2 mb-6">
                <span>Tanggal: {selectedBerita.tanggal}</span>
                <span>·</span>
                <span>Penulis: {selectedBerita.penulis}</span>
              </div>

              <div className="text-sm text-stone-700 leading-relaxed space-y-4">
                <p>{selectedBerita.kontenLengkap}</p>
                <p>
                  Pemerintah Desa Cibeunying mengajak seluruh elemen masyarakat di 7 dusun untuk senantiasa mendukung kelancaran program pembangunan dan menjaga kerukunan bersama demi kemajuan wilayah Majenang.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedBerita(null)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg transition-colors"
                >
                  Tutup Informasi
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
