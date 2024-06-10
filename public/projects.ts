export type ProjectType = {
  name: string;
  github: string;
  url?: string;
  description: string;
};

export const MOCK_PROJECTS: ProjectType[] = [
  {
    name: "super cool project",
    github: "https://github.com/rcarterjr/",
    url: "",
    description:
      "Here is a project I created that allows users to x so that they can y. Created in TypeScript, React, and Node.js",
  },
  {
    name: "another cool project",
    github: "https://github.com/rcarterjr/",
    url: "",
    description:
      "Here is a project I created that allows users to x so that they can y. Created in TypeScript, React, and Node.js",
  },
  {
    name: "project number three",
    github: "https://github.com/rcarterjr/",
    url: "",
    description:
      "Here is a project I created that allows users to x so that they can y. Created in TypeScript, React, and Node.js",
  },
  {
    name: "very cool project",
    github: "https://github.com/rcarterjr/",
    url: "",
    description:
      "Here is a project I created that allows users to x so that they can y. Created in TypeScript, React, and Node.js",
  },
];
