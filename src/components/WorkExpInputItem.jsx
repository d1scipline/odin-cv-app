function WorkExpInputItem({ data, removeWorkExp, updateWorkExp }) {
  return (
    <div className="work-experience-input-item">
      <input
        placeholder="Company Name"
        onChange={(e) => updateWorkExp(data.id, "companyName", e.target.value)}
      ></input>
      <input
        placeholder="Job Title"
        onChange={(e) => updateWorkExp(data.id, "jobTitle", e.target.value)}
      ></input>
      <input
        type="date"
        onChange={(e) => updateWorkExp(data.id, "startDate", e.target.value)}
      ></input>
      <input
        type="date"
        onChange={(e) => updateWorkExp(data.id, "endDate", e.target.value)}
      ></input>
      <input
        placeholder="Key Responsibilities"
        onChange={(e) => updateWorkExp(data.id, "respon", e.target.value)}
      ></input>
      <button onClick={() => removeWorkExp(data.id)}>Remove</button>
    </div>
  );
}

export default WorkExpInputItem;
