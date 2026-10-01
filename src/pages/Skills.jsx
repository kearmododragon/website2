import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

function Skills() {
  return (
<div>
  <h1 className="page-title">Skills</h1>

  <section className="skills-grid">
    {skills.map((skill) => (
      <SkillCard key={skill.name} skill={skill} />
    ))}
  </section>
</div>
  );
}

export default Skills;