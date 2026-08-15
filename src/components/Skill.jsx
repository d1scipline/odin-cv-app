function Skill({ skill, removeSkill }) {
  return (
    <div className="skill">
      <span>{skill.skill}</span>
      <i onClick={() => removeSkill(skill.id)}>Remove</i>
    </div>
  );
}

export default Skill;
