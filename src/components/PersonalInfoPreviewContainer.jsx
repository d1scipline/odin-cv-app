function PersonalInfoPreviewContainer({ personalInfo }) {
  return (
    <div className="personal-info-preview-container">
      <h2>Personal Information</h2>
      <p>Full Name: {personalInfo.fullName}</p>
      <p>Professional Title: {personalInfo.title}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>
      <p>Location: {personalInfo.location}</p>
      <p>Summary: {personalInfo.summary}</p>
    </div>
  );
}

export default PersonalInfoPreviewContainer;
