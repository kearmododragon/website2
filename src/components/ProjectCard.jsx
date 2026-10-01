function ProjectCard({ project }) {
  return (
    <article>
      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <img
        src={project.image}
        alt={`${project.title} screenshot`}
      />

      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="project-buttons">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Live Site
        </a>

        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;