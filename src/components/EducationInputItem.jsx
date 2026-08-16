import { Trash2 } from "lucide-react";

export default function EducationInputItem({
  data,
  removeEducation,
  updateEducation,
}) {
  return (
    <div className="education-input-item">
      <div className="education-top-row">
        <div className="degree-editor-item">
          <label>Degree</label>
          <input
            placeholder="Degree"
            onChange={(e) => {
              updateEducation(data.id, "degree", e.target.value);
            }}
          ></input>
        </div>

        <div className="university-editor-item">
          <label>University</label>
          <input
            placeholder="University"
            onChange={(e) => {
              updateEducation(data.id, "university", e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="education-bottom-row">
        <div className="education-start-date-item">
          <label>Start Date</label>
          <input
            type="month"
            onChange={(e) => {
              updateEducation(data.id, "startDate", e.target.value);
            }}
          ></input>
        </div>

        <div className="education-end-date-item">
          <label>End Date</label>
          <input
            type="month"
            onChange={(e) => {
              updateEducation(data.id, "endDate", e.target.value);
            }}
          ></input>
        </div>
      </div>

      <button
        className="delete-button delete-education"
        onClick={() => removeEducation(data.id)}
      >
        <Trash2></Trash2>
        Delete Education
      </button>
    </div>
  );
}
