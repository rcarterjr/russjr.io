import { JobType, myJobs } from "@/public/jobs";

export function ExperienceContainer() {
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
