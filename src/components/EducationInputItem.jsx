export default function EducationInputItem({
  data,
  removeEducation,
  updateEducation,
}) {
  return (
    <div className="education-input-item">
      <input
        placeholder="Degree"
        onChange={(e) => {
          updateEducation(data.id, "degree", e.target.value);
        }}
      ></input>
      <input
        placeholder="University"
        onChange={(e) => {
          updateEducation(data.id, "university", e.target.value);
        }}
      ></input>
      <input
        type="date"
        onChange={(e) => {
          updateEducation(data.id, "startDate", e.target.value);
        }}
      ></input>
      <input
        type="date"
        onChange={(e) => {
          updateEducation(data.id, "endDate", e.target.value);
        }}
      ></input>
      <button onClick={() => removeEducation(data.id)}>Remove</button>
    </div>
  );
}
