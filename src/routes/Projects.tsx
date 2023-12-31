import Footer from "../components/Footer"
import NavigationBar from "../components/NavigationBar"
import ProjectsPanel from "../components/Projects/ProjectsPanel"

export default function Projects() {
  return (
    <div className="flex flex-col items-center">
        <NavigationBar/>
        <div className="text-4xl flex flex-col items-center text-white bg-cyan-950 w-screen pt-24 pb-16 px-10"></div>
        <ProjectsPanel/>
        <Footer/>
    </div>
  )
}
