import { useCallback } from "react";
import { useListItems } from "../../../../hooks";
import { Skill } from "./skill/Skill";

interface ISkillListProp {
  initialData: {
    key: number;
    title: string;
  }[];
  skillPlaceholder: {
    key: number,
    title: string
  }
}

type ISkill = ISkillListProp["initialData"][0];

export const SkillList: React.FC<ISkillListProp> = ({ initialData, skillPlaceholder }) => {
  const {
    items: skills,
    onRemoveItem: onRemoveSkill,
    onAddItem: onAddSkill,
  } = useListItems(initialData);

  const isLatestItem = useCallback(
    (skill: ISkill) => {
      const maxKey = Math.max(...skills.map((skill) => skill.key));
      return skill.key === maxKey;
    },
    [skills]
  );

  const listOfSkillUI = skills.map((skill) => {
    return (
      <Skill
        key={skill.key}
        title={skill.title}
        onSkillClick={() => {
          if (isLatestItem(skill)) {
            onAddSkill(skillPlaceholder);
          }
        }}
        onRemoveSkill={() => {
          onRemoveSkill(skill);
        }}
      />
    );
  });

  return <div className="flex flex-wrap gap-3 mt-1">{listOfSkillUI}</div>;
};
