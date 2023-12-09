import { createContext, useContext } from 'react';

export const initialContextData = {
    resumeData: {
        authorName: 'Menghong Chhay',
        jobTitle: 'Full Stack Developer',
        phoneNum: '(xxx)-xxx-xxx',
        email: 'chhaymenghong@yahoo.com',
        github: 'github.com/chhaymenghong',
        professionalSummary: `Experienced Full Stack Developer with a strong background in developing and deploying comprehensive web solutions. Skilled in both front-end and back-end development, adept at creating responsive, user-friendly interfaces, and robust server-side applications. Excel at project management, from conceptualization to launch, ensuring optimal performance, scalability, and security. Proven ability to work collaboratively in team environments, rapidly adapt to new development environments, and remain committed to the highest standards of web development. Passionate about leveraging a broad skill set in full stack development to contribute to innovative projects and drive business success.`
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