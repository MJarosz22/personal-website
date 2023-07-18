import ProjectCard from "./ProjectCard";
import projects from "./projects.json";

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  url?: string;
  img_source: string;
  source_code_url: string;
  contributors: [string];
}

export default function ProjectsPanel() {
  return (
    <>
    <div className="flex flex-col items-start md:self-start md:ml-40">

        <h2 className=" text-4xl z-0 self-start pt-8">Projects</h2>
        <div className="h-2 w-32 my-3 bg-gray-500 self-start"></div>
        <p className="text-xl">Click on project's title to see the description.</p>
      </div>
      <div className="flex flex-wrap items-start  justify-center gap-10 my-10 px-5 w-full">
        {projects.projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </>
  );
}
