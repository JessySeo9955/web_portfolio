import {projectDetailContent} from '../data/data-project.js';

const project = (function () {
    const projects = [0, 1, 2, 4];
    let activeIndex = 0;

    setActive();

    function goRight() {
        activeIndex = (activeIndex + 1) % projects.length;
        setActive();
    }

    function goLeft() {
        activeIndex = (activeIndex - 1 + projects.length) % projects.length;
        setActive();
    }

    function setActive() {
        const lists = document.querySelectorAll(".project li");
        lists.forEach((li) => li.classList.remove("active"));
        lists[activeIndex].classList.add("active");

        const content = document.querySelector('#project-item');
        content.content = projectDetailContent[activeIndex];
        
    }

    return {
        getActiveIndex: () => activeIndex,
        goLeft,
        goRight
    }
})();

window.project = project;