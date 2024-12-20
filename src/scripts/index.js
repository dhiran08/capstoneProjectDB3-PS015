import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import './components/index.js';

const app = new App({
  content: document.getElementById('main-content'),
  button: document.getElementById('hamburger-menu'),
  navList: document.getElementById('nav-list'),
  navMenu: document.getElementById('nav-menu'),
  links: document.querySelectorAll('.nav-link a'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoad', () => {
  app.renderPage();
  swRegister();
});
