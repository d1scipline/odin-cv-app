import EducationPreviewItem from "./EducationPreviewItem";

function EducationPreviewContainer({ education }) {
  return (
    <div className="education-preview-container">
      <h2 className="preview-h2">Education</h2>
      <hr></hr>
      <div className="education-preview-items">
        {education.map((item) => {
          return (
            <EducationPreviewItem
              key={item.id}
              data={item}
            ></EducationPreviewItem>
          );
        })}
      </div>
    </div>
  );
}

export default EducationPreviewContainer;
