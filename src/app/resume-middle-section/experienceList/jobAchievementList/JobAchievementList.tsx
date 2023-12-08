import { useCallback } from "react";
import { useListItems } from "../../../../hooks";
import { Achievement } from "./achievement/Achievement";

const sampleListOfAchievement = [
    {
        key: 0,
        description: 'Build and maintain continuous integration and continuous delivery (CI/CD) pipelines.',
        placeholder: false
    },
    {
        key: 2,
        description: 'Add your achievement here',
        placeholder: true
    },
];

type IAchievement = typeof sampleListOfAchievement[0];

export const JobAchievementList: React.FC = () => {
    const {
        items: achievements,
        onRemoveItem: onRemoveAchievement,
        onAddItem: onAddAchievement
    } = useListItems(sampleListOfAchievement);

    const isLatestItem = useCallback((achievement: IAchievement) => {
        const maxKey = Math.max(...achievements.map(achievement => achievement.key));
        return achievement.key === maxKey
    }, [achievements]);

    const listOfAchievementUI = achievements.map(achievement => {
        return (
            <Achievement 
                achievement={achievement} 
                onAchievementClick={() => {
                    if(isLatestItem(achievement)) {
                        onAddAchievement({
                            key: -1,
                            description: 'Add your achievement here',
                            placeholder: true
                        })
                    }
                }} 
                onRemoveAchievement={() => {onRemoveAchievement(achievement)}}
            />
        )
    });

    return (
        <ul className="more relative"> {listOfAchievementUI} </ul>
    );
};