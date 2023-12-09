import {
  DecorateWithAddAction,
  DecorateWithRemoveAction,
} from "../../../components";
import { JobAchievementList } from "./jobAchievementList/JobAchievementList";
import { useAppData, useListItems } from "../../../hooks";

export const ExperienceList: React.FC = () => {
  const { resumeData } = useAppData();
  const {
    items: experiences,
    onRemoveItem: onRemoveExperience,
    onAddItem: onAddExperience,
  } = useListItems(resumeData.companyMetaData.initialData);

  const listOfExperienceUI = experiences.map((experience) => {
    return (
      <div className="p-1 dash-outline">
        <DecorateWithRemoveAction
          label="Remove Experience"
          action={() => onRemoveExperience(experience)}
        >
          <div contentEditable className="primary-color font-bold text-[14px]">
            {experience.companyName}
          </div>
          <div contentEditable className="second-color">
            <span className="mr-1 font-bold">{experience.jobTitle}</span>
            <span className="metadata">
              {experience.startDate} - {experience.endDate}
              <span> {experience.location} </span>
            </span>
          </div>
          <div contentEditable className="description mb-2 mt-1">
            {experience.jobDescription}
          </div>
          <JobAchievementList initialData={experience.achievements} />
        </DecorateWithRemoveAction>
      </div>
    );
  });

  return (
    <DecorateWithAddAction
      label="Add Experience"
      action={() => onAddExperience(resumeData.companyMetaData.placeholder)}
    >
      {listOfExperienceUI}
    </DecorateWithAddAction>
  );
};
