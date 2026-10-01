import SkillCard from "../components/SkillCard";
import skills from "../data/skills";

function Skills() {
  return (
    <div>
      <h1 className="page-title">Skills</h1>

      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

export default Skills;