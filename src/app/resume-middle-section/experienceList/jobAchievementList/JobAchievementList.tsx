import { useCallback } from "react";
import { useListItems } from "../../../../hooks";
import { Achievement } from "./achievement/Achievement";

interface IJobAchievementListProp {
  initialData: {
    key: number;
    description: string;
  }[];
}

type IAchievement = IJobAchievementListProp["initialData"][0];

export const JobAchievementList: React.FC<IJobAchievementListProp> = ({
  initialData,
}) => {
  const {
    items: achievements,
    onRemoveItem: onRemoveAchievement,
    onAddItem: onAddAchievement,
  } = useListItems(initialData);

  const isLatestItem = useCallback(
    (achievement: IAchievement) => {
      const maxKey = Math.max(
        ...achievements.map((achievement) => achievement.key)
      );
      return achievement.key === maxKey;
    },
    [achievements]
  );

  const listOfAchievementUI = achievements.map((achievement) => {
    return (
      <Achievement
        achievement={achievement}
        onAchievementClick={() => {
          if (isLatestItem(achievement)) {
            onAddAchievement({
              key: -1,
              description: "Add your achievement / responsibility here",
            });
          }
        }}
        onRemoveAchievement={() => {
          onRemoveAchievement(achievement);
        }}
      />
    );
  });

  return <ul className="more relative"> {listOfAchievementUI} </ul>;
};
