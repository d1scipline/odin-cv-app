function PersonalInfoInput({ data, updatePersonalInfo }) {
  return (
    <div className="personal-info-input-container">
      <h2>Personal Information</h2>
      <label>Full Name</label>
      <input
        placeholder="Full Name"
        onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
      ></input>
      <label>Professional Title</label>
      <input
        placeholder="Professional Title"
        onChange={(e) => updatePersonalInfo("title", e.target.value)}
      ></input>
      <input
        placeholder="Email"
        onChange={(e) => updatePersonalInfo("email", e.target.value)}
      ></input>
      <input
        placeholder="Phone"
        onChange={(e) => updatePersonalInfo("phone", e.target.value)}
      ></input>
      <input
        placeholder="Location"
        onChange={(e) => updatePersonalInfo("location", e.target.value)}
      ></input>
      <input
        placeholder="Summary"
        onChange={(e) => updatePersonalInfo("summary", e.target.value)}
      ></input>
    </div>
  );
}

export default PersonalInfoInput;
