import { useCallback } from "react";
import { useListItems } from "../../../../hooks";
import { Achievement } from "./achievement/Achievement";

const sampleListOfAchievement = [
    {
        key: 0,
        description: `Designed and built a correlative and interactive telemetry visualization desktop application entirely from scratch using modern technologies such as
        ElectronJS, Angular, Highcharts, Elasticsearch, and Kafka. The tool can visualize both historical and real-time data, and
        was praised as "the best tool we wished we had a long time ago" by many Deep Space Network operators`,
        placeholder: false
    },
    {
        key: 1,
        description: 'Wrote extensive integration tests for the tool using Spectron, Mocha, and Chai',
        placeholder: false
    },
    {
        key: 2,
        description: 'Wrote various NodeJS scripts to automatically check and verify data integrity and compliance with the interface agreement',
        placeholder: false
    },
    {
        key: 2,
        description: `Led the migration and modernization of many web applications to include modern build processes and up-to-date industry best practices which
        significantly improved their performance, maintainability, and deployment workflow. One of them involved migrating an AngularJS 1.x application to Angular 7.x.x`,
        placeholder: false
    },
    {
        key: 3,
        description: `Mentored interns and educated other team members about new technologies`,
        placeholder: false
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