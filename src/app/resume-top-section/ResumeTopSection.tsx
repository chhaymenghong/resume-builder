// import { FaGithub, FaPhone, FaMailBulk } from "react-icons/fa";
import { useAppData } from "../../hooks/useAppData";

export const ResumeTopSection: React.FC = () => {
  const { resumeData } = useAppData();
  return (
    <div className="resume-top-section mb-4">
      <div className="name dash-outline mb-3" contentEditable>
        {resumeData.authorName}
      </div>
      <div
        className="primary-color font-bold text-[17px] dash-outline"
        contentEditable
      >
        <div>{resumeData.jobTitle}</div>
        <div className="metadata brown flex gap-2">
          <div>
            {/* <FaPhone /> */}
            <span>{resumeData.phoneNum}</span>
          </div>
          <div>
            {/* <FaMailBulk />  */}
            <span>{resumeData.email}</span>
          </div>
          <div>
            {/* <FaGithub /> */}
            <span>{resumeData.github}</span>
          </div>
        </div>
      </div>
      <div className="summary dash-outline mt-3" contentEditable>
        {resumeData.professionalSummary}
      </div>
    </div>
  );
};
