class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="bg-blue-600 text-white py-10">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 class="text-lg font-bold mb-4">About Indonesia Travel</h3>
            <p>
              Indonesia Travel is a comprehensive guide to the diverse
              destinations, activities, and experiences that Indonesia has to
              offer.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:underline">Home</a></li>
              <li><a href="#" class="hover:underline">Destination</a></li>
              <li><a href="#" class="hover:underline">Culinary</a></li>
              <li><a href="#" class="hover:underline">Events</a></li>
              <li><a href="#" class="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">Contact Us</h3>
            <p>Email: info@indonesia.travel</p>
            <p>Phone: +62 21 2358 9999</p>
            <div class="flex gap-4 mt-4">
              <a href="#"
                ><img src="https://placehold.co/32x32" alt="Facebook"
              /></a>
              <a href="#"
                ><img src="https://placehold.co/32x32" alt="Twitter"
              /></a>
              <a href="#"
                ><img src="https://placehold.co/32x32" alt="Instagram"
              /></a>
            </div>
          </div>
        </div>
        <div class="text-center mt-10 text-sm">
          <p>&copy; 2024 Indonesia Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-element', FooterElement);
