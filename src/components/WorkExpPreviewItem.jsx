export default function WorkExpPreviewItem({ data }) {
  function formatDate(yyyymm) {
    const [year, month] = yyyymm.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleString("default", { month: "long", year: "numeric" });
  }
  return (
    <div className="work-experience-preview-item">
      <div className="work-experience-preview-title">
        <span className="work-experience-preview-company">
          {data.companyName}
        </span>
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
      <span className="work-experience-preview-job-title">{data.jobTitle}</span>
      <span className="work-experience-preview-respon">
        {data?.respon ? (
          <ul>
            {data.respon
              .split("\n")
              .filter(Boolean)
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>
        ) : null}
      </span>
    </div>
  );
}
