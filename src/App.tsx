/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AlurPerancanganSID } from './components/AlurPerancanganSID';
import { LayananSurat } from './components/LayananSurat';
import { ProfilDemografi } from './components/ProfilDemografi';
import { AparaturDesa } from './components/AparaturDesa';
import { TransparansiAPBDes } from './components/TransparansiAPBDes';
import { PotensiBerita } from './components/PotensiBerita';
import { AspirasiPengaduan } from './components/AspirasiPengaduan';
import { Footer } from './components/Footer';
import { INITIAL_PERMOHONAN } from './data/villageData';
import { PermohonanSurat } from './types/village';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [suratList, setSuratList] = useState<PermohonanSurat[]>(() => {
    try {
      const saved = localStorage.getItem('cibeunying_surat_list');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse localStorage surat data', e);
    }
    return INITIAL_PERMOHONAN;
  });

  // Save to localStorage when suratList changes
  useEffect(() => {
    try {
      localStorage.setItem('cibeunying_surat_list', JSON.stringify(suratList));
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  }, [suratList]);

  const handleAddSurat = (newSurat: PermohonanSurat) => {
    setSuratList(prev => [newSurat, ...prev]);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLetterForm = () => {
    scrollToSection('layanan-surat');
  };

  return (
    <div className="min-h-screen bg-stone-100/30 text-stone-900 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-950">
      {/* Top Bar with 3-Zone Contract */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenQuickLetter={handleOpenLetterForm}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Balai Desa Cibeunying Visual & Operational Ribbon */}
        <Hero
          onNavigate={scrollToSection}
          onOpenLetterForm={handleOpenLetterForm}
        />

        {/* Central Dedicated Feature: Alur Perancangan Sistem Informasi Desa (SID) */}
        <AlurPerancanganSID />

        {/* Layanan Surat Mandiri, Tracking & Cetak Dokumen Kedinasan */}
        <LayananSurat
          suratList={suratList}
          onAddSurat={handleAddSurat}
        />

        {/* Profil Wilayah & Data Demografi 7 Dusun Cibeunying */}
        <ProfilDemografi />

        {/* Struktur Pemerintahan & Aparatur Balai Desa Cibeunying */}
        <AparaturDesa />

        {/* Transparansi Realisasi APBDes Tahun Anggaran 2026 */}
        <TransparansiAPBDes />

        {/* Berita Pembangunan & Kabar Desa */}
        <PotensiBerita />

        {/* Wadul Warga: Kanal Pengaduan & Aspirasi */}
        <AspirasiPengaduan />
      </main>

      {/* Official Civic Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
