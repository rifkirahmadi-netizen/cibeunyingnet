import React from 'react';
import { Landmark, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { PROFIL_DESA } from '../data/villageData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Government Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold text-sm">
                <Landmark className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="text-sm font-bold tracking-tight text-white block">
                  Balai Desa Cibeunying
                </span>
                <span className="text-[11px] text-stone-400">
                  Kec. Majenang, Kab. Cilacap 53257
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Pusat penyelenggaraan pemerintahan, pembangunan infrastruktur, pelayanan administrasi kependudukan terpadu, dan pemberdayaan masyarakat Desa Cibeunying.
            </p>
          </div>

          {/* Col 2: Institutional Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Kontak & Alamat Kantor
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{PROFIL_DESA.alamatKantor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Telepon: {PROFIL_DESA.telepon}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{PROFIL_DESA.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Tautan Layanan Publik
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('alur-perancangan')} className="hover:text-white transition-colors">
                  Alur Perancangan SID Cibeunying
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('layanan-surat')} className="hover:text-white transition-colors">
                  Permohonan Surat Keterangan Usaha (SKU)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('layanan-surat')} className="hover:text-white transition-colors">
                  Surat Keterangan Tidak Mampu (SKTM)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('apbdes')} className="hover:text-white transition-colors">
                  Transparansi Dana Desa & APBDes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('aspirasi')} className="hover:text-white transition-colors">
                  Wadul Warga & Pengaduan Fasilitas
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              Portal Terkait Pemerintah
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>Pemerintah Kabupaten Cilacap</span>
                </span>
              </li>
              <li>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>Kantor Kecamatan Majenang</span>
                </span>
              </li>
              <li>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>Disdukcapil Cilacap (KTP & KK)</span>
                </span>
              </li>
              <li>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <span>Kementerian Desa PDTT RI</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Pemerintah Desa Cibeunying, Kecamatan Majenang, Kabupaten Cilacap. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Sistem Informasi Desa Terpadu</span>
            <span>·</span>
            <span>Provinsi Jawa Tengah</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
