import ProjectCard from './ProjectCard';
import projects from './projects.json'

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
    <div className="flex flex-col items-center justify-center gap-10 my-10 px-5 w-full max-w-lg">
                <h2 className=' text-4xl z-0 self-start'>Projects</h2>
                <div className="h-2 w-32 my-3 bg-gray-500 self-start"></div>
                {
                    projects.projects.map(project => {
                       return <ProjectCard key={project.id} project={project}/>
                    })
                }
        </div>
  )
}
