const summaryData = [
  {
    number: "01",
    title: "Koleksi",
    text: "Mencatat set, rarity, harga pasar, dan kondisi kartu Pokémon dalam satu dashboard.",
  },
  {
    number: "02",
    title: "Penjualan",
    text: "Sistem transaksi jual-beli kartu dapat dipantau secara real-time dengan data yang akurat.",
  },
  {
    number: "03",
    title: "Laba",
    text: "Perhitungan laba otomatis berdasarkan harga modal dan harga jual per transaksi.",
  },
  {
    number: "04",
    title: "Inventaris",
    text: "Otomatis update stok saat transaksi terjadi dan memberi notifikasi saat stok rendah.",
  },
];

const navButtons = document.querySelectorAll("[data-target]");
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const functionalData = [
  {
    id: "FR01",
    title: "Autentikasi pengguna",
    text: "User dapat membuat akun dan login dengan email serta password yang aman.",
  },
  {
    id: "FR02",
    title: "Input kartu Pokémon",
    text: "User dapat menambahkan kartu baru dengan nama, set, rarity, tipe, harga modal, dan harga jual.",
  },
  {
    id: "FR03",
    title: "Transaksi jual-beli",
    text: "Sistem mencatat tanggal, jumlah, harga, kondisi, dan data kartu yang diperdagangkan.",
  },
  {
    id: "FR04",
    title: "Upload bukti transaksi",
    text: "User dapat mengunggah foto nota atau struk sebagai bukti transaksi.",
  },
  {
    id: "FR05",
    title: "Perhitungan laba",
    text: "Sistem menghitung laba otomatis dari selisih harga jual dan harga modal.",
  },
  {
    id: "FR06",
    title: "Laporan penjualan",
    text: "Laporan dibuat per periode untuk mengetahui hasil transaksi secara bertahap.",
  },
  {
    id: "FR07",
    title: "Stok real-time",
    text: "Inventaris kartu diperbarui otomatis setelah transaksi berhasil disimpan.",
  },
  {
    id: "FR08",
    title: "Kelola data",
    text: "User dapat mengedit dan menghapus kartu serta riwayat transaksi sesuai kebutuhan.",
  },
  {
    id: "FR09",
    title: "Data terisolasi",
    text: "Koleksi setiap user dipisahkan agar data antar akun tidak saling campur.",
  },
  {
    id: "FR10",
    title: "Detail koleksi",
    text: "User dapat menambahkan informasi kondisi kartu, nomor seri, dan grading jika tersedia.",
  },
];

const nfrData = [
  {
    title: "Performance",
    text: "Halaman utama harus dimuat dalam waktu kurang dari 2 detik pada koneksi 4G.",
  },
  {
    title: "Security",
    text: "Password di-hash, HTTPS wajib, serta otentikasi dengan Better Auth.",
  },
  {
    title: "Scalability",
    text: "Database PostgreSQL didesain untuk mendukung hingga 10.000 user aktif.",
  },
  {
    title: "Usability",
    text: "Desain mobile-first dan mudah dipahami untuk kolektor pemula.",
  },
  {
    title: "Reliability",
    text: "Target uptime 99% supaya layanan tetap stabil dalam penggunaan rutin.",
  },
  {
    title: "Maintainability",
    text: "Struktur Next.js App Router dibuat konsisten untuk pengembangan lanjutan.",
  },
];

const uxData = [
  {
    title: "Desain",
    text: "Tampilan mobile-first dengan nuansa album koleksi Pokémon yang modern.",
  },
  {
    title: "Warna",
    text: "Gunakan kombinasi biru, hitam, dan kuning untuk kesan kartu Pokémon yang hidup.",
  },
  {
    title: "Dashboard",
    text: "Menampilkan kartu favorit, total investasi, stok, dan laba secara ringkas.",
  },
  {
    title: "Form input",
    text: "Form dibuat ringkas, bersih, dan diperkaya default value yang cerdas.",
  },
  {
    title: "Upload bukti",
    text: "Komponen upload foto transaksi dengan preview langsung untuk efisiensi user.",
  },
];

const rules = [
  {
    number: "01",
    title: "Koleksi multi-kartu",
    text: "Satu user dapat memiliki lebih dari satu kartu Pokémon dalam koleksinya.",
  },
  {
    number: "02",
    title: "Soft delete",
    text: "Data transaksi tidak dapat dihapus permanen agar riwayat tetap terdokumentasi.",
  },
  {
    number: "03",
    title: "Notifikasi stok",
    text: "Notifikasi stok rendah dikirim maksimal satu kali dalam satu hari.",
  },
  {
    number: "04",
    title: "Foto bukti",
    text: "Tipe file JPG/PNG dengan maksimal ukuran 5MB.",
  },
  {
    number: "05",
    title: "Harga jual aman",
    text: "Harga jual tidak boleh lebih rendah dari harga modal tanpa konfirmasi user.",
  },
  {
    number: "06",
    title: "Atribut minimal",
    text: "Setiap kartu Pokémon harus memiliki nama, set, rarity, dan stok minimal.",
  },
];

