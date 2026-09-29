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

const personas = [
  {
    initial: "A",
    name: "Andra",
    role: "Kolektor baru",
    text: "Butuh sistem sederhana untuk memantau koleksi dan transaksi kartu miliknya.",
    needs: ["Dashboard ringkas", "Input kartu cepat", "Riwayat transaksi"],
  },
  {
    initial: "B",
    name: "Budi",
    role: "Penjual kartu senior",
    text: "Butuh inventaris detail untuk mengelola ratusan kartu beserta stok dan labanya.",
    needs: ["Stok real-time", "Laporan laba", "Filter set & rarity"],
  },
];

const scopeData = [
  {
    type: "In-Scope",
    tone: "in",
    items: [
      "Autentikasi user",
      "CRUD kartu Pokémon",
      "Pencatatan transaksi",
      "Upload bukti transaksi",
      "Dashboard koleksi",
    ],
  },
  {
    type: "Out-of-Scope",
    tone: "out",
    items: ["Integrasi marketplace besar", "Lelang online", "Aplikasi native"],
  },
];

const techStack = [
  { layer: "Frontend", tech: "Next.js (App Router), TypeScript, Tailwind CSS" },
  { layer: "Backend", tech: "Next.js API Routes / Server Actions" },
  { layer: "Database", tech: "PostgreSQL" },
  { layer: "ORM", tech: "Prisma" },
  { layer: "Autentikasi", tech: "Better Auth" },
  { layer: "File Storage", tech: "Vercel Blob" },
  { layer: "Hosting", tech: "Vercel" },
  {
    layer: "Notifikasi",
    tech: "Email (Resend/SMTP), in-app notification (iterasi berikutnya)",
  },
  { layer: "Cron Job", tech: "Vercel Cron untuk laporan harian kartu Pokémon" },
];

const risks = [
  {
    risk: "User tidak konsisten input data kartu",
    impact: "Laporan dan stok tidak akurat",
    mitigation: "Tambahkan validasi dan reminder input.",
  },
  {
    risk: "Kegagalan pengiriman email notifikasi",
    impact: "User tidak menerima info stok",
    mitigation: "Tambahkan in-app notification.",
  },
  {
    risk: "Biaya storage foto bukti transaksi",
    impact: "Cost operasional naik",
    mitigation: "Batasi ukuran foto dan kompresi otomatis.",
  },
  {
    risk: "Kebocoran data antar user",
    impact: "Masalah privasi",
    mitigation: "Terapkan row-level authorization ketat.",
  },
  {
    risk: "Fluktuasi harga kartu pasar",
    impact: "Laporan laba tidak akurat",
    mitigation: "Sediakan pilihan harga modal/jual manual dan estimasi pasar.",
  },
];

const metrics = [
  { label: "Jumlah user terdaftar", target: "200", unit: "user" },
  { label: "Retensi bulanan", target: "≥ 40%", unit: "per bulan" },
  { label: "Rata-rata kartu per user", target: "≥ 1.3", unit: "kartu" },
  {
    label: "Tingkat keberhasilan notifikasi",
    target: "≥ 95%",
    unit: "terkirim",
  },
  { label: "Rating kepuasan pengguna", target: "≥ 4.0", unit: "dari 5.0" },
  {
    label: "Total transaksi kartu tercatat",
    target: "≥ 500",
    unit: "transaksi",
  },
];

const roadmap = [
  {
    title: "Aplikasi mobile native",
    text: "Android/iOS untuk akses lebih luas.",
  },
  {
    title: "Family Sharing / Multi-user",
    text: "Berbagi akses antar anggota keluarga atau tim koleksi.",
  },
  {
    title: "Integrasi Marketplace",
    text: "Jual-beli langsung dari aplikasi ke komunitas.",
  },
  {
    title: "Rekomendasi harga kartu",
    text: "Berdasarkan rarity, set, dan tren pasar.",
  },
  {
    title: "Analitik biaya",
    text: "Grafik pengeluaran, investasi, dan laba per bulan.",
  },
  {
    title: "Mode multi-bahasa",
    text: "Ekspansi ke luar Indonesia dan komunitas global.",
  },
  {
    title: "Scan kartu / OCR",
    text: "Teknologi untuk membaca kartu dari foto secara otomatis.",
  },
];

