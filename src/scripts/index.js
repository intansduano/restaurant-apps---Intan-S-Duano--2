import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import data from '../DATA.json';
import App from './views/app';
import swRegister from './utils/sw-register';
import FooterBar from './component/footer';
import NavBar from './component/nav-bar';

// App
const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#mainContent');

skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    mainContent.scrollIntoView({ behavior: 'smooth' });
    skipLink.blur();
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});