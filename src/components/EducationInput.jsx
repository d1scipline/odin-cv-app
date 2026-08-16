import EducationInputItem from "./EducationInputItem";
import { GraduationCap, Plus } from "lucide-react";

function EducationInput({
  data,
  addEducation,
  removeEducation,
  updateEducation,
}) {
  return (
    <div className="education-input-container">
      <div className="editor-title">
        <GraduationCap></GraduationCap> <h2>Education</h2>
      </div>
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
      <button onClick={addEducation} className="add-button">
        <Plus></Plus>Add Entry
      </button>
    </div>
  );
}

export default EducationInput;
