// Sample city data
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

// Function to render city details
function renderCityDetails(cityName) {
  const city = cityData[cityName];

  if (!city) {
    alert('Kota tidak ditemukan');
    return;
  }

  // Clear existing content
  document.body.innerHTML = "";

  // Create detail page structure
  const detailPage = `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <div class="relative h-96">
        <img src="${city.imageUrl}" alt="${city.name}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-4">
          <a href="#" class="text-white flex items-center gap-2 mb-4" id="back-link">
            &larr; Back to Home
          </a>
          <h1 class="text-4xl font-bold text-white mb-4">${city.name}</h1>
        </div>
      </div>

      <div class="container mx-auto px-4 py-8">
        <!-- Description Section -->
        <div class="bg-white rounded-lg shadow-md mb-8">
            <div class="p-6 border-b">
                <h2 class="text-xl font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    Description
                </h2>
            </div>
            <div class="p-6">
                <p class="text-gray-600">${city.description}</p>
            </div>
        </div>

        <!-- Tourist Spots Section -->
        <div class="bg-white rounded-lg shadow-md mb-8">
            <div class="p-6 border-b">
                <h2 class="text-xl font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Tourist Attractions
                </h2>
            </div>
            <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${city.touristSpots.map(spot => `
                    <div class="bg-white rounded-lg overflow-hidden shadow">
                        <img src="${spot.imageUrl}" alt="${spot.name}" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="font-bold text-lg mb-2">${spot.name}</h3>
                            <p class="text-gray-600">${spot.description}</p>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Culinary Section -->
        <div class="bg-white rounded-lg shadow-md mb-8">
            <div class="p-6 border-b">
                <h2 class="text-xl font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-crossed">
                        <path d="M14.5 17.5 10 22l-4-4-4 4v-5l4-4-6-6V3l9 9"></path>
                        <path d="m22 9-4.5 4.5L18 18l-6-6"></path>
                    </svg>
                    Local Cuisine
                </h2>
            </div>
            <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${city.culinary.map(food => `
                    <div class="flex gap-4 items-center">
                        <img src="${food.imageUrl}" alt="${food.name}" class="w-32 h-32 object-cover rounded-lg">
                        <div>
                            <h3 class="font-bold text-lg mb-2">${food.name}</h3>
                            <p class="text-gray-600">${food.description}</p>
                        </div>
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Events Section -->
        <div class="bg-white rounded-lg shadow-md">
            <div class="p-6 border-b">
                <h2 class="text-xl font-bold flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Upcoming Events
                </h2>
            </div>
            <div class="p-6 space-y-4">
                ${city.events.map(event => `
                <div class="border-b pb-4 last:border-0">
                    <h3 class="font-bold text-lg">${event.name}</h3>
                    <p class="text-blue-600 font-medium">${event.date}</p>
                    <p class="text-gray-600">${event.description}</p>
                </div>
                `).join('')}
            </div>
        </div>
      </div>
    </div>
  `;

  // Insert detail page into the body
  document.body.innerHTML = detailPage;

  // Add event listener to the back link
  document.getElementById("back-link").addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
  });
}

// Tambahkan event listener untuk seluruh halaman
document.addEventListener('DOMContentLoaded', () => {
  // Event listener untuk link "Learn More" di halaman home
  document.querySelectorAll('a[href="#/detail"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      // Ambil nama kota dari elemen sebelumnya (h3)
      const cityName = anchor.closest('.destination-card').querySelector('h3').textContent.trim();
      renderCityDetails(cityName);
    });
  });
});