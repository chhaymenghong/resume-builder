// import { FaGithub, FaPhone, FaMailBulk } from "react-icons/fa";
import { useAppData } from "../../hooks/useAppData";

export const ResumeTopSection: React.FC = () => {
  const {
    resumeData: { personalInfo },
  } = useAppData();
  return (
    <div className="resume-top-section mb-4">
      <div className="name dash-outline mb-2" contentEditable>
        {personalInfo.authorName}
      </div>
      <div
        className="primary-color font-bold text-[14px] dash-outline"
        contentEditable
      >
        <div>{personalInfo.jobTitle}</div>
        <div className="metadata brown flex gap-2">
          <div>
            {/* <FaPhone /> */}
            <span>{personalInfo.phoneNum}</span>
          </div>
          <div>
            {/* <FaMailBulk />  */}
            <span>{personalInfo.email}</span>
          </div>
          <div>
            {/* <FaGithub /> */}
            <span>{personalInfo.github}</span>
          </div>
        </div>
      </div>
      <div className="summary dash-outline mt-3" contentEditable>
        {personalInfo.professionalSummary}
      </div>
    </div>
  );
};
