import Image from "next/image";
import { Bio } from "@/components/Bio";
import { ExperienceContainer } from "@/components/Experience";

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
      <Bio />
      <ExperienceContainer />
    </main>
  );
}
// put under Bio if I want skills -- idk
// <MySkills />
// when projects done, move to under ExperienceContainer
// <ProjectsContainer />

