import { Project } from "./ProjectsPanel";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className=" max-w-sm bg-base-100 shadow-xl">
      <figure>
        <img src={project.img_source} className=" w-full" alt="Project image" />
      </figure>
      <div className="card-body md:min-h-64">
        <div className="collapse bg-base-100 ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium underline">
            {project.title}
          </div>
          <div className="collapse-content">
            <p>{project.description}</p>
          </div>
        </div>
        <p className="ml-4">{project.date}</p>
        <div className="card-actions justify-end">
          {project.url != null ? (
            <a href={project.url} className="badge badge-outline">
              App
            </a>
          ) : null}
          {project.source_code_url != null ? (
            <a href={project.source_code_url} className="badge badge-outline">
              Source code
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
