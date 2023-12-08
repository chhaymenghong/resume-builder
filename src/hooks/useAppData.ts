import { createContext, useContext } from 'react';

export const initialContextData = {
    resumeData: {
        authorName: 'James Bond 007',
        jobTitle: 'Licensed to Kill Professional Poker Player',
        phoneNum: '(007)-Royal-Flush',
        email: 'jamebond007@casino.royal',
        github: 'github.com/bond',
        professionalSummary: `James Bond is a fictional British secret agent known for his iconic role
        in espionage and international intrigue. As a suave and resourceful spy,
        Bond is responsible for thwarting global threats, dismantling criminal
        organizations, and preserving national security. His duties include
        undercover missions, intelligence gathering, combat, and diplomacy, all
        while maintaining a charismatic and debonair persona`
    }
};

type IAppContext = typeof initialContextData;

export const AppContext = createContext<IAppContext>(initialContextData);

export const useAppData = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppData must be used within a AppProvider');
    }
    return context;
}