const rarities = [
  "Common",
  "Rare",
  "Rare Holo",
  "Ultra Rare",
  "Secret Rare",
  "1st Edition",
];

const cardTypes = ["Electric", "Fire", "Grass", "Water", "Darkness", "Psychic"];

const collection = [
  {
    name: "Pikachu VMAX",
    set: "Vivid Voltage",
    rarity: "Ultra Rare",
    type: "Electric",
    stok: 12,
    harga: 1850000,
  },
  {
    name: "Charizard ex",
    set: "Obsidian Flames",
    rarity: "Secret Rare",
    type: "Fire",
    stok: 4,
    harga: 3400000,
  },
  {
    name: "Bulbasaur 1st Edition",
    set: "Base Set",
    rarity: "1st Edition",
    type: "Grass",
    stok: 2,
    harga: 5600000,
  },
  {
    name: "Gyarados V",
    set: "Silver Tempest",
    rarity: "Rare Holo",
    type: "Water",
    stok: 9,
    harga: 720000,
  },
  {
    name: "Umbreon VMAX",
    set: "Evolving Skies",
    rarity: "Secret Rare",
    type: "Darkness",
    stok: 3,
    harga: 8900000,
  },
  {
    name: "Gengar ex",
    set: "Shrouded Fable",
    rarity: "Ultra Rare",
    type: "Psychic",
    stok: 5,
    harga: 1250000,
  },
  {
    name: "Lapras V",
    set: "Chilling Reign",
    rarity: "Rare",
    type: "Water",
    stok: 2,
    harga: 310000,
  },
  {
    name: "Leafeon VSTAR",
    set: "Evolving Skies",
    rarity: "Rare Holo",
    type: "Grass",
    stok: 7,
    harga: 640000,
  },
];

const popularCards = [
  { name: "Pikachu VMAX", value: 142 },
  { name: "Charizard ex", value: 98 },
  { name: "Bulbasaur 1st Edition", value: 61 },
  { name: "Gyarados V", value: 54 },
];

const rupiah = (value) => `Rp ${value.toLocaleString("id-ID")}`;

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

function renderPersonas() {
  const container = document.getElementById("persona-list");
  container.innerHTML = personas
    .map(
      (item) => `
    <article class="persona-item">
      <div class="persona-head">
        <span class="persona-avatar">${item.initial}</span>
        <div>
          <strong>${item.name}</strong>
          <p class="persona-role">${item.role}</p>
        </div>
      </div>
      <p>${item.text}</p>
      <ul class="tag-list">
        ${item.needs.map((need) => `<li>${need}</li>`).join("")}
      </ul>
    </article>
  `,
    )
    .join("");
}

function renderScope() {
  const container = document.getElementById("scope-list");
  container.innerHTML = scopeData
    .map(
      (group) => `
    <div class="scope-item scope-${group.tone}">
      <strong>${group.type}</strong>
      <ul>
        ${group.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `,
    )
    .join("");
}

function renderTech() {
  const container = document.getElementById("tech-list");
  container.innerHTML = techStack
    .map(
      (item) => `
    <div class="tech-item">
      <span class="tech-layer">${item.layer}</span>
      <p>${item.tech}</p>
    </div>
  `,
    )
    .join("");
}

