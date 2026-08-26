function ProjectCard({ project }) {
  return (
    <article>
      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <a href={project.liveUrl} target="_blank" rel="noreferrer">
        Live Site
      </a>

      <a href={project.githubUrl} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </article>
  );
}

export default ProjectCard;