// Sample city data
const cityData = {
  Malang: {
    name: "Malang",
    description: "Malang adalah kota terbesar kedua di Jawa Timur yang dikenal dengan udaranya yang sejuk dan pemandangan alamnya yang indah. Kota ini memiliki warisan sejarah yang kaya dan merupakan pusat pendidikan yang penting.",
    imageUrl: "https://via.placeholder.com/1200x400",
    touristSpots: [
      {
        name: "Jatim Park",
        description: "Taman rekreasi modern dengan berbagai wahana dan atraksi.",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        name: "Gunung Bromo",
        description: "Gunung berapi aktif dengan pemandangan matahari terbit yang menakjubkan.",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        name: "Kampung Warna-Warni",
        description: "Perkampungan unik dengan rumah-rumah berwarna-warni yang instagramable.",
        imageUrl: "https://via.placeholder.com/300x200",
      },
    ],
    culinary: [
      {
        name: "Bakso Malang",
        description: "Bakso dengan berbagai variasi isi dan tekstur.",
        imageUrl: "https://via.placeholder.com/300x200",
      },
      {
        name: "Apel Malang",
        description: "Buah apel segar khas Malang.",
        imageUrl: "https://via.placeholder.com/300x200",
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
};

// Function to render city details
function renderCityDetails(cityName) {
  const city = cityData[cityName] || cityData.Malang;

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
                <p class="text-gray-600">Malang adalah kota sejuk di Jawa Timur yang terkenal dengan wisata alam, seperti Gunung Bromo dan Coban Rondo, serta kuliner khasnya, seperti bakso Malang. Kota ini juga kaya akan sejarah dan budaya, menjadikannya destinasi yang memikat.</p>
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
                    <div class="bg-white rounded-lg overflow-hidden shadow">
                        <img src="https://via.placeholder.com/300x200" alt="Jatim Park" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="font-bold text-lg mb-2">Jatim Park</h3>
                            <p class="text-gray-600">Taman rekreasi modern dengan berbagai wahana dan atraksi.</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg overflow-hidden shadow">
                        <img src="https://via.placeholder.com/300x200" alt="Gunung Bromo" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="font-bold text-lg mb-2">Gunung Bromo</h3>
                            <p class="text-gray-600">Gunung berapi aktif dengan pemandangan matahari terbit yang menakjubkan.</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg overflow-hidden shadow">
                        <img src="https://via.placeholder.com/300x200" alt="Kampung Warna-Warni" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="font-bold text-lg mb-2">Kampung Warna-Warni</h3>
                            <p class="text-gray-600">Perkampungan unik dengan rumah-rumah berwarna-warni yang instagramable.</p>
                        </div>
                    </div>
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
                    <div class="flex gap-4 items-center">
                        <img src="https://via.placeholder.com/300x200" alt="Bakso Malang" class="w-32 h-32 object-cover rounded-lg">
                        <div>
                            <h3 class="font-bold text-lg mb-2">Bakso Malang</h3>
                            <p class="text-gray-600">Bakso dengan berbagai variasi isi dan tekstur.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 items-center">
                        <img src="https://via.placeholder.com/300x200" alt="Apel Malang" class="w-32 h-32 object-cover rounded-lg">
                        <div>
                            <h3 class="font-bold text-lg mb-2">Apel Malang</h3>
                            <p class="text-gray-600">Buah apel segar khas Malang.</p>
                        </div>
                    </div>
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
                <div class="border-b pb-4 last:border-0">
                    <h3 class="font-bold text-lg">Malang Night Paradise</h3>
                    <p class="text-blue-600 font-medium">Every Weekend</p>
                    <p class="text-gray-600">Festival cahaya dan hiburan malam hari.</p>
                </div>
                <div>
                    <h3 class="font-bold text-lg">Malang Tempo Doeloe</h3>
                    <p class="text-blue-600 font-medium">August 2024</p>
                    <p class="text-gray-600">Festival budaya yang menampilkan sejarah dan tradisi Malang.</p>
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

// Event listener for anchor clicks
document.querySelectorAll("a[href='#/detail']").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const cityName = e.target.textContent.trim();
    renderCityDetails(cityName);
  });
});
