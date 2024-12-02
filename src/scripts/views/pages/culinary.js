// Fungsi untuk merender halaman kuliner
function renderHalamanKuliner() {
  // Bersihkan konten body
  document.body.innerHTML = '';

  // Struktur halaman kuliner
  const halamanKuliner = `
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <div class="bg-blue-600 text-white py-4">
        <div class="container mx-auto flex justify-between items-center px-4">
          <a href="#" id="tombol-kembali" class="text-white flex items-center gap-2">
            &larr; Kembali ke Beranda
          </a>
          <h1 class="text-2xl font-bold">Kuliner di Indonesia</h1>
        </div>
      </div>

      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${Object.values(cityData)
            .map(
              (kota) => `
            <div class="culinary-card text-center bg-white rounded-lg shadow-md overflow-hidden">
              <img src="${kota.imageUrl}" alt="${
                kota.name
              }" class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold mb-4">${kota.name}</h3>
                <p class="text-gray-600 mb-4">${kota.culinary
                  .map(
                    (makanan) => `
                  <div class="culinary-item mb-4">
                    <img src="${makanan.imageUrl}" alt="${makanan.name}" class="w-full h-48 object-cover mb-2">
                    <h4 class="text-lg font-semibold">${makanan.name}</h4>
                    <p class="text-gray-600">${makanan.description}</p>
                  </div>
                `
                  )
                  .join('')}</p>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </div>
  `;

  // Masukkan halaman kuliner ke dalam body
  document.body.innerHTML = halamanKuliner;

  // Tambahkan event listener untuk tombol kembali
  document.getElementById('tombol-kembali').addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
  });
}

// Event listener untuk memuat halaman kuliner
document.addEventListener('DOMContentLoaded', () => {
  // Tambahkan event listener untuk navigasi kuliner
  const linkKuliner = document.querySelector('a[href="#kuliner"]');
  if (linkKuliner) {
    linkKuliner.addEventListener('click', (e) => {
      e.preventDefault();
      renderHalamanKuliner();
    });
  }
});
