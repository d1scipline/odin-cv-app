import { User } from "lucide-react";

function PersonalInfoInput({ data, updatePersonalInfo }) {
  return (
    <div className="personal-info-input-container">
      <div className="editor-title">
        <User size={20}></User>
        <h2>Personal Information</h2>
      </div>
      <div className="personal-info-sub-container-1">
        <div className="personal-info-labeled-item">
          <label>Full Name</label>
          <input
            placeholder="Full Name"
            onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
          ></input>
        </div>
        <div className="personal-info-labeled-item">
          <label>Professional Title</label>
          <input
            placeholder="Professional Title"
            onChange={(e) => updatePersonalInfo("title", e.target.value)}
          ></input>
        </div>
      </div>
      <div className="personal-info-sub-container-2">
        <div className="personal-info-sub-container-2-left">
          <input
            placeholder="Location"
            onChange={(e) => updatePersonalInfo("location", e.target.value)}
          ></input>

          <input
            placeholder="Phone"
            onChange={(e) => updatePersonalInfo("phone", e.target.value)}
          ></input>
        </div>
        <div className="personal-info-sub-container-2-right">
          <input
            placeholder="Email"
            onChange={(e) => updatePersonalInfo("email", e.target.value)}
          ></input>
        </div>
      </div>
      <div className="summary">
        <textarea
          placeholder="Summary"
          onChange={(e) => updatePersonalInfo("summary", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default PersonalInfoInput;
