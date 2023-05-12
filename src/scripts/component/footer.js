class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <ul id="footerTools">
            <li><a tabindex="0" href="https://www.instagram.com/tans.smith/ ">Social Media</a></li>
            <li><a tabindex="0" href="https://www.linkedin.com/in/intanduano2710/ ">About</a></li>
            <li><a tabindex="0" href="mailto:intan.duano27@gmail.com ">Contact</a></li>
        </ul>
        <h5>&copy; Copyright 2023 by Favo Restaurant</h5>
        `;
    }
}

customElements.define('footer-bar', FooterBar);
export default FooterBar;