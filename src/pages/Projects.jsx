import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
<main>
  <h1 className="page-title">Projects</h1>

  <section className="projects-grid">
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </section>
</main>
  );
}

export default Projects;