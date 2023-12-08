import { useCallback } from "react";
import { useListItems } from "../../../../hooks";
import { Skill } from "./skill/Skill";

const initialData = [
    {
        key: 0,
        title: 'Skill A'
    }
];

type ISkill = typeof initialData[0];

export const SkillList: React.FC = () => {
    const {
        items: skills,
        onRemoveItem: onRemoveSkill,
        onAddItem: onAddSkill
    } = useListItems(initialData);

    const isLatestItem = useCallback((skill: ISkill) => {
        const maxKey = Math.max(...skills.map(skill => skill.key));
        return skill.key === maxKey
    }, [skills]);

    const listOfSkillUI = skills.map(skill => {
        return (
            <Skill key={skill.key}
                title={skill.title}
                onSkillClick={() => {
                    if(isLatestItem(skill)) {
                        onAddSkill({
                            key: -1,
                            title: 'Skill A',
                        });
                    }
                }} 
                onRemoveSkill={() => {onRemoveSkill(skill)}}
            />
        );
    });

    return (
        <div className="flex flex-wrap gap-3 mt-1">
            {listOfSkillUI}
        </div>
    );
};