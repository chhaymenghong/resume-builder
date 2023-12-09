import { DecorateWithAddAction, DecorateWithRemoveAction } from "../../../components";
import { JobAchievementList } from "./jobAchievementList/JobAchievementList";
import { useListItems } from "../../../hooks";

const placeholderData = {
    key: -1,
    companyName: 'NASA, Jet Propulsion Laboratory',
    jobTitle: 'Full Stack Developer',
    startDate: '09/2017',
    endDate: 'Present',
    location: 'Pasadena, CA',
    jobDescription: 'Worked in three teams over the years and contributed to the success of many ground system projects'
};
export const ExperienceList: React.FC = () => {
    const {items: experiences, onRemoveItem: onRemoveExperience, onAddItem: onAddExperience} = useListItems([{
        ...placeholderData,
        key: 0
    }]);

    const listOfExperienceUI = experiences.map(experience => {
        return (
            <div className="p-1 dash-outline">
                <DecorateWithRemoveAction label="Remove Experience" action={() => onRemoveExperience(experience)}>
                    <div contentEditable className="primary-color font-bold text-[17px]">
                        {experience.companyName}
                    </div>
                    <div contentEditable className="second-color">
                        Job title
                        <span className="metadata">
                        {experience.startDate} - {experience.endDate}
                            <span> {experience.location} </span>
                        </span>
                    </div>
                    <div contentEditable className="description mb-2">
                        {experience.jobDescription}
                    </div>
                    <JobAchievementList />
                </DecorateWithRemoveAction>
            </div> 
        );
    });

    return (
        <DecorateWithAddAction label="Add Experience" action={() => onAddExperience(placeholderData)}>
            {listOfExperienceUI}
        </DecorateWithAddAction>
    );
}