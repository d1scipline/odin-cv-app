export default function EducationPreviewItem({ data }) {
  function formatDate(yyyymm) {
    if (!yyyymm || !yyyymm.includes("-")) return "";

    const [year, month] = yyyymm.split("-").map(Number);

    const date = new Date(Date.UTC(year, month - 1));

    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
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
