class ProjectSkills extends HTMLElement {
    constructor() {
        super();
    }

    set content(skills) {
        this._skills = skills;
        this.render();
    }

    render() {
        this.innerHTML = `
            <h2>Skills</h2>
            ${this._skills
                .map(
                    (item) => `
                        <div class="mt-10">
                            <h3>${item.title}</h3>
                            <p>${item.content}</p>
                        </div>
                        `).join("")
            }
        `;
    }
}

export default ProjectSkills;
