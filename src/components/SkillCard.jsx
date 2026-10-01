function SkillCard({ skill }) {
  return (
    <article>
      {skill.icon && <skill.icon className="skill-icon" />}

      <h2>{skill.name}</h2>

      <h3>Used in:</h3>

      <ul>
        {skill.projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;