import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

interface IAchievementProp {
    achievement: {
        key: number,
        description: string
    },
    onAchievementClick: () => void,
    onRemoveAchievement: () => void;
}

export const Achievement: React.FC<IAchievementProp> = ({achievement, onAchievementClick, onRemoveAchievement}) => {
    const [isRemoveButtonVisible, setRemoveButtonVisibile] = useState(false);
    return (
        <li 
            onMouseEnter={() => {
                setRemoveButtonVisibile(true)
            }}
            onMouseLeave={() => {
                setRemoveButtonVisibile(false)
            }}
            onClick={onAchievementClick}
            className={`relative`}
            key={achievement.key}>

            <Button onClick={onRemoveAchievement} className={`mr-1 absolute -top-2 -left-11 ${isRemoveButtonVisible ? '' : 'hidden'}`} color="danger"variant="faded" isIconOnly aria-label="Delete">
                <FaTrash />
            </Button>

            <span contentEditable>
                {achievement.description}
            </span>
        </li>
    );
}