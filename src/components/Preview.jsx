import EducationPreviewContainer from "./EducationPreviewContainer";
import PersonalInfoPreviewContainer from "./PersonalInfoPreviewContainer";
import SkillsPreviewContainer from "./SkillsPreviewContainer";
import WorkExpPreviewContainer from "./WorkExpPreviewContainer";

function Preview() {
  return (
    <div className="preview">
      <h1>Preview</h1>
      <PersonalInfoPreviewContainer></PersonalInfoPreviewContainer>
      <WorkExpPreviewContainer></WorkExpPreviewContainer>
      <EducationPreviewContainer></EducationPreviewContainer>
      <SkillsPreviewContainer></SkillsPreviewContainer>
    </div>
  );
}

export default Preview;
