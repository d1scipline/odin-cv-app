import WorkExpPreviewItem from "./WorkExpPreviewItem";

function WorkExpPreviewContainer({ workExperience }) {
  return (
    <div className="work-experience-preview-container">
      <h2 className="preview-h2">Work Experience</h2>
      <hr></hr>
      <div className="work-experience-preview-items">
        {workExperience.map((item) => {
          return <WorkExpPreviewItem data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default WorkExpPreviewContainer;
