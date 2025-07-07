class Header extends HTMLElement {
    constructor() {
        super();
        this.render();
    }


    render() {
        const activeMenu = this.getAttribute('activeMenu') || '';
        this.innerHTML = `
        <header class="flex flex-content-between">
            <div class='mobile-hide'>
                <a href="./index.html">Jessy's Profile</a>
            </div>
            <nav class="flex-1">
                <ul class="flex flex-content-end">
                    <li class="flex-1-mobile ${activeMenu === "index" ? "active" : ""}"><a href="./index.html">Home</a></li>
                    <li class="flex-1-mobile ${activeMenu === "projects" ? "active" : ""}""><a href="./projects.html">Projects</a></li>
                    <li class="flex-1-mobile ${activeMenu === "resume" ? "active" : ""}""><a href="./resume.html">Resume</a></li>
                    <li class="flex-1-mobile ${activeMenu === "contact" ? "active" : ""}""><a href="./contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

export default Header;
