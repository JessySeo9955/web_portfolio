class Footer extends HTMLElement {

    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="flex flex-content-end">
            <div>
                <a href="https://github.com/JessySeo9955">GitHub</a>
            </div>
            <div>
                <a href="https://jessyseo9955.github.io/">Blog</a>
            </div>
            <div>
                <a href="mailto:jessy.seo.9955@gmail.com">Email</a>
            </div>
        </footer>
        `;
    }

}

export default Footer;