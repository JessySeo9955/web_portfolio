class ProjectItem extends HTMLElement {
    constructor() {
        super();
    }

    set content(content) {
        this._content = content;
        this.render();
    }

    render() {
        this.innerHTML = `
                 <h3>${this._content.title || ""}</h3>
                 <div class="flex flex-content-between">
                    <div>${this._content.description || ""}</div>
                    <div class="text-right">${this._content.date || ""}</div>
                 </div>
             

                            ${
                                this._content.contents.length > 0
                                    ? `
                                <div class="sub-content">
                                    <ul class="element-bullet-list mt-5">
                                        ${this._content.contents.map((content) => `<li>${content}</li>`).join("")}
                                        ${this._content.links
                                            .map(({ title, link }) => `<li><a href="${link}" target="_blank" class="external-link">${title}</a></li>`)
                                            .join("")}
                                    </ul>
                                </div>
                                  `
                                    : ""
                            }

                 
               ${
                   this._content.stacks.length > 0
                       ? `
                   <div class="content">
                            <h4>Stacks</h4>
                            <ul class="flex element-label-list flex-wrap">
                                ${this._content.stacks.map((stack) => `<li>${stack}</li>`).join("")}
                            </ul>
                        </div>
                     `
                       : ""
               }
        `;
    }
}

export default ProjectItem;
