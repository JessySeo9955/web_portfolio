const content = {
    profile: {
        title: "Profile",
        content:
            "Detail-oriented Front-End Developer with 3+ years of hands-on experience and a strong interest in full-stack development. Currently pursuing a diploma in Computer Programming. Proven ability to deliver high-quality, scalable solutions in fast-paced, collaborative environments.",
    },
};

const skills = [
    {
        title: "Frontend",
        content: "JavaScript, TypeScript, RxJS, Vue, Nuxt, Angular, React, SCSS, Bootstrap",
    },
    {
        title: "Backend",
        content: "Spring Framework, Node.js, Express.js, MySQL, Oracle, Python",
    },
    {
        title: "CI/CD",
        content: "AWS, GitHub Actions, Jenkins",
    },
    {
        title: "Tools & Collaboration",
        content: "Git Flow, Jira, Confluence, Figma, Slack, Storybook",
    },
];

const experience = [
    {
        title: "Freelance Front-End Developer",
        description: "Smilegate Stove (remote), South Korea",
        contents: [
            "Participated in various domain projects, including a video conferencing software, indie game platform, and social page",
            "Developed critical features, such as payment integration and video connection functionality",
            "Ensured high-quality deliverables through rigorous QA testing and continuous improvements",
        ],
        links: [
            { title: "Stove Indie Game Store", link: "https://store.onstove.com/en" },
            { title: "Stove User Social Page", link: "https://profile.onstove.com/en/232534909" },
        ],
        date: "Jun 2021 – Jan 2024",
        stacks: ["Vue 2", "Vue 3", "Nuxt", "TypeScript", "RxJS", "WebRTC", "WebSocket"],
    },
    {
        title: "Web Developer",
        description: "HHam, South Korea",
        contents: [
            "Successfully launched a book review web and Android application within a tight timeframe, exceeding client expectations",
            "Extensive experience with Spring backend development, database management, and Android app development",
            "Maintained backend systems and AWS infrastructure, ensuring seamless integration of new features into existing systems",
        ],
        links: [],
        date: "Jun 2021 – Jan 2024",
        stacks: ["Spring Framework", "jQuery", "AWS", "MySQL", "Android"],
    },
];


export { content, skills, experience };
