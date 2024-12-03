document.addEventListener('DOMContentLoaded', () => {
  const navCulinary = document.getElementById('nav-culinary');

  navCulinary.addEventListener('click', (event) => {
    event.preventDefault();
    loadCulinaryPage();
  });
});

function loadCulinaryPage() {
  const body = document.querySelector('body');
  body.innerHTML = '';

  const navbar = document.createElement('navbar-element');
  body.appendChild(navbar);

  const culinaryContent = document.createElement('div');
  culinaryContent.innerHTML = `
    <section class="py-10">
      <div class="container mx-auto">
        <h2 class="text-5xl font-bold text-center mb-8">Culinary</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Culinary Card 1 -->
          <div class="culinary-card text-center">
            <img
              src="https://placehold.co/300x200"
              alt="Nasi Goreng"
              class="w-full h-48 object-cover rounded-md"
            />
            <h3 class="text-xl font-bold mt-4">Nasi Goreng</h3>
            <p class="mt-2">
              A delicious fried rice dish with a variety of toppings and flavors.
            </p>
          </div>
          <!-- Culinary Card 2 -->
          <div class="culinary-card text-center">
            <img
              src="https://placehold.co/300x200"
              alt="Sate"
              class="w-full h-48 object-cover rounded-md"
            />
            <h3 class="text-xl font-bold mt-4">Sate</h3>
            <p class="mt-2">
              Grilled skewers of meat served with peanut sauce and rice cakes.
            </p>
          </div>
          <!-- Culinary Card 3 -->
          <div class="culinary-card text-center">
            <img
              src="https://placehold.co/300x200"
              alt="Gado-Gado"
              class="w-full h-48 object-cover rounded-md"
            />
            <h3 class="text-xl font-bold mt-4">Gado-Gado</h3>
            <p class="mt-2">
              A traditional Indonesian salad with boiled vegetables and peanut sauce.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
  body.appendChild(culinaryContent);

  const footer = document.createElement('footer-element');
  body.appendChild(footer);
}
