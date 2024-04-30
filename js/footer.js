class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback () {
        this.innerHTML = `
        <footer>
        <div id="signUpTo">
                <h3>Sign up for updates on all our latest articles</h3>
                <form action="" method="">
                        <input type="email" name="email" placeholder="Email">
                        <button type="submit" id="submitbtn">Submit</button>
                </form>
        </div>
        <div id="about" class="grid">
                <a href="./about.html">About</a>
                <a href="./contact.html">Contact</a>
        </div>
        <div id="social" class="grid">
                <img src="./assets/icons/facebook white.svg" alt="">
                <img src="./assets/icons/insta white.svg" alt="">
                <img src="./assets/icons/twitter white.svg" alt="">
        </div>
        <div id="rights">
                <p>All rights reserved to German Vainblat and Raz Atir</p>
        </div>
        </footer>`;
    }
}
customElements.define('footer-js', Footer);