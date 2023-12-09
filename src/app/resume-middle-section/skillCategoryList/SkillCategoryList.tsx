import { useAppData, useListItems } from "../../../hooks";
import { DecorateWithAddAction, DecorateWithRemoveAction } from "../../../components";
import { SkillList } from "./skillList/SkillList";

export const SkillCategoryList: React.FC = () => {
  const {resumeData} = useAppData();
  const {
    items: listOfSkillCategory,
    onRemoveItem: onRemoveSkillCategory,
    onAddItem: onAddSkillCategory,
  } = useListItems(resumeData.skillMetaData.skillCategories);

  const listOfSkillCategoryUI = listOfSkillCategory.map((skillCategory) => {
    return (
      <div className="pb-3 dash-outline mt-2" key={skillCategory.key}>
        <DecorateWithRemoveAction
          label="Remove Category"
          action={() => onRemoveSkillCategory(skillCategory)}
        >
          <div contentEditable className="primary-color font-bold text-[14px]">
            {skillCategory.categoryName}
          </div>
          <SkillList skillPlaceholder={resumeData.skillMetaData.skillPlaceholder} initialData={skillCategory.skills} />
        </DecorateWithRemoveAction>
      </div>
    );
  });

  return (
    <DecorateWithAddAction
      label="Add Category"
      action={() => onAddSkillCategory(resumeData.skillMetaData.skillCategoryPlaceholder)}
    >
      {listOfSkillCategoryUI}
    </DecorateWithAddAction>
  );
};
