import { useAppData } from "../../hooks/useAppData";

export const ResumeTopSection: React.FC = () => {
  const { resumeData } = useAppData();
  return (
    <div className="resume-top-section">
      <div className="name dash-outline" contentEditable>
        {resumeData.authorName}
      </div>
      <div className="primary-color font-bold text-[17px] dash-outline" contentEditable>
        <span>{resumeData.jobTitle}</span>
        <span className="metadata brown">
          <span>{resumeData.phoneNum}</span>
          <span>{resumeData.email}</span>
          <span>{resumeData.github}</span>
        </span>
      </div>
      <div className="summary dash-outline" contentEditable>
        {resumeData.professionalSummary}
      </div>
    </div>
  );
};
