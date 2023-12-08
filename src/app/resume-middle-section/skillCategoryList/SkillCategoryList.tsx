import { useListItems } from "../../../hooks";
import { DecorateWithAddAction, DecorateWithRemoveAction } from "../../../components";
import { SkillList } from "./skillList/SkillList";

const placeholderData = {
  key: 0,
  categoryName: "Frontend",
};
export const SkillCategoryList: React.FC = () => {
  const {
    items: listOfSkillCategory,
    onRemoveItem: onRemoveSkillCategory,
    onAddItem: onAddSkillCategory,
  } = useListItems([placeholderData]);

  const listOfSkillCategoryUI = listOfSkillCategory.map((skillCategory) => {
    return (
      <div className="pb-3 dash-outline" key={skillCategory.key}>
        <DecorateWithRemoveAction
          label="Remove Category"
          action={() => onRemoveSkillCategory(skillCategory)}
        >
          <div contentEditable className="primary-color font-bold text-[17px]">
            {skillCategory.categoryName}
          </div>
          <SkillList />
        </DecorateWithRemoveAction>
      </div>
    );
  });

  return (
    <DecorateWithAddAction
      label="Add Category"
      action={() => onAddSkillCategory(placeholderData)}
    >
      {listOfSkillCategoryUI}
    </DecorateWithAddAction>
  );
};
