import EducationInput from "./EducationInput";
import PersonalInfoInput from "./PersonalInfoInput";
import SkillsInput from "./SkillsInput";
import WorkExpInput from "./WorkExpInput";

function Editor({ data, setData }) {
  const updatePersonalInfo = (key, info) => {
    setData({ ...data, personalInfo: { ...data.personalInfo, [key]: info } });
  };

  return (
    <div className="editor">
      <h1>Editor</h1>
      <PersonalInfoInput
        data={data}
        updatePersonalInfo={updatePersonalInfo}
      ></PersonalInfoInput>
      <WorkExpInput></WorkExpInput>
      <EducationInput></EducationInput>
      <SkillsInput></SkillsInput>
    </div>
  );
}

export default Editor;
