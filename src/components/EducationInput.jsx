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
      {data.length != 0 && (
        <div className="education-input-items-container">
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
      )}
    </div>
  );
}

export default EducationInput;
