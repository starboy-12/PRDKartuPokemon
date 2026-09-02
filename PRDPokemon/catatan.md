# 📄 Product Requirements Document (PRD)

**Nama Produk:** Pokémon Card Vault (pokemon_card_db)  
**Jenis Dokumen:** Product Requirements Document (PRD)  
**Versi Dokumen:** 1.0  
**Tanggal:** 2 September 2026  
**Disusun oleh:** SatrioS Al n (SatrioS Studio)  
**Status:** Draft — Final Review

---

## 📊 Ringkasan Utama

| No  | Bagian        | Deskripsi                                                                                                                                                                |
| --- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Koleksi       | Sistem mencatat koleksi kartu Pokémon, mulai dari nama kartu, set, rarity, harga pasar, hingga keadaan kartu.                                                            |
| 2   | Penjualan     | Sistem mencatat transaksi jual-beli kartu Pokémon (nama kartu, set, rarity, harga, jumlah, tanggal).                                                                     |
| 3   | Produk        | Database kartu Pokémon (nama kartu, set, rarity, harga modal, harga jual, stok, kondisi). CRUD produk tersedia.                                                          |
| 4   | Keuntungan    | Perhitungan laba = harga jual - harga modal. Laporan keuntungan per transaksi dan per periode.                                                                           |
| 5   | Inventaris    | Manajemen stok kartu Pokémon per set dan rarity. Update otomatis setelah transaksi. Notifikasi stok rendah.                                                              |
| 6   | User Persona  | **Andra (kolektor baru):** butuh sistem sederhana untuk memantau koleksi dan transaksi.<br>**Budi (penjual kartu senior):** butuh inventaris detail untuk ratusan kartu. |
| 7   | Scope Project | **In-Scope:** Auth, CRUD kartu Pokémon, transaksi, upload bukti, dashboard koleksi.<br>**Out-of-Scope:** integrasi marketplace besar, lelang online, aplikasi native.    |

---

## ⚙️ Functional Requirements

| ID   | Requirement                                                                                             |
| ---- | ------------------------------------------------------------------------------------------------------- |
| FR01 | User dapat membuat akun dan login dengan email/password.                                                |
| FR02 | User dapat menambahkan data kartu Pokémon (nama kartu, set, rarity, tipe, harga modal, harga jual).     |
| FR03 | Sistem mencatat transaksi jual-beli kartu Pokémon dengan field: tanggal, kartu, jumlah, harga, kondisi. |
| FR04 | User dapat mengunggah bukti transaksi berupa foto nota/struk kartu Pokémon.                             |
| FR05 | Sistem menghitung laba otomatis per transaksi kartu Pokémon.                                            |
| FR06 | Sistem menampilkan laporan penjualan per periode berdasarkan kartu Pokémon yang terjual.                |
| FR07 | Sistem menampilkan stok kartu Pokémon secara real-time.                                                 |
| FR08 | User dapat mengedit dan menghapus data kartu Pokémon serta transaksi.                                   |
| FR09 | Data antar akun user dipisahkan secara aman agar koleksi dan transaksi tidak tercampur.                 |
| FR10 | User dapat menambahkan detail koleksi seperti kondisi kartu, nomor seri, dan grade (jika ada).          |

---

## 🔒 Non-Functional Requirements

| Kategori        | Requirement                                                      |
| --------------- | ---------------------------------------------------------------- |
| Performance     | Load halaman utama < 2 detik pada koneksi 4G.                    |
| Security        | Password di-hash, autentikasi Better Auth, HTTPS wajib.          |
| Scalability     | PostgreSQL mendukung hingga 10.000 user aktif.                   |
| Usability       | UI mobile-first dan mudah digunakan untuk kolektor pemula.       |
| Reliability     | Uptime target 99%.                                               |
| Maintainability | Struktur Next.js App Router konsisten untuk pengembangan lanjut. |
| Data Retention  | Data transaksi dan koleksi disimpan minimal 5 tahun.             |

---

## 🎨 UI/UX

| Aspek        | Deskripsi                                                                  |
| ------------ | -------------------------------------------------------------------------- |
| Desain       | Mobile-first dengan gaya visual yang terasa seperti album koleksi Pokémon. |
| Warna        | Biru, hitam, dan kuning terang untuk kesan kartu Pokémon yang hidup.       |
| Dashboard    | Menampilkan kartu favorit, stok tersedia, total investasi, dan laba.       |
| Form Input   | Singkat, bersih, dan didukung default value yang cerdas.                   |
| Upload Bukti | Komponen upload gambar bukti transaksi dengan preview langsung.            |
| Koleksi      | Terdapat tampilan grid kartu, filter berdasarkan set, rarity, dan tipe.    |

---

## 🛠️ Technical Requirements

| Layer        | Teknologi                                                     |
| ------------ | ------------------------------------------------------------- |
| Frontend     | Next.js (App Router), TypeScript, Tailwind CSS                |
| Backend      | Next.js API Routes / Server Actions                           |
| Database     | PostgreSQL                                                    |
| ORM          | Prisma                                                        |
| Autentikasi  | Better Auth                                                   |
| File Storage | Vercel Blob                                                   |
| Hosting      | Vercel                                                        |
| Notifikasi   | Email (Resend/SMTP), in-app notification (iterasi berikutnya) |
| Cron Job     | Vercel Cron untuk laporan harian kartu Pokémon                |

---

## 📜 Business Rules

