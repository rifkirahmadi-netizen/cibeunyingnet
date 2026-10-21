import React from 'react';
import { Landmark, FileText, ChevronRight, Menu, X, Compass, Users, BarChart3, MessageSquare, Layers } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenQuickLetter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection, onOpenQuickLetter }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Landmark },
    { id: 'alur-perancangan', label: 'Alur Perancangan SID', icon: Layers, highlight: true },
    { id: 'layanan-surat', label: 'Layanan Surat', icon: FileText },
    { id: 'profil-demografi', label: 'Profil Desa', icon: Compass },
    { id: 'aparatur', label: 'Aparatur Desa', icon: Users },
    { id: 'apbdes', label: 'Transparansi APBDes', icon: BarChart3 },
    { id: 'aspirasi', label: 'Wadul Warga', icon: MessageSquare },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single Brand Wordmark */}
          <div 
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold text-lg shadow-sm border border-emerald-900/40">
              <Landmark className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-stone-900 whitespace-nowrap leading-snug">
                Balai Desa Cibeunying
              </span>
              <span className="text-[11px] font-medium text-stone-500 uppercase tracking-wider whitespace-nowrap">
                Kecamatan Majenang · Cilacap
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links (Clean Single-Line Typography) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  activeSection === item.id
                    ? 'text-emerald-900 font-semibold border-emerald-800'
                    : item.highlight
                    ? 'text-emerald-700 hover:text-emerald-900 border-transparent hover:border-emerald-700 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 border-transparent hover:border-stone-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuickLetter}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Buat Surat Online</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-70" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-left ${
                  activeSection === item.id
                    ? 'bg-emerald-100/80 text-emerald-900 font-semibold'
                    : 'text-stone-700 hover:bg-stone-200/60'
                }`}
              >
                <Icon className="w-4 h-4 text-emerald-800" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-stone-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickLetter();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Pengajuan Surat Mandiri</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
