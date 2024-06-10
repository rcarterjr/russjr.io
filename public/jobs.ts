export type JobType = {
  company: string;
  years: string;
  title: string;
  description: string;
};

export const myJobs: JobType[] = [
  {
    company: "Fisker Inc.",
    years: "Feb 2023 - May 2024",
    title: "Full Stack Software Engineer",
    description:
      "worked on the integrations team where I created several endpoints with Nest.js",
  },
  {
    company: "Uhuru Network",
    years: "April 2020 - Dec 2022",
    title: "Full Stack Software Engineer",
    description:
      "created several mobile and web apps with React and React Native, TypeScript, JavaScript, Node.js, MongoDB, and others.",
  },
  {
    company: "ASRC Federal",
    years: "May 2019 - Sept 2020",
    title: "Software Engineer",
    description:
      "worked on the integrations team where I created several endpoints with Nest.js",
  },
];
