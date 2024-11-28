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
        <section class="mb-8">
          <h2 class="text-xl font-bold mb-4">Description</h2>
          <p class="text-gray-600">${city.description}</p>
        </section>

        <!-- Tourist Spots Section -->
        <section class="mb-8">
          <h2 class="text-xl font-bold mb-4">Destinations</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${city.touristSpots
              .map(
                (spot) => `
              <div class="bg-white rounded-lg overflow-hidden shadow">
                <img src="${spot.imageUrl}" alt="${spot.name}" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="font-bold text-lg mb-2">${spot.name}</h3>
                  <p class="text-gray-600">${spot.description}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </section>

        <!-- Culinary Section -->
        <section class="mb-8">
          <h2 class="text-xl font-bold mb-4">Localpreneurs</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${city.culinary
              .map(
                (food) => `
              <div class="bg-white rounded-lg overflow-hidden shadow">
                <img src="${food.imageUrl}" alt="${food.name}" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="font-bold text-lg mb-2">${food.name}</h3>
                  <p class="text-gray-600">${food.description}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </section>

        <!-- Events Section -->
        <section>
          <h2 class="text-xl font-bold mb-4">Upcoming Events</h2>
          <div>
            ${city.events
              .map(
                (event) => `
              <div class="border-b pb-4 mb-4">
                <h3 class="font-bold text-lg">${event.name}</h3>
                <p class="text-blue-600 font-medium">${event.date}</p>
                <p class="text-gray-600">${event.description}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </section>
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
