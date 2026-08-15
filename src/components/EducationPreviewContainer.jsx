import EducationPreviewItem from "./EducationPreviewItem";

function EducationPreviewContainer({ education }) {
  return (
    <div className="education-preview-container">
      <h2>Education</h2>
      {education.map((item) => {
        return (
          <EducationPreviewItem
            key={item.id}
            data={item}
          ></EducationPreviewItem>
        );
      })}
    </div>
  );
}

export default EducationPreviewContainer;
