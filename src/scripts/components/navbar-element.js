class NavbarElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="shadow-md">
      <div class="bg-blue-600 text-white py-2">
        <div class="container mx-auto flex justify-between items-center px-4">
          <div class="logo">
            <a href="#">
              <img
                src="https://placehold.co/200x50"
                alt="Explore Nusantara"
                class="max-h-12"
              />
            </a>
          </div>
          <div class="search flex gap-2">
            <input
              type="text"
              placeholder="Search"
              class="px-3 py-2 rounded-md border-none w-72"
            />
            <button class="bg-blue-800 text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
          <div class="language-select">
            <select
              class="px-3 py-2 rounded-md bg-blue-800 text-white border-none"
            >
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
            </select>
          </div>
        </div>
      </div>
      <nav class="py-2" id="nav-list">
        <div class="container mx-auto">
          <ul class="flex justify-center space-x-6" id="nav-menu">
            <li>
              <a href="#" class="text-gray-800 font-bold hover:text-blue-600" id="nav-home"
                >Home</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-800 font-bold hover:text-blue-600" id="nav-destination"
                >Destination</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-800 font-bold hover:text-blue-600" id="nav-culinary"
                >Culinary</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-800 font-bold hover:text-blue-600"
                >Event</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-800 font-bold hover:text-blue-600"
                >About</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define('navbar-element', NavbarElement);
