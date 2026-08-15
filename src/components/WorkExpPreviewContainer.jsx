import WorkExpPreviewItem from "./WorkExpPreviewItem";

function WorkExpPreviewContainer({ workExperience }) {
  return (
    <div className="work-experience-preview-container">
      <h2>Work Experience</h2>
      {workExperience.map((item) => {
        return <WorkExpPreviewItem data={item} key={item.id} />;
      })}
    </div>
  );
}

export default WorkExpPreviewContainer;
