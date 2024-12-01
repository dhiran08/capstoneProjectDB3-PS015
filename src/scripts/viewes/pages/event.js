const cityData = {
    Malang: {
      name: "Malang",
      description: "Malang adalah kota terbesar kedua di Jawa Timur yang dikenal dengan udaranya yang sejuk dan pemandangan alamnya yang indah. Kota ini memiliki warisan sejarah yang kaya dan merupakan pusat pendidikan yang penting.",
      imageUrl: "https://placehold.co/1200x400",
      touristSpots: [
        {
          name: "Jatim Park",
          description: "Taman rekreasi modern dengan berbagai wahana dan atraksi.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Gunung Bromo",
          description: "Gunung berapi aktif dengan pemandangan matahari terbit yang menakjubkan.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Kampung Warna-Warni",
          description: "Perkampungan unik dengan rumah-rumah berwarna-warni yang instagramable.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      culinary: [
        {
          name: "Bakso Malang",
          description: "Bakso dengan berbagai variasi isi dan tekstur.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Apel Malang",
          description: "Buah apel segar khas Malang.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      events: [
        {
          name: "Malang Night Paradise",
          date: "Every Weekend",
          description: "Festival cahaya dan hiburan malam hari.",
        },
        {
          name: "Malang Tempo Doeloe",
          date: "August 2024",
          description: "Festival budaya yang menampilkan sejarah dan tradisi Malang.",
        },
      ],
    },
    Bali: {
      name: "Bali",
      description: "Pulau legendaris yang terkenal dengan keindahan alam, budaya yang kaya, dan pantai-pantai eksotis. Bali menawarkan pengalaman spiritual, seni, dan petualangan yang tak terlupakan.",
      imageUrl: "https://placehold.co/1200x400",
      touristSpots: [
        {
          name: "Tanah Lot",
          description: "Pura spektakuler di atas batu karang dengan pemandangan matahari terbenam yang memukau.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Ubud Monkey Forest",
          description: "Hutan suci dengan ratusan kera yang hidup bebas di antara kuil-kuil tua.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Tegalalang Rice Terraces",
          description: "Terasering sawah yang indah, menampilkan keajaiban pertanian tradisional Bali.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      culinary: [
        {
          name: "Babi Guling",
          description: "Babi panggang khas Bali dengan bumbu tradisional yang kaya rasa.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Nasi Campur Bali",
          description: "Hidangan nasi dengan berbagai lauk pauk khas Bali.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      events: [
        {
          name: "Nyepi",
          date: "March 2025",
          description: "Hari raya Tahun Baru Saka dengan tradisi keheningan dan perenungan.",
        },
        {
          name: "Bali Arts Festival",
          date: "June - July 2025",
          description: "Festival seni terbesar di Bali yang menampilkan kebudayaan dan seni tradisional.",
        },
      ],
    },
    Jakarta: {
      name: "Jakarta",
      description: "Ibu kota Indonesia yang dinamis, pusat bisnis, dan budaya yang menyatukan keberagaman. Jakarta merupakan kota metropolitan dengan sejarah, kuliner, dan kehidupan urban yang mengesankan.",
      imageUrl: "https://placehold.co/1200x400",
      touristSpots: [
        {
          name: "Monas",
          description: "Monumen Nasional yang menjadi ikon kota, menyimpan sejarah perjuangan bangsa.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Kota Tua",
          description: "Kawasan bersejarah dengan arsitektur kolonial yang memukau.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Ancol Dreamland",
          description: "Taman hiburan terbesar di Indonesia dengan berbagai wahana seru.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      culinary: [
        {
          name: "Soto Betawi",
          description: "Sup khas Jakarta dengan kuah kental dan rempah-rempah.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Kerak Telor",
          description: "Makanan tradisional Betawi berbahan dasar telur dan beras.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      events: [
        {
          name: "Jakarta Fair",
          date: "June - July 2025",
          description: "Pameran tahunan terbesar di Indonesia dengan berbagai hiburan dan pameran.",
        },
        {
          name: "Jakarta International Film Festival",
          date: "November 2025",
          description: "Festival film internasional yang menampilkan karya sineas dunia.",
        },
      ],
    },
    Lombok: {
      name: "Lombok",
      description: "Pulau indah di sebelah timur Bali yang menawarkan keindahan alam yang masih alami, pantai-pantai menakjubkan, dan budaya Sasak yang khas. Tempat ideal untuk petualangan dan relaksasi.",
      imageUrl: "https://placehold.co/1200x400",
      touristSpots: [
        {
          name: "Mount Rinjani",
          description: "Gunung berapi aktif tertinggi kedua di Indonesia dengan pemandangan spektakuler.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Gili Islands",
          description: "Tiga pulau kecil dengan pantai pasir putih dan terumbu karang menakjubkan.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Kuta Lombok",
          description: "Pantai indah dengan pasir putih dan ombak yang cocok untuk berselancar.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      culinary: [
        {
          name: "Ayam Taliwang",
          description: "Hidangan ayam pedas khas Lombok yang terkenal.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Plecing Kangkung",
          description: "Sayur kangkung dengan sambal tomat khas Lombok.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      events: [
        {
          name: "Bau Nyale Festival",
          date: "February 2025",
          description: "Festival tradisional menangkap ikan nyale dengan ritual adat.",
        },
        {
          name: "Lombok Surf Festival",
          date: "September 2025",
          description: "Festival olahraga air yang menghadirkan peselancar dari seluruh dunia.",
        },
      ],
    },
    Bandung: {
      name: "Bandung",
      description: "Kota kreatif di dataran tinggi Jawa Barat yang dikenal dengan mode, kuliner, dan suasana alamnya yang sejuk. Bandung adalah pusat mode, pendidikan, dan inovasi.",
      imageUrl: "https://placehold.co/1200x400",
      touristSpots: [
        {
          name: "Tangkuban Perahu",
          description: "Gunung berapi aktif dengan kawah yang dapat dikunjungi.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Floating Market",
          description: "Pasar terapung dengan konsep unik dan berbagai kuliner.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Paris Van Java",
          description: "Pusat perbelanjaan modern dengan arsitektur yang menarik.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      culinary: [
        {
          name: "Batagor",
          description: "Bakso tahu goreng dengan saus kacang khas Bandung.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Brownies Bandung",
          description: "Kue cokelat lembut yang terkenal di seluruh Indonesia.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      events: [
        {
          name: "Bandung Fashion Week",
          date: "October 2025",
          description: "Pekan mode bergengsi yang menampilkan desainer lokal dan internasional.",
        },
        {
          name: "Bandung International Music Festival",
          date: "May 2025",
          description: "Festival musik yang menghadirkan musisi dari berbagai genre.",
        },
      ],
    },
    Yogyakarta: {
      name: "Yogyakarta",
      description: "Pusat budaya Jawa yang kaya akan sejarah, seni, dan tradisi. Yogyakarta adalah rumah bagi warisan budaya dunia seperti Borobudur dan Prambanan, serta pusat pendidikan dan kreativitas.",
      imageUrl: "https://placehold.co/1200x400",
      touristSpots: [
        {
          name: "Borobudur Temple",
          description: "Candi Buddha terbesar di dunia, situs warisan UNESCO.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Prambanan Temple",
          description: "Kompleks candi Hindu terbesar di Indonesia.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Malioboro Street",
          description: "Jalan perbelanjaan legendaris dengan suasana khas Yogyakarta.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      culinary: [
        {
          name: "Gudeg",
          description: "Hidangan nangka muda yang dimasak dengan bumbu tradisional.",
          imageUrl: "https://placehold.co/300x200",
        },
        {
          name: "Bakpia",
          description: "Kue oleh-oleh terkenal yang berisi pasta kacang hijau.",
          imageUrl: "https://placehold.co/300x200",
        },
      ],
      events: [
        {
          name: "Yogyakarta Arts Festival",
          date: "June - July 2025",
          description: "Festival seni terbesar yang menampilkan kebudayaan Jawa.",
        },
        {
          name: "Sekaten Festival",
          date: "Maulid Nabi 2025",
          description: "Festival budaya Islam yang meriah dengan pasar tradisional.",
        },
      ],
    }
  };

// Fungsi untuk merender halaman event
function renderHalamanEvent() {
    // Bersihkan konten body
    document.body.innerHTML = "";
  
    // Struktur halaman destinasi
    const halamanEvent = `
      <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-blue-600 text-white py-4">
          <div class="container mx-auto flex justify-between items-center px-4">
            <a href="#" id="tombol-kembali" class="text-white flex items-center gap-2">
              &larr; Kembali ke Beranda
            </a>
            <h1 class="text-2xl font-bold">Destinasi di Indonesia</h1>
          </div>
        </div>
  
        <div class="container mx-auto px-4 py-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${Object.values(cityData).map(kota => `
              <div class="destination-card text-center bg-white rounded-lg shadow-md overflow-hidden">
                <img src="${kota.imageUrl}" alt="${kota.name}" class="w-full h-48 object-cover">
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-4">${kota.name}</h3>
                  <p class="text-gray-600 mb-4">${kota.description.substring(0, 150)}...</p>
                  <a href="#/detail" class="inline-block bg-blue-600 text-white px-4 py-2 rounded-md">
                    Jelajahi ${kota.name}
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  
    // Masukkan halaman destinasi ke dalam body
    document.body.innerHTML = halamanEvent;
  
    // Tambahkan event listener untuk tombol kembali
    document.getElementById("tombol-kembali").addEventListener("click", (e) => {
      e.preventDefault();
      location.reload();
    });
  
    // Tambahkan event listener untuk tombol "Jelajahi"
    document.querySelectorAll('a[href="#/detail"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        // Ambil nama kota dari elemen sebelumnya (h3)
        const namaKota = anchor.closest('.destination-card').querySelector('h3').textContent.trim();
        
        // Panggil fungsi renderCityDetails dari detail.js
        renderHalamanEvent(namaKota);
      });
    });
  }
  
  // Event listener untuk memuat halaman event
  document.addEventListener('DOMContentLoaded', () => {
    // Tambahkan event listener untuk navigasi event
    const linkEvent = document.querySelector('a[href="#events"]');
    if (linkEvent) {
      linkEvent.addEventListener('click', (e) => {
        e.preventDefault();
        renderHalamanEvent();
      });
    }
  });  