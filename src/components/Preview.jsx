import EducationPreviewContainer from "./EducationPreviewContainer";
import PersonalInfoPreviewContainer from "./PersonalInfoPreviewContainer";
import SkillsPreviewContainer from "./SkillsPreviewContainer";
import WorkExpPreviewContainer from "./WorkExpPreviewContainer";

function Preview({ data }) {
  return (
    <div className="preview">
      <h1>CV Preview</h1>
      <div className="preview-container">
        <PersonalInfoPreviewContainer
          personalInfo={data.personalInfo}
        ></PersonalInfoPreviewContainer>
        <WorkExpPreviewContainer
          workExperience={data.workExp}
        ></WorkExpPreviewContainer>
        <EducationPreviewContainer
          education={data.education}
        ></EducationPreviewContainer>
        <SkillsPreviewContainer skills={data.skills}></SkillsPreviewContainer>
      </div>
      <button onClick={() => window.print()} className="print-button">
        Download CV
      </button>
    </div>
  );
}

export default Preview;
