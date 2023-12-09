import { DecorateWithAddAction, DecorateWithRemoveAction } from "../../../components";
import { useListItems } from "../../../hooks";

const sampleData = {
    key: 0,
    universityName: 'University of Washington',
    degree: 'BS',
    subject: 'Computer Science',
    duration: 'YYYY - YYYY',
    location: 'City, State'
};

export const EducationList: React.FC = () => {
    const {
        items: educations,
        onRemoveItem: onRemoveEducation,
        onAddItem: onAddEducation
    } = useListItems([sampleData]);

    const listOfEducationUI = educations.map(education => {
        return (
            <div contentEditable key={education.key} className="pb-1 dash-outline">
                <DecorateWithRemoveAction label="Remove Education" action={() => onRemoveEducation(education)}>
                    <div className="school primary-color font-bold text-[14px]">
                        {education.universityName}
                    </div>
                    <div className="degree">
                        <span>{education.degree} in {education.subject}</span>
                        <span className="ml-1">{education.duration}</span>
                        <span className="ml-1">{education.location}</span>
                    </div>
                </DecorateWithRemoveAction>
            </div>
        );
    });
    return (
        <>
            <DecorateWithAddAction label="Add Education" action={() => onAddEducation(sampleData)}>
                {listOfEducationUI}
            </DecorateWithAddAction>
        </>
    );
}