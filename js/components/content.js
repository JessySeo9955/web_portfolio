class Content extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    set content({ title, content }) {
        this._title = title;
        this._content = content;
        this.render();
    }

    render() {
        this.innerHTML = `
           <div>
                    <h2>${this._title || ''}</h2>
                    <p class="mt-10">
                      ${this._content || ''}
                    </p>
                </div>
        `;
    }
}

export default Content;
