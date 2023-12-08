import { EducationList } from "./educationList/EducationList";
import { ExperienceList } from "./experienceList/ExperienceList";
import { SkillCategoryList } from "./skillCategoryList/SkillCategoryList";

export const ResumeMiddleSection: React.FC = () => {
  return (
    <div className="resume-middle-section">
      <div className="left-container mr-[5px]">
        <div className="experience-section">
          <div
            className="experience-header main-title dash-outline"
            contentEditable
          >
            EXPERIENCES
          </div>
          <ExperienceList />
        </div>
      </div>
      <div className="right-container">
        <div className="education-container">
          <div
            className="education-title main-title dash-outline"
            contentEditable
          >
            EDUCATION
          </div>
          <EducationList />
        </div>
        <div className="skill-container">
          <div className="skill-title main-title dash-outline" contentEditable>
            SKILLS
          </div>
          <SkillCategoryList />
        </div>
      </div>
    </div>
  );
};
