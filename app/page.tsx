import Image from "next/image";
import { myJobs, JobType } from "@/public/jobs";
import { MOCK_PROJECTS, ProjectType } from "@/public/projects";

/*
  * TODO:
  * - link projects
  * - add resume download
*/

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <LeftSection />
      <RightSection />
    </div>
  );
}

function LeftSection() {
  return (
    <header className="z-10 p-10 pb-0 md:p-24 flex-col flex-1 basis-1/4 w-full max-w-5xl items-center justify-between font-mono md:sticky self-start top-0">
      <h1 className="text-2xl">russell carter</h1>
      <h2>software engineer</h2>
      <div className="flex mt-4">
        <a
          href="https://linkedin.com/in/russellcarterjr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin-app-white-icon.svg"
            height={20}
            width={20}
            alt="LinkedIn"
            className="mr-6"
          />
        </a>
        <a
          href="mailto: russell.c12@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>russell.c12@gmail.com</p>
        </a>
      </div>
    </header>
  );
}

function RightSection() {
  return (
    <main className="z-10 flex flex-col flex-1 basis-1/2 p-10 md:p-24 md:pl-0  w-full max-w-5xl justify-between font-mono">
      <MyBio />
      <ExperienceContainer />
    </main>
  );
}
// put under MyBio if I want skills -- idk
// <MySkills />
// when projects done, move to under ExperienceContainer
// <ProjectsContainer />


function MyBio() {
  const yoe = (new Date()).getFullYear() - 2019

  return (
    <>
      <h1 className="pb-6">bio</h1>
      <p className="m-0 text-sm opacity-50">
        Hi, I’m Russell Carter — a Software Engineer with {yoe} years of experience
        building web, mobile, and backend systems. I’m proficient in TypeScript,
        JavaScript, React, Node.js, Python, and Rust (btw), with a strong focus
        on designing and developing scalable APIs and backend architectures.
        I hold a Bachelor’s degree in Computer Science. I also use
        Neovim (btw) and run Arch Linux (btw).
      </p>
    </>
  );
}

function MySkills() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Rust",
    "React",
    "React Native",
    "Vue.js",
    "MongoDB",
    "PostgreSQL",
    "AWS"
  ]

  // TypeScript • JavaScript • React • Node.js • Python • Rust • React Native • MongoDB • PostgreSQL • AWS
  return (
    <>
      <h1 className="py-6">skills</h1>
      <p className="m-0 text-sm opacity-50"> {skills.join(" • ")}</p>
    </>
  )
}

function ExperienceContainer() {
  return (
    <>
      <h1 className="py-6">experience</h1>
      {myJobs.map((job: JobType) => (
        <Job {...job} key={job.company} />
      ))}
    </>
  );
}

function Job({ company, title, description, years, link }: JobType) {
  return (
    <a
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex py-4">
        <div className="flex flex-1">
          <p className="m-0 text-sm opacity-50 pr-4">{years}</p>
        </div>
        <div className="flex flex-3 flex-col">
          <h1>{company}</h1>
          <h4 className="text-sm pb-2">{title}</h4>
          <p className="m-0 text-sm opacity-50">{description}</p>
        </div>
      </div>
    </a>
  );
}

function ProjectsContainer() {
  return (
    <>
      <h1 className="py-6">projects</h1>
      <div className="mb-32 grid">
        {MOCK_PROJECTS.map((project) => (
          <Project {...project} key={project.name} />
        ))}
      </div>
    </>
  );
}

function Project({ name, github, url, description }: ProjectType) {
  const link = url ?? github;
  return (
    <a
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 font-semibold">
        {name}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 text-sm opacity-50">{description}</p>
    </a>
  );
}
