# Sistem Informasi Balai Desa Cibeunying Majenang

Portal Resmi Sistem Informasi Desa (SID) Kantor Balai Desa Cibeunying, Kecamatan Majenang, Kabupaten Cilacap, Jawa Tengah.
Kepala Desa: **Lili Warli** | Sekretaris Desa: **Dede Gunawan, S.**

---

## 🚀 Panduan Deployment ke Vercel

Proyek ini telah dikonfigurasi secara penuh dan siap di-*deploy* langsung ke **Vercel** dengan arsitektur Vite + React SPA.

### Metode 1: Import via Dashboard Vercel (Paling Mudah)
1. Unggah / push repositori ini ke **GitHub** atau **GitLab**.
2. Masuk ke [vercel.com](https://vercel.com) dan klik tombol **"Add New..."** ➔ **"Project"**.
3. Pilih repositori `sid-cibeunying-majenang`.
4. Vercel secara otomatis mendeteksi pengaturan:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Klik **"Deploy"**. Dalam hitungan detik website akan aktif secara global dengan domain gratis `*.vercel.app` serta SSL HTTPS otomatis.

### Metode 2: Deploy Menggunakan Vercel CLI
```bash
# 1. Install Vercel CLI secara global (jika belum ada)
npm i -g vercel

# 2. Login ke akun Vercel Anda
vercel login

# 3. Jalankan perintah deployment
vercel

# 4. Untuk deploy langsung ke produksi
vercel --prod
```

---

## ⚙️ Konfigurasi Vercel (`vercel.json`)
File `vercel.json` telah disediakan dengan konfigurasi:
- **Routing SPA Rewrites**: Menghindari error `404 Not Found` saat halaman di-*refresh* langsung oleh warga pada rute sub-halaman.
- **Cache-Control Headers**: Caching otomatis 1 tahun (`max-age=31536000, immutable`) untuk aset statis agar akses di gawai seluler warga sangat cepat dan hemat kuota data.

---

## 🛠️ Menghubungkan Custom Domain Desa (`cibeunying.desa.id`)
1. Buka project Anda di dashboard Vercel.
2. Masuk ke menu **Settings** ➔ **Domains**.
3. Masukkan domain desa Anda (misal `cibeunying.desa.id` atau `balai.cibeunying.id`).
4. Atur DNS CNAME / A Record sesuai petunjuk yang diberikan oleh Vercel.
5. Sertifikat SSL Let's Encrypt akan terbit secara otomatis.
