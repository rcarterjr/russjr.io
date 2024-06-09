import Image from "next/image";
import { myJobs, JobType } from "@/public/jobs";

export default function Home() {
  return (
    <div className="flex">
      <LeftSection />
      <RightSection />
    </div>
  );
}

function LeftSection() {
  return (
    <header className="z-10 p-24 w-full max-w-5xl items-center justify-between font-mono sticky self-start top-0">
      <h1>russell carter</h1>
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
    <main className="z-10 p-24 w-full max-w-5xl items-center justify-between font-mono">
      <MyBio />
      <ExperienceContainer />
      <ProjectsContainer />
    </main>
  );
}

function MyBio() {
  return (
    <>
      <h1 className="py-6">bio</h1>
      <p className="m-0 max-w-[60ch] text-sm opacity-50">
        Hello my name is Russell Carter. I am a software Engineer with 5 years
        of experience. I have been a full stack developer for the last 4 years
        of my career. I am proficient in TypeScript, JavaScript, React, Next.js,
        Node.js, and many others.
      </p>
    </>
  );
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

function Job({ company, title, description, years }: JobType) {
  return (
    <div className="flex py-4">
      <div className="flex">
        <p className="m-0 max-w-[60ch] text-sm opacity-50">{years}</p>
      </div>
      <div className="flex flex-col">
        <h1>{company}</h1>
        <h4>{title}</h4>
        <p className="m-0 max-w-[60ch] text-sm opacity-50">{description}</p>
      </div>
    </div>
  );
}

function ProjectsContainer() {
  return (
    <>
      <h1 className="py-6">projects</h1>
      <div className="mb-32 grid text-center">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            project 1{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50">
            This is the details of project 1 where I make something really cool
            and you aare so impressed
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            project 2{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50">
            This is the details of project 2 where I make something really cool
            and you are so impressed
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            project 3{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 text-sm opacity-50">
            This is the details of project 3 where I make something really cool
            and you are so impressed
          </p>
        </a>
      </div>
    </>
  );
}