const criteria = [
  {
    title: "Registrasi User",
    text: "User dapat membuat akun baru dan login menggunakan email/password.",
    status: "Sesuai",
  },
  {
    title: "Input Kartu Pokémon",
    text: "User dapat menambahkan kartu dengan field wajib seperti nama, set, rarity, harga, dan stok.",
    status: "Sesuai",
  },
  {
    title: "Transaksi Penjualan",
    text: "User dapat menambahkan transaksi jual-beli kartu dan sistem menolak jika field wajib kosong.",
    status: "Valid",
  },
  {
    title: "Laporan Hasil",
    text: "Sistem menampilkan laporan otomatis setelah ada transaksi baru.",
    status: "Aktif",
  },
  {
    title: "Stok",
    text: "Stok kartu otomatis berkurang setelah transaksi dan notifikasi muncul saat stok rendah.",
    status: "Ready",
  },
];

const timeline = [
  {
    phase: "Perencanaan & Spesifikasi",
    duration: "Minggu 1",
    output: "PRD dan desain database final",
  },
  {
    phase: "Desain UI/UX",
    duration: "Minggu 2",
    output: "Wireframe dan mockup Figma koleksi kartu",
  },
  {
    phase: "Development Fase 1",
    duration: "Minggu 3–4",
    output: "Autentikasi dan CRUD kartu Pokémon",
  },
  {
    phase: "Development Fase 2",
    duration: "Minggu 5–6",
    output: "Transaksi jual-beli dan upload bukti",
  },
  {
    phase: "Development Fase 3",
    duration: "Minggu 7–8",
    output: "Laporan laba dan dashboard koleksi",
  },
  {
    phase: "QA & Testing",
    duration: "Minggu 9",
    output: "Bug fixing dan uji acceptance criteria",
  },
];

const databaseRows = [
  {
    table: "users",
    columns: "id (PK), nama, email, password_hash, created_at",
  },
  {
    table: "cards",
    columns:
      "id (PK), nama_kartu, set_kartu, rarity, tipe, harga_modal, harga_jual, stok, kondisi, created_at",
  },
  {
    table: "transactions",
    columns:
      "id (PK), user_id (FK), card_id (FK), jumlah, harga_jual, tanggal, bukti_transaksi, kondisi",
  },
  {
    table: "inventory",
    columns: "id (PK), card_id (FK), stok_tersedia, updated_at",
  },
  {
    table: "reports",
    columns: "id (PK), user_id (FK), periode, total_penjualan, total_laba",
  },
  {
    table: "card_collections",
    columns:
      "id (PK), user_id (FK), card_id (FK), jumlah_koleksi, status_koleksi, created_at",
  },
];

function renderSummary() {
  const container = document.getElementById("summary-grid");
  container.innerHTML = summaryData
    .map(
      (item) => `
    <article class="summary-item">
      <span class="num">${item.number}</span>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </article>
  `,
    )
    .join("");
}

function renderFunctional() {
  const container = document.getElementById("functional-list");
  container.innerHTML = functionalData
    .map(
      (item) => `
    <div class="feature-item">
      <span class="feature-tag">${item.id}</span>
      <div>
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderCheckList(target, data) {
  const container = document.getElementById(target);
  container.innerHTML = data
    .map(
      (item) => `
    <div class="check-item">
      <div>
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderRules() {
  const container = document.getElementById("rules-list");
  container.innerHTML = rules
    .map(
      (item) => `
    <div class="rule-item">
      <span class="number">Rule ${item.number}</span>
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </div>
  `,
    )
    .join("");
}

function renderCriteria() {
  const container = document.getElementById("criteria-list");
  container.innerHTML = criteria
    .map(
      (item) => `
    <div class="criteria-item">
      <div>
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </div>
      <span class="status">${item.status}</span>
    </div>
  `,
    )
    .join("");
}

function renderTimeline() {
  const container = document.getElementById("timeline-list");
  container.innerHTML = timeline
    .map(
      (item) => `
    <div class="timeline-item">
      <strong>${item.phase}</strong>
      <p>${item.duration} • ${item.output}</p>
    </div>
  `,
    )
    .join("");
}

function renderDatabase() {
  const container = document.getElementById("database-table");
  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Tabel</th>
          <th>Kolom utama</th>
        </tr>
      </thead>
      <tbody>
        ${databaseRows
          .map(
            (row) => `
          <tr>
            <td>${row.table}</td>
            <td>${row.columns}</td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

renderSummary();
renderFunctional();
renderCheckList("nfr-list", nfrData);
renderCheckList("ux-list", uxData);
renderRules();
renderCriteria();
renderTimeline();
renderDatabase();
