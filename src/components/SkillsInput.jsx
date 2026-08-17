import { useRef } from "react";
import Skill from "./Skill";
import { Plus, Settings } from "lucide-react";

function SkillsInput({ data, addSkill, removeSkill }) {
  const inputRef = useRef(null);

  const handleAdd = () => {
    const value = inputRef.current.value;
    if (!value.trim()) return;
    if (addSkill) {
      addSkill(value);
    }
    inputRef.current.value = "";
  };

  return (
    <div className="skills-input-container">
      <div className="editor-title">
        <Settings></Settings> <h2>Skills</h2>
      </div>
      <div className="skill-input">
        <input ref={inputRef} placeholder="Skill"></input>
        <button onClick={handleAdd} className="add-button">
          <Plus></Plus> Add
        </button>
      </div>
      {data.length !== 0 && (
        <div className="skills">
          {data.map((item) => (
            <Skill skill={item} key={item.id} removeSkill={removeSkill}></Skill>
          ))}
        </div>
      )}
    </div>
  );
}

export default SkillsInput;
