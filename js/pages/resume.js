import ProjectSkills from '../components/resume-skills.js';
import { content, skills, experience, education } from "../data/data-resume.js";
import { bindContentToDom } from "../utils/utils.js";

customElements.define('site-resume-skills', ProjectSkills);

const bindTargets = [
    { domId: "#profile", dataKey: "profile" }
];


bindTargets.forEach(({ domId, dataKey }) => bindContentToDom(domId, content[dataKey]));
bindContentToDom('#skills', skills);
bindContentToDom('#project-item-1', experience[0]);
bindContentToDom('#project-item-2', experience[1]);
bindContentToDom('#education-item-1', education[0]);
bindContentToDom('#education-item-2', education[1]);