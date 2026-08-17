import { X } from "lucide-react";

function Skill({ skill, removeSkill }) {
  return (
    <div className="skill">
      <span>{skill.skill}</span>
      <X onClick={() => removeSkill(skill.id)} className="skill-remove"></X>
    </div>
  );
}

export default Skill;
