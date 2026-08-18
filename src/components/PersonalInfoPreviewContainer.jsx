import { Mail, MapPin, Phone } from "lucide-react";

function PersonalInfoPreviewContainer({ personalInfo }) {
  return (
    <div className="personal-info-preview-container">
      <div className="preview-header-section">
        <span className="preview-first-name">{personalInfo.fullName}</span>
        <span className="preview-title">{personalInfo.title}</span>
      </div>
      <div className="preview-personal-info">
        <span>
          <Mail></Mail> {personalInfo.email}
        </span>
        <span>
          <Phone></Phone> {personalInfo.phone}
        </span>
        <span>
          <MapPin></MapPin>
          {personalInfo.location}
        </span>
      </div>
      <div className="preview-summary">
        <h2 className="preview-h2">Professional Summary</h2>
        <hr></hr>
        <p>{personalInfo.summary}</p>
      </div>
    </div>
  );
}

export default PersonalInfoPreviewContainer;
