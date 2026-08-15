import EducationInputItem from "./EducationInputItem";

function EducationInput({
  data,
  addEducation,
  removeEducation,
  updateEducation,
}) {
  return (
    <div className="education-input-container">
      <h2>Education</h2>
      <button onClick={addEducation}>Add</button>
      {data.map((item) => {
        return (
          <EducationInputItem
            data={item}
            removeEducation={removeEducation}
            updateEducation={updateEducation}
            key={item.id}
          ></EducationInputItem>
        );
      })}
    </div>
  );
}

export default EducationInput;
