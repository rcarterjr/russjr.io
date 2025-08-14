import { ProjectType, MOCK_PROJECTS } from "@/public/projects";

export function ProjectsContainer() {
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
