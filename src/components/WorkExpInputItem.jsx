import { Trash2 } from "lucide-react";

function WorkExpInputItem({ data, removeWorkExp, updateWorkExp }) {
  return (
    <div className="work-experience-input-item">
      <div className="work-experience-top-container">
        <div className="company-name-editor">
          <label>Company</label>
          <input
            placeholder="Company Name"
            onChange={(e) =>
              updateWorkExp(data.id, "companyName", e.target.value)
            }
          ></input>
        </div>

        <div className="job-title-editor">
          <label>Job Title</label>
          <input
            placeholder="Job Title"
            onChange={(e) => updateWorkExp(data.id, "jobTitle", e.target.value)}
          ></input>
        </div>
      </div>

      <div className="work-experience-bottom-container">
        <div className="start-date-editor">
          <label>Start Date</label>
          <input
            type="month"
            onChange={(e) =>
              updateWorkExp(data.id, "startDate", e.target.value)
            }
          ></input>
        </div>

        <div className="end-date-editor">
          <label>End Date</label>
          <input
            type="month"
            onChange={(e) => updateWorkExp(data.id, "endDate", e.target.value)}
          ></input>
        </div>
      </div>

      <div className="key-responsibilities-editor">
        <label>Key Responsibilities</label>
        <textarea
          placeholder="Key Responsibilities"
          onChange={(e) => updateWorkExp(data.id, "respon", e.target.value)}
        ></textarea>
      </div>

      <button
        onClick={() => removeWorkExp(data.id)}
        className="delete-button delete-experience"
      >
        <Trash2></Trash2> Delete Experience
      </button>
    </div>
  );
}

export default WorkExpInputItem;
