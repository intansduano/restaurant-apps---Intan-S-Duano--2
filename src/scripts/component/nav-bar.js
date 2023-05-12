class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav tabindex="0" id="navigationDrawer" class="nav">
        <ul class="nav__list">
            <li class="nav__item"><a tabindex="0" href="/">Restaurant</a></li>
            <li class="nav__item"><a tabindex="0" href="https://www.linkedin.com/in/intanduano2710/">About Us</a></li>
            <li class="nav__item"><a tabindex="0" href="#/like">Liked Restos</a></li>
        </ul>
        </nav>
        `;
    }
}

customElements.define('nav-bar', NavBar);
export default NavBar;