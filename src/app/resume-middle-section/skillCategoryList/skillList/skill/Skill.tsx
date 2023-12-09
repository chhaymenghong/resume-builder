import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

interface ISkillProps {
  title: string;
  onSkillClick: () => void;
  onRemoveSkill: () => void;
}

export const Skill: React.FC<ISkillProps> = ({
  title,
  onSkillClick,
  onRemoveSkill,
}) => {
  const [isRemoveButtonVisible, setRemoveButtonVisibile] = useState(false);
  return (
    <span
      onMouseEnter={() => {
        setRemoveButtonVisibile(true);
      }}
      onMouseLeave={() => {
        setRemoveButtonVisibile(false);
      }}
      onClick={onSkillClick}
      className={`relative`}
    >
      <Button
        onClick={onRemoveSkill}
        className={`mr-1 absolute -top-2 -left-10 ${
          isRemoveButtonVisible ? "" : "hidden"
        }`}
        color="danger"
        variant="faded"
        isIconOnly
        aria-label="Delete"
      >
        <FaTrash />
      </Button>
      <span className="skill" contentEditable>{title}</span>
    </span>
  );
};
