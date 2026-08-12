import EducationInput from "./EducationInput";
import PersonalInfoInput from "./PersonalInfoInput";
import SkillsInput from "./SkillsInput";
import WorkExpInput from "./WorkExpInput";

function Editor() {
  return (
    <div className="editor">
      <h1>Editor</h1>
      <PersonalInfoInput></PersonalInfoInput>
      <WorkExpInput></WorkExpInput>
      <EducationInput></EducationInput>
      <SkillsInput></SkillsInput>
    </div>
  );
}

export default Editor;
