import React from 'react';
import { Users, Award, Shield, CheckCircle2, Clock } from 'lucide-react';
import { DATA_APARATUR, PROFIL_DESA } from '../data/villageData';

export const AparaturDesa: React.FC = () => {
  return (
    <section id="aparatur" className="py-16 bg-stone-100/60 border-b border-stone-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
            <Users className="w-4 h-4 text-emerald-700" />
            <span>Tata Kelola Pemerintahan Desa</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight">
            Struktur Organisasi & Aparatur Balai Desa Cibeunying
          </h2>
          <p className="mt-2 text-base text-stone-600">
            Aparatur Pemerintah Desa Cibeunying berdedikasi melayani seluruh lapisan masyarakat secara profesional, berintegritas, ramah, dan bebas dari segala bentuk pungutan liar.
          </p>
        </div>

        {/* Civic Showcase Split: Loket Terpadu Image + Service Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200">
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-xs">
              <img
                src="/src/assets/images/cibeunying_pelayanan_warga_1791949218190.jpg"
                alt="Loket Pelayanan Terpadu Balai Desa Cibeunying"
                className="w-full h-64 sm:h-72 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-[11px] text-stone-500 italic mt-2 text-center">
              Suasana Loket Pelayanan Terpadu Kantor Balai Desa Cibeunying, Kec. Majenang
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-100/80 px-2.5 py-1 rounded">
              <Shield className="w-3.5 h-3.5 text-emerald-800" />
              <span>Maklumat Pelayanan Balai Desa Cibeunying</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              Pelayanan Cepat, Ramah, Transparan & Akuntabel
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              "Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan publik sesuai standar operasional yang telah ditetapkan, memberikan kemudahan pengurusan surat pengantar, dan siap menerima sanksi apabila pelayanan tidak sesuai janji."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Penerbitan surat pengantar maksimal 30 menit</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Petugas piket loket siaga setiap jam kerja</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Ruang tunggu pendopo nyaman & ber-AC</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Integrasi data kependudukan digital</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Village Officials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DATA_APARATUR.map((pejabat) => (
            <div
              key={pejabat.id}
              className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between hover:border-emerald-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 text-emerald-900 font-bold flex items-center justify-center text-sm">
                    {pejabat.nama.split(' ').slice(0, 2).map(n => n[0]).join('')}
                  </div>
                  <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                    {pejabat.status}
                  </span>
                </div>

                <h4 className="text-base font-bold text-stone-900 leading-snug">
                  {pejabat.nama}
                </h4>
                <div className="text-xs font-semibold text-emerald-800 mt-0.5">
                  {pejabat.jabatan}
                </div>
                {pejabat.nip && (
                  <div className="text-[10px] font-mono text-stone-400 mt-0.5">
                    NIP. {pejabat.nip}
                  </div>
                )}

                <div className="text-[11px] text-stone-500 mt-2">
                  Pendidikan: <span className="font-medium text-stone-700">{pejabat.pendidikan}</span>
                </div>

                <p className="text-xs text-stone-600 mt-3 pt-3 border-t border-stone-100 leading-relaxed">
                  {pejabat.tupoksi}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-700" />
                  <span>Piket Pelayanan</span>
                </span>
                <span className="font-semibold text-stone-800">Aktif</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
