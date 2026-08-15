export default function WorkExpPreviewItem({ data }) {
  return (
    <div className="work-experience-preview-item">
      <p>Company Name: {data.companyName}</p>
      <p>Professional Title: {data.jobTitle}</p>
      <p>
        {data.startDate} -{" "}
        {data.endDate == "" || data.endDate == null ? "Present" : data.endDate}
      </p>
      <p>{data.respon}</p>
    </div>
  );
}
