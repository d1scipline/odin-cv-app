export default function WorkExpPreviewItem({ data }) {
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
