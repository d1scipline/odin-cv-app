import SkillPreview from "./SkillPreview";

function SkillsPreviewContainer({ skills }) {
  return (
    <div className="skills-preview-container">
      <h2>Skills</h2>
      {skills.length != 0 && (
        <div className="skills-container">
          {skills.map((item) => {
            return (
              <SkillPreview skill={item.skill} key={item.id}></SkillPreview>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SkillsPreviewContainer;
