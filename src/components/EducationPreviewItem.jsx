export default function EducationPreviewItem({ data }) {
  return (
    <div className="education-preview-item">
      <p>Degree: {data.degree}</p>
      <p>University: {data.university}</p>
      <p>
        Dates: {data.startDate} -{" "}
        {data.endDate == "" || data.endDate == null ? "Present" : data.endDate}
      </p>
    </div>
  );
}