| No  | Rule                                                                             |
| --- | -------------------------------------------------------------------------------- |
| 1   | Satu user dapat memiliki lebih dari satu kartu Pokémon dalam koleksinya.         |
| 2   | Data transaksi kartu Pokémon tidak dapat dihapus permanen (soft delete).         |
| 3   | Notifikasi stok rendah dikirim maksimal 1 kali per hari.                         |
| 4   | Foto bukti transaksi kartu maksimal 5MB dengan format JPG/PNG.                   |
| 5   | Harga jual tidak boleh lebih rendah dari harga modal tanpa konfirmasi user.      |
| 6   | Setiap kartu Pokémon memiliki minimal satu atribut: nama, set, rarity, dan stok. |

---

## ✅ Acceptance Criteria

| Fitur               | Kriteria                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| Registrasi User     | User dapat membuat akun baru dan login menggunakan email/password.                                   |
| Input Kartu Pokémon | User dapat menambahkan data kartu Pokémon dengan field wajib seperti nama, set, rarity, harga, stok. |
| Transaksi Penjualan | User dapat menambahkan transaksi jual-beli kartu baru. Sistem menolak jika field wajib kosong.       |
| Laporan Hasil       | Sistem menampilkan laporan otomatis setelah transaksi baru ditambahkan.                              |
| Stok                | Stok kartu otomatis berkurang setelah transaksi. Notifikasi muncul jika stok rendah.                 |
| Koleksi             | User dapat melihat daftar koleksi kartu Pokémon dan melakukan edit serta delete.                     |

---

## ⚠️ Risiko & Mitigasi

| Risiko                                | Dampak                        | Mitigasi                                                     |
| ------------------------------------- | ----------------------------- | ------------------------------------------------------------ |
| User tidak konsisten input data kartu | Laporan dan stok tidak akurat | Tambahkan validasi dan reminder input.                       |
| Kegagalan pengiriman email notifikasi | User tidak menerima info stok | Tambahkan in-app notification.                               |
| Biaya storage foto bukti transaksi    | Cost operasional naik         | Batasi ukuran foto dan kompresi otomatis.                    |
| Kebocoran data antar user             | Masalah privasi               | Terapkan row-level authorization ketat.                      |
| Fluktuasi harga kartu pasar           | Laporan laba tidak akurat     | Sediakan pilihan harga modal/jual manual dan estimasi pasar. |

---

## 📈 Success Metrics

| Metrik                          | Target (3 bulan pasca-launch) |
| ------------------------------- | ----------------------------- |
| Jumlah user terdaftar           | 200 user                      |
| Retensi bulanan                 | ≥ 40%                         |
| Rata-rata kartu per user        | ≥ 1.3                         |
| Tingkat keberhasilan notifikasi | ≥ 95%                         |
| Rating kepuasan pengguna        | ≥ 4.0 / 5.0                   |
| Total transaksi kartu tercatat  | ≥ 500 transaksi               |

---

## 🗓️ Timeline

| Fase                                   | Durasi     | Output                                     |
| -------------------------------------- | ---------- | ------------------------------------------ |
| Perencanaan & Spesifikasi              | Minggu 1   | PRD dan desain database final              |
| Desain UI/UX                           | Minggu 2   | Wireframe dan mockup Figma koleksi kartu   |
| Development Fase 1 (Auth & Koleksi)    | Minggu 3–4 | Fitur autentikasi dan CRUD kartu Pokémon   |
| Development Fase 2 (Transaksi & Bukti) | Minggu 5–6 | Fitur transaksi jual-beli dan upload bukti |
| Development Fase 3 (Laba & Dashboard)  | Minggu 7–8 | Fitur laporan laba dan dashboard koleksi   |
| QA & Testing                           | Minggu 9   | Bug fixing dan uji acceptance criteria     |
| Soft Launch (Beta)                     | Minggu 10  | Rilis terbatas ke komunitas kolektor kecil |

---

## 🚀 Future Development

| Fitur                       | Deskripsi                                                |
| --------------------------- | -------------------------------------------------------- |
| Aplikasi mobile native      | Android/iOS untuk akses lebih luas.                      |
| Family Sharing / Multi-user | Berbagi akses antar anggota keluarga atau tim koleksi.   |
| Integrasi Marketplace       | Jual-beli langsung dari aplikasi ke komunitas.           |
| Rekomendasi harga kartu     | Berdasarkan rarity, set, dan tren pasar.                 |
| Analitik biaya              | Grafik pengeluaran, investasi, dan laba per bulan.       |
| Mode multi-bahasa           | Ekspansi ke luar Indonesia dan komunitas global.         |
| Scan kartu / OCR            | Teknologi untuk membaca kartu dari foto secara otomatis. |

---

## 🗄️ Struktur Database (pokemon_card_db)

| Tabel            | Kolom                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| users            | id (PK), nama, email, password_hash, created_at                                                  |
| cards            | id (PK), nama_kartu, set_kartu, rarity, tipe, harga_modal, harga_jual, stok, kondisi, created_at |
| transactions     | id (PK), user_id (FK), card_id (FK), jumlah, harga_jual, tanggal, bukti_transaksi, kondisi       |
| inventory        | id (PK), card_id (FK), stok_tersedia, updated_at                                                 |
| reports          | id (PK), user_id (FK), periode, total_penjualan, total_laba                                      |
| card_collections | id (PK), user_id (FK), card_id (FK), jumlah_koleksi, status_koleksi, created_at                  |

---

## 🧩 Kesimpulan

Produk ini berfokus pada kebutuhan kolektor dan penjual kartu Pokémon dalam mengelola katalog, transaksi, stok, dan laporan keuntungan secara lebih rapi, cepat, dan aman. Dengan pendekatan mobile-first dan desain yang familiar bagi komunitas Pokémon, sistem ini diharapkan mampu menjadi alat bantu utama untuk mengelola koleksi kartu dengan efisien serta mendukung keputusan jual-beli yang lebih tepat.
