export type JobType = {
  company: string;
  years: string;
  title: string;
  description: string;
  link: string;
};

export const myJobs: JobType[] = [
  {
    company: "DISQO",
    years: "June 2024 - Present",
    title: "Full Stack Software Engineer",
    description:
      "Working on a range of advertising projects with a tech stack spanning from Python to Rust.",
    link: "https://disqo.com",
  },
  {
    company: "Fisker Inc.",
    years: "Feb 2023 - May 2024",
    title: "Full Stack Software Engineer",
    description:
      "Developed the API Gateway and multiple endpoints using Nest.js as part of the integrations team.",
    link: "https://techcrunch.com/2024/12/26/the-fall-of-ev-startup-fisker-a-comprehensive-timeline",
  },
  {
    company: "Uhuru Network",
    years: "April 2020 - Dec 2022",
    title: "Full Stack Software Engineer",
    description:
      "Built and maintained mobile and web applications using React, React Native, TypeScript, JavaScript, Node.js, MongoDB, and more.",
    link: "https://uhurunetwork.com",
  },
  {
    company: "ASRC Federal",
    years: "May 2019 - Sept 2020",
    title: "Software Engineer",
    description:
      "Created open-source tooling for the team, most notably contributing to Apache Accumulo.",
    link: "https://www.asrcfederal.com",
  },
];