function renderRisks() {
  const container = document.getElementById("risk-table");
  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Risiko</th>
          <th>Dampak</th>
          <th>Mitigasi</th>
        </tr>
      </thead>
      <tbody>
        ${risks
          .map(
            (row) => `
          <tr>
            <td>${row.risk}</td>
            <td>${row.impact}</td>
            <td>${row.mitigation}</td>
          </tr>
        `,
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderMetrics() {
  const container = document.getElementById("metrics-list");
  container.innerHTML = metrics
    .map(
      (item) => `
    <div class="metric-item">
      <strong>${item.target}</strong>
      <span>${item.unit}</span>
      <p>${item.label}</p>
    </div>
  `,
    )
    .join("");
}

function renderRoadmap() {
  const container = document.getElementById("roadmap-list");
  container.innerHTML = roadmap
    .map(
      (item) => `
    <div class="roadmap-item">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </div>
  `,
    )
    .join("");
}

function renderPopular() {
  const container = document.getElementById("popular-list");
  container.innerHTML = popularCards
    .map(
      (item) => `
    <li><span>${item.name}</span><strong>${item.value}</strong></li>
  `,
    )
    .join("");
}

function fillSelect(id, options, allLabel) {
  const select = document.getElementById(id);
  const values = allLabel ? [allLabel, ...options] : options;
  select.innerHTML = values
    .map((value) => `<option value="${value}">${value}</option>`)
    .join("");
}

function renderCollection() {
  const grid = document.getElementById("collection-grid");
  const rarity = document.getElementById("filter-rarity").value;
  const type = document.getElementById("filter-tipe").value;

  const filtered = collection.filter(
    (card) =>
      (rarity === "Semua rarity" || card.rarity === rarity) &&
      (type === "Semua tipe" || card.type === type),
  );

  document.getElementById("filter-count").textContent =
    `${filtered.length} dari ${collection.length} kartu`;

  grid.innerHTML = filtered.length
    ? filtered
        .map(
          (card) => `
    <article class="poke-card type-${card.type.toLowerCase()}">
      <div class="poke-card-top">
        <span class="poke-rarity">${card.rarity}</span>
        <span class="poke-type">${card.type}</span>
      </div>
      <strong>${card.name}</strong>
      <p class="poke-set">${card.set}</p>
      <div class="poke-card-foot">
        <span>${rupiah(card.harga)}</span>
        <span>Stok ${card.stok}</span>
      </div>
    </article>
  `,
        )
        .join("")
    : `<p class="empty-state">Tidak ada kartu yang cocok dengan filter ini.</p>`;
}

function setupCollectionFilters() {
  fillSelect("filter-rarity", rarities, "Semua rarity");
  fillSelect("filter-tipe", cardTypes, "Semua tipe");
  document
    .getElementById("filter-rarity")
    .addEventListener("change", renderCollection);
  document
    .getElementById("filter-tipe")
    .addEventListener("change", renderCollection);
  renderCollection();
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
    toast.hidden = true;
  }, 3200);
}

function setupModal() {
  const modal = document.getElementById("card-modal");
  const form = document.getElementById("card-form");

  fillSelect("form-rarity", rarities);
  fillSelect("form-tipe", cardTypes);

  const openModal = () => {
    modal.hidden = false;
    document.body.classList.add("modal-open");
    form.querySelector("input").focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  document.getElementById("add-card-btn").addEventListener("click", openModal);
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-cancel").addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    collection.unshift({
      name: data.nama_kartu,
      set: data.set_kartu,
      rarity: data.rarity,
      type: data.tipe,
      stok: Number(data.stok),
      harga: Number(data.harga_jual),
    });
    popularCards.unshift({ name: data.nama_kartu, value: Number(data.stok) });

    renderPopular();
    renderCollection();
    form.reset();
    closeModal();
    showToast(`${data.nama_kartu} berhasil ditambahkan ke koleksi.`);
  });
}

function setupNavHighlight() {
  const links = Array.from(document.querySelectorAll(".site-nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`,
          ),
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

renderSummary();
renderFunctional();
renderCheckList("nfr-list", nfrData);
renderCheckList("ux-list", uxData);
renderRules();
renderCriteria();
renderTimeline();
renderDatabase();
renderPersonas();
renderScope();
renderTech();
renderRisks();
renderMetrics();
renderRoadmap();
renderPopular();
setupCollectionFilters();
setupModal();
setupNavHighlight();
