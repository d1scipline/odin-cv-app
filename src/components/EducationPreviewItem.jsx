export default function EducationPreviewItem({ data }) {
  function formatDate(yyyymm) {
    const [year, month] = yyyymm.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  }

  return (
    <div className="education-preview-item">
      <div className="education-preview-header">
        <span className="preview-degree-name">{data.degree}</span>
        <span>
          {data.startDate == "" || data.startDate == null
            ? ""
            : formatDate(data.startDate)}{" "}
          -{" "}
          {data.endDate == "" || data.endDate == null
            ? "Present"
            : formatDate(data.endDate)}
        </span>
      </div>
      <span>{data.university}</span>
    </div>
  );
}